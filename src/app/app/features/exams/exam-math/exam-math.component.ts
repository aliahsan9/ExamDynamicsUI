import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionDto } from '../../../../models/option.model';

@Component({
  selector: 'app-exam-math',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-math.component.html',
  styleUrls: ['./exam-math.component.scss']
})
export class ExamMathComponent implements OnInit {
  mathQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  userAnswers: { [key: number]: string } = {}; // questionId -> selected option text
  submitted = false;
  score = 0;

  // ✅ Math examId (replace with actual one from DB)
  readonly MATH_EXAM_ID = 3;

  constructor(
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadMathQuestions();
  }

  // ✅ load Math questions with options
  loadMathQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.mathQuestions = qs.filter(q => q.examId === this.MATH_EXAM_ID);

      this.mathQuestions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  // ✅ when user selects an option
  selectAnswer(questionId: number, optionText: string) {
    this.userAnswers[questionId] = optionText;
  }

  // ✅ submit answers
  submitExam() {
    this.score = 0;
    this.submitted = true;

    this.mathQuestions.forEach(q => {
      const correct = q.correctAnswer;
      const userAns = this.userAnswers[q.questionId];
      if (userAns && userAns === correct) {
        this.score++;
      }
    });
  }

  // ✅ count how many questions answered (fix TS error)
  answeredCount(): number {
    return Object.keys(this.userAnswers)
                 .filter(qId => this.userAnswers[+qId]) // cast string key to number
                 .length;
  }

  // ✅ reset exam
  resetExam() {
    this.submitted = false;
    this.userAnswers = {};
    this.score = 0;
  }
}
