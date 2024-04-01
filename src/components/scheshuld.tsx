"use client";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Tables } from "@/types/tables";
import { EventScheschuld } from "@/types/eventScheshuld";
import FullCalendar from "@fullcalendar/react";
import { Appointment } from "@/types/appointment";

interface Props {
  defaultDate: Dayjs;
  onChange: (value?: EventScheschuld) => void;
}

export default function Scheduler({ defaultDate, onChange }: Props) {
  const [dayCalendar, setDayCalendar] = useState<Dayjs>(defaultDate);
  const [events, setEvents] = useState<
    { title: string; dateStar: string; dateEnd: string }[] | undefined
  >([]);
  const supabase = createClientComponentClient();

  useEffect(() => {
    if (!defaultDate) return;
    const fetchEvents = async () => {
      const { data: events } = await supabase
        .from("appointment")
        .select("*, patient(*)");

      setEvents(EventFormat(events || []))
    };
    fetchEvents();
  }, [defaultDate, supabase]);

  return (
    <div className="overflow-auto">
      <FullCalendar
        height={'100%'}
        slotMinTime={'05:00:00'}
        plugins={[resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        dateClick={(e)=>console.log(e)}
        editable={true}
        allDaySlot={false}
        duration={{days: 2}}
        schedulerLicenseKey="XXXXXXXXXX-XXX-XXXXXXXXXX"
        events={events}
      />
    </div>
  );
}
const EventFormat: (e: Appointment[]) => any[] = (events: Appointment[]) =>
  events.map((event) => ({
    title: event.patient.fullName,
    dateStart: dayjs(event.date).toString(),
    dateEnd: dayjs(event.date).add(1, "hour").toDate(),
  }));
