"use client";
import useSearchPatients from "@/hooks/useSearchPatients";
import PatientItem from "./patientItem";
import Loading from "../Loading";
import { useEffect } from "react";
import { Patient } from '@/types/Patient';


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
      {results?.map(({ id, fullName, phone, date_birth }) => (
        <PatientItem
          key={id}
          id={id}
          fullName={fullName}
          phone={phone}
          date_birth={date_birth}
        />
      ))}
    </ul>
  );
}
