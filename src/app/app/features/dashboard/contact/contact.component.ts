import { Component } from '@angular/core';
import { ContactMessageDto, ContactService } from '../../../core/services/contact.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports:[CommonModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact: ContactMessageDto = {
    email: '',
    message: ''
  };

  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.contactService.sendMessage(this.contact).subscribe({
      next: () => {
        this.successMessage = 'Your message has been sent successfully!';
        this.contact = { email: '', message: '' }; // reset form
        this.isSubmitting = false;
      },
      error: () => {
        this.errorMessage = 'Something went wrong. Please try again later.';
        this.isSubmitting = false;
      }
    });
  }
}
