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

  // Get all questions
  getAll(): Observable<QuestionDto[]> {
    return this.http.get<QuestionDto[]>(this.apiUrl);
  }

  // Get question by Id
  getById(id: number): Observable<QuestionDto> {
    return this.http.get<QuestionDto>(`${this.apiUrl}/${id}`);
  }

  // Create a new question
  create(question: CreateQuestionDto): Observable<QuestionDto> {
    return this.http.post<QuestionDto>(this.apiUrl, question);
  }

  // Update a question (strips nested options; maps legacy `id` to `questionId` for API binding)
  update(question: QuestionDto | (UpdateQuestionDto & { id?: number }) | Record<string, unknown>): Observable<QuestionDto> {
    const payload = { ...(question as Record<string, unknown>) };
    delete payload['options'];
    if (payload['id'] != null && payload['questionId'] == null) {
      payload['questionId'] = payload['id'];
    }
    delete payload['id'];
    return this.http.put<QuestionDto>(this.apiUrl, payload as unknown);
  }

  // Delete a question
  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
