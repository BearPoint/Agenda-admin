import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Expand from "../common/expand";
import { ScrollArea } from "../ui/scroll-area";
import PatientGeneralInformation from './patientGeneralInformation';
import { cookies } from "next/headers";

export default async function PatientRecord({ patientId }: { patientId: string | undefined }) {

  const supabase = await createServerComponentClient({ cookies });
  const { data: patient, error } = await supabase.from('patient').select('*, emergency_contact(*)').eq('id', patientId);

  if (!patientId) {
    return <div>elige un paciente</div>
  }

  if (!patient || !patient[0]) {
    return <div>Error Patient not found</div>
  }

  return (
    <ScrollArea className="px-4">
      <Expand title={"Informacion General"} defaultPosition={false}>
        <PatientGeneralInformation information={patient[0]} />
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
