
export interface QuestionOption {
  label: string;
  score: number;
}

export interface Question {
  id: number;
  category?: string;
  text: string;
  options: QuestionOption[];
  type?: 'single' | 'multi';
}

export interface AssessmentState {
  answers: Record<number, number | number[]>;
  currentStep: number;
  emailCaptured: boolean;
  userEmail?: string;
  userName?: string;
  userCompany?: string;
  userRole?: string;
  userShiftType?: string;
}

export enum UserPath {
  WORKER = 'worker',
  CORPORATE = 'corporate'
}
