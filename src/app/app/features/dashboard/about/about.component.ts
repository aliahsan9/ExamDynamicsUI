
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about', 
  imports: [RouterModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Features for the "Why ExamDynamics" section
  features = [
    {
      img: 'assets/images/ai.jpg',
      title: 'Adaptive Learning Algorithm',
      desc: 'Questions adapt to your performance, focusing on weak areas while reinforcing strengths.'
    },
    {
      img: 'assets/images/self-study.jpg',
      title: 'Personalized Study Plans',
      desc: 'Get study schedules and recommendations tailored to your goals, whether MDCAT, SAT, GRE, or CSS.'
    },
    {
      img: 'assets/images/mcqs.jpg',
      title: 'Instant MCQ Results',
      desc: 'Solve subject-wise MCQs and instantly check results to monitor your progress in real-time.'
    }
  ];
}