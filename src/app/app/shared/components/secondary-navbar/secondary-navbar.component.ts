import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('examLinks') examLinks!: ElementRef;

  private touchStartX = 0;
  private currentTranslateX = 0;
  private isDragging = false;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  ngAfterViewInit(): void {
    const linksContainer = this.examLinks.nativeElement;

    // Touch event listeners for swipe functionality
    linksContainer.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchStartX = e.touches[0].clientX;
      this.isDragging = true;
      linksContainer.classList.add('paused');
    });

    linksContainer.addEventListener('touchmove', (e: TouchEvent) => {
      if (!this.isDragging) return;
      const touchX = e.touches[0].clientX;
      const deltaX = touchX - this.touchStartX;
      this.currentTranslateX += deltaX;
      linksContainer.style.transform = `translateX(${this.currentTranslateX}px)`;
      this.touchStartX = touchX;
    });

    linksContainer.addEventListener('touchend', () => {
      this.isDragging = false;
      linksContainer.classList.remove('paused');
      // Ensure the translateX stays within bounds
      const containerWidth = linksContainer.offsetWidth;
      const contentWidth = linksContainer.scrollWidth / 2; // Half due to duplicated content
      if (this.currentTranslateX > 0) {
        this.currentTranslateX = 0;
        linksContainer.style.transform = `translateX(0)`;
      } else if (this.currentTranslateX < -contentWidth) {
        this.currentTranslateX = -contentWidth;
        linksContainer.style.transform = `translateX(${-contentWidth}px)`;
      }
    });
  }
}