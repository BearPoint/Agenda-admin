import PatientRecord from "@/components/patient/patientRecord";
import PatientSearch from "@/components/patient/patientSearch";

export default async function Paciente({ params: {id} }: { params: { id: string } }) {
  const defaultId = id ? id[0] : ''
  return (
    <div className="grid gap-3 grid-cols-[350px_1fr] grid-rows-1 h-full min-h-0 ">
      <PatientSearch />
      <PatientRecord defaultPatientId={defaultId} />
    </div>
  );
}
