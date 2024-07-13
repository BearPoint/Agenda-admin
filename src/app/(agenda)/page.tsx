
import MonthCalendar from "@/components/monnthCalendar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SearchPatients from "@/components/searchPatients";
import DashboardSearchPatient from "@/components/dashboardSearchPatient";

export default async function Home() {
  const supabase = createServerComponentClient({
    cookies,
  });

  const { data } = await supabase.from("appointment").select(`*, patient(*)`);

  const onSelectedPatient = (patient: any) => {
    console.log(patient);
  };

  return (
    <div className="flex flex-col mx-5">
      <div className="grid grid-cols-[1fr_200px] my-5 ">
      <DashboardSearchPatient/>
        <div className="ml-3 flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-primary text-white py-1 px-3 w-full h-[42px]">Crear Nueva Cita</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex-1">
        <MonthCalendar events={data} />
      </div>
    </div>
    // <div className="grid gap-3 grid-cols-1 lg:grid-cols-[2fr_1fr]  grid-rows-1 h-full">
    //   <Uncomminglist />
    // </div>
  );
}
