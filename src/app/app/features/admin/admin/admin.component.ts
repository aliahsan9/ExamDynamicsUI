import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
// In your component.ts
adminCards = [
  { icon: 'bi bi-journal-text', title: 'Manage Blogs', desc: 'Create, edit and delete blogs', link: '/manage-blogs' },
  { icon: 'bi bi-question-circle', title: 'Manage Biology', desc: 'Create and manage quizzes', link: '/manage-biology' },
  { icon: 'bi bi-question-circle', title: 'Manage Chemistry', desc: 'Create and manage quizzes', link: '/manage-chemistry' },
  { icon: 'bi bi-question-circle', title: 'Manage Physics', desc: 'Create and manage quizzes', link: '/manage-physics' },
  { icon: 'bi bi-question-circle', title: 'Manage Math', desc: 'Create and manage quizzes', link: '/manage-math' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage Data Analysis', desc: 'Add and organize exam content', link: '/manage-data-analysis' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage Algebra', desc: 'Add and organize exam content', link: '/manage-algebra' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage Geometry', desc: 'Add and organize exam content', link: '/manage-geometry' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage Grammer', desc: 'Add and organize exam content', link: '/manage-grammer' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage Reading & Writing Exam', desc: 'Add and organize exam content', link: '/manage-reading-writing' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage All GRE Exams', desc: 'Add and organize exam content', link: '/all-gre-exams' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage All GMAT Exams', desc: 'Add and organize exam content', link: '/all-gmat-exams' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage All IELTS Exams', desc: 'Add and organize exam content', link: '/all-ielts-exams' },
  { icon: 'bi bi-file-earmark-text', title: 'Manage All CSS Exams', desc: 'Add and organize exam content', link: '/all-css-exams' },
];
}
