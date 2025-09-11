import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateQuestionDto, QuestionDto } from '../../../../../models/question.moel';
import { OptionCreate, OptionDto } from '../../../../../models/option.model';
import { QuestionService } from '../../../../core/services/question.service';
import { OptionService } from '../../../../core/services/option.service';

@Component({ 
  selector: 'app-manage-algebra',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './manage-algebra.component.html',
  styleUrls: ['./manage-algebra.component.scss']
})
export class ManageAlgebraComponent implements OnInit {
  algebraQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {}; // options per questionId
  questionForm!: FormGroup;
  isEditing: boolean = false;
  editingQuestionId: number | null = null; 

  // ✅ Algebra examId (replace with actual ID for Algebra subject in your DB)
  readonly ALGEBRA_EXAM_ID = 11;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadAlgebraQuestions();
    this.initForm();
    this.addOption(); // start with one option
  }

  // ✅ initialize form
  initForm() {
    this.questionForm = this.fb.group({
      examId: [this.ALGEBRA_EXAM_ID, Validators.required],
      topicId: [1, Validators.required], // can replace with dynamic topic selection
      text: ['', Validators.required],
      explanation: [''], // ✅ NEW
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

  // ✅ load only Algebra questions
  loadAlgebraQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.algebraQuestions = qs.filter(q => q.examId === this.ALGEBRA_EXAM_ID);

      this.algebraQuestions.forEach(q => {
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
      this.questionService.update({
        ...formValue,
        id: this.editingQuestionId
      }).subscribe(() => {
        this.resetForm();
        this.loadAlgebraQuestions();
      });
    } else {
      // Create new Algebra question
      const newQuestion: CreateQuestionDto = {
        examId: this.ALGEBRA_EXAM_ID,
        topicId: formValue.topicId,
        text: formValue.text,
        explanation: formValue.explanation, // ✅ NEW
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
            this.loadAlgebraQuestions();
          });
        });

        this.resetForm();
      });
    }
  }

  // ✅ edit Algebra question
  editQuestion(question: QuestionDto) {
    this.isEditing = true;
    this.editingQuestionId = question.questionId;

    this.questionForm.patchValue({
      examId: this.ALGEBRA_EXAM_ID,
      topicId: question.topicId,
      text: question.text,
      explanation: question.explanation || '', // ✅ NEW
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

  // ✅ delete Algebra question
  deleteQuestion(id: number) {
    if (confirm('Are you sure you want to delete this Algebra question?')) {
      this.questionService.delete(id).subscribe(() => {
        this.loadAlgebraQuestions();
      });
    }
  }

  // ✅ reset form
  resetForm() {
    this.isEditing = false;
    this.editingQuestionId = null;
    this.questionForm.reset({
      examId: this.ALGEBRA_EXAM_ID,
      topicId: 1,
      text: '',
      explanation: '', // ✅ NEW
      questionType: 'MCQ',
      correctAnswer: ''
    });
    this.options.clear();
    this.addOption();
  }
}
