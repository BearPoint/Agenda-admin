import MonthCalendar from "@/components/monnthCalendar";
import "./../globals.css";
import Uncomminglist from "@/components/uncomminglist";

export default function Home() {
  return (
    <div className='px-5 h-[100%_important]'>
      <div className='mb-3 p-3 bg-white'> nav</div>
      <div className="grid gap-2 grid-cols-[2fr_1fr]">
        <MonthCalendar />
        <Uncomminglist />
      </div>
    </div>
  );
}
