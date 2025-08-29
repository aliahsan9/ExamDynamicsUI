import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import AOS from 'aos';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { UserResponse } from '../../../../models/AuthModels/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: (response: UserResponse) => {
        this.loading = false;

        // ✅ Save roles array in localStorage as JSON string
        if (response.user?.roles) {
          localStorage.setItem('roles', JSON.stringify(response.user.roles));
        }

        // ✅ Redirect based on roles
        const roles = response.user?.roles || [];
        if (roles.includes('Admin')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/dashboard']); // normal user dashboard
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error || 'Invalid email or password';
      }
    });
  }
}
