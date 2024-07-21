import { EmergencyContact } from './emergency_contact';

export interface NewPatient {
  fullName: string;
  date_birth: string;
  allergy: string;
  email: string;
  phone: string;
  gender: 'Mujer' | 'Hombre' | 'otro' | '';
}

export interface Patient {
  id: string;
  id_patient: string
  id_account: string
  fullName: string;
  date_birth: string;
  avatar_url: string;
  medical_history: string;
  medicine: string;
  allergy: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  religion: string,
  place_birth: string,
  scholarship: string,
  marital_status: string,
  emergency_contact: EmergencyContact[],
  family_background: Family_background,
  pathological_history: PathologicalBackground
  non_pathological_history: NonPathologicalBackground
}

type Family_background = {
  cancer: string,
  diabetes: string,
  trombosis: string,
  hipertension: string
}
type PathologicalBackground = {
  trombosis: string,
  medicamentos: string ,
  tromoflebitis: string ,
  hipotiroidismo: string ,
  hipertiroidismo: string ,
  'hipertencion arterial': string ,
  'incontingencia urinarias': string ,
  'manifestaciones urinarias': string 
}
type NonPathologicalBackground = {
  drogas: string,
  tabaquismo: string,
  "bebidas alcoholicas":string
}