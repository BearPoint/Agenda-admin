import { useEffect, useState } from "react";
import { Modal } from "./modal";
import SearchPatients from "./searchPatients";
import { Patient } from "@/types/Patient";
import dayjs from "dayjs";
import { ModalType, useModal } from "@/hooks/useModal";
import { AppointmentInputs } from "@/types/appointment";
import Scheduler from "./schedule";
import AppointmentForm from "./appointmentForm";
import { EventSchedule } from "@/types/eventSchedule";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const defaultValues: AppointmentInputs = {
  name: "",
  dateOfBirth: dayjs().toString(),
  phone: "",
  notes: "",
};

export function CreateEventModal() {
  const {
    data: { eventDay },
    onClose,
    isOpen,
    type,
  } = useModal();
  const route = useRouter()
  const [form, setForm] = useState<AppointmentInputs>(defaultValues);
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [event, setEvent] = useState<EventSchedule | undefined>(
    {} as EventSchedule
  );
  const isModalOpen = isOpen && type === ModalType.CreateAppointment;

  const supabase = createClientComponentClient();

  useEffect(() => {
    if (isModalOpen) {
      setForm({
        ...defaultValues,
        dateOfBirth: eventDay,
      });
    } else {
      setForm(defaultValues);
    }
  }, [isModalOpen, eventDay]);

  const onSelectedPatient = (patient: any) => {
    setForm((oldValue) =>
      !patient
        ? defaultValues
        : {
            ...oldValue,
            name: patient.fullName,
            dateOfBirth: patient.date_birth,
            phone: patient.phone,
          }
    );
    setPatient(patient || defaultValues);
  };
  const onChangeFormHandler = (name: string, value: string): void => {
    setForm((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };
  const onClickHandler = async () => {
    if(!form.name.length) return
     
    await supabase.from("appointment").insert({
      id_patient: patient?.id,
      id_account: patient?.id_account,
      type: "PRIMERA_CITA",
      date: dayjs(eventDay).toISOString(),
      notes: `${form.notes}${
        event?.description ? "\n" + event.description : ""
      }`,
    });
    onClose()
  };
  return (
    <Modal
      isOpen={isModalOpen}
      closeHandler={onClose}
      title={"creare nueva cita"}
    >
      <div className="grid grid-cols-2 gap-5 overflow-auto  my-3">
        <div>
          <div>
            <SearchPatients onSelectedPatient={onSelectedPatient} />
          </div>
          <AppointmentForm
            values={form}
            onChange={onChangeFormHandler}
            isDisabled={!!form.name}
          />
        </div>
        <Scheduler defaultDate={eventDay} onChange={setEvent} />
      </div>
      <div>
        <button onClick={onClickHandler}>create Cita</button>
      </div>
    </Modal>
  );
}
