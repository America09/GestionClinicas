
import clientAxios from '../Config/Axios';
import  {History}  from '../Types/History';

export const getHistory = async (): Promise<History[]> => {
    const response = await clientAxios.get<History[]>('/HistorialClinico');
    console.log(response)
    return response.data;
};

export const getHistoryById = async (id: string): Promise<History> => {
    const response = await clientAxios.get<History>(`/HistorialClinico/${id}`);
    return response.data;
};

export const createHistory = async (history: History): Promise<History>=> {
    const response = await clientAxios.post<History>('/HistorialClinico', history);
    return response.data;
};

export const updateHistory = async (id: string, history: History): Promise<History> => {
    const response = await clientAxios.put<History>(`/HistoriaLClinico/${id}`, history);
    return response.data;
};

export const deleteHistory = async (id: string): Promise<void> => {
    await clientAxios.delete(`/HistorialClinico/${id}`);
};