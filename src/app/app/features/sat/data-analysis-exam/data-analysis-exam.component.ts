import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OptionDto } from '../../../../models/option.model';
import { QuestionDto } from '../../../../models/question.moel';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';

@Component({
  selector: 'app-data-analysis-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-analysis-exam.component.html',
  styleUrls: ['./data-analysis-exam.component.scss']
})
export class DataAnalysisExamComponent implements OnInit {
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  userAnswers: { [key: number]: string } = {}; // selected option per question
  submitted: boolean = false;
  score: number = 0;

  readonly DATA_EXAM_ID = 10;

  constructor(
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.questions = qs.filter(q => q.examId === this.DATA_EXAM_ID);

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

  resetQuiz() {
    this.userAnswers = {};
    this.submitted = false;
    this.score = 0;
  }
}
