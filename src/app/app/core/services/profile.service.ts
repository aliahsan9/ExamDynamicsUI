import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserProfileCreateDto, UserProfileDto, UserProfileUpdateDto } from '../../../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = `${environment.apiUrl}/UserProfile`;

  constructor(private http: HttpClient) {}

  // ✅ Get all profiles
  getAll(): Observable<UserProfileDto[]> {
    return this.http.get<UserProfileDto[]>(this.baseUrl);
  }

  // ✅ Get profile by userId
  getById(userId: number): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(`${this.baseUrl}/${userId}`);
  }

  // ✅ Get profile by email
  getByEmail(email: string): Observable<UserProfileDto> {
    return this.http.get<UserProfileDto>(`${this.baseUrl}/email/${email}`);
  }

  // ✅ Create profile
  create(createDto: UserProfileCreateDto): Observable<UserProfileDto> {
    return this.http.post<UserProfileDto>(this.baseUrl, createDto);
  }

  // ✅ Update profile
  update(userId: number, updateDto: UserProfileUpdateDto): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${userId}`, updateDto);
  }

  // ✅ Delete profile
  delete(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${userId}`);
  }
}
