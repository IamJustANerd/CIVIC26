import { api } from './client';

export interface PresignedUrlResponse {
  success: boolean;
  data: {
    url: string;
    key: string;
  };
}

export const storageApi = {
  listObjects: async (prefix: string): Promise<{ success: boolean; data: any[] }> => {
    const response = await api.get(`/storage/list?prefix=${prefix}`);
    return response.data;
  },

  getPresignedUrl: async (key: string): Promise<PresignedUrlResponse> => {
    const response = await api.get<PresignedUrlResponse>(`/storage/presign?key=${key}`);
    return response.data;
  },

  uploadFile: async (key: string, file: File): Promise<{ success: boolean; data: any }> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post(`/storage/upload/${key}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  }
};
