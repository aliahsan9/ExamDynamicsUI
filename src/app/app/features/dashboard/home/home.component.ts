import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AiAssistantRoutingModule } from '../../ai-assistant/ai-assistant/ai-assistant-routing.module';
import { SubscriptionListComponent } from '../../subscriptions/subscription-list/subscription-list.component';
import { AboutComponent } from '../about/about.component';
import { ExamDetailComponent } from '../../exams/exam-detail/exam-detail.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ExamDetailComponent, AboutComponent, SubscriptionListComponent, AiAssistantRoutingModule,ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Hero stats cards
  heroStats = [
    { icon: 'bi-people-fill text-primary', value: '1000+', label: 'Happy Students', delay: 0 },
    { icon: 'bi-pencil-square text-success', value: '10,000+', label: 'Mock Exams Taken', delay: 100 },
    { icon: 'bi-journal-check text-warning', value: '800,000+', label: 'MCQs Solved', delay: 200 },
  ];

  // Floating shapes
  shapes = [
    { class: 'shape1', width: 180, height: 180, color: '#004080', top: '-60px', left: '-50px', delay: 0 },
    { class: 'shape2', width: 120, height: 120, color: '#0066cc', bottom: '-50px', right: '-30px', delay: 1.5 },
    { class: 'shape3', width: 90, height: 90, color: '#00aaff', top: '25%', right: '8%', delay: 3 },
    { class: 'shape4', width: 60, height: 60, color: '#43d1ff', bottom: '10%', left: '10%', delay: 4 }
  ];

  // Hero stars
  heroStars = [1, 2, 3, 4, 5];
}