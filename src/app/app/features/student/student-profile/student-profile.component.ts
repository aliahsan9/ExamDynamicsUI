import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentProfileService } from '../../../core/services/student-profile.service';
import { StudentProfile } from '../../../../models/student-profile.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  profile: StudentProfile | null = null;
  loading = true;
  saving = false;
  error = '';
  success = '';

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: StudentProfileService
  ) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(200)]],
      bio: [''],
      institution: [''],
      country: ['']
    });
  }

  ngOnInit(): void {
    this.profileService.getMe().subscribe({
      next: (p) => {
        this.profile = p;
        this.form.patchValue({
          fullName: p.fullName,
          bio: p.bio ?? '',
          institution: p.institution ?? '',
          country: p.country ?? ''
        });
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not load your profile. Please try again.';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    this.error = '';
    this.success = '';
    const v = this.form.getRawValue();
    this.profileService
      .updateMe({
        fullName: v.fullName!.trim(),
        bio: v.bio?.trim() || null,
        institution: v.institution?.trim() || null,
        country: v.country?.trim() || null
      })
      .subscribe({
        next: (p) => {
          this.profile = p;
          this.saving = false;
          this.success = 'Profile saved successfully.';
        },
        error: (err) => {
          this.saving = false;
          this.error = err?.error?.message || 'Save failed.';
        }
      });
  }
}
