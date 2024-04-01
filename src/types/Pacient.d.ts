import { EmergencyContact } from './emergency_contact';

export interface Patient {
  id: string;
  id_patient: string
  id_account: string
  fullname: string;
  date_brith: string;
  avatar_url: string;
  medical_history: string;
  medicin: string;
  allergy: string;
  email: string;
  telefone: string;
  gender: string;
  address: string;
  estado_civil: string,
  religion: string,
  place_brith: string,
  scholarship: string,
  marital_status: string,
  emergency_contact: EmergencyContact[]
}
