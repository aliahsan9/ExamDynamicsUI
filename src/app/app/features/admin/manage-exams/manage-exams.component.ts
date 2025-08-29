import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateExamDto, ExamDto, ExamService, UpdateExamDto } from '../../../core/services/exam.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-exams',
  imports:[CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './manage-exams.component.html',
  styleUrls: ['./manage-exams.component.scss']
})
export class ManageExamsComponent implements OnInit {
  exams: ExamDto[] = [];
  examForm!: FormGroup;
  editingExamId: number | null = null;
  showForm: boolean = false; // toggle form visibility

  constructor(
    private examService: ExamService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadExams();
    this.initForm();
  }

  initForm(): void {
    this.examForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      examCategoryId: [1, Validators.required] // default value
    });
  }

  loadExams(): void {
    this.examService.getAll().subscribe({
      next: data => this.exams = data,
      error: err => console.error(err)
    });
  }

  // Toggle form for create/edit
  openForm(exam?: ExamDto): void {
    if (exam) {
      this.editingExamId = exam.examId;
      this.examForm.patchValue({
        title: exam.title,
        description: exam.description,
        examCategoryId: exam.subjects?.[0]?.subjectId || 1
      });
    } else {
      this.editingExamId = null;
      this.examForm.reset({ examCategoryId: 1 });
    }
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  saveExam(): void {
    if (this.examForm.invalid) return;

    const dto = this.examForm.value;

    if (this.editingExamId) {
      const updateDto: UpdateExamDto = {
        title: dto.title,
        description: dto.description
      };
      this.examService.update(this.editingExamId, updateDto).subscribe({
        next: () => {
          this.loadExams();
          this.closeForm();
        },
        error: err => console.error(err)
      });
    } else {
      const createDto: CreateExamDto = {
        title: dto.title,
        description: dto.description,
        examCategoryId: dto.examCategoryId
      };
      this.examService.create(createDto).subscribe({
        next: () => {
          this.loadExams();
          this.closeForm();
        },
        error: err => console.error(err)
      });
    }
  }

  deleteExam(id: number): void {
    if (confirm('Are you sure you want to delete this exam?')) {
      this.examService.delete(id).subscribe({
        next: () => this.loadExams(),
        error: err => console.error(err)
      });
    }
  }
}
