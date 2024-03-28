'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import dayjs from "dayjs";
import { eventFormater } from "@/utils/eventFormater";
import { ModalType, useModal } from "@/hooks/useModal";
import { Tables } from '@/types/tables';
import { Appointment } from '@/types/appointment';

export default function MonthCalendar({
  events,
}: {
  events: Appointment[] | null;
}) {
  const { onOpen } = useModal();
  console.log(events)
  const dobleClickOnEventHandler = (data: EventClickArg) => {
    const { jsEvent } = data;
    if (jsEvent.detail === 2) {
      onOpen({ 
        type: ModalType.viewAppoiment, 
        data: { event: data.event }
      });
    }
  };

  const dobleCLickOnCalendarHandler = (data: any) => {
    const { jsEvent } = data;
    if (jsEvent.detail === 2) {
      console.log(data.date)
      onOpen({
        type: ModalType.CreateAppoiment,
        data: { eventDay: dayjs(data.date) },
      });
    }
  };
  return (
    <>
      <div className="rounded-lg bg-white p-5 relative">
        <FullCalendar
          height={"100%"}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          fixedWeekCount={false}
          locale={"es"}
          editable={true}
          eventDrop={(e) =>
            console.log({ old: e.oldEvent.start, new: e.event.start })
          }
          dayMaxEvents={2}
          dateClick={dobleCLickOnCalendarHandler}
          eventClick={dobleClickOnEventHandler}
          initialEvents={eventFormater(events)}
        />
      </div>
    </>
  );
}
