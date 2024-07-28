import { getPatient, getPatientById, createPatient, deletePatient } from '../Services/PatientServices';
import { Patient } from '../Types/Patient';

export const handleGetPatient = async (): Promise<Patient[]> => {
    try {
        const patient = await getPatient();
        console.log('Patient obtenidos:', patient); 
        return patient;
    } catch (error) {
        console.error('Error al obtener los patient:', error);
        throw error;
    }
};

export const handleGetPatientById = async (id: string): Promise<Patient> => {
    try {
        const patient = await getPatientById(id);
        console.log(`Patient obtenido con ID ${id}:`, patient); 
        return patient;
    } catch (error) {
        console.error(`Error al obtener el paciente con ID ${id}:`, error);
        throw error;
    }
};


export const handleCreatePatient = async (patient: Patient): Promise<Patient> => {
    try {
        const newPatient = await createPatient(patient);
        console.log('Paciente creado:', newPatient); 
        return newPatient;
    } catch (error) {
        console.error('Error al crear el paciente:', error);
        throw error;
    }
};

/* export const handleUpdatePatient = async (id: string, patient: Patient): Promise<Patient> => {
    try {
        const updatePatient = await updatePatient(id, patient);
        console.log(`Medic actualizado con ID ${id}:`, updatedMedic); // Añade este log para ver los datos
        return updatePatient;
    } catch (error) {
        console.error(`Error al actualizar el medic con ID ${id}:`, error);
        throw error;
    }
}; */

export const handleDeletePatient = async (id: string): Promise<void> => {
    try {
        await deletePatient(id);
        console.log(`Paciente eliminado con ID ${id}`); 
    } catch (error) {
        console.error(`Error al eliminar el paciente con ID ${id}:`, error);
        throw error;
    }
};
