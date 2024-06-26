import { Appointment } from "@/types/appointment";
import { EventApi } from '@fullcalendar/core/index.js';
import dayjs from "dayjs";

export function eventFormatter(events: Appointment[] | null){
  if (!events) return []
  return events.map((event) => ({
    title: event.patient.fullName,
    allDay: false,
    start: dayjs(event.date).format('YYYY-MM-DDTHH:mm:ssZ'),
    extendedProps: {
      ...event
    }
  }));
}
