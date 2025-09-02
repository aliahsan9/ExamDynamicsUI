import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionDto } from '../../../../models/option.model';

@Component({
  selector: 'app-exam-physics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-physics.component.html',
  styleUrls: ['./exam-physics.component.scss']
})
export class ExamPhysicsComponent implements OnInit {
  physicsQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  userAnswers: { [key: number]: string } = {}; // questionId -> selected option text
  submitted = false;
  score = 0;

  // ✅ Physics examId
  readonly PHYSICS_EXAM_ID = 4;

  constructor(
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadPhysicsQuestions();
  }

  // ✅ Load Physics questions + options
  loadPhysicsQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.physicsQuestions = qs.filter(q => q.examId === this.PHYSICS_EXAM_ID);

      this.physicsQuestions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  // ✅ Save selected answer
  selectAnswer(questionId: number, optionText: string) {
    this.userAnswers[questionId] = optionText;
  }

  // ✅ Submit exam
  submitExam() {
    this.score = 0;
    this.submitted = true;

    this.physicsQuestions.forEach(q => {
      const correct = q.correctAnswer;
      const userAns = this.userAnswers[q.questionId];
      if (userAns && userAns === correct) {
        this.score++;
      }
    });
  }

  // ✅ Reset exam
  resetExam() {
    this.submitted = false;
    this.userAnswers = {};
    this.score = 0;
  }
}
