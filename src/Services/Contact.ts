import axios from 'axios'; 
import clientAxios from '../Config/Axios'; 
import { ContactRecibido } from '../types/Contact';
export const ContactMen = async (name: string, email: string, message: string) => {
  try {
    const response = await clientAxios.post('/contact', {
      name,
      email,
      message,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error enviando mensaje de contacto');
    } else {
      throw new Error('Unexpected error occurred');
    }
  }
};

export const fetchContactRecords = async (): Promise<ContactRecibido[]> => {
  try {
    const response = await clientAxios.get<ContactRecibido[]>('/contact');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error al obtener registros:', error.response?.data?.message || 'Error desconocido');
      throw new Error(error.response?.data?.message || 'Error obteniendo registros');
    } else {
      throw new Error('Unexpected error occurred');
    }
  }
};

export const deleteContactMessage = async (id: string): Promise<void> => {
  try {
    await clientAxios.delete(`/contact/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error eliminando mensaje de contacto:', error.response?.data?.message || 'Error desconocido');
      throw new Error(error.response?.data?.message || 'Error eliminando mensaje de contacto');
    } else {
      throw new Error('Unexpected error occurred');
    }
  }
};
