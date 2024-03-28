import { useToast } from "@/components/ui/use-toast";
import { Database, DbResult, DbResultOk, Tables } from "@/types/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function useSearchPacients() {
  const [results, setResults] = useState<Tables<"paciente">[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const { toast } = useToast();

  const fetchData = async (name: string = "") => {
    try {
      const query = supabase.from("patient").select("*");
      const { data, error }: DbResult<typeof query> = await query;
      console.log({data,error});
      setResults(data || []);
    } catch (error) {
      console.log(error);
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

  return { results, getPacients, isLoading, setResults };
}
