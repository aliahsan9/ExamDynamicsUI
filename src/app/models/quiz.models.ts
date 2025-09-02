// src/app/models/quiz.model.ts

// For Create Quiz
export interface QuizCreateDto {
  title: string;
  description: string;
}

// For Update Quiz
export interface QuizUpdateDto {
  id: number;
  title: string;
  description: string;
}

// For main Quiz DTO
export interface QuizDto {
  id: number;
  title: string;
  description: string;
  totalQuestions: number;
  timeLimit: number;
  createdAt: string; // ISO string from backend
}

// For Read DTO
export interface QuizReadDto {
  id: number;
  title: string;
  description: string;
  questionCount: number;
  createdAt: string;
}

// For Quiz with Questions
export interface QuizWithQuestionsDto {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  questions: Question[];
}
// src/app/models/question.model.ts

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}
