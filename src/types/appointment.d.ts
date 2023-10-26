import { Patient } from "./Pacient";

export interface Appointment {
  date: string;
  patient: Patient | null;
  title: string;
  duration: number;
  notes: string
}
