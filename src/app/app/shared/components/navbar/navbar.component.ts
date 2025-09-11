import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AiAssistantRoutingModule } from "../../../features/ai-assistant/ai-assistant/ai-assistant-routing.module";
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AiAssistantRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidebarOpen = false;
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });

    this.authService.authStatus$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  logout(): void {
    this.authService.logout();
    this.closeSidebar(); // close sidebar on logout
  }
}
