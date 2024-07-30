import clientAxios from '../Config/Axios';
import  {Patient}  from '../Types/Patient';

export const getPatient = async (): Promise<Patient[]> => {
    const response = await clientAxios.get<Patient[]>('/Patient');
    console.log(response)
    return response.data;
};

export const getPatientById = async (id: string): Promise<Patient> => {
    const response = await clientAxios.get<Patient>(`/Patient/${id}`);
    return response.data;
};

export const createPatient = async (patient: Patient): Promise<Patient> => {
    const response = await clientAxios.post<Patient>('/Patient', patient);
    return response.data;
};

export const updatePatient = async (id: string, history: History): Promise<Patient> => {
    const response = await clientAxios.put<Patient>(`/Patient/${id}`, history);
    return response.data;
};

export const deletePatient = async (id: string): Promise<void> => {
    await clientAxios.delete(`/Patient/${id}`);
};
