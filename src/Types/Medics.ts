import { User } from './User';
import { Horario } from './Horario';
import { Appointments } from './Appointments';
import { Consultorio } from './Consultorio';

export interface Medic {
    id: number;
    name: string;
    status: boolean;
    availability: boolean;
    medics: Medics[];
    professionalId: string;
    school: string;
    yearExperience: number;
    year: number;
    month: number;
    day: number;
    userId: number;
    consultorioId: number;
}
