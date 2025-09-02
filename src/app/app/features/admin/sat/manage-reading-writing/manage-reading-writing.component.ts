import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateQuestionDto, QuestionDto } from '../../../../../models/question.moel';
import { OptionCreate, OptionDto } from '../../../../../models/option.model';
import { QuestionService } from '../../../../core/services/question.service';
import { OptionService } from '../../../../core/services/option.service';

@Component({
  selector: 'app-manage-reading-writing',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './manage-reading-writing.component.html',
  styleUrls: ['./manage-reading-writing.component.scss']
})
export class ManageReadingWritingComponent implements OnInit {
  ReadingQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {}; // options per questionId
  questionForm!: FormGroup;
  isEditing: boolean = false;
  editingQuestionId: number | null = null;

  // ✅  examId
  readonly READING_EXAM_ID = 6;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadReadingQuestions();
    this.initForm();
    this.addOption(); // start with one option
  }

  // ✅ initialize form
  initForm() {
    this.questionForm = this.fb.group({
      examId: [this.READING_EXAM_ID, Validators.required],
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

  // ✅ load only  questions
  loadReadingQuestions() {
    this.questionService.getAll().subscribe(qs => {
      this.ReadingQuestions = qs.filter(q => q.examId === this.READING_EXAM_ID);

      this.ReadingQuestions.forEach(q => {
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
        this.loadReadingQuestions();
      });
    } else {
      // Create new  question
      const newQuestion: CreateQuestionDto = {
        examId: this.READING_EXAM_ID,
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
            this.loadReadingQuestions();
          });
        });

        this.resetForm();
      });
    }
  }

  // ✅ edit  question
  editQuestion(question: QuestionDto) {
    this.isEditing = true;
    this.editingQuestionId = question.questionId;

    this.questionForm.patchValue({
      examId: this.READING_EXAM_ID,
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

  // ✅ delete question
  deleteQuestion(id: number) {
    if (confirm('Are you sure you want to delete this Reading-Writing question?')) {
      this.questionService.delete(id).subscribe(() => {
        this.loadReadingQuestions();
      });
    }
  }

  // ✅ reset form
  resetForm() {
    this.isEditing = false;
    this.editingQuestionId = null;
    this.questionForm.reset({
      examId: this.READING_EXAM_ID,
      topicId: 1,
      text: '',
      questionType: 'MCQ',
      correctAnswer: ''
    });
    this.options.clear();
    this.addOption();
  }
}
