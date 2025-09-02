import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { OptionDto } from '../../../../models/option.model';
import { QuestionDto } from '../../../../models/question.moel';

@Component({
  selector: 'app-geometry-exam',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './geometry-exam.component.html',
  styleUrls: ['./geometry-exam.component.scss']
})
export class GeometryExamComponent implements OnInit {
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  answers: { [key: number]: number } = {}; // user selected optionId
  score: number | null = null;
  readonly GEOMETRY_EXAM_ID = 8;

  constructor(private questionService: QuestionService, private optionService: OptionService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.questions = qs.filter(q => q.examId === this.GEOMETRY_EXAM_ID);
      this.questions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  selectAnswer(questionId: number, optionId: number) {
    this.answers[questionId] = optionId;
  }

  checkResults() {
    let correct = 0;
    this.questions.forEach(q => {
      const userOptionId = this.answers[q.questionId];
      const options = this.optionsMap[q.questionId] || [];
      const correctOption = options.find(o => o.isCorrect);
      if (correctOption && correctOption.optionId === userOptionId) {
        correct++;
      }
    });
    this.score = correct;
  }

  resetExam() {
    this.answers = {};
    this.score = null;
  }
}
