import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizService } from '../../../core/services/quiz.service';
import { QuizCreateDto, QuizDto, QuizUpdateDto } from '../../../../models/quiz.models';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-quiz',
  imports:[RouterModule,CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.scss']
})
export class ManageQuizComponent implements OnInit {
  quizzes: QuizDto[] = [];
  quizForm: FormGroup;
  isEditMode = false;
  selectedQuizId: number | null = null;
  loading = false;
  errorMessage = '';

  constructor(
    private quizService: QuizService,
    private fb: FormBuilder
  ) {
    this.quizForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes(): void {
    this.loading = true;
    this.quizService.getAllQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load quizzes.';
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.quizForm.invalid) {
      return;
    }

    const formValue = this.quizForm.value;

    if (this.isEditMode && this.selectedQuizId !== null) {
      // Update quiz
      const updateDto: QuizUpdateDto = {
        id: this.selectedQuizId,
        title: formValue.title,
        description: formValue.description
      };
      this.quizService.updateQuiz(this.selectedQuizId, updateDto).subscribe({
        next: () => {
          this.loadQuizzes();
          this.resetForm();
        },
        error: () => {
          this.errorMessage = 'Failed to update quiz.';
        }
      });
    } else {
      // Create new quiz
      const createDto: QuizCreateDto = {
        title: formValue.title,
        description: formValue.description
      };
      this.quizService.createQuiz(createDto).subscribe({
        next: () => {
          this.loadQuizzes();
          this.resetForm();
        },
        error: () => {
          this.errorMessage = 'Failed to create quiz.';
        }
      });
    }
  }

  editQuiz(quiz: QuizDto): void {
    this.isEditMode = true;
    this.selectedQuizId = quiz.id;
    this.quizForm.patchValue({
      title: quiz.title,
      description: quiz.description
    });
    this.errorMessage = '';
  }

  deleteQuiz(id: number): void {
    if (confirm('Are you sure you want to delete this quiz?')) {
      this.quizService.deleteQuiz(id).subscribe({
        next: () => {
          this.loadQuizzes();
          if (this.selectedQuizId === id) {
            this.resetForm();
          }
        },
        error: () => {
          this.errorMessage = 'Failed to delete quiz.';
        }
      });
    }
  }

  resetForm(): void {
    this.isEditMode = false;
    this.selectedQuizId = null;
    this.quizForm.reset();
    this.errorMessage = '';
  }
}
