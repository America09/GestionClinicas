import { Medics } from './Medics';
import { Specialty } from './Specialty';

export interface Appointment {
    id: number;
    reason: string;
    patientId?: number;
    patientName?: string;
    medicId: number;
    medicName: string;
    nombre: string;
    apellido: string;
    genero: string;
    correo: string;
    numeroTelefono: string;
    estado: string;
    codigoPostal: string;
    specialtyId: number;
    specialtyName: string;
    fechaCita: string; // Formato 'yyyy-MM-dd'
}
