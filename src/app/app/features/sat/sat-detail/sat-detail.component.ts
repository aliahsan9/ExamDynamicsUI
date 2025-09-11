import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface SatTopic {
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sat-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sat-detail.component.html',
  styleUrls: ['./sat-detail.component.scss']
})
export class SatDetailComponent implements OnInit {
  topics: SatTopic[] = [
    {
      title: 'Reading Comprehension MCQs',
      description: 'Practice SAT reading passages and comprehension questions.',
      icon: 'assets/images/about3.jpg',
      route: '/exam/6'
    },
    {
      title: 'Grammar MCQs',  
      description: 'Sharpen your grammar and sentence correction skills.',
      icon: 'assets/images/about1.jpg',
      route: '/exam/12'
    },
    {
      title: 'Algebra MCQs',
      description: 'Solve algebraic equations, functions, and word problems.',
      icon: 'assets/images/blog1.jpg',
      route: '/exam/11'
    },
    {
      title: 'Geometry MCQs',
      description: 'Practice coordinate geometry, shapes, volumes, and angles.',
      icon: 'assets/images/blog2.jpg',
      route: '/exam/8'
    },
    {
      title: 'Data Analysis MCQs',
      description: 'Work on statistics, charts, ratios, and percentages.',
      icon: 'assets/images/students.jpg',
      route: '/exam/10'
    }
  ];

  constructor(private router: Router) {}

  // ✅ Required because of OnInit
  ngOnInit(): void {
    // Initialize AOS animations
    import('aos').then(AOS => {
      AOS.init({ duration: 800, once: true });
    });
  }

  startQuiz(route: string) {
    this.router.navigate([route]);
  }
}
