import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form: ReturnType<FormBuilder['group']>;

  email = '';
  token = '';
  loading = false;
  success = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.email = params.get('email') ?? '';
      this.token = params.get('token') ?? '';
      if (!this.email || !this.token) {
        this.errorMessage = 'Invalid or missing reset link. Please request a new one.';
      }
    });
  }

  onSubmit(): void {
    if (!this.email || !this.token) return;
    const pwd = this.form.value.newPassword!;
    const confirm = this.form.value.confirm!;
    if (pwd !== confirm) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }
    if (this.form.invalid) return;

    this.loading = true;
    this.errorMessage = '';
    this.auth
      .resetPassword({ email: this.email, token: this.token, newPassword: pwd })
      .subscribe({
        next: () => {
          this.loading = false;
          this.success = true;
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = AuthService.getHttpErrorMessage(err);
        }
      });
  }
}
