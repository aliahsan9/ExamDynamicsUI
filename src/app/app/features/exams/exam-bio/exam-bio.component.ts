import { Component, OnInit } from '@angular/core';
import { OptionDto } from '../../../../models/option.model';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuestionDto } from '../../../../models/question.moel';

@Component({
  selector: 'app-exam-bio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './exam-bio.component.html',
  styleUrls: ['./exam-bio.component.scss']
})
export class ExamBioComponent implements OnInit {
  readonly BIOLOGY_EXAM_ID = 5; // same as in admin component
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  answersForm!: FormGroup;
  submitted: boolean = false;
  score: number = 0;

  constructor(
    private questionService: QuestionService,
    private optionService: OptionService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getAll().subscribe(qs => {
      // Filter biology exam questions and sort by questionId
      this.questions = qs
        .filter(q => q.examId === this.BIOLOGY_EXAM_ID)
        .sort((a, b) => a.questionId - b.questionId);

      // Load options for each question
      this.questions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
          this.initForm();
        });
      });
    });
  }

  // Initialize form dynamically based on question IDs
  initForm() {
    const group: any = {};
    this.questions.forEach(q => {
      group[q.questionId] = ['']; // single-answer MCQ
    });
    this.answersForm = this.fb.group(group);
  }

  // Submit logic
  onSubmit() {
    this.submitted = true;
    this.score = 0;

    this.questions.forEach(q => {
      const selected = this.answersForm.get('' + q.questionId)?.value;
      if (selected === q.correctAnswer) {
        this.score++;
      }
    });
  }
// Count how many questions are answered
answeredCount(): number {
  if (!this.answersForm) return 0;

  return this.questions.filter(q => {
    const val = this.answersForm.get(''+q.questionId)?.value;
    return val !== null && val !== '';
  }).length;
}
// Reset form and restart exam
restartExam(): void {
  this.submitted = false;
  this.score = 0;

  // Reset all form controls
  Object.keys(this.answersForm.controls).forEach(key => {
    this.answersForm.get(key)?.setValue('');
  });

  // Scroll to top (optional for better UX)
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  // Get options for a question
  getOptions(questionId: number): OptionDto[] {
    return this.optionsMap[questionId] || [];
  }
}
