import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
interface JwtPayload {
  exp: number;
  user: {
    id: number;
    username: string;
    email: string;
    roles: string[];
  };
}

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const decoded = jwtDecode<JwtPayload>(token);

    // ✅ Check expiration
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('token');
      router.navigate(['/login']);
      return false;
    }

    // ✅ Check roles array
    const roles = decoded.user?.roles || [];
    if (roles.includes('Admin')) {
      return true; // Admin allowed
    }

  } catch (err) {
    console.error('Invalid token', err);
  }

  router.navigate(['/']); // Not admin, redirect home
  return false;
};
