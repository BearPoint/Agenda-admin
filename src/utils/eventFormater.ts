import { Appointment } from "@/types/appointment";
import { Tables } from '@/types/database.types';
import { EventApi } from '@fullcalendar/core/index.js';
import dayjs from "dayjs";

export function eventFormater(events: Array<Tables<'cita'>> | null){
  if (!events) return []
  return events.map((event) => ({
    title: event.nombre ?? 'test',
    allDay: false,
    start: dayjs(event.date).format('YYYY-MM-DDTHH:mm:ssZ'),
    extendedProps: {
      ...event
    }
  }));
}
