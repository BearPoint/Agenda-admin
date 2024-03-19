import { Tables } from "@/types/tables";
import dayjs, { Dayjs } from "dayjs";
import { memo } from "react";
import Scheduler from "smart-webcomponents-react/scheduler";
import "smart-webcomponents-react/source/styles/smart.default.css";
const HoraCero = dayjs("2010-01-01T00:00:00");

function HourPicker({
  currentDate,
  onChange,
  events,
  onSelectEvent
}: {
  events: Tables<"cita">[];
  currentDate: Dayjs;
  onChange: (date: Event) => void;
  onSelectEvent: (event?: Event)=> void;
}) {
  return (
    <Scheduler
      view="week"
      views={[
        "day",
        "week"
      ]}
      weekdayFormat="narrow"
      dataSource={EventFormat(events)}
      min={dayjs().toString()}
      hourStart={5}
      hourEnd={22}
      onItemInsert={onSelectEvent}
      onCreate={(event)=> console.log(event)}
    />
  );
}
const EventFormat = (events: Tables<"cita">[]) =>
  events.map((event) => ({
    label: event.nombre,
    dateStart: dayjs(event.date).toDate(),
    dateEnd: dayjs(event.date).add(1, "hour").toDate(),
  }));

export default memo(HourPicker);
