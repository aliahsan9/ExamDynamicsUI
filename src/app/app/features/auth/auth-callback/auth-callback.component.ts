import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="callback-wrap text-center p-5">
      <div *ngIf="error" class="alert alert-danger d-inline-block">{{ error }}</div>
      <div *ngIf="!error && busy">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-3 text-muted">Completing sign-in…</p>
      </div>
    </div>
  `,
  styles: [
    `
      .callback-wrap {
        min-height: 50vh;
      }
    `
  ]
})
export class AuthCallbackComponent implements OnInit {
  busy = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      this.busy = false;
      this.error = 'Missing token. Please try signing in again.';
      return;
    }

    localStorage.setItem('token', token);
    this.auth.syncSessionFromServer().subscribe({
      next: (user) => {
        const roles = user.roles || [];
        if (roles.includes('Admin')) {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/dashboard');
        }
      },
      error: (err) => {
        this.busy = false;
        this.error = AuthService.getHttpErrorMessage(err);
        localStorage.removeItem('token');
      }
    });
  }
}
