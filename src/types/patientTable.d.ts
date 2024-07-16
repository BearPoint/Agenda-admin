import { Image } from 'next/image';
export interface PatientTable {
  fullName: string,
  phone: string,
  appointment:{
    date: string
  }[]
}
