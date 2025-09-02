import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OptionCreate, OptionDto, OptionUpdate } from '../../../models/option.model';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private apiUrl = `${environment.apiUrl}/option`;

  constructor(private http: HttpClient) {} 

  // ✅ Get all options
  getAll(): Observable<OptionDto[]> {
    return this.http.get<OptionDto[]>(this.apiUrl);
  }

  // ✅ Get option by id
  getById(id: number): Observable<OptionDto> {
    return this.http.get<OptionDto>(`${this.apiUrl}/${id}`);
  }

  // ✅ Create new option
  create(option: OptionCreate): Observable<OptionDto> {
    return this.http.post<OptionDto>(this.apiUrl, option);
  }

  // ✅ Update option
  update(id: number, option: OptionUpdate): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, option);
  }

  // ✅ Delete option
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // ✅ Get all options by QuestionId
  getByQuestionId(questionId: number): Observable<OptionDto[]> {
    return this.http.get<OptionDto[]>(`${this.apiUrl}/question/${questionId}`);
  }
}
