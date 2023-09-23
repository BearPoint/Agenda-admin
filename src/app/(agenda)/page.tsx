import MonthCalendar from "@/components/monnthCalendar";
import "./../globals.css";
import Uncomminglist from "@/components/uncomminglist";

export default function Home() {
  return (
    <div className="px-5 grid gap-x-2 grid-cols-1 lg:grid-cols-[2fr_1fr] lg:grid-rows-[90px_1fr] h-screen">
      <div className="rounded-lg my-5 bg-white lg:col-span-2"> nav</div>
      <MonthCalendar />
      <Uncomminglist />
    </div>
  );
}
