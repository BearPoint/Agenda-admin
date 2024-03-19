"use client";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import SchedulerComponent from "smart-webcomponents-react/scheduler";
import "smart-webcomponents-react/source/styles/smart.default.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Tables } from "@/types/tables";
import { EventScheschuld } from '@/types/eventScheshuld';

interface Props {
  defaultDate: Dayjs;
  onChange: (value?: EventScheschuld) => void;
}

export default function Scheduler({ defaultDate, onChange }: Props) {
  const [dayCalendar, setDayCalendar] = useState<Dayjs>(defaultDate);
  const [events, setEvents] = useState<Tables<"cita">[]>([]);
  const supabase = createClientComponentClient();

  useEffect(() => {
    if (!defaultDate) return;
    const fetchEvents = async () => {
      const { data: events } = await supabase
        .from("cita")
        .select("*")
        .order("date", { ascending: true });
      setEvents(events || []);
      console.log(EventFormat(events || []))
      console.log(events);
    };
    fetchEvents()
  }, [defaultDate, supabase]);
  return (
    <div className='overflow-auto'>
      {/* <SchedulerComponent
      view="week"
      views={[
        "day",
        "week"
      ]}
      weekdayFormat="narrow"
      dataSource={EventFormat(events)}
      min={dayjs().toString()}
      hourStart={6}
      hourEnd={22}
      onItemInsert={(event: any)=>onChange(event.detail.item)}
    /> */}
    </div>
    
  );
}
const EventFormat = (events: Tables<"cita">[]) =>
  events.map((event) => ({
    label: event.nombre,
    dateStart: dayjs(event.date).toString(),
    dateEnd: dayjs(event.date).add(1, "hour").toDate(),
  }));