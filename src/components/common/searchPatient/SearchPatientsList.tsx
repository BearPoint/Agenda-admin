import { Patient } from "@/types/Patient";
import SearchPatientsItem from "./searchPatientItem";

export default function SearchPatientsList({
  patients,
  onClickHandler,
}: {
  patients: Patient[];
  onClickHandler: (patient: Patient) => void;
}) {
  return (
    <div className="absolute top-12 bg-white w-full z-50 rounded p-2 border border-slate-700/10 ">
      <ul className="overflow-auto h-40">
        {patients.map((patient) => (
          <li className='' key={patient.id} onClick={() => onClickHandler(patient)}>
            <SearchPatientsItem patient={patient} />
          </li>
        ))}
      </ul>
    </div>
  );
}
