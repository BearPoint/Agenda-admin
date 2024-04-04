import dayjs from 'dayjs';
import DatePicker from './DatePicker';
import { AppointmentInputs } from '@/types/appointment';

export default function AppointmentForm({
  values: { name, dateOfBirth, notes, phone },
  isDisabled,
  onChange,
}: {
  values: AppointmentInputs;
  isDisabled: boolean;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      <div className="col-span-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombe Completo
        </label>
        <input
          type="text"
          id="name"
          className={`${
            isDisabled ? "text-gray-600 bg-gray-100" : ""
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="John"
          value={name}
          onChange={(e) => onChange("name", e.target.value)}
          disabled={isDisabled}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Fecha de nacimento
        </label>
        <DatePicker
          defaultDate={dayjs(dateOfBirth)}
          maxDate={dayjs().toDate()}
          onChange={(value) => onChange("date", value.toString())}
          disabled={isDisabled}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Telefono
        </label>
        <input
          type="tel"
          id="phone"
          className={`${
            isDisabled ? "text-gray-600 bg-gray-100" : ""
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          pattern="[0-9]{10}"
          onChange={(e) => onChange("phone", e.target.value)}
          value={phone}
          disabled={isDisabled}
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Notas
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="poner comentario de por que la cita..."
          onChange={(e) => onChange("notes", e.target.value)}
          value={notes}
        />
      </div>
    </div>
  );
}
