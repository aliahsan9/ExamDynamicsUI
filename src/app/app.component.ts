import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavbarComponent } from "./app/shared/components/navbar/navbar.component";
import { SecondaryNavbarComponent } from "./app/shared/components/secondary-navbar/secondary-navbar.component";
import { FooterComponent } from "./app/shared/components/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SecondaryNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ExamDynamicsUI';

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true
    });
  }
}
