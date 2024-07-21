'use client'
import { columns, DataTable } from "@/components/patient/patientTable/table";
import { Input } from "@/components/ui/input";
import { PatientTable } from "@/types/patientTable";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function PatientPage() {
  const [patients, setPatient] = useState<PatientTable[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const supabase = createClientComponentClient()

  const fetchData = async () => {
    const isNumber = searchQuery.length >= 1 && !isNaN(searchQuery as any) 
    const { data } = await supabase.from('patient')
      .select('id,fullName,phone, appointment(date)')
      .ilike(isNumber ? "phone" : 'fullName', `%${searchQuery}%`)
      .order('date', { ascending: false, foreignTable: 'appointment' })
      .limit(1, { foreignTable: 'appointment' })
    setPatient(data || [])
  } 
  useEffect(() => {
    fetchData()
  }, [searchQuery])


  return (
    <div className="pr-10 pl-5 py-5">
      <div className="mb-3 font-semibold text-xl">Pacientes</div>
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