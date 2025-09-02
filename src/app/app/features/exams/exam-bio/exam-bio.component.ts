import { Component, OnInit } from '@angular/core';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionDto } from '../../../../models/option.model';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
      this.questions = qs.filter(q => q.examId === this.BIOLOGY_EXAM_ID);

      // load options for each question
      this.questions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
          this.initForm();
        });
      });
    });
  }

  initForm() {
    const group: any = {};
    this.questions.forEach(q => {
      group[q.questionId] = ['']; // single-answer MCQ
    });
    this.answersForm = this.fb.group(group);
  }

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

  getOptions(questionId: number): OptionDto[] {
    return this.optionsMap[questionId] || [];
  }
}
