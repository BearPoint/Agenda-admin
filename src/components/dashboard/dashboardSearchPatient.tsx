'use client'

import { useRouter } from "next/navigation";
import SearchPatients from "@/components/common/searchPatient/searchPatients"
import { Patient } from "@/types/Patient";
import { ModalType, useModal } from "@/hooks/useModal";

export default function DashboardSearchPatient() {
  const router = useRouter()
  const {onOpen} = useModal()
  const onSelectedPatient = (patient: Patient | null) => {
    if(!patient) return;
    onOpen({
      type: ModalType.previewPatientModal,
      data: { patient },
    });
    //router.push(`/patient/${patient.id}`)
  };
  return (
    <div className="w-full">
      <SearchPatients onSelectedPatient={onSelectedPatient}/>
    </div>
  )
} 