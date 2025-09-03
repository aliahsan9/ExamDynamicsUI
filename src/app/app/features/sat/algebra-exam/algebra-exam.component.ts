import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OptionDto } from '../../../../models/option.model';
import { QuestionDto } from '../../../../models/question.moel';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';

@Component({
  selector: 'app-algebra-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './algebra-exam.component.html',
  styleUrls: ['./algebra-exam.component.scss']
})
export class AlgebraExamComponent implements OnInit {
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  userAnswers: { [key: number]: string } = {};
  submitted = false;
  score = 0;

  readonly ALGEBRA_EXAM_ID = 11;

  constructor(
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.questions = qs.filter(q => q.examId === this.ALGEBRA_EXAM_ID);

      this.questions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  submitQuiz() {
    this.submitted = true;
    let correctCount = 0;

    this.questions.forEach(q => {
      if (this.userAnswers[q.questionId] === q.correctAnswer) {
        correctCount++;
      }
    });

    this.score = correctCount;
  }
progress = 0; // percentage completed

updateProgress() {
  const answeredCount = Object.keys(this.userAnswers).filter(
    (key) => this.userAnswers[+key]
  ).length;

  this.progress = (answeredCount / this.questions.length) * 100;
}

resetQuiz() {
  this.userAnswers = {};
  this.submitted = false;
  this.score = 0;
  this.progress = 0;
}
}
