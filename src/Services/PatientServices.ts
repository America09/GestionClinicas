import clientAxios from '../Config/Axios';
import  {Patient}  from '../Types/Patient';

export const getPatient = async (): Promise<Patient[]> => {
    const response = await clientAxios.get<Patient[]>('/Patients');
    console.log(response)
    return response.data;
};

export const getPatientById = async (id: string): Promise<Patient> => {
    const response = await clientAxios.get<Patient>(`/Patients/${id}`);
    return response.data;
};

export const createPatient = async (patient: Patient): Promise<Patient> => {
    const response = await clientAxios.post<Patient>('/Patients', patient);
    return response.data;
};

export const updatePatient = async (id: string, patient: Patient): Promise<Patient> => {
    const response = await clientAxios.put<Patient>(`/Patients/${id}`, patient);
    return response.data;
};

export const deletePatient = async (id: string): Promise<void> => {
    await clientAxios.delete(`/Patients/${id}`);
};
