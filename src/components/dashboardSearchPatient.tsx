'use client'

import { useRouter } from "next/navigation";
import SearchPatients from "./searchPatients"
import { Patient } from "@/types/Patient";

export default function DashboardSearchPatient() {
  const router = useRouter()
  const onSelectedPatient = (patient: Patient | null) => {
    if(!patient) return;
      
    router.push(`/patient/${patient.id}`)
  };
  return (
    <div className="w-full">

    <SearchPatients onSelectedPatient={onSelectedPatient}/>
    </div>
  )
} 