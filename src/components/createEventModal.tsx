import { useState } from "react";
import DatePicker from "./DatePicker";
import HourPicker from "./hourPicker";
import { Modal } from "./modal";
import SearchPacients from "./searchPacients";
import { Patient } from "@/types/Pacient";
import dayjs, { Dayjs } from "dayjs";

const minDate = dayjs().subtract(1, "days").toDate();

export function CreateEventModal({
  selectedDate,
  displayModal,
  onClose: onClose,
  onSubmit,
}: {
  selectedDate: Dayjs;
  displayModal: boolean;
  onClose: () => void;
  onSubmit: (event: {}) => void;
}) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [selectedDayCalendar, setSelectedDayCalendar] =
    useState<Dayjs>(selectedDate);

  const submitHandler = () => {
    console.log("test");
    onSubmit({});
  };
  const onSelectedPatient = (patient: Patient | null) => {
    console.log(patient || ({ fullName: "" } as Patient));
    setPatient(patient || ({} as Patient));
    setDisabled(!!patient);
  };
  return (
    <Modal
      isOpen={displayModal}
      closeHandler={onClose}
      submitHandler={submitHandler}
      closeButton={true}
      submitLabel="create cita"
      title={"creare nueva cita"}
    >
      <form className="grid grid-cols-2 gap-5 overflow-auto  my-3">
        <div className="">
          <SearchPacients onSelectedPatient={onSelectedPatient} />
          <PatientInfo
            fullName={patient?.fullName}
            phone={patient?.phone}
            dateOfBirth={patient?.dateOfBirth}
            inputDisabled={disabled}
          />
        </div>
        <div className="overflow-auto">
          <div className="mb-3">
            <DatePicker
              defaultDate={selectedDayCalendar}
              minDate={minDate}
              onChange={setSelectedDayCalendar}
            />
            {dayjs(selectedDayCalendar).format()}
          </div>
          <div className="">
            <HourPicker currentDate={selectedDayCalendar} />
          </div>
        </div>
      </form>
    </Modal>
  );
}

function PatientInfo({
  fullName,
  phone,
  dateOfBirth,
  inputDisabled,
}: {
  fullName: string | undefined;
  phone: string | undefined;
  dateOfBirth: string | undefined;
  inputDisabled?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      <div className="col-span-2">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombe Completo
        </label>
        <input
          type="text"
          id="first_name"
          className={`${
            inputDisabled ? "text-gray-600 bg-gray-100" : ""
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="John"
          value={fullName || ""}
          disabled={inputDisabled}
          onChange={() => {}}
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Fecha de nacimento
        </label>
        <DatePicker
          maxDate={dayjs().toDate()}
          defaultDate={dayjs(dateOfBirth || undefined)}
          disabled={inputDisabled || false}
          onChange={(date: Dayjs) => {}}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Telefono
        </label>
        <input
          type="tel"
          id="telefono"
          className={`${
            inputDisabled ? "text-gray-600 bg-gray-100" : ""
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          pattern="[0-9]{10}"
          required
          disabled={true}
          onChange={() => {}}
          value={phone || ""}
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
        ></textarea>
      </div>
    </div>
  );
}
