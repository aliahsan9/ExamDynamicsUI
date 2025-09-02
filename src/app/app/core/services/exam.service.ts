import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// DTO interfaces
export interface CreateExamDto {
  title: string;
  description: string;
  examCategoryId: number;
}

export interface UpdateExamDto {
  title: string;
  description: string;
}

export interface SubjectDto {
  subjectId: number;
  name: string;
  description?: string;  
}

export interface ExamDto {
  examId: number;
  title: string;
  description: string;
  createdAt: string;
  examCategoryId:number;
  subjects?: SubjectDto[];
}

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = `${environment.apiUrl}/exam`;

  constructor(private http: HttpClient) {}

  // Get all exams
  getAll(): Observable<ExamDto[]> {
    return this.http.get<ExamDto[]>(this.apiUrl);
  }

  // Get exam by ID
  getById(id: number): Observable<ExamDto> {
    return this.http.get<ExamDto>(`${this.apiUrl}/${id}`);
  }

  // Get exams by subject ID
  getBySubjectId(subjectId: number): Observable<ExamDto[]> {
    return this.http.get<ExamDto[]>(`${this.apiUrl}/subject/${subjectId}`);
  }

  // Create a new exam
  create(dto: CreateExamDto): Observable<ExamDto> {
    return this.http.post<ExamDto>(this.apiUrl, dto);
  }

  // Update an exam
  update(id: number, dto: UpdateExamDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
  }

  // Delete an exam
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
