import clientAxios from '../Config/Axios';
import { Consultorio } from '../Types/Consultorio';

export const getConsultorios = async (): Promise<Consultorio[]> => {
    const response = await clientAxios.get<Consultorios[]>('/Consultorios');
    return response.data;
};

export const getConsultorioById = async (id: string): Promise<Consultorio> => {
    const response = await clientAxios.get<Consultorio>(`/Consultorios/${id}`);
    return response.data;
};

export const createConsultorio = async (consultorio: Consultorio): Promise<Consultorio> => {
    const response = await clientAxios.post<Consultorio>('/Consultorios', consultorio);
    return response.data;
};

export const updateConsultorio = async (id: string, consultorio: Consultorio): Promise<Consultorio> => {
    const response = await clientAxios.put<Consultorio>(`/Consultorios/${id}`, consultorio);
    return response.data;
};

export const deleteConsultorio = async (id: string): Promise<void> => {
    await clientAxios.delete(`/Consultorios/${id}`);
};
