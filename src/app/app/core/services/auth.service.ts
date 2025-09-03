import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginDto } from '../../../models/AuthModels/login.model';
import { RegisterDto } from '../../../models/AuthModels/register.model';
import { UserResponse } from '../../../models/AuthModels/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/Auth`;

  // ✅ Reactive auth state
  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 🔹 Login
  login(model: LoginDto): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/login`, model).pipe(
      tap((response) => {
        if (response?.token) {
          localStorage.setItem('token', response.token);

          // Save roles as comma-separated string
          const roles = response.user?.roles || [];
          localStorage.setItem('role', roles.join(','));

          // ✅ update auth status
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

          // ✅ update auth status
          this.authStatusSubject.next(true);
        }
      })
    );
  }

  // ✅ Check if logged in
  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // ✅ Get roles as array
  getRoles(): string[] {
    const roles = localStorage.getItem('role');
    return roles ? roles.split(',') : [];
  }

  // ✅ Logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // ✅ update auth status
    this.authStatusSubject.next(false);
  }

  // 🔹 Utility to check token existence
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
