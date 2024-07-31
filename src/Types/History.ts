export interface History {
    name: string,
  surname: string,
  address: string,
  gender: string,
  email: string,
  phone: string,
  state: string,
  postalCode: string,
  smoke: string,
  alcohol: string,
  coffee: string,
  allergic: string,
  allergies: string,
  takesMedication: string,
  medication: string,
  medicalHistory: string,
  patientId: number
  }
  
  export type FormData = Omit<History, 'id'> & { id?: string };
  
  