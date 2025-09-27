import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavbarComponent } from "./app/shared/components/navbar/navbar.component";
import { SecondaryNavbarComponent } from "./app/shared/components/secondary-navbar/secondary-navbar.component";
import { FooterComponent } from "./app/shared/components/footer/footer.component";
import { LoaderComponent } from './app/shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SecondaryNavbarComponent, FooterComponent, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ExamDynamicsUI';
  isLoading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });

    // Show loader on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => {
          this.isLoading = false;
        }, 800); // small delay for smooth fade
      }
    });
  }
}
