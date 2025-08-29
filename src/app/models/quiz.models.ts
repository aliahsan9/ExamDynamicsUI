// models/quiz.model.ts

// import { QuestionReadDTO } from './question.model';

export interface QuizDto {
  id: number;
  title: string;
  description: string; 
  totalQuestions: number;
  timeLimit: number;
  createdAt: string; 
}

export interface QuizCreateDto {
  title: string;
  description: string;
}

export interface QuizUpdateDto {
  id: number;
  title: string;
  description: string;
}

export interface QuizReadDto {
  id: number;
  title: string;
  description: string;
  questionCount: number;
  createdAt: string;
}

export interface QuizWithQuestionsDto {
  id: number;
  title: string;
  description: string;
  createdAt: string;
//   questions: QuestionReadDTO[];
}
