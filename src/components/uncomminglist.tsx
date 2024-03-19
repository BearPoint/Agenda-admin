import { Tables } from "@/types/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Uncomminglist() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect("/login");

  const { data: events } = await supabase
    .from("cita")
    .select("*, paciente (*)")
    .gt("date", `${dayjs().format("YYYY-MM-DD")}`)
    .lt("date", `${dayjs().add(4, "days").format("YYYY-MM-DD")}`)
    .order("date", { ascending: true });
  return (
    <div className="rounded-lg bg-white p-5 container grid grid-rows-[50px_1fr] grid-cols-1">
      <h2 className="font-normal text-[28px]">Eventos proximos</h2>
      <ul className="overflow-y-auto py-3 px-1">
        {events?.map((item, index) => (
          <>
            {!dayjs(events[index - 1]?.date || dayjs().subtract(1,'days')).isSame(
              item.date,
              "day"
            ) ? (
              <div className="text-lg">
                <div>{dayjs(item.date).format("DD dddd MMMM")}</div>
                <hr />
              </div>
            ) : null}
            <li key={index} className="flex hover:text-zinc-700/50">
              <div className="text-5xl   my-auto mr-2">
                {dayjs(item.date).format("HH")}
              </div>
              <div className="bg-green-300 w-full rounded-xl h-24 my-2 p-2 text-zinc-950">
                Citas con {item.paciente.nombre}
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
