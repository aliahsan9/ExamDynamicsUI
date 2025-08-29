import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService, ExamDto } from '../../../core/services/exam.service';

@Component({
  selector: 'app-exam-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit {
  exams: ExamDto[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams(): void {
    this.examService.getAll().subscribe({
      next: (data) => this.exams = data,
      error: (err) => console.error(err)
    });
  }

  // Optional: Generate a fallback icon for each exam based on index
  getExamIcon(index: number): string {
    const icons = [
      'bi-heart-pulse-fill',
      'bi-cpu-fill',
      'bi-bank',
      'bi-book',
      'bi-mortarboard',
      'bi-globe2'
    ];
    return icons[index % icons.length];
  }
}
