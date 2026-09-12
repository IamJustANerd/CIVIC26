import { api } from './client';

export interface Quiz {
  id: string;
  name: string;
  description: string | null;
  type: string;
  openTime: string;
  closeTime: string;
  totalQuestions: number;
  cheatsheetRef: string | null;
}

export interface QuizzesResponse {
  success: boolean;
  data: Quiz[];
}

export interface QuizResponse {
  success: boolean;
  data: Quiz;
}

export const quizApi = {
  getQuizzes: async (type?: string): Promise<QuizzesResponse> => {
    const url = type ? `/quizzes?type=${type}` : '/quizzes';
    const response = await api.get<QuizzesResponse>(url);
    return response.data;
  },

  getQuizById: async (id: string): Promise<QuizResponse> => {
    const response = await api.get<QuizResponse>(`/quizzes/${id}`);
    return response.data;
  },
};
