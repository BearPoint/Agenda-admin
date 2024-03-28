import { Patient } from "./Pacient.d";
export interface AppointmentInputs {
  name: string;
  dateOfBirth: string;
  telefono: string;
  notas: string;
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
