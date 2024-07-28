export interface Horario {
    id?: number; // Opcional ya que se generará automáticamente
    name: string;
    fecha: string;
    turno: string;
    entrada: string;
    salida: string;
}

// DTO para creación de horario
export interface CreateHorarioDto {
    name: string;
    fecha: string;
    turno: string;
    entrada: string;
    salida: string;
}

// DTO para actualización de horario
export interface UpdateHorarioDto {
    name?: string;
    fecha?: string;
    turno?: string;
    entrada?: string;
    salida?: string;
}
