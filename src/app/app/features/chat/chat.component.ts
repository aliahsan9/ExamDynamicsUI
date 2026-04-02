import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AiService } from '../../core/services/ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  type: 'user' | 'ai';
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('chatHistory') chatHistory!: ElementRef;

  question: string = '';
  messages: Message[] = [];
  isTyping: boolean = false;

  private currentAiIndex: number = -1;

  constructor(private aiService: AiService) {}

  async ngOnInit() {
    // 🔌 Start SignalR
    await this.aiService.startConnection();

    // 🎧 Listen for AI stream
    this.aiService.onReceiveMessage((chunk: string) => {
      this.isTyping = false;

      if (this.currentAiIndex === -1) {
        this.messages.push({ text: '', type: 'ai' });
        this.currentAiIndex = this.messages.length - 1;
      }

      this.messages[this.currentAiIndex].text += chunk;
      this.scrollToBottom();
    });
  }

  sendQuestion() {
    if (!this.question.trim()) return;

    // 👤 User message
    this.messages.push({ text: this.question, type: 'user' });

    const userQuestion = this.question;
    this.question = '';

    this.scrollToBottom();
    this.currentAiIndex = -1;
    this.isTyping = true;

    // 🚀 Trigger backend
    this.aiService.askQuestion(userQuestion).subscribe({
      next: (res: string) => {
        this.isTyping = false;
        // append AI response if not using SignalR streaming
        if (!res.startsWith('OpenAI Error:')) {
          this.messages.push({ text: res, type: 'ai' });
        } else {
          this.messages.push({ text: res, type: 'ai' });
        }
        this.scrollToBottom();
      },
      error: (err) => {
        console.error(err);
        this.isTyping = false;
        this.messages.push({ text: 'Error fetching answer', type: 'ai' });
        this.scrollToBottom();
      }
    });
  }

  scrollToBottom() {
    try {
      setTimeout(() => {
        this.chatHistory.nativeElement.scrollTop =
          this.chatHistory.nativeElement.scrollHeight;
      }, 0);
    } catch {}
  }
}