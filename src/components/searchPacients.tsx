import useSearchPacients from "@/hooks/useSearchPacients";
import Image from "next/image";
import debounce from "just-debounce-it";
import { Patient } from "@/types/Pacient";
import SearchPacientsList from "./searchPacientList";
import { SetStateAction, useState } from "react";
import SearchPacientsItem from "./searchPatientItem";

export default function SearchPacients({
  onSelectedPatient,
}: {
  onSelectedPatient: (patient: Patient | null) => void;
}) {
  const { results, getPacients, isLoading, setResults } = useSearchPacients();
  const [selectedPatient, setPatient] = useState<Patient | null>({} as Patient);
  const onChangeHandler = debounce((name: string) => {
    getPacients(name);
  }, 300);

  const onFocushandler = (e: any) => {
    if (e.target.value === "" && results.length === 0) {
      getPacients();
    }
  };
  const onClickHandler = (patient: Patient) => {
    setPatient(patient);
    onSelectedPatient(patient);
    setResults([]);
  };

  const removeHandler = () => {
    setPatient(null);
    onSelectedPatient(null)
  };
  return (
    <div className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      {selectedPatient?.id ? (
        <SearchPacientsItem
          patient={selectedPatient}
          removeButton={true}
          removeHandler={removeHandler}
        />
      ) : (
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image
              src={`/icons/user-doctor.svg`}
              alt={`icon user-doctor`}
              width={12}
              height={12}
              className="mr-2"
            />
          </div>
          <input
            type="text"
            id="simple-search"
            onChange={(e) => onChangeHandler(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar paciente..."
            autoComplete="off"
            onFocus={onFocushandler}
          />
          {isLoading ? (
            <div className="absolute top-12 bg-white w-full z-50 rounded p-2 border border-slate-700/10 text-center">
              Loading...
            </div>
          ) : results.length ? (
            <SearchPacientsList
              patients={results}
              onClickHandler={onClickHandler}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
