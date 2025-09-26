// src/app/core/services/ai.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ChatRequestDto {
  question: string;
}

export interface ChatResponseDto {
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private apiUrl = `${environment.apiUrl}/chat`;

  constructor(private http: HttpClient) {}

  // ✅ This method MUST exist
  askQuestion(request: ChatRequestDto): Observable<ChatResponseDto> {
    return this.http.post<ChatResponseDto>(`${this.apiUrl}/ask`, request);
  }
}
