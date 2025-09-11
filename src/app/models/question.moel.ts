// For creating a question
export interface CreateQuestionDto {
  examId: number;
  topicId: number;          // ✅ required
  text: string;
  questionType: string;
  explanation?: string;
  correctAnswer: string;
}

// For updating a question
export interface UpdateQuestionDto {
  questionId: number;
  examId: number;
  topicId: number;
  subjectId: number;
  text: string;
  explanation?: string;
  questionType: string;
  correctAnswer: string;
}


// For returning a full question
export interface QuestionDto {
  questionId: number;
  examId: number;
  topicId: number;
  subjectId: number;
  text: string;
  explanation?: string;
  questionType: string;
  correctAnswer: string;
}

// For reading question with minimal data
export interface QuestionReadDto {
  id: number;
  text: string;
  explanation?: string;
  subjectId: number;
}
