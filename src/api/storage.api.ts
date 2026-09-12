import { api } from './client';

export interface PresignedUrlResponse {
  success: boolean;
  data: {
    url: string;
    key: string;
  };
}

export const storageApi = {
  getPresignedUrl: async (key: string): Promise<PresignedUrlResponse> => {
    const response = await api.get<PresignedUrlResponse>(`/storage/presign?key=${key}`);
    return response.data;
  },
};
