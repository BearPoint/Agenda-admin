import { Image } from 'next/image';
export interface PatientTable {
  id: string;
  fullName: string,
  phone: string,
  created_at: string,
  appointment:{
    date: string
  }[]
}
