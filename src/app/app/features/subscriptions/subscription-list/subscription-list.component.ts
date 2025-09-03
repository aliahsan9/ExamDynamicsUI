import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, ContactMessageDto } from '../../../core/services/contact.service';

@Component({
  selector: 'app-subscription-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent {
  subscriptionForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.subscriptionForm.invalid) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const contactMessage: ContactMessageDto = {
      email: this.subscriptionForm.value.email,
      message: 'Subscribed to newsletter' // optional message to identify subscriptions
    };

    this.contactService.sendMessage(contactMessage).subscribe({
      next: () => {
        this.successMessage = 'Thank you for subscribing!';
        this.subscriptionForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        this.errorMessage = 'Subscription failed. Please try again later.';
        this.isSubmitting = false;
      }
    });
  }
}
