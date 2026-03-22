import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  CertificateData,
  ExamAttemptResponse,
  PerformanceChartPoint,
  PerformanceSummary,
  SubmitExamAttempt,
  UserActivityItem
} from '../../../models/student-performance.model';

@Injectable({ providedIn: 'root' })
export class StudentPerformanceService {
  private readonly url = `${environment.apiUrl}/Performance`;

  constructor(private http: HttpClient) {}

  submitAttempt(dto: SubmitExamAttempt): Observable<ExamAttemptResponse> {
    return this.http.post<ExamAttemptResponse>(`${this.url}/exam-attempts`, dto);
  }

  getAttempts(take = 50): Observable<ExamAttemptResponse[]> {
    const params = new HttpParams().set('take', String(take));
    return this.http.get<ExamAttemptResponse[]>(`${this.url}/exam-attempts`, { params });
  }

  getSummary(): Observable<PerformanceSummary> {
    return this.http.get<PerformanceSummary>(`${this.url}/summary`);
  }

  getChart(days = 30): Observable<PerformanceChartPoint[]> {
    const params = new HttpParams().set('days', String(days));
    return this.http.get<PerformanceChartPoint[]>(`${this.url}/chart`, { params });
  }

  getActivity(take = 30): Observable<UserActivityItem[]> {
    const params = new HttpParams().set('take', String(take));
    return this.http.get<UserActivityItem[]>(`${this.url}/activity`, { params });
  }

  getCertificate(attemptId: number): Observable<CertificateData> {
    return this.http.get<CertificateData>(`${this.url}/certificate/${attemptId}`);
  }
}
