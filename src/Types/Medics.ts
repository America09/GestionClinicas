import { Consultorio } from './Consultorio';
import { Horario } from './Horario';

export interface Medic {
    id: number;
    professionalId: string;
    school: string;
    yearExperience: number;
    dateGraduate: string; // Consider using a proper date type or formatter
    availability: boolean;
    userId: number;
    userName: string;
    consultorioId: number;
    consultorioName: string;
    horarioId: number;
    horarioName: string;
}
