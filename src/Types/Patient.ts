export interface Patient {
    occupation: string,
  picture: string,
  phone: string,
  bloodGroup: string,
  maritalStatus: string,
  address: string,
  gender: string,
  userId: number
}
export interface UserPatient{
    username:string,
    email:string,
    password:string,
    role:number
}

// export interface PatientWithUser extends Patient, UserPatient {
// }
