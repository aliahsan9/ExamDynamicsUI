import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionDto } from '../../../../models/option.model';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';

@Component({
  selector: 'app-single-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-exam.component.html',
  styleUrls: ['./single-exam.component.scss']
})
export class SingleExamComponent implements OnInit {
  examId!: number;
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  currentIndex: number = 0;

  selectedAnswers: { [key: number]: string } = {};
  submitted: boolean = false;
  score: number = 0;

  showAnswer: { [key: number]: boolean } = {};
  showExplanation: { [key: number]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.examId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadExamQuestions();
  }

  loadExamQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.questions = qs.filter(q => q.examId === this.examId);

      this.questions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  get progress(): number {
    if (!this.questions.length) return 0;
    return ((this.currentIndex + 1) / this.questions.length) * 100;
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

  submitExam() {
    let correct = 0;
    this.questions.forEach(q => {
      if (this.selectedAnswers[q.questionId] === q.correctAnswer) {
        correct++;
      }
    });

    this.score = correct;
    this.submitted = true;
  }

  toggleAnswer(qId: number) {
    this.showAnswer[qId] = !this.showAnswer[qId];
  }

  toggleExplanation(qId: number) {
    this.showExplanation[qId] = !this.showExplanation[qId];
  }
}
