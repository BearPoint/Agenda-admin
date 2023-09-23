"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function MonthCalendar() {
  return (
    <div className="rounded-lg bg-white p-5 h-auto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        themeSystem="standard"
        fixedWeekCount={false}
        locale={"es"}
        nowIndicatorClassNames={'bg-black'}
        events={[
          {
            title: "juenta con juan",
            date: new Date('Wed Sep 20 2023 17:33:01'),
            end: new Date("Wed Sep 20 2023 18:33:01"),
            allDay: false
          },
          { title: "event 2", date: "2019-04-02" },
        ]}
      />
    </div>
  );
}
