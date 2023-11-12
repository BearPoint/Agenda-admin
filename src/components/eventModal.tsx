import { EventApi } from "@fullcalendar/core";
import { Modal } from "./modal";
import { Appointment } from '@/types/appointment';

interface Props {
  event: Appointment;
  displayModal: boolean;
  closeHandler: () => void;
}

export default function EventModal({
  event,
  displayModal,
  closeHandler,
}: Props) {
  console.log(event.extendedProps)
  return (
    <Modal
      isOpen={displayModal}
      closeButton={true}
      closeHandler={closeHandler}
      submitHandler={()=>{}}
    >
      <h2>{event.title}</h2>
      <div>{event.title}</div>
    </Modal>
  );
}
