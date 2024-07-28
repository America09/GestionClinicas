import { getMedics, getMedicById, createMedic, updateMedic, deleteMedic } from '../Services/MedicService';
import { Medic } from '../Types/Medics';

export const handleGetMedics = async (): Promise<Medic[]> => {
    try {
        const medics = await getMedics();
        console.log('Medics obtenidos:', medics); // Añade este log para ver los datos
        return medics;
    } catch (error) {
        console.error('Error al obtener los medics:', error);
        throw error;
    }
};

export const handleGetMedicById = async (id: string): Promise<Medic> => {
    try {
        const medic = await getMedicById(id);
        console.log(`Medic obtenido con ID ${id}:`, medic); // Añade este log para ver los datos
        return medic;
    } catch (error) {
        console.error(`Error al obtener el medic con ID ${id}:`, error);
        throw error;
    }
};

export const handleCreateMedic = async (medic: Medic): Promise<Medic> => {
    try {
        const newMedic = await createMedic(medic);
        console.log('Medic creado:', newMedic); // Añade este log para ver los datos
        return newMedic;
    } catch (error) {
        console.error('Error al crear el medic:', error);
        throw error;
    }
};

export const handleUpdateMedic = async (id: string, medic: Medic): Promise<Medic> => {
    try {
        const updatedMedic = await updateMedic(id, medic);
        console.log(`Medic actualizado con ID ${id}:`, updatedMedic); // Añade este log para ver los datos
        return updatedMedic;
    } catch (error) {
        console.error(`Error al actualizar el medic con ID ${id}:`, error);
        throw error;
    }
};

export const handleDeleteMedic = async (id: string): Promise<void> => {
    try {
        await deleteMedic(id);
        console.log(`Medic eliminado con ID ${id}`); // Añade este log para ver los datos
    } catch (error) {
        console.error(`Error al eliminar el medic con ID ${id}:`, error);
        throw error;
    }
};
