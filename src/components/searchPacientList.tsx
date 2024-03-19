import SearchPacientsItem from "./searchPatientItem";
import { Tables } from '@/types/database.types';

export default function SearchPacientsList({
  patients,
  onClickHandler,
}: {
  patients:Tables<'cita'>[];
  onClickHandler: (patient: Tables<'cita'>) => void;
}) {
  return (
    <div className="absolute top-12 bg-white w-full z-50 rounded p-2 border border-slate-700/10 ">
      <ul className="overflow-auto h-40">
        {patients.map((patient) => (
          <li className='' key={patient.id} onClick={() => onClickHandler(patient)}>
            <SearchPacientsItem patient={patient} />
          </li>
        ))}
      </ul>
    </div>
  );
}
