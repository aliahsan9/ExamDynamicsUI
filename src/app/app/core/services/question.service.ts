// src/app/services/question.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateQuestionDto, QuestionDto, UpdateQuestionDto } from '../../../models/question.moel';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root' 
})  
export class QuestionService {
  private apiUrl = `${environment.apiUrl}/question`; 

  constructor(private http: HttpClient) {} 

  // ✅ Get all questions
  getAll(): Observable<QuestionDto[]> {
    return this.http.get<QuestionDto[]>(this.apiUrl);
  }

  // ✅ Get question by Id
  getById(id: number): Observable<QuestionDto> {
    return this.http.get<QuestionDto>(`${this.apiUrl}/${id}`);
  }

  // ✅ Create a new question
  create(question: CreateQuestionDto): Observable<QuestionDto> {
    return this.http.post<QuestionDto>(this.apiUrl, question);
  }

  // ✅ Update a question
  update(question: QuestionDto | UpdateQuestionDto & { id: number }): Observable<QuestionDto> {
    return this.http.put<QuestionDto>(this.apiUrl, question);
  }

  // ✅ Delete a question
  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
