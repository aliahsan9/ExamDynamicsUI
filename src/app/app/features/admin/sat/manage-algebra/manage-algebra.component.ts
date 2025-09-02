import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionService } from '../../../../core/services/question.service';
import { OptionService } from '../../../../core/services/option.service';
import { CreateQuestionDto, QuestionDto } from '../../../../../models/question.moel';
import { OptionCreate, OptionDto } from '../../../../../models/option.model';

@Component({
  selector: 'app-manage-algebra',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './manage-algebra.component.html',
  styleUrls: ['./manage-algebra.component.scss']
})
export class ManageAlgebraComponent implements OnInit {
  AlgebraQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  questionForm!: FormGroup;
  isEditing: boolean = false;
  editingQuestionId: number | null = null;

  readonly ALGEBRA_EXAM_ID = 11; 

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.addOption();       // default option
    this.loadAlgebraQuestions();
  }

  initForm() {
    this.questionForm = this.fb.group({
      examId: [this.ALGEBRA_EXAM_ID, Validators.required],
      topicId: [1, Validators.required],
      text: ['', Validators.required],
      questionType: ['MCQ', Validators.required],
      correctAnswer: ['', Validators.required],
      options: this.fb.array([])
    });
  }

  get options(): FormArray {
    return this.questionForm.get('options') as FormArray;
  }

  addOption() {
    this.options.push(this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false]
    }));
  }

  removeOption(index: number) {
    this.options.removeAt(index);
  }

  loadAlgebraQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.AlgebraQuestions = qs.filter(q => q.examId === this.ALGEBRA_EXAM_ID);
      this.AlgebraQuestions.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  onSubmit() {
    if (this.questionForm.invalid) {
      console.log('Form invalid', this.questionForm.value);
      return;
    }

    const formValue = this.questionForm.value;
    const filteredOptions = formValue.options.filter((opt: OptionCreate) => opt.text?.trim() !== '');

    if (!filteredOptions.length) {
      alert('Please add at least one option.');
      return;
    }

    if (this.isEditing && this.editingQuestionId) {
      // Update question
      this.questionService.update({ ...formValue, questionId: this.editingQuestionId }).subscribe(() => {
        // Delete old options first
        this.optionService.getByQuestionId(this.editingQuestionId!).subscribe(existingOpts => {
          existingOpts.forEach(opt => this.optionService.delete(opt.optionId).subscribe());
          // Add updated options
          filteredOptions.forEach((opt: OptionCreate )=> {
            this.optionService.create({
              text: opt.text,
              isCorrect: opt.isCorrect,
              questionId: this.editingQuestionId!
            }).subscribe();
          });
          this.resetForm();
          this.loadAlgebraQuestions();
        });
      });
    } else {
      // Create new question
      const newQuestion: CreateQuestionDto = {
        examId: this.ALGEBRA_EXAM_ID,
        topicId: formValue.topicId,
        text: formValue.text,
        questionType: formValue.questionType,
        correctAnswer: formValue.correctAnswer
      };

      this.questionService.create(newQuestion).subscribe(createdQ => {
        filteredOptions.forEach((opt: OptionCreate) => {
          this.optionService.create({
            text: opt.text,
            isCorrect: opt.isCorrect,
            questionId: createdQ.questionId
          }).subscribe(() => this.loadAlgebraQuestions());
        });
        this.resetForm();
      });
    }
  }

  editQuestion(question: QuestionDto) {
    this.isEditing = true;
    this.editingQuestionId = question.questionId;

    this.questionForm.patchValue({
      examId: this.ALGEBRA_EXAM_ID,
      topicId: question.topicId,
      text: question.text,
      questionType: question.questionType,
      correctAnswer: question.correctAnswer
    });

    this.options.clear();
    this.optionService.getByQuestionId(question.questionId).subscribe(opts => {
      opts.forEach(opt => this.options.push(this.fb.group({
        text: [opt.text, Validators.required],
        isCorrect: [opt.isCorrect]
      })));
    });
  }

  deleteQuestion(id: number) {
    if (confirm('Are you sure you want to delete this Algebra question?')) {
      this.questionService.delete(id).subscribe(() => this.loadAlgebraQuestions());
    }
  }

  resetForm() {
    this.isEditing = false;
    this.editingQuestionId = null;
    this.questionForm.reset({
      examId: this.ALGEBRA_EXAM_ID,
      topicId: 1,
      text: '',
      questionType: 'MCQ',
      correctAnswer: ''
    });
    this.options.clear();
    this.addOption();
  }
}
