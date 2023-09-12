import MonthCalendar from "@/components/monnthCalendar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-dashboard-layout h-screen">
      <Sidebar />
      <div className='bg-red-500'>
        <MonthCalendar />
      </div>
    </div>
  );
}
