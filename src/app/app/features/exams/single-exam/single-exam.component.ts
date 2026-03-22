import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionDto } from '../../../../models/option.model';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { MarkdownExplanationPipe } from '../../../shared/pipes/markdown-explanation.pipe';
import { AuthService } from '../../../core/services/auth.service';
import { StudentPerformanceService } from '../../../core/services/student-performance.service';
import { ExamService } from '../../../core/services/exam.service';

@Component({
  selector: 'app-single-exam',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MarkdownExplanationPipe],
  templateUrl: './single-exam.component.html',
  styleUrls: ['./single-exam.component.scss']
})
export class SingleExamComponent implements OnInit {
  examId!: number; // Set id to integer
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  currentIndex: number = 0;

  selectedAnswers: { [key: number]: string } = {};
  submitted: boolean = false;
  score: number = 0;
  examTitle = '';
  lastAttemptId: number | null = null;
  progressSaved = false;
  saveError = '';
  savingAttempt = false;

  showAnswer: { [key: number]: boolean } = {};
  showExplanation: { [key: number]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private optionService: OptionService,
    private authService: AuthService,
    private performanceService: StudentPerformanceService,
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    this.examId = Number(this.route.snapshot.paramMap.get('id'));
    this.examService.getById(this.examId).subscribe({
      next: (e) => (this.examTitle = e.title),
      error: () => (this.examTitle = 'Practice exam')
    });
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
    this.saveError = '';
    this.progressSaved = false;
    this.lastAttemptId = null;
    this.savingAttempt = false;

    const total = this.questions.length;
    if (!this.authService.isLoggedIn() || total === 0) {
      return;
    }

    this.savingAttempt = true;
    const title = this.examTitle || `Exam #${this.examId}`;
    this.performanceService
      .submitAttempt({
        examId: this.examId,
        examTitle: title,
        score: correct,
        totalQuestions: total
      })
      .subscribe({
        next: (res) => {
          this.lastAttemptId = res.id;
          this.progressSaved = true;
          this.savingAttempt = false;
        },
        error: (err) => {
          this.savingAttempt = false;
          this.saveError =
            err?.error?.message || 'Could not save your result. You can still review answers below.';
        }
      });
  }

  openCertificate(): void {
    if (this.lastAttemptId != null) {
      this.router.navigate(['/certificate', this.lastAttemptId]);
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  toggleAnswer(qId: number) {
    this.showAnswer[qId] = !this.showAnswer[qId];
  }

  toggleExplanation(qId: number) {
    this.showExplanation[qId] = !this.showExplanation[qId];
  }
}
