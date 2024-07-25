import clientAxios from '../Config/Axios';
import { Horario } from '../Types/Horario';


export const getHorarios = async (): Promise<Horario[]> => {
    const response = await clientAxios.get<Horario[]>('/api/Horario');
    return response.data;
};

export const getHorarioById = async (id: string): Promise<Horario> => {
    const response = await clientAxios.get<Horario>(`/api/Horario/${id}`);
    return response.data;
};

export const createHorario = async (horario: Horario): Promise<Horario> => {
    const response = await clientAxios.post<Horario>('/api/Horario', horario);
    return response.data;
};

export const updateHorario = async (id: string, horario: Horario): Promise<Horario> => {
    const response = await clientAxios.put<Horario>(`/api/Horario/${id}`, horario);
    return response.data;
};

export const deleteHorario = async (id: string): Promise<void> => {
    await clientAxios.delete(`/api/Horario/${id}`);
};
