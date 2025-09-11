import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-gmat-exams',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-gmat-exams.component.html',
  styleUrls: ['./all-gmat-exams.component.scss']
})
export class AllGmatExamsComponent {
  exams = [
    {
      title: 'Quantitative Reasoning',
      description: 'Problem Solving & Data Sufficiency',
      questions: '50–100',
      time: 'Unlimited',
      created: 'Sep 5, 2025',
      icon: 'bi bi-calculator',
      btnClass: 'btn-outline-primary',
      route: 'manage-gmat-quantitative-reasoning' // ✅ remove leading slash
    },
    {
      title: 'Verbal Reasoning',
      description: 'Reading Comp, Critical Reasoning, Sentence Correction',
      questions: '50–100',
      time: 'Unlimited',
      created: 'Sep 6, 2025',
      icon: 'bi bi-journal-text',
      btnClass: 'btn-outline-success',
      route: 'manage-gmat-verbal-reasoning'
    },
    {
      title: 'Integrated Reasoning',
      description: 'Graphs, Tables & Multi-source Reasoning',
      questions: '30–50',
      time: 'Unlimited',
      created: 'Sep 7, 2025',
      icon: 'bi bi-bar-chart-line',
      btnClass: 'btn-outline-warning',
      route: 'manage-gmat-integrated-reasoning'
    },
    {
      title: 'AWA Concepts',
      description: 'Essay analysis & Argument evaluation',
      questions: '20–30',
      time: 'Unlimited',
      created: 'Sep 8, 2025',
      icon: 'bi bi-pencil-square',
      btnClass: 'btn-outline-danger',
      route: 'manage-gmat-awa-concepts' 
    }
  ];

  constructor(private router: Router) {}

  startQuiz(route: string) {
    console.log('Navigating to:', route);
    this.router.navigate([route]); // ✅ real navigation
  }
}
