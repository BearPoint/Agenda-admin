import { EmergencyContact } from './emergency_contact';

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
  emergency_contact: EmergencyContact[]
}
