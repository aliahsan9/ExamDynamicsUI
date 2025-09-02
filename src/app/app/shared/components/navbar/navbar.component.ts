import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AiAssistantRoutingModule } from "../../../features/ai-assistant/ai-assistant/ai-assistant-routing.module";
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, AiAssistantRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidebarOpen: boolean = false;
   currentTheme: 'light' | 'dark' = 'light';
  constructor(private themeService: ThemeService) {
    // Load saved theme when navbar initializes
    this.currentTheme = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(this.currentTheme);
  }
  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
