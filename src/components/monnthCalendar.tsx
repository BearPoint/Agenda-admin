'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import dayjs from "dayjs";
import { eventFormatter } from "@/utils/eventFormatter";
import { ModalType, useModal } from "@/hooks/useModal"
import { Appointment } from '@/types/appointment';

export default function MonthCalendar({
  events,
}: {
  events: Appointment[] | null;
}) {
  const { onOpen } = useModal();
  const doubleClickOnEventHandler = (data: EventClickArg) => {
    const { jsEvent } = data;
    if (jsEvent.detail === 2) {
      onOpen({ 
        type: ModalType.viewAppointment, 
        data: { event: data.event }
      });
    }
  };

  const doubleCLickOnCalendarHandler = (data: any) => {
    const { jsEvent } = data;
    if (jsEvent.detail === 2) {
      onOpen({
        type: ModalType.CreateAppointment,
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
          dateClick={doubleCLickOnCalendarHandler}
          eventClick={doubleClickOnEventHandler}
          initialEvents={eventFormatter(events)}
        />
      </div>
    </>
  );
}
