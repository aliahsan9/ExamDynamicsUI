import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerCreate, AnswerRead, AnswerUpdate } from '../../../models/answer.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
   private apiUrl = `${environment.apiUrl}/answer`; // ✅ change to your backend URL

  constructor(private http: HttpClient) {} 

  // CREATE
  create(answer: AnswerCreate): Observable<AnswerRead> {
    return this.http.post<AnswerRead>(this.apiUrl, answer);
  }

  // GET ALL
  getAll(): Observable<AnswerRead[]> {
    return this.http.get<AnswerRead[]>(this.apiUrl);
  }

  // GET BY ID
  getById(id: number): Observable<AnswerRead> {
    return this.http.get<AnswerRead>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  update(id: number, answer: AnswerUpdate): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, answer);
  }

  // DELETE
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
