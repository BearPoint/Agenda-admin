import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Expand from "../common/expand";
import { ScrollArea } from "../ui/scroll-area";
import PatientGeneralInformation from './patientGeneralInformation';
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

export default function PatientRecord({defaultPatientId}: {defaultPatientId?: string}) {
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const idPatient = usePatientStore((state) => state.idPatient)
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const { data, error } = await supabase
        .from("patient")
        .select("*, emergency_contact(*)")
        .eq("id", id);
      setPatient(data ? data[0] : {});
    };
    const patientId= idPatient || defaultPatientId;
    if(patientId) {
      fetchData(patientId);
    }
  }, [idPatient]);

  if(idPatient === '' && !defaultPatientId  ){
    return <div>Elige un paciente</div>
  }

  if (!patient || !patient[0]) {
    return <div>Error Patient not found</div>
  }

  return (
    <ScrollArea className="px-4">
      <Expand title={"Informacion General"} defaultPosition={true}>
        <PatientGeneralInformation information={patient}/>
      </Expand>
      <Expand title={"Informacion General"}>
        <pre>{JSON.stringify(patient, undefined, 2)}</pre>
      </Expand>
      <Expand title={"Informacion General"}>
        <pre>{JSON.stringify(patient, undefined, 2)}</pre>
      </Expand>
      <Expand title={"Informacion General"}>
        <pre>{JSON.stringify(patient, undefined, 2)}</pre>
      </Expand>
      <Expand title={"Informacion General"}>
        <pre>{JSON.stringify(patient, undefined, 2)}</pre>
      </Expand>
    </ScrollArea>
  );
}
