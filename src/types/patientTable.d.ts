import { Image } from 'next/image';
export interface PatientTable {
  id: string;
  fullName: string,
  phone: string,
  appointment:{
    date: string
  }[]
}
