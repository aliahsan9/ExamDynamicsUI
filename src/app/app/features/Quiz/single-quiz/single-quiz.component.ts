import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionDto } from '../../../../models/option.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';

@Component({
  selector: 'app-single-quiz',
  imports:[CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './single-quiz.component.html',
  styleUrls: ['./single-quiz.component.scss']
})
export class SingleQuizComponent implements OnInit {
  quizId!: number; 
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  currentIndex: number = 0;
  selectedAnswers: { [key: number]: number } = {};
  quizFinished: boolean = false;
  score: number = 0;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Quiz ID:', this.quizId);
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getAll().subscribe(qs => {
      // filter questions for this examId
      this.questions = qs.filter(q => q.examId === this.quizId);

      if (this.questions.length === 0) {
        console.warn('No questions found for this quiz.');
      }

      this.questions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  selectOption(questionId: number, optionId: number) {
    this.selectedAnswers[questionId] = optionId;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getAnsweredCount(): number {
    return Object.keys(this.selectedAnswers).length;
  }

  submitQuiz() {
    let correctCount = 0;

    this.questions.forEach(q => {
      const chosenOptionId = this.selectedAnswers[q.questionId];
      const options = this.optionsMap[q.questionId] || [];
      const chosenOption = options.find(o => o.optionId === chosenOptionId);
      if (chosenOption && chosenOption.isCorrect) {
        correctCount++;
      }
    });

    this.score = correctCount;
    this.quizFinished = true;
  }

  restartQuiz() {
    this.selectedAnswers = {};
    this.currentIndex = 0;
    this.quizFinished = false;
    this.score = 0;
  }
}
