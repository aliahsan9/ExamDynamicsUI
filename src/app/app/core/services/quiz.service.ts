import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  QuizCreateDto,
  QuizDto,
  QuizUpdateDto,
  QuizWithQuestionsDto
} from '../../../models/quiz.models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = `${environment.apiUrl}/quiz`; // ✅ Use environment

  constructor(private http: HttpClient) {}

  // Get all quizzes
  getAllQuizzes(): Observable<QuizDto[]> {
    return this.http.get<QuizDto[]>(this.apiUrl);
  }

  // Get quiz by ID
  getQuizById(id: number): Observable<QuizDto> {
    return this.http.get<QuizDto>(`${this.apiUrl}/${id}`);
  }

  // Create a new quiz
  createQuiz(data: QuizCreateDto): Observable<QuizDto> {
    return this.http.post<QuizDto>(this.apiUrl, data);
  }

  // Update a quiz
  updateQuiz(id: number, data: QuizUpdateDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  // Delete a quiz
  deleteQuiz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Get quiz with questions (same endpoint assumed)
  getQuizWithQuestions(id: number): Observable<QuizWithQuestionsDto> {
    return this.http.get<QuizWithQuestionsDto>(`${this.apiUrl}/${id}`);
  }
}
