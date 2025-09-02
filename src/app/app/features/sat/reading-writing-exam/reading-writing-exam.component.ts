import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../../../core/services/question.service';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionService } from '../../../core/services/option.service';
import { OptionDto } from '../../../../models/option.model';

@Component({
  selector: 'app-reading-writing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reading-writing-exam.component.html',
  styleUrls: ['./reading-writing-exam.component.scss']
})
export class ReadingWritingExamComponent implements OnInit {
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  selectedAnswers: { [key: number]: number } = {};
  showResults: boolean = false;
  score: number = 0;

  readonly READING_EXAM_ID = 6;

  constructor(
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.questions = qs.filter(q => q.examId === this.READING_EXAM_ID);

      this.questions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  /** Check results */
  submitQuiz() {
    this.score = 0;
    this.showResults = true;

    this.questions.forEach(q => {
      const selectedOptionId = this.selectedAnswers[q.questionId];
      const correctOption = this.optionsMap[q.questionId].find(opt => opt.isCorrect);
      if (correctOption && selectedOptionId === correctOption.optionId) {
        this.score += 1;
      }
    });
  }

  /** Reset quiz */
  resetQuiz() {
    this.selectedAnswers = {};
    this.showResults = false;
    this.score = 0;
  }
}
