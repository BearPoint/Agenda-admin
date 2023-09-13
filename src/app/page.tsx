import MonthCalendar from "@/components/monnthCalendar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-dashboard-layout h-screen">
      <Sidebar />
      <div className='h-screen px-4'>
        <nav className='h-[10%]'>navbar</nav>
        <div className='h-[90%]'>
          <MonthCalendar />
        </div>
      </div>
    </div>
  );
}
