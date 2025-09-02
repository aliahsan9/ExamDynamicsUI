export interface OptionDto {
  optionId: number;
  text: string;
  isCorrect: boolean;
  questionId: number;
}

export interface OptionCreate {
  text: string;
  isCorrect: boolean;
  questionId: number;
}

export interface OptionUpdate {
  text: string;
  isCorrect: boolean;
}   
