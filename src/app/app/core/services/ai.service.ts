import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  private hubConnection!: signalR.HubConnection;
  private apiUrl = `${environment.apiUrl}/chat`;

  constructor(private http: HttpClient) {}

  // Start SignalR connection
  startConnection(): Promise<void> {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}/chatHub`)
      .withAutomaticReconnect()
      .build();

    return this.hubConnection.start()
      .then(() => console.log('SignalR Connected'))
      .catch(err => console.error('SignalR Error:', err));
  }

  // Listen to AI messages (stream)
  onReceiveMessage(callback: (message: string) => void) {
    this.hubConnection.on('ReceiveMessage', (message: string) => {
      callback(message);
    });
  }

  // Send question (HTTP triggers backend)
  askQuestion(question: string) {
    const payload = { message: question }; // ✅ wrap in object
    return this.http.post(this.apiUrl, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' // backend returns plain text
    });
  }
}