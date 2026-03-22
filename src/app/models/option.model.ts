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
  questionId: number;
}

/** Used when syncing options after editing a question in admin. */
export interface OptionFormSync {
  optionId?: number | null;
  text: string;
  isCorrect: boolean;
}
