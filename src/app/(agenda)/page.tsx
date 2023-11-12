import MonthCalendar from "@/components/monnthCalendar";
import "./../globals.css";
import Uncomminglist from "@/components/uncomminglist";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { Database, DbResult, Tables } from "../../types/database.types";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect('/login')
  
  const { data } = await supabase.from("cita").select();

  return (
    <div className="px-5 grid gap-x-2 grid-cols-1 grid-rows-[90px_100%_1fr] lg:grid-cols-[2fr_1fr] lg:grid-rows-1 h-screen">
      <MonthCalendar eventes={data} />
      <Uncomminglist />
    </div>
  );
}
