import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface GreExam {
  title: string;
  description: string;
  icon: string;
  questions: number;
  time: string;
  created: string;
  route: string;
  btnClass: string;
}

@Component({
  selector: 'app-all-gre-exams',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-gre-exams.component.html',
  styleUrls: ['./all-gre-exams.component.scss']
})
export class AllGreExamsComponent implements OnInit {
  exams: GreExam[] = [
    {
      title: 'Verbal Reasoning',
      description: 'Reading comprehension, text completion & vocabulary.',
      icon: 'bi bi-book',
      questions: 120,
      time: '60 min',
      created: 'Aug 28, 2025',
      route: '/manage-gre-verbal-reasoning',
      btnClass: 'btn-primary'
    },
    {
      title: 'Quantitative Reasoning',
      description: 'Problem solving, data interpretation & algebra.',
      icon: 'bi bi-calculator',
      questions: 120,
      time: '70 min',
      created: 'Aug 29, 2025',
      route: '/manage-gre-quantitative-reasoning',
      btnClass: 'btn-success'
    },
    {
      title: 'Chemistry',
      description: 'Organic, inorganic, analytical & physical chemistry.',
      icon: 'bi bi-flask',
      questions: 100,
      time: '90 min',
      created: 'Aug 30, 2025',
      route: '/manage-gre-chemistry',
      btnClass: 'btn-danger'
    },
    {
      title: 'Mathematics',
      description: 'Calculus, algebra, probability & statistics.',
      icon: 'bi bi-123',
      questions: 120,
      time: '120 min',
      created: 'Sep 1, 2025',
      route: '/manage-gre-math',
      btnClass: 'btn-warning text-white'
    },
    {
      title: 'Physics',
      description: 'Mechanics, electromagnetism, optics & thermodynamics.',
      icon: 'bi bi-lightning-charge',
      questions: 100,
      time: '90 min',
      created: 'Sep 2, 2025',
      route: '/manage-gre-physics',
      btnClass: 'btn-info'
    },
    {
      title: 'Psychology',
      description: 'Cognitive, social, developmental & clinical psychology.',
      icon: 'bi bi-brain',
      questions: 100,
      time: '90 min',
      created: 'Sep 3, 2025',
      route: '/manage-gre-psychology',
      btnClass: 'btn-dark'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    import('aos').then(AOS => {
      AOS.init({ duration: 900, once: true });
    });
  }

  startQuiz(route: string) {
    this.router.navigate([route]);
  }
}
