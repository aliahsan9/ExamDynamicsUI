import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizzes = [
    {
      id: 1,
      title: 'Mathematics',
      topic: 'Algebra & Geometry',
      thumbnail: 'https://via.placeholder.com/300x150?text=Math'
    },
    {
      id: 2,
      title: 'Physics',
      topic: 'Mechanics & Thermodynamics',
      thumbnail: 'https://via.placeholder.com/300x150?text=Physics'
    },
    {
      id: 3,
      title: 'Chemistry',
      topic: 'Organic & Inorganic',
      thumbnail: 'https://via.placeholder.com/300x150?text=Chemistry'
    },
    {
      id: 4,
      title: 'Computer Science',
      topic: 'Data Structures & Algorithms',
      thumbnail: 'https://via.placeholder.com/300x150?text=CS'
    }
  ];

  ngOnInit(): void {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }
}
