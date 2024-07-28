import { getHorarios, getHorarioById, createHorario, updateHorario, deleteHorario } from '../Services/HorarioService';
import { Horario, CreateHorarioDto, UpdateHorarioDto } from '../Types/Horario';

export const handleGetHorarios = async (): Promise<Horario[]> => {
    try {
        const horarios = await getHorarios();
        return horarios;
    } catch (error) {
        console.error('Error al obtener los horarios:', error);
        throw error;
    }
};

export const handleGetHorarioById = async (id: number): Promise<Horario> => {
    try {
        const horario = await getHorarioById(id);
        return horario;
    } catch (error) {
        console.error(`Error al obtener el horario con ID ${id}:`, error);
        throw error;
    }
};

export const handleCreateHorario = async (horario: CreateHorarioDto): Promise<void> => {
    try {
        await createHorario(horario);
    } catch (error) {
        console.error('Error al crear el horario:', error);
        throw error;
    }
};

export const handleUpdateHorario = async (id: number, horario: UpdateHorarioDto): Promise<void> => {
    try {
        await updateHorario(id, horario);
    } catch (error) {
        console.error(`Error al actualizar el horario con ID ${id}:`, error);
        throw error;
    }
};

export const handleDeleteHorario = async (id: number): Promise<void> => {
    try {
        await deleteHorario(id);
    } catch (error) {
        console.error(`Error al eliminar el horario con ID ${id}:`, error);
        throw error;
    }
};
