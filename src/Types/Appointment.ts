export interface Appointment {
    id: number;
    reason: string;
    medicId: number;
    medicName?: string;
    patientName?: string;
    specialtyId: number;
    fechaCita: string;
    descripcion: string;
}
