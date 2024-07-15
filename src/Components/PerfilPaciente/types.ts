export interface Patient {
  id: string;
  fullName: string;
  nickName?: string;
  email: string;
  gender?: string;
  language?: string;
  country?: string;
  timeZone?: string;
  profilePictureUrl?: string;
  medicalHistory: MedicalHistory;
}

export interface MedicalHistory {
  name: string;
  surname: string;
  address: string;
  gender: string;
  email: string;
  phone: string;
  state: string;
  postalCode: string;
  smoke: string;
  drinkAlcohol: string;
  drinkCoffee: string;
  isAllergic: string;
  allergies: string;
  takesMedication: string;
  medication: string;
  medicalHistory: string;
}
