import clientAxios from '../Config/Axios';
import { Medic } from '../Types/Medics';

export const getMedics = async (): Promise<Medic[]> => {
    const response = await clientAxios.get<Medic[]>('/Medics');
    return response.data;
};

export const getMedicById = async (id: string): Promise<Medic> => {
    const response = await clientAxios.get<Medic>(`/Medics/${id}`);
    return response.data;
};

export const createMedic = async (medic: Medic): Promise<Medic> => {
    const response = await clientAxios.post<Medic>('/Medics', medic);
    return response.data;
};

export const updateMedic = async (id: string, medic: Medic): Promise<Medic> => {
    const response = await clientAxios.put<Medic>(`/Medics/${id}`, medic);
    return response.data;
};

export const deleteMedic = async (id: string): Promise<void> => {
    await clientAxios.delete(`/Medics/${id}`);
};
