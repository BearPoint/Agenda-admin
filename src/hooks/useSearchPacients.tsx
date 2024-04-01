"use client";
import { useToast } from "@/components/ui/use-toast";
import { Patient } from '@/types/Pacient';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function useSearchPacients({
  defaultsearch,
}: {
  defaultsearch: boolean;
}) {
  const [results, setResults] = useState<Patient[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const { toast } = useToast();

  const fetchData = async (name: string = "") => {
    try {
      const { data, error } = await supabase
        .from("patient")
        .select("*")
        .ilike("fullname", `%${name}%`);

        setResults(data || [])
    } catch (error) {
      toast({
        title: "Error",
        description: "message",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getPacients = (name: string = "") => {
    setLoading(true);
    fetchData(name);
  };
  useEffect(() => {
    if(defaultsearch) {
      getPacients();
    }
  }, []);

  return { results, getPacients, isLoading };
}
