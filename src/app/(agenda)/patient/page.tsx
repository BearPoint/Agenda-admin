import PatientRecord from "@/components/patient/patientRecord";
import PatientSearch from "@/components/patient/patientSearch";

export default function Paciest({searchParams}: {searchParams: {query?:string, patientId?: string}}) {
  return (
    <div className="grid gap-3 grid-cols-[350px_1fr] grid-rows-1 h-full min-h-0 ">
      <PatientSearch query={searchParams.query}/>
      <PatientRecord patientId={searchParams.patientId}/>
    </div>
  );
}
