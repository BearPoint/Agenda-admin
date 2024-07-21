import { Patient } from "@/types/Patient";
import Image from "next/image";

export default function PatientProfile({ patient }: { patient: Patient | undefined }) {
  return (
    <div className="flex w-full">
      <div className="w-20 h-20 relative">
        <Image alt="profile" src={'https://placehold.co/100x100.png'} fill className="rounded-full " />
      </div>
      <div className="ml-4">
        <div className="font-bold text-xl">{patient?.fullName}</div>
        <div className="text-gray-600 text-sm">
          Telefono: {patient?.phone}
        </div>
        <div className="text-gray-600 text-sm">
          Fecha de Naciemneto: {patient?.date_birth}</div>
        <div className="text-gray-600 text-sm">
          Sexo: {patient?.gender}</div>
      </div>
    </div>
  )
}