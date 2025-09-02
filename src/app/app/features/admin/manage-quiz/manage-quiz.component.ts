// src/app/features/admin/manage-quiz/manage-quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizCreateDto, QuizDto, QuizUpdateDto } from '../../../../models/quiz.models';
import { QuizService } from '../../../core/services/quiz.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-quiz',
  imports:[CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.scss']
})
export class ManageQuizComponent implements OnInit {
  quizzes: QuizDto[] = [];
  quizForm!: FormGroup;
  isEditing = false;
  selectedQuizId: number | null = null;

  // Example subjects & exams (could come from API later)
  subjects = ['Math', 'Biology', 'Chemistry', 'Physics'];
  exams = ['Midterm', 'Final', 'Quiz Test'];

  constructor(private fb: FormBuilder, private quizService: QuizService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadQuizzes();
  }

  initForm(): void {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      subject: ['', Validators.required],
      exam: ['', Validators.required]
    });
  }

  // Load all quizzes
  loadQuizzes(): void {
    this.quizService.getAll().subscribe({
      next: (data: QuizDto[]) => {
        this.quizzes = data;
      },
      error: (err) => console.error(err)
    });
  }

  // Submit form (Create or Update)
  onSubmit(): void {
    if (this.quizForm.invalid) return;

    const formValues = this.quizForm.value;

    if (this.isEditing && this.selectedQuizId !== null) {
      // Update quiz
      const updateDto: QuizUpdateDto = {
        id: this.selectedQuizId,
        title: formValues.title,
        description: formValues.description
      };

      this.quizService.update(this.selectedQuizId, updateDto).subscribe({
        next: () => {
          this.loadQuizzes();
          this.resetForm();
        },
        error: (err) => console.error(err)
      });

    } else {
      // Create quiz
      const createDto: QuizCreateDto = {
        title: formValues.title,
        description: formValues.description
      };

      this.quizService.create(createDto).subscribe({
        next: () => {
          this.loadQuizzes();
          this.resetForm();
        },
        error: (err) => console.error(err)
      });
    }
  }

  // Edit quiz
  onEdit(quiz: QuizDto): void {
    this.isEditing = true;
    this.selectedQuizId = quiz.id;
    this.quizForm.patchValue({
      title: quiz.title,
      description: quiz.description,
      subject: this.subjects[0], // For now
      exam: this.exams[0]
    });
  }

  // Delete quiz
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this quiz?')) {
      this.quizService.delete(id).subscribe({
        next: () => this.loadQuizzes(),
        error: (err) => console.error(err)
      });
    }
  }

  // Reset form
  resetForm(): void {
    this.isEditing = false;
    this.selectedQuizId = null;
    this.quizForm.reset();
  }
}
