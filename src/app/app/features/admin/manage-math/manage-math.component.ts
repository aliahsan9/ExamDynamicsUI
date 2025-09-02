import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionDto, CreateQuestionDto } from '../../../../models/question.moel';
import { OptionDto, OptionCreate } from '../../../../models/option.model';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-math',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './manage-math.component.html',
  styleUrls: ['./manage-math.component.scss']
})
export class ManageMathComponent implements OnInit {
  mathQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {}; // options per questionId
  questionForm!: FormGroup;
  isEditing: boolean = false;
  editingQuestionId: number | null = null;

  // ✅ Math examId (replace with actual ID for Math subject in your DB)
  readonly MATH_EXAM_ID = 3;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadMathQuestions();
    this.initForm();
    this.addOption(); // start with one option
  }

  // ✅ initialize form
  initForm() {
    this.questionForm = this.fb.group({
      examId: [this.MATH_EXAM_ID, Validators.required],
      topicId: [1, Validators.required], // can replace with dynamic topic selection
      text: ['', Validators.required],
      questionType: ['MCQ', Validators.required],
      correctAnswer: ['', Validators.required],
      options: this.fb.array([])
    });
  }

  // ✅ getter for options array
  get options(): FormArray {
    return this.questionForm.get('options') as FormArray;
  }

  // ✅ add option
  addOption() {
    this.options.push(this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false]
    }));
  }

  // ✅ remove option
  removeOption(index: number) {
    this.options.removeAt(index);
  }

  // ✅ load only Math questions
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

  // ✅ submit question
  onSubmit() {
    if (this.questionForm.invalid) return;

    const formValue = this.questionForm.value;

    if (this.isEditing && this.editingQuestionId) {
      // Update
      this.questionService.update({ ...formValue, id: this.editingQuestionId }).subscribe(() => {
        this.resetForm();
        this.loadMathQuestions();
      });
    } else {
      // Create new Math question
      const newQuestion: CreateQuestionDto = {
        examId: this.MATH_EXAM_ID,
        topicId: formValue.topicId,
        text: formValue.text,
        questionType: formValue.questionType,
        correctAnswer: formValue.correctAnswer
      };

      this.questionService.create(newQuestion).subscribe((createdQ) => {
        // Save options for new question
        formValue.options.forEach((opt: OptionCreate) => {
          this.optionService.create({
            text: opt.text,
            isCorrect: opt.isCorrect,
            questionId: createdQ.questionId
          }).subscribe(() => {
            this.loadMathQuestions();
          });
        });

        this.resetForm();
      });
    }
  }

  // ✅ edit Math question
  editQuestion(question: QuestionDto) {
    this.isEditing = true;
    this.editingQuestionId = question.questionId;

    this.questionForm.patchValue({
      examId: this.MATH_EXAM_ID,
      topicId: question.topicId,
      text: question.text,
      questionType: question.questionType,
      correctAnswer: question.correctAnswer
    });

    // refill options
    this.options.clear();
    this.optionService.getByQuestionId(question.questionId).subscribe(opts => {
      opts.forEach(opt => {
        this.options.push(this.fb.group({
          text: [opt.text, Validators.required],
          isCorrect: [opt.isCorrect]
        }));
      });
    });
  }

  // ✅ delete Math question
  deleteQuestion(id: number) {
    if (confirm('Are you sure you want to delete this Math question?')) {
      this.questionService.delete(id).subscribe(() => {
        this.loadMathQuestions();
      });
    }
  }

  // ✅ reset form
  resetForm() {
    this.isEditing = false;
    this.editingQuestionId = null;
    this.questionForm.reset({
      examId: this.MATH_EXAM_ID,
      topicId: 1,
      text: '',
      questionType: 'MCQ',
      correctAnswer: ''
    });
    this.options.clear();
    this.addOption();
  }
}
