export interface Appointment {
    id: number;
    reason: string;
    patientId?: number;
    patientName?: string;
    medicId: number;
    medicName: string;
    nombre?: string;
    apellido?: string;
    genero?: string;
    correo?: string;
    numeroTelefono?: string;
    estado?: string;
    codigoPostal?: string;
    specialtyId: number;
    specialtyName: string;
    fechaCita: string;
}
export interface CreateAppointment {
    reason: string;
    medicId: number;
    nombre?: string;
    apellido?: string;
    genero?: string;
    correo?: string;
    numeroTelefono?: string;
    estado?: string;
    codigoPostal?: string;
    specialtyId: number;
    fechaCita: string;
}
