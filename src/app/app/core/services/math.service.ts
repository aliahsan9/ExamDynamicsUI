import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  private apiUrl = `${environment.apiUrl}/math`; // Adjust to your backend API

  constructor(private http: HttpClient) {}

  getMCQs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMCQ(mcq: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mcq);
  }

  updateMCQ(id: number, mcq: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, mcq);
  }

  deleteMCQ(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
