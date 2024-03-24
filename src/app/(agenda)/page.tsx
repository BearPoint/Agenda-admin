import MonthCalendar from "@/components/monnthCalendar";
import Uncomminglist from "@/components/uncomminglist";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  const supabase = createServerComponentClient({
    cookies,
  });


  const {data} = await supabase.from("appointment").select("*");
  return (
    <div className="px-5 grid gap-x-2 grid-cols-1 lg:grid-cols-[2fr_1fr] grid-rows-[40px_1fr] h-screen">
      <div className='col-span-2'></div>
      <MonthCalendar events={data} />
      <Uncomminglist />
    </div>
  );
}
