import TailwindDatePicker from "tailwind-datepicker-react";
import { useState } from "react";
import { IOptions } from "tailwind-datepicker-react/types/Options";
import dayjs, { Dayjs } from "dayjs";
interface Options extends IOptions {
  inputDateFormatProp?: {
    day: string;
    month: string;
    year: string;
  };
  disabledDates?: Date[];
}

export default function DatePicker({
  defaultDate = dayjs(),
  maxDate,
  minDate,
  disabled = false,
  onChange,
}: {
  minDate?: Date;
  maxDate?: Date;
  defaultDate?: Dayjs;
  disabled?: boolean;
  onChange: (date: Dayjs) => void;
}) {
  const [show, setShow] = useState<boolean>(false);

  const options: Options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    minDate,
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
    inputDateFormatProp: {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    },
    defaultDate: defaultDate.toDate(),
  };

  return (
    <div>
      <TailwindDatePicker
        show={show && !disabled}
        setShow={(state: boolean) => setShow(state)}
        options={options}
        onChange={(date: Date) => onChange(dayjs(date))}
      >
        <input
          type="text"
          className={`${
            disabled ? "text-gray-600 bg-gray-100" : ""
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Select Date"
          value={dayjs(defaultDate).format("DD/MM/YYYY")}
          onFocus={() => setShow(true)}
          readOnly
        />
      </TailwindDatePicker>
    </div>
  );
}
