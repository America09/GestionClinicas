import clientAxios from '../Config/Axios';
import { Appointment } from '../Types/Appointment';

export const getAppointments = async (): Promise<Appointment[]> => {
    const response = await clientAxios.get<Appointment[]>('/Appointments');
    return response.data;
};

export const getAppointmentById = async (id: string): Promise<Appointment> => {
    const response = await clientAxios.get<Appointment>(`/Appointments/${id}`);
    return response.data;
};

export const createAppointment = async (appointment: Omit<Appointment, 'id'>): Promise<Appointment> => {
    const response = await clientAxios.post<Appointment>('/Appointments', appointment);
    return response.data;
};

export const updateAppointment = async (id: string, appointment: Appointment): Promise<Appointment> => {
    const response = await clientAxios.put<Appointment>(`/Appointments/${id}`, appointment);
    return response.data;
};

export const deleteAppointment = async (id: string): Promise<void> => {
    await clientAxios.delete(`/Appointments/${id}`);
};
