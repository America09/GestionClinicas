import { createEspecialidad, deleteEspecialidad, getEspecialidadById, getEspecialidades, updateEspecialidad } from "../Services/EspecialidadService";
import { Especialidad } from "../Types/Especialidad";

export const handleGetEspecialidades = async (): Promise<Especialidad[]> => {
    try {
        const especialidades = await getEspecialidades();
        return especialidades;
    } catch (error) {
        console.error('Error al obtener las especialidades:', error);
        throw error;
    }
};

export const handleGetEspecialidadById = async (id: string): Promise<Especialidad> => {
    try {
        const especialidad = await getEspecialidadById(id);
        return especialidad;
    } catch (error) {
        console.error(`Error al obtener la especialidad con ID ${id}:`, error);
        throw error;
    }
};

export const handleCreateEspecialidad = async (especialidad: Especialidad): Promise<Especialidad> => {
    try {
        const newEspecialidad = await createEspecialidad(especialidad);
        return newEspecialidad;
    } catch (error) {
        console.error('Error al crear la especialidad:', error);
        throw error;
    }
};

export const handleUpdateEspecialidad = async (id: string, especialidad: Especialidad): Promise<Especialidad> => {
    try {
        const updatedEspecialidad = await updateEspecialidad(id, especialidad);
        return updatedEspecialidad;
    } catch (error) {
        console.error(`Error al actualizar la especialidad con ID ${id}:`, error);
        throw error;
    }
};

export const handleDeleteEspecialidad = async (id: string): Promise<void> => {
    try {
        await deleteEspecialidad(id);
    } catch (error) {
        console.error(`Error al eliminar la especialidad con ID ${id}:`, error);
        throw error;
    }
};
