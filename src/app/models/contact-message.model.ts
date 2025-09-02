// models/contact-message.model.ts

// For reading messages (GET responses)
export interface ContactMessageDto {
  contactMessageId: number;
  name: string;
  email: string;
  message: string;
  sentAt: Date;
}

// For creating a message (POST request)
export interface CreateContactMessageDto {
  name: string;
  email: string;
  message: string;
}

// For updating a message (PUT request)
export interface UpdateContactMessageDto {
  name: string;
  email: string;
  message: string;
}
