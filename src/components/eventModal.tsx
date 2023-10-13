import { EventApi } from "@fullcalendar/core";
import { Modal } from "./modal";

interface Props {
  event: EventApi;
  displayModal: boolean;
  closeHandler: () => void;
}

/*----------------------------------------------------------------

isOpen,
  closeHandler = () => {},
  closeButton,
  submitHandler = () => {},
  submitLabel,

*/

export default function EventModal({
  event,
  displayModal,
  closeHandler,
}: Props) {
  return (
    <Modal
      event={event}
      isOpen={displayModal}
      closeButton={true}
      closeHandler={closeHandler}
      submitHandler={()=>{}}
    >
      <h2>{event.title}</h2>
      <div>{event.start?.toString()}</div>
    </Modal>
  );
}
