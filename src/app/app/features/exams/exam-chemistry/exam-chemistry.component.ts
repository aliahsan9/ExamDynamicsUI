import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { QuestionDto } from '../../../../models/question.moel';
import { OptionDto } from '../../../../models/option.model';

@Component({
  selector: 'app-exam-chemistry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-chemistry.component.html',
  styleUrls: ['./exam-chemistry.component.scss']
})
export class ExamChemistryComponent implements OnInit {
  chemistryQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  userAnswers: { [key: number]: string } = {}; // questionId -> selected option text
  submitted = false;
  score = 0;

  // ✅ Chemistry examId (replace with actual from DB)
  readonly CHEMISTRY_EXAM_ID = 2;

  constructor(
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadChemistryQuestions();
  }

  // ✅ Load Chemistry questions + options
  loadChemistryQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.chemistryQuestions = qs.filter(q => q.examId === this.CHEMISTRY_EXAM_ID);

      this.chemistryQuestions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  // ✅ Select user’s answer
  selectAnswer(questionId: number, optionText: string) {
    this.userAnswers[questionId] = optionText;
  }

  // ✅ Submit answers
  submitExam() {
    this.score = 0;
    this.submitted = true;

    this.chemistryQuestions.forEach(q => {
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
