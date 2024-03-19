
import { Modal } from "./modal";
import { ModalType, useModal } from "@/hooks/useModal";

export default function EventModal() {
  const { isOpen, onClose, type, data } = useModal();
  
  const isModalOpen = isOpen && type === ModalType.viewAppoiment;

  const { event } = data;
  
  return (
    <Modal
      isOpen={isModalOpen}
      closeHandler={onClose}
    >
      <h2>{event?.title}</h2>
      <div>{event?.title}</div>
    </Modal>
  );
}
