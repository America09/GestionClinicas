import { Medics } from './Medics';

export interface Consultorio {
    id: number;
    name: string;
    status: boolean;
    availability: boolean;
    medics: Medics[];
}
