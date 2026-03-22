import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginDto } from '../../../models/AuthModels/login.model';
import { RegisterDto } from '../../../models/AuthModels/register.model';
import { User, UserResponse } from '../../../models/AuthModels/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /** Matches API routes `api/auth` and `api/Auth` (case-insensitive on server). */
  private readonly baseUrl = `${environment.apiUrl}/auth`;

  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(model: LoginDto): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/login`, model).pipe(
      tap((response) => this.persistSession(response))
    );
  }

  register(model: RegisterDto): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/register`, model).pipe(
      tap((response) => this.persistSession(response))
    );
  }

  forgotPassword(email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/forgot-password`, { email });
  }

  resetPassword(payload: { email: string; token: string; newPassword: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/reset-password`, payload);
  }

  /** Full URL to start Google OAuth (browser redirect). */
  getGoogleOAuthUrl(): string {
    return `${this.baseUrl}/oauth/google`;
  }

  /** Full URL to start Facebook OAuth (browser redirect). */
  getFacebookOAuthUrl(): string {
    return `${this.baseUrl}/oauth/facebook`;
  }

  startGoogleLogin(): void {
    window.location.href = this.getGoogleOAuthUrl();
  }

  startFacebookLogin(): void {
    window.location.href = this.getFacebookOAuthUrl();
  }

  /** After OAuth redirect, JWT is in localStorage; loads profile from API. */
  syncSessionFromServer(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`).pipe(
      tap((user) => {
        localStorage.setItem('userId', String(user.id));
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', user.roles.join(','));
        localStorage.setItem('roles', JSON.stringify(user.roles ?? []));
        this.authStatusSubject.next(true);
      })
    );
  }

  private persistSession(response: UserResponse): void {
    if (response?.token) {
      localStorage.setItem('token', response.token);

      const roles = response.user?.roles || [];
      localStorage.setItem('role', roles.join(','));

      if (response.user?.id != null) {
        localStorage.setItem('userId', String(response.user.id));
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('roles', JSON.stringify(response.user.roles ?? []));
      }

      this.authStatusSubject.next(true);
    }
  }

  static getHttpErrorMessage(err: unknown): string {
    if (!(err instanceof HttpErrorResponse)) {
      return 'Something went wrong. Please try again.';
    }
    const body = err.error;
    if (typeof body === 'string' && body.trim()) {
      return body;
    }
    if (body && typeof body === 'object') {
      const nested = (body as { error?: { message?: string } }).error?.message;
      if (nested) return nested;
      const msg = (body as { message?: string; title?: string }).message
        ?? (body as { errors?: string[] }).errors?.join(' ');
      if (msg) return msg;
    }
    if (err.status === 0) {
      return 'Cannot reach the server. Check your connection and API URL.';
    }
    return err.message || 'Request failed.';
  }

  getUserId(): number | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const raw =
        payload['UserId'] ??
        payload['nameid'] ??
        payload['sub'] ??
        payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      return raw != null && raw !== '' ? Number(raw) : null;
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  getRoles(): string[] {
    const roles = localStorage.getItem('role');
    return roles ? roles.split(',') : [];
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    localStorage.removeItem('roles');
    this.authStatusSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
