"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg, EventApi } from "@fullcalendar/core";
import EventModal from "./eventModal";
import { CreateEventModal } from "./createEventModal";
import dayjs, { Dayjs } from "dayjs";
import { Appointment } from "@/types/appointment";
import { eventFormater } from "@/utils/eventFormater";
import { Tables } from '@/types/database.types';

export default function MonthCalendar({
  eventes,
}: {
  eventes: Array<Tables['cita']>;
}) {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [displayCreateEventModal, setDisplayCreateEventModal] =
    useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventApi>({} as EventApi);
  const [seletedDay, setSelectedDay] = useState<Dayjs>(dayjs());
  console.log(eventFormater(eventes))
  const dobleClickOnEventHandler = (data: EventClickArg) => {
    const { jsEvent } = data;
    if (jsEvent.detail === 2) {
      setSelectedEvent(data.event);
      setDisplayModal(true);
    }
  };

  const dobleCLickOnCalendarHandler = (data: any) => {
    const { jsEvent } = data;
    if (jsEvent.detail === 2) {
      setDisplayCreateEventModal(true);
      setSelectedDay(dayjs(data.date));
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
          initialEvents={eventFormater(eventes)}
        />
      </div>
      <EventModal
        event={selectedEvent}
        displayModal={displayModal}
        closeHandler={() => setDisplayModal(false)}
      />
      {displayCreateEventModal ? (
        <CreateEventModal
          selectedDate={seletedDay}
          displayModal={displayCreateEventModal}
          onClose={() => setDisplayCreateEventModal(false)}
          onSubmit={() => console.log("test")}
        />
      ) : null}
    </>
  );
}
