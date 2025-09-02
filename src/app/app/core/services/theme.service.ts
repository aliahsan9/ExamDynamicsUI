import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  setTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // remember user choice
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme as 'light' | 'dark');
  }
}
