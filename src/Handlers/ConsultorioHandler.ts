import { getConsultorios, getConsultorioById, createConsultorio, updateConsultorio, deleteConsultorio } from '../Services/ConsultorioService';
import { Consultorio } from '../Types/Consultorio';

export const handleGetConsultorios = async (): Promise<Consultorio[]> => {
    try {
        const consultorios = await getConsultorios();
        return consultorios;
    } catch (error) {
        console.error('Error al obtener los consultorios:', error);
        throw error;
    }
};

export const handleGetConsultorioById = async (id: string): Promise<Consultorio> => {
    try {
        const consultorio = await getConsultorioById(id);
        return consultorio;
    } catch (error) {
        console.error(`Error al obtener el consultorio con ID ${id}:`, error);
        throw error;
    }
};

export const handleCreateConsultorio = async (consultorio: Consultorio): Promise<Consultorio> => {
    try {
        const newConsultorio = await createConsultorio(consultorio);
        return newConsultorio;
    } catch (error) {
        console.error('Error al crear el consultorio:', error);
        throw error;
    }
};

export const handleUpdateConsultorio = async (id: string, consultorio: Consultorio): Promise<Consultorio> => {
    try {
        const updatedConsultorio = await updateConsultorio(id, consultorio);
        return updatedConsultorio;
    } catch (error) {
        console.error(`Error al actualizar el consultorio con ID ${id}:`, error);
        throw error;
    }
};

export const handleDeleteConsultorio = async (id: string): Promise<void> => {
    try {
        await deleteConsultorio(id);
    } catch (error) {
        console.error(`Error al eliminar el consultorio con ID ${id}:`, error);
        throw error;
    }
};

// Exportando getConsultorios adicionalmente para que pueda ser utilizado en otros lugares
export { getConsultorios };
