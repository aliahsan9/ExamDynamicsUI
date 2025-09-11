import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateQuestionDto, QuestionDto, UpdateQuestionDto } from '../../../../../models/question.moel';
import { OptionCreate, OptionDto } from '../../../../../models/option.model';
import { QuestionService } from '../../../../core/services/question.service';
import { OptionService } from '../../../../core/services/option.service';

@Component({
  selector: 'app-manage-ielts-speaking',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './manage-ielts-speaking.component.html',
  styleUrls: ['./manage-ielts-speaking.component.scss']
})
export class ManageIeltsSpeakingComponent implements OnInit {
  chemistryQuestions: QuestionDto[] = [];
  optionsMap: { [key: number]: OptionDto[] } = {};
  questionForm!: FormGroup;
  isEditing: boolean = false;
  editingQuestionId: number | null = null;

  // ✅ CHEMISTRY examId
  readonly CHEMISTRY_EXAM_ID = 28;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private optionService: OptionService
  ) {}

  ngOnInit(): void {
    this.loadChemistryQuestions();
    this.initForm();
    this.addOption();
  }

  // ✅ initialize form (added explanation)
  initForm() {
    this.questionForm = this.fb.group({
      examId: [this.CHEMISTRY_EXAM_ID, Validators.required],
      topicId: [1, Validators.required],
      text: ['', Validators.required],
      explanation: ['', Validators.required], // ✅ added explanation
      questionType: ['MCQ', Validators.required],
      correctAnswer: ['', Validators.required],
      options: this.fb.array([])
    });
  }

  // ✅ getter for options array
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

  // ✅ load only chemistry questions
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

  // ✅ submit question (added explanation in create/update)
  onSubmit() {
    if (this.questionForm.invalid) return;

    const formValue = this.questionForm.value;

    if (this.isEditing && this.editingQuestionId) {
      const updateDto: UpdateQuestionDto = {
        questionId: this.editingQuestionId,
        examId: this.CHEMISTRY_EXAM_ID,
        topicId: formValue.topicId,
        subjectId: 0, // adjust if subjectId is needed
        text: formValue.text,
        explanation: formValue.explanation, // ✅ include explanation
        questionType: formValue.questionType,
        correctAnswer: formValue.correctAnswer
      };

      this.questionService.update(updateDto).subscribe(() => {
        this.resetForm();
        this.loadChemistryQuestions();
      });
    } else {
      const newQuestion: CreateQuestionDto = {
        examId: this.CHEMISTRY_EXAM_ID,
        topicId: formValue.topicId,
        text: formValue.text,
        explanation: formValue.explanation, // ✅ include explanation
        questionType: formValue.questionType,
        correctAnswer: formValue.correctAnswer
      };

      this.questionService.create(newQuestion).subscribe((createdQ) => {
        formValue.options.forEach((opt: OptionCreate) => {
          this.optionService.create({
            text: opt.text,
            isCorrect: opt.isCorrect,
            questionId: createdQ.questionId
          }).subscribe(() => {
            this.loadChemistryQuestions();
          });
        });

        this.resetForm();
      });
    }
  }

  // ✅ edit Chemistry question (added explanation)
  editQuestion(question: QuestionDto) {
    this.isEditing = true;
    this.editingQuestionId = question.questionId;

    this.questionForm.patchValue({
      examId: this.CHEMISTRY_EXAM_ID,
      topicId: question.topicId,
      text: question.text,
      explanation: question.explanation, // ✅ include explanation
      questionType: question.questionType,
      correctAnswer: question.correctAnswer
    });

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

  deleteQuestion(id: number) {
    if (confirm('Are you sure you want to delete this Gre Chemistry question?')) {
      this.questionService.delete(id).subscribe(() => {
        this.loadChemistryQuestions();
      });
    }
  }

  resetForm() {
    this.isEditing = false;
    this.editingQuestionId = null;
    this.questionForm.reset({
      examId: this.CHEMISTRY_EXAM_ID,
      topicId: 1,
      text: '',
      explanation: '', // ✅ reset explanation
      questionType: 'MCQ',
      correctAnswer: ''
    });
    this.options.clear();
    this.addOption();
  }
}
