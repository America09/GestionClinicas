import clientAxios from '../Config/Axios';
import { Especialidad } from '../Types/Especialidad';

export const getEspecialidades = async (): Promise<Especialidad[]> => {
    const response = await clientAxios.get<Especialidad[]>('/Specialties');
    return response.data;
};

export const getEspecialidadById = async (id: string): Promise<Especialidad> => {
    const response = await clientAxios.get<Especialidad>(`/Specialties/${id}`);
    return response.data;
};

export const createEspecialidad = async (especialidad: Especialidad): Promise<Especialidad> => {
    const response = await clientAxios.post<Especialidad>('/Specialties', especialidad);
    return response.data;
};

export const updateEspecialidad = async (id: string, especialidad: Especialidad): Promise<Especialidad> => {
    const response = await clientAxios.put<Especialidad>(`/Specialties/${id}`, especialidad);
    return response.data;
};

export const deleteEspecialidad = async (id: string): Promise<void> => {
    await clientAxios.delete(`/Specialties/${id}`);
};
