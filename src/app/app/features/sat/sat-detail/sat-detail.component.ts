import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface SatTopic {
  title: string;
  description: string;
  icon: string;
  route: string; // Route to start quiz
}

@Component({
  selector: 'app-sat-detail',
  imports:[CommonModule,RouterModule],
  templateUrl: './sat-detail.component.html',
  styleUrls: ['./sat-detail.component.scss']
})
export class SatDetailComponent implements OnInit {
  topics: SatTopic[] = [
    {
      title: 'Reading Comprehension MCQs',
      description: 'Practice SAT reading passages and comprehension questions.',
      icon: 'book',
      route: '/reading-writing'
    },
    {
      title: 'Grammar MCQs',
      description: 'Sharpen your grammar and sentence correction skills.',
      icon: 'pen',
      route: '/grammer'
    },
    {
      title: 'Algebra MCQs',
      description: 'Solve algebraic equations, functions, and word problems.',
      icon: 'calculator',
      route: '/algebra'
    },
    {
      title: 'Geometry MCQs',
      description: 'Practice coordinate geometry, shapes, volumes, and angles.',
      icon: 'triangle',
      route: '/geometry'
    },
    {
      title: 'Data Analysis MCQs',
      description: 'Work on statistics, charts, ratios, and percentages.',
      icon: 'bar-chart',
      route: '/data-analysis'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize AOS animations
    import('aos').then(AOS => AOS.init({ duration: 800, once: true }));
  }

  startQuiz(route: string) {
    this.router.navigate([route]);
  }
}
