import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-css-exams',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-css-exams.component.html',
  styleUrls: ['./all-css-exams.component.scss']
})
export class AllCssExamsComponent {
  constructor(private router: Router) {}

  exams = [
    {
      title: 'Current Affairs',
      description: 'Stay updated with global & national developments',
      questions: '50–100',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-globe',
      btnClass: 'btn-outline-primary',
      route: '/manage-css-current-affairs'
    },
    {
      title: 'English Precis & Composition',
      description: 'Test grammar, vocabulary & writing precision',
      questions: '50–100',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-pencil',
      btnClass: 'btn-outline-success',
      route: '/manage-css-english-composition'
    },
    {
      title: 'English Essay',
      description: 'Evaluate critical writing & argument structure',
      questions: '10–20',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-journal-text',
      btnClass: 'btn-outline-danger',
      route: '/manage-css-english-essay'
    },
    {
      title: 'General Science & Ability',
      description: 'Science, reasoning & quantitative ability',
      questions: '60–80',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-lightbulb',
      btnClass: 'btn-outline-warning',
      route: '/manage-css-general-science'
    },
    {
      title: 'International Relations',
      description: 'World politics, diplomacy & global affairs',
      questions: '40–70',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-people',
      btnClass: 'btn-outline-info',
      route: '/manage-css-international-relations'
    },
    {
      title: 'Pakistan Affairs',
      description: 'History, politics & current situation of Pakistan',
      questions: '40–70',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-flag',
      btnClass: 'btn-outline-secondary',
      route: '/manage-css-pakistan-affairs'
    },
    {
      title: 'Political Science',
      description: 'Political systems, governance & ideologies',
      questions: '40–70',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-bank',
      btnClass: 'btn-outline-dark',
      route: '/manage-css-political-science'
    },
    {
      title: 'Islamic Studies',
      description: 'Teachings of Islam & their application in modern life',
      questions: '40–70',
      time: 'Unlimited',
      created: 'Sep 10, 2025',
      icon: 'bi bi-moon-stars',
      btnClass: 'btn-outline-primary',
      route: '/manage-css-islamic-studies'
    }
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
