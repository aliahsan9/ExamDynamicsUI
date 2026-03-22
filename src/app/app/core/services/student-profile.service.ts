import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { StudentProfile, UpdateStudentProfile } from '../../../models/student-profile.model';

@Injectable({ providedIn: 'root' })
export class StudentProfileService {
  private readonly url = `${environment.apiUrl}/StudentProfile`;

  constructor(private http: HttpClient) {}

  getMe(): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(`${this.url}/me`);
  }

  updateMe(dto: UpdateStudentProfile): Observable<StudentProfile> {
    return this.http.put<StudentProfile>(`${this.url}/me`, dto);
  }
}
