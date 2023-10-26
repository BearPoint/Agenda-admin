import { Patient } from "@/types/Pacient";
import { useState } from "react";
export default function useSearchPacients() {
  const [results, setResults] = useState<Patient[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const fetchData = async (name?: string) => {
    setTimeout(async () => {
      const data = await fetch(`/api/pacientes?search=${name}`).then((res) =>
        res.json()
      );
      setResults(data);
      setLoading(false);
    }, 1000);
  };

  const getPacients = (name: string = "") => {
    setLoading(true);
    fetchData(name);
  };

  return { results, getPacients, isLoading, setResults};
}