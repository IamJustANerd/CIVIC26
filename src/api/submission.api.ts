import { api } from './client';

export interface Submission {
  id: string;
  quizId: string;
  userId: string;
  isSubmitted: boolean;
  score: number | null;
  userStatus: string | null;
  submissionTime: string | null;
  startTime: string | null;
  finishTime: string | null;
  infractions: string[] | null;
}

export interface SubmissionsResponse {
  success: boolean;
  data: Submission[];
}

export interface SubmissionResponse {
  success: boolean;
  data: Submission;
}

export const submissionApi = {
  getMySubmissions: async (): Promise<SubmissionsResponse> => {
    const response = await api.get<SubmissionsResponse>('/submissions/me');
    return response.data;
  },

  getSubmissionsByQuizId: async (quizId: string): Promise<SubmissionsResponse> => {
    const response = await api.get<SubmissionsResponse>(`/submissions?quizId=${quizId}`);
    return response.data;
  },

  getSubmissionsByUserId: async (userId: string): Promise<SubmissionsResponse> => {
    const response = await api.get<SubmissionsResponse>(`/submissions?userId=${userId}`);
    return response.data;
  },

  startSubmission: async (quizId: string, userId: string): Promise<SubmissionResponse> => {
    const response = await api.post<SubmissionResponse>('/submissions', {
      quizId,
      userId,
    });
    return response.data;
  },
};
