import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AiAssistantRoutingModule } from "../../../features/ai-assistant/ai-assistant/ai-assistant-routing.module";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, AiAssistantRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidebarOpen: boolean = false;

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
