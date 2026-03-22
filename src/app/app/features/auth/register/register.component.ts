import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const v = this.registerForm.value;
      this.authService
        .register({
          username: v.username!,
          email: v.email!,
          password: v.password!,
          fullName: v.fullName!,
          role: 'Student'
        })
        .subscribe({
        next: (response) => {
          this.successMessage = response.message || 'Registration successful!';
          this.errorMessage = '';

          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 800);
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || 'Registration failed. Please try again.';
          this.successMessage = '';
        }
      });
    }
  }
}
