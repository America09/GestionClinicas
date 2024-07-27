import { getMedics, getMedicById, createMedic, updateMedic, deleteMedic } from '../Services/MedicService';
import { Medic } from '../Types/Medic';

export const handleGetMedics = async (): Promise<Medic[]> => {
    try {
        const medics = await getMedics();
        return medics;
    } catch (error) {
        console.error('Error al obtener los médicos:', error);
        throw error;
    }
};

export const handleGetMedicById = async (id: string): Promise<Medic> => {
    try {
        const medic = await getMedicById(id);
        return medic;
    } catch (error) {
        console.error(`Error al obtener el médico con ID ${id}:`, error);
        throw error;
    }
};

export const handleCreateMedic = async (medic: Medic): Promise<Medic> => {
    try {
        const newMedic = await createMedic(medic);
        return newMedic;
    } catch (error) {
        console.error('Error al crear el médico:', error);
        throw error;
    }
};

export const handleUpdateMedic = async (id: string, medic: Medic): Promise<Medic> => {
    try {
        const updatedMedic = await updateMedic(id, medic);
        return updatedMedic;
    } catch (error) {
        console.error(`Error al actualizar el médico con ID ${id}:`, error);
        throw error;
    }
};

export const handleDeleteMedic = async (id: string): Promise<void> => {
    try {
        await deleteMedic(id);
    } catch (error) {
        console.error(`Error al eliminar el médico con ID ${id}:`, error);
        throw error;
    }
};
