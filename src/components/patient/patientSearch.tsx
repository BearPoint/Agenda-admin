"use client";
import useSearchPatients from "@/hooks/useSearchPatients";
import PatientList from "./patientList";
import debounce from "just-debounce-it";
import PatientInputSearch from "./patientInputSearch";
import { ScrollArea } from "../ui/scroll-area";
import { usePatientStore } from "@/hooks/usePatientStore";
import { useEffect } from "react";

export default function PatientSearch() {
  const { results, isLoading, getPatients } = useSearchPatients({
    defaultSearch: true,
  });
  const updatePatientState = usePatientStore((state) => state.updateIdPatient);

  useEffect(() => () => updatePatientState(""), []);
  const onChangeHandler = debounce((name: string) => {
    getPatients(name);
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
