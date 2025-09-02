import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionDto, CreateQuestionDto } from '../../../../models/question.moel';
import { OptionDto, OptionCreate } from '../../../../models/option.model';
import { QuestionService } from '../../../core/services/question.service';
import { OptionService } from '../../../core/services/option.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-questions',
  imports:[CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.scss']
})
export class ManageQuestionsComponent implements OnInit {
  questions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {}; // store options per questionId
  questionForm!: FormGroup;
  isEditing: boolean = false;
  editingQuestionId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
    this.initForm();
  }

  // ✅ initialize form
  initForm() {
    this.questionForm = this.fb.group({
      examId: [1, Validators.required],   // hardcoded for demo, replace as needed
      topicId: [1, Validators.required],
      text: ['', Validators.required],
      questionType: ['MCQ', Validators.required],
      correctAnswer: ['', Validators.required],
      options: this.fb.array([]) // dynamic options
    });
  }

  // ✅ getter for options array
  get options(): FormArray {
    return this.questionForm.get('options') as FormArray;
  }

  // ✅ add option to form
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

  // ✅ load all questions
  loadQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.questions = qs;
      // Load options for each question
      qs.forEach(q => {
        this.optionService.getByQuestionId(q.questionId).subscribe(opts => {
          this.optionsMap[q.questionId] = opts;
        });
      });
    });
  }

  // ✅ submit question (create/update)
  onSubmit() {
    if (this.questionForm.invalid) return;

    const formValue = this.questionForm.value;

    if (this.isEditing && this.editingQuestionId) {
      // Update
      this.questionService.update({ ...formValue, id: this.editingQuestionId }).subscribe(() => {
        this.resetForm();
        this.loadQuestions();
      });
    } else {
      // Create
      const newQuestion: CreateQuestionDto = {
        examId: formValue.examId,
        topicId: formValue.topicId,
        text: formValue.text,
        questionType: formValue.questionType,
        correctAnswer: formValue.correctAnswer
      };

      this.questionService.create(newQuestion).subscribe((createdQ) => {
        // Save options linked to this question
        formValue.options.forEach((opt: OptionCreate) => {
          this.optionService.create({
            text: opt.text,
            isCorrect: opt.isCorrect,
            questionId: createdQ.questionId
          }).subscribe(() => {
            this.loadQuestions();
          });
        });

        this.resetForm();
      });
    }
  }

  // ✅ edit question
  editQuestion(question: QuestionDto) {
    this.isEditing = true;
    this.editingQuestionId = question.questionId;

    this.questionForm.patchValue({
      examId: question.examId,
      topicId: question.topicId,
      text: question.text,
      questionType: question.questionType,
      correctAnswer: question.questionType
    });

    // Clear and refill options
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

  // ✅ delete question
  deleteQuestion(id: number) {
    if (confirm('Are you sure you want to delete this question?')) {
      this.questionService.delete(id).subscribe(() => {
        this.loadQuestions();
      });
    }
  }

  // ✅ reset form
  resetForm() {
    this.isEditing = false;
    this.editingQuestionId = null;
    this.questionForm.reset({
      examId: 1,
      topicId: 1,
      text: '',
      questionType: 'MCQ',
      correctAnswer: ''
    });
    this.options.clear();
    this.addOption(); // start with one option
  }
}
