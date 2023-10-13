import DatePicker from "./DatePicker";
import HourPicker from "./hourPicker";
import { Modal } from "./modal";
import SearchPacients from "./searchPacients";

export function CreateEventModal({
  event,
  displayModal,
  onClose: onClose,
  onSubmit,
}: {
  event: {};
  displayModal: boolean;
  onClose: () => void;
  onSubmit: (event: {}) => void;
}) {
  const submitHandler = () => {
    console.log("test");
    onSubmit({});
  };
  return (
    <Modal
      event={event}
      isOpen={displayModal}
      closeHandler={onClose}
      submitHandler={submitHandler}
      closeButton={true}
      submitLabel="create cita"
      title={"creare nueva cita"}
    >
      <form className="grid grid-rows-1 bg-blue-200 ">
        <div className='grid grid-cols-2 gap-5'>
          <div className="">
            <SearchPacients />
          </div>
          <div className="overflow-auto">
            <div className="mb-3">
              <DatePicker />
            </div>
            <div className="">
              <HourPicker />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
