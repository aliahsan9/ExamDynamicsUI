import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginDto } from '../../../models/AuthModels/login.model';
import { RegisterDto } from '../../../models/AuthModels/register.model';
import { UserResponse } from '../../../models/AuthModels/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/Auth`;

  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 🔹 Login
  login(model: LoginDto): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/login`, model).pipe(
      tap((response) => {
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
      })
    );
  }

  // 🔹 Register
  register(model: RegisterDto): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/register`, model).pipe(
      tap((response) => {
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
      })
    );
  }

  // Get userId from token
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

  // Check if logged in
  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // Get roles as array
  getRoles(): string[] {
    const roles = localStorage.getItem('role');
    return roles ? roles.split(',') : [];
  }

  // Logout
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
