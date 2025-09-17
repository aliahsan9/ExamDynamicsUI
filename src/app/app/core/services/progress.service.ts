import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface UserExamProgress {
  id?: number;
  userId?: number;
  examId: number;
  currentQuestion: number;
  score: number;
  startedAt?: Date;
  completedAt?: Date | null;
}

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private apiUrl = 'https://localhost:5001/api/UserExamProgress'; // ✅ adjust your API base URL
  private localKey = 'examProgress';

  constructor(private http: HttpClient) {}

  // Check login status (basic way, depends on your auth implementation)
  private isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // ✅ adjust based on your JWT/auth system
  }

  // ✅ Create progress
  createProgress(progress: UserExamProgress): Observable<UserExamProgress> {
    if (this.isLoggedIn()) {
      return this.http.post<UserExamProgress>(this.apiUrl, progress);
    } else {
      localStorage.setItem(this.localKey, JSON.stringify(progress));
      return of(progress);
    }
  }

  // ✅ Get progress
  getProgress(userId: number, examId: number): Observable<UserExamProgress | null> {
    if (this.isLoggedIn()) {
      return this.http.get<UserExamProgress>(`${this.apiUrl}/user/${userId}`);
    } else {
      const data = localStorage.getItem(this.localKey);
      return of(data ? JSON.parse(data) : null);
    }
  }

  // ✅ Update progress
  updateProgress(id: number, progress: UserExamProgress): Observable<any> {
    if (this.isLoggedIn()) {
      return this.http.put(`${this.apiUrl}/${id}`, progress);
    } else {
      localStorage.setItem(this.localKey, JSON.stringify(progress));
      return of(progress);
    }
  }

  // ✅ Reset / delete progress
  resetProgress(id: number): Observable<any> {
    if (this.isLoggedIn()) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    } else {
      localStorage.removeItem(this.localKey);
      return of(true);
    }
  }
}
