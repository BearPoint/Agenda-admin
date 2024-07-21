'use client'
import { columns, DataTable } from "@/components/patient/patientTable/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModalType, useModal } from "@/hooks/useModal";
import { PatientTable } from "@/types/patientTable";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function PatientPage() {
  const [patients, setPatient] = useState<PatientTable[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const supabase = createClientComponentClient()
  const {onOpen} = useModal();

  const fetchData = async () => {
    const isNumber = searchQuery.length >= 1 && !isNaN(searchQuery as any) 
    const { data } = await supabase.from('patient')
      .select('id,fullName,phone,created_at,appointment(date)')
      .ilike(isNumber ? "phone" : 'fullName', `%${searchQuery}%`)
      .order('created_at', { ascending: false})
      .limit(1, { foreignTable: 'appointment' })
    setPatient(data || [])
  } 
  useEffect(() => {
    fetchData()
  }, [searchQuery])

  const onClickNewPatient= ()=> {
    onOpen({
      type: ModalType.createPatientModal,
    })
  }
  return (
    <div className="pr-10 pl-5 py-5">
      <div className="mb-3 font-semibold text-xl flex justify-between">
        Pacientes
        <Button onClick={onClickNewPatient}>Nuevo Paciente</Button>
      </div>
      <div className="my-5">
        <Input
          type="text"
          placeholder="Buscar por nombre o telefono..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        <DataTable columns={columns} data={patients} />
      </div>
    </div>
  )
}