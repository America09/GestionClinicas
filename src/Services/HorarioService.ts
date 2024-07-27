import clientAxios from '../Config/Axios';
import { Horario } from '../Types/Horario';

export const getHorarios = async (): Promise<Horario[]> => {
    const response = await clientAxios.get<Horario[]>('/Horario');
    return response.data;
};

export const getHorarioById = async (id: number): Promise<Horario> => {
    const response = await clientAxios.get<Horario>(`/Horario/${id}`);
    console.log(response)
    return response.data;
};

export const createHorario = async (horario: Horario): Promise<Horario> => {
    const response = await clientAxios.post<Horario>('/Horario', horario);
    console.log(response);
    return response.data;
};

export const updateHorario = async (id: number, horario: Horario): Promise<Horario> => {
    const response = await clientAxios.put<Horario>(`/Horario/${id}`, horario);
    return response.data;
};

export const deleteHorario = async (id: number): Promise<void> => {
    await clientAxios.delete(`/Horario/${id}`);
};
