import { api } from './client'

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface User {
  id: string
  name: string
  username: string
  isAdmin: boolean
}

export const userApi = {
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    const { data } = await api.get<ApiResponse<User[]>>('/auth/users')
    return data
  },
  
  createUser: async (payload: { username: string, name: string, password: string }): Promise<ApiResponse<User>> => {
    const { data } = await api.post<ApiResponse<User>>('/auth/register', payload)
    return data
  },

  deleteUser: async (id: string): Promise<ApiResponse<null>> => {
    const { data } = await api.delete<ApiResponse<null>>(`/auth/users/${id}`)
    return data
  }
}
