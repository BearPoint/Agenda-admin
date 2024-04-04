import { Patient } from "./Patient";
export interface AppointmentInputs {
  name: string;
  dateOfBirth: string;
  phone: string;
  notes: string;
}

export interface Appointment {
  id: string;
  id_patient: string;
  id_account: string;
  type: string;
  date: string;
  notes: string;
  created_at: string;
  updated_at: string;
  patient: Patient;
}
