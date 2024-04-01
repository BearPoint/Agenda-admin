"use client";
import useSearchPacients from "@/hooks/useSearchPacients";
import PatientItem from "./patientItem";
import Loading from "../Loading";
import { useEffect } from "react";
import { Patient } from '@/types/Pacient';


interface Props {
  isLoading: boolean;
  results: Patient[]
}

export default function PatientList({isLoading, results}: Props) {
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul>
      {results?.map(({ id, fullname, telefone, date_brith }) => (
        <PatientItem
          key={id}
          id={id}
          fullname={fullname}
          telefone={telefone}
          date_brith={date_brith}
        />
      ))}
    </ul>
  );
}
