import TailwindDatePicker from "tailwind-datepicker-react";
import { useState } from "react";
import { IOptions } from "tailwind-datepicker-react/types/Options";

interface Options extends IOptions {
  inputDateFormatProp?: {
    day: string;
    month: string;
    year: string;
  };
  disabledDates?: Date[]
}

export default function DatePicker({
  defaultDate = new Date(),
}: {
  defaultDate?: Date;
}) {
  const [show, setShow] = useState<boolean>(false);

  const options: Options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    minDate: new Date(),
    disabledDates: [
      new Date('2023-10-25')
    ],
    language: "es",
    defaultDate,
  };

  return (
    <div className=''>
      <TailwindDatePicker
        show={show}
        setShow={(state) => setShow(state)}
        options={options}
      />
    </div>
  );
}
