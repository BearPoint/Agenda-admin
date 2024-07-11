import PatientList from "./patientList";
import PatientInputSearch from "./patientInputSearch";
import { ScrollArea } from "../ui/scroll-area";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default  async function PatientSearch({query = ''}: any) {
  const supabase = await createServerComponentClient({cookies})
  console.log(query)
  const {data:patients, error} = await supabase.from('patient').select('*').ilike("fullName", `%${query}%`);

  return (
    <div className="grid grid-cols-1 grid-rows-[100px_1fr] border-r-2 px-3 shadow bg-white">
      <PatientInputSearch/>

      <ScrollArea className="">
        <PatientList results={patients || []} isLoading={false} />
      </ScrollArea>
    </div>
  );
}
