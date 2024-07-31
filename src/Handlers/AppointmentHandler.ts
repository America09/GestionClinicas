import { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } from '../Services/AppointmentService';
import { Appointment } from '../Types/Appointment';

export const handleGetAppointments = async (): Promise<Appointment[]> => {
    try {
        const appointments = await getAppointments();
        return appointments;
    } catch (error) {
        console.error('Error al obtener las citas:', error);
        throw error;
    }
};

export const handleGetAppointmentById = async (id: string): Promise<Appointment> => {
    try {
        const appointment = await getAppointmentById(id);
        return appointment;
    } catch (error) {
        console.error(`Error al obtener la cita con ID ${id}:`, error);
        throw error;
    }
};

export const handleCreateAppointment = async (appointment: Appointment): Promise<Appointment> => {
    try {
        const newAppointment = await createAppointment(appointment);
        return newAppointment;
    } catch (error) {
        console.error('Error al crear la cita:', error);
        throw error;
    }
};

export const handleUpdateAppointment = async (id: string, appointment: Appointment): Promise<Appointment> => {
    try {
        const updatedAppointment = await updateAppointment(id, appointment);
        return updatedAppointment;
    } catch (error) {
        console.error(`Error al actualizar la cita con ID ${id}:`, error);
        throw error;
    }
};

export const handleDeleteAppointment = async (id: string): Promise<void> => {
    try {
        await deleteAppointment(id);
    } catch (error) {
        console.error(`Error al eliminar la cita con ID ${id}:`, error);
        throw error;
    }
};
