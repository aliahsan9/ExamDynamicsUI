export interface Answer {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
}
export interface AnswerCreate {
  questionId: number;
  text: string;
  isCorrect: boolean;
}
export interface AnswerRead {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
}
export interface AnswerUpdate {
  text: string;
  isCorrect: boolean;
}
