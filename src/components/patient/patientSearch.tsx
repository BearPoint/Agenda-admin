"use client";
import useSearchPacients from "@/hooks/useSearchPacients";
import PatientList from "./patientList";
import debounce from "just-debounce-it";
import PatientInputSearch from "./patientInputSearch";
import { ScrollArea } from "../ui/scroll-area";

export default function PatientSearch() {
  const { results, isLoading, getPacients } = useSearchPacients({
    defaultsearch: true,
  });

  const onChangeHandler = debounce((name: string) => {
    getPacients(name);
  }, 300);

  return (
    <div className="grid grid-cols-1 grid-rows-[100px_1fr]">
      <PatientInputSearch onChangeHandler={onChangeHandler} />

      <ScrollArea className="">
        <PatientList results={results} isLoading={isLoading} />
      </ScrollArea>
    </div>
  );
}
