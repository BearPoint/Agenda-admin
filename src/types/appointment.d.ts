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
