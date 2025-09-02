import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ContactMessageDto {
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
   private apiUrl = `${environment.apiUrl}/contact/send`; // ✅ Change this to your backend URL

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactMessageDto): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact);
  }
}
