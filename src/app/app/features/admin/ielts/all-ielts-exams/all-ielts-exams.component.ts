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
  templateUrl: './all-ielts-exams.component.html',
  styleUrls: ['./all-ielts-exams.component.scss']
})
export class AllIeltsExamsComponent implements OnInit {
  exams: GreExam[] = [
    {
      title: 'Listening',
      description: 'Reading comprehension, text completion & vocabulary.',
      icon: 'bi bi-book',
      questions: 120,
      time: '60 min',
      created: 'Aug 28, 2025',
      route: '/manage-ielts-listening',
      btnClass: 'btn-primary'
    },
    {
      title: 'Reading',
      description: 'Problem solving, data interpretation & algebra.',
      icon: 'bi bi-calculator',
      questions: 120,
      time: '70 min',
      created: 'Aug 29, 2025',
      route: '/manage-ielts-reading',
      btnClass: 'btn-success'
    },
    {
      title: 'Writing',
      description: 'Organic, inorganic, analytical & physical chemistry.',
      icon: 'bi bi-flask',
      questions: 100,
      time: '90 min',
      created: 'Aug 30, 2025',
      route: '/manage-ielts-writing',
      btnClass: 'btn-danger'
    },
    {
      title: 'Speaking',
      description: 'Calculus, algebra, probability & statistics.',
      icon: 'bi bi-123',
      questions: 120,
      time: '120 min',
      created: 'Sep 1, 2025',
      route: '/manage-ielts-speaking',
      btnClass: 'btn-warning text-white'
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
