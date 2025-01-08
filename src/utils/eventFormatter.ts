import { Appointment } from "@/types/appointment";
import { EventApi } from '@fullcalendar/core/index.js';
import dayjs from "dayjs";

export function eventFormatter(events: Appointment[] | null){
  if (!events) return []
  return events.map((event) => ({
    id: event.id,
    Subject: event?.patient?.name,
    StartTime: dayjs(event.date).format('YYYY-MM-DDTHH:mm:ssZ'),
    EndTime: dayjs(event.date).add(30, 'minute').format('YYYY-MM-DDTHH:mm:ssZ'),
    CategoryColor: "#ff0000",
    description: event.notes,
    extendedProps: {
      ...event
    }
  }));
}
// {
//   "Id": 1,
//   "Subject": "Explosion of Betelgeuse Star",
//   "Location": "Space Center USA",
//   "StartTime": "2021-01-10T04:00:00.000Z",
//   "EndTime": "2021-01-10T05:30:00.000Z",
//   "CategoryColor": "#1aaa55"
// },