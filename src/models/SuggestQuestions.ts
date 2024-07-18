export interface SuggestQuestionCategory {
  id: number;
  text: string;
}

export interface SuggestQuestion {
  id: number;
  content: string;
  isPersonalized: boolean;
  expirationDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SuggestQuestionsResponse {
  categories: SuggestQuestionCategory[];
  suggestQuestions: { [key: number]: SuggestQuestion[] };
}
