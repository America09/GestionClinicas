import clientAxios from '../Config/Axios';
import { History } from '../Types/History';

export const handleGetHistory = async (): Promise<History[]> => {
  try {
    const response = await clientAxios.get('/HistorialClinico');
    return response.data;
  } catch (error) {
    console.error('Error fetching history:', error);
    throw error;
  }
};

export const handleCreateHistory = async (data: History): Promise<History> => {
  try {
    const response = await clientAxios.post('/HistorialClinico', data);
    return response.data;
  } catch (error) {
    console.error('Error creating history:', error);
    throw error;
  }
};

export const handleUpdateHistory = async (id: string, data: History): Promise<History> => {
  try {
    const response = await clientAxios.put(`/HistorialClinico/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating history:', error);
    throw error;
  }
};

export const getHistoryById = async (id: string): Promise<History> => {
  try {
    const response = await clientAxios.get(`/HistorialClinico/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching history by ID:', error);
    throw error;
  }
};

export const handleDeleteHistory = async (id: string): Promise<void> => {
  try {
    await clientAxios.delete(`/HistorialClinico/${id}`);
  } catch (error) {
    console.error('Error deleting history:', error);
    throw error;
  }
};

