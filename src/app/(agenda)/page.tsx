import MonthCalendar from "@/components/monnthCalendar";
import Uncomminglist from "@/components/uncomminglist";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {data} = await supabase.from("appointment").select(`*, patient(*)`);
  
  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-[2fr_1fr]  grid-rows-1 h-full">
      <MonthCalendar events={data} />
      <Uncomminglist />
    </div>
  );
}
