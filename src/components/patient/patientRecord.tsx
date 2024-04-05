"use client";

import { usePatientStore } from "@/hooks/usePatientStore";
import { Patient } from "@/types/Patient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Expand from "../common/expand";
import { ScrollArea } from "../ui/scroll-area";
import PatientGeneralInformation from './patientGeneralInformation';

export default function PatientRecord() {
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const idPatient = usePatientStore((state) => state.idPatient);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("patient")
        .select("*, emergency_contact(*)")
        .eq("id", idPatient);
      setPatient(data ? data[0] : {});
    };
    if (idPatient != "") {
      fetchData();
    }
  }, [idPatient]);

  if(idPatient === '' ){
    return <div>elige un paciente</div>
  }

  return (
    <ScrollArea className="px-4">
      <Expand title={"Informacion General"} defaultPosition={false}>
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
