import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuOpen = false;
  isLoggedIn = false;

 navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Exams', path: '/exams' },
  { label: 'AI Chatbot', path: '/chat' },
  { label: 'Notes', path: '/notes' },
  { label: 'Blogs', href: 'https://examdynamicsdocs.netlify.app/articles/introduction' },
  { label: 'FAQs', path: '/faq' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Contact', path: '/contact' },
];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.authStatus$
      .subscribe(status => this.isLoggedIn = status);

    this.router.events.subscribe(() => this.closeMenu());
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}