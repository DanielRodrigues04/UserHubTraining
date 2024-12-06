import axios from 'axios';
import { User } from '../types/user';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};