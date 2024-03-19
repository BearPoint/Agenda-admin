import { useEffect, useState } from "react";
import { Modal } from "./modal";
import SearchPacients from "./searchPacients";
import { Patient } from "@/types/Pacient";
import dayjs from "dayjs";
import { ModalType, useModal } from "@/hooks/useModal";
import { AppointmentInputs } from "@/types/appointment";
import Scheduler from "./scheshuld";
import AppoimentForm from "./appimentForm";
import { EventScheschuld } from "@/types/eventScheshuld";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const defaultValues: AppointmentInputs = {
  name: "",
  dateOfBirth: dayjs().toString(),
  telefono: "",
  notas: "",
};

export function CreateEventModal() {
  const {
    data: { eventDay },
    onClose,
    isOpen,
    type,
  } = useModal();
  const [form, setForm] = useState<AppointmentInputs>(defaultValues);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [event, setEvent] = useState<EventScheschuld | undefined>(
    {} as EventScheschuld
  );
  const isModalOpen = isOpen && type === ModalType.CreateAppoiment;
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
            name: patient.nombre,
            dateOfBirth: patient.fecha_nacimient,
            telefono: patient.telefono,
          }
    );
    setPatient(patient || ({} as Patient));
  };
  const onChangeFormHandler = (name: string, value: string): void => {
    setForm((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };
  const onClickHandler = async () => {
    console.log({
      pacient: patient || form,
      event,
    });
    const newCita = await supabase.from("cita").insert({
      nombre: patient?.fullName,
      tipo: "PRIMERA_CITA",
      date: event?.dateStart,
      notas: form.notas + "\n" + event?.description,
      pacienteId: patient?.id
    }).select();
    console.log(newCita)
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
            <SearchPacients onSelectedPatient={onSelectedPatient} />
          </div>
          <AppoimentForm
            values={form}
            onChange={onChangeFormHandler}
            isDisabled
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
