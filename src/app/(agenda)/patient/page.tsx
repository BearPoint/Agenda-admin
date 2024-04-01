import PatientRecord from "@/components/patient/patientRecrod";
import PatientSearch from "@/components/patient/patientSearch";

export default function Paciente() {
  return (
    <div className="grid gap-3 grid-cols-[350px_1fr] grid-rows-1 h-full min-h-0 ">
      <PatientSearch />
      <PatientRecord />
    </div>
  );
}
