import clientAxios from '../Config/Axios';
import { User } from '../Types/Api';
import { Patient, UserPatient } from '../Types/Patient';

export const handleGetPatient = async (): Promise<Patient[]> => {
    const response = await clientAxios.get<Patient[]>('/Patients');
    return response.data;
};

export const getPatientById = async (id: string): Promise<Patient> => {
    const response = await clientAxios.get<Patient>(`/Patients/${id}`);
    return response.data;
};

export const handleCreatePatient = async (patient: Patient): Promise<Patient> => {
    const response = await clientAxios.post<Patient>('/Patients', patient);
    return response.data;
};

export const handleUpdatePatient = async (id: string, patient: Patient): Promise<Patient> => {
    const response = await clientAxios.put<Patient>(`/Patients/${id}`, patient);
    return response.data;
};

export const handleDeletePatient = async (id: string): Promise<void> => {
    await clientAxios.delete(`/Patients/${id}`);
};

export const createUsersPatient = async (user:UserPatient): Promise<User> => {
    const response = await clientAxios.post<User>('/Users',user);
    console.log('Usuarios obtenidos:', response);
    return response.data;
};


