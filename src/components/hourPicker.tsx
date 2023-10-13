import dayjs from "dayjs";
import { useState } from "react";

const HoraCero = dayjs("2010-01-01T00:00:00");

export default function HourPicker() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  return (
    <div className="grid grid-cols-[85px_1fr_1fr_1fr] mb-4">
      <div className="border-slate-800/25 border-x-2 ">
        <div className="text-center">horas</div>
        {Array(24)
          .fill(0)
          .map((_value, index) => (
            <div
              key={index}
              className="pr-1 py-1 border-slate-800/25 border-b-2 text-right h-7"
            >
              {HoraCero.add(30 * index, "m").format("hh:mm A")}
            </div>
          ))}
      </div>
      {Array(3)
        .fill(0)
        .map((_value, index) => (
          <div className="hover:bg-red-500/25" key={index}>
            <div className="text-center">
              {currentDate.add(index, "d").format("MM/DD/YYYY")}
            </div>
            {Array(24)
              .fill(0)
              .map((_value, index) => (
                <div
                  key={index}
                  className="pr-1 py-1 border-slate-800/25 border-b-2 border-r-2 text-right hover:bg-red-500/30 h-7"
                ></div>
              ))}
          </div>
        ))}
    </div>
  );
}
