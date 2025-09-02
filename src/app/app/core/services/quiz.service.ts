// src/app/services/quiz.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { QuizCreateDto, QuizDto, QuizUpdateDto, QuizWithQuestionsDto } from '../../../models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuizzes() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = `${environment.apiUrl}/quiz`;

  constructor(private http: HttpClient) {}

  // Get all quizzes
  getAll(): Observable<QuizDto[]> {
    return this.http.get<QuizDto[]>(this.apiUrl);
  }

  // Get quiz by id
  getById(id: number): Observable<QuizDto> {
    return this.http.get<QuizDto>(`${this.apiUrl}/${id}`);
  }

  // Get quiz with questions
  getQuizWithQuestions(id: number): Observable<QuizWithQuestionsDto> {
    return this.http.get<QuizWithQuestionsDto>(`${this.apiUrl}/${id}`);
  }

  // Create a new quiz
  create(quiz: QuizCreateDto): Observable<QuizDto> {
    return this.http.post<QuizDto>(this.apiUrl, quiz);
  }

  // Update quiz
  update(id: number, quiz: QuizUpdateDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, quiz);
  }

  // Delete quiz
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
