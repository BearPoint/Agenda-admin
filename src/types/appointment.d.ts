import { Patient } from './Pacient.d';

export interface Appointment {
  id: String 
  nombre: String 
  pacienteId: String
  paciente: Patient
  tipo: string
  date: string
  notas: string
}

export interface AppointmentInputs {
  name: string;
  dateOfBirth: string;
  telefono: string;
  notas: string;
};