import { Component, ViewChild, ElementRef } from '@angular/core';
import { AiService, ChatRequestDto, ChatResponseDto } from '../../core/services/ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Message {
  text: string;
  type: 'user' | 'ai';
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @ViewChild('chatHistory') chatHistory!: ElementRef;

  question: string = '';
  messages: Message[] = [];
  isTyping: boolean = false;

  constructor(private aiService: AiService) {}

  sendQuestion() {
    if (!this.question.trim()) return;

    // Push user message
    this.messages.push({ text: this.question, type: 'user' });
    const userQuestion = this.question;
    this.question = '';
    this.scrollToBottom();

    const request: ChatRequestDto = { question: userQuestion };

    // Show typing indicator
    this.isTyping = true;

    this.aiService.askQuestion(request).subscribe({
      next: (res: ChatResponseDto) => {
        this.isTyping = false;
        this.messages.push({ text: '', type: 'ai' });
        const aiMsgIndex = this.messages.length - 1;
        this.typeAnswer(res.answer, aiMsgIndex);
      },
      error: (err: any) => {
        console.error(err);
        this.isTyping = false;
        this.messages.push({ text: 'Error fetching answer', type: 'ai' });
      }
    });
  }

  typeAnswer(answer: string, index: number) {
    let i = 0;
    this.messages[index].text = '';
    const interval = setInterval(() => {
      if (i < answer.length) {
        this.messages[index].text += answer[i];
        i++;
        this.scrollToBottom();
      } else {
        clearInterval(interval);
      }
    }, 20); // typing speed
  }

  scrollToBottom() {
    try {
      this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
    } catch {}
  }
}
 