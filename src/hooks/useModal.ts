import { Patient } from './../types/Patient.d';
import dayjs, { Dayjs } from "dayjs";
import { create } from "zustand";

export enum ModalType {
  "CreateAppointment",
  "viewAppointment",
  "previewPatientModal"
}

interface ModalData {
  event?: any;
  eventDay?: Dayjs | string;
  envetId?: string;
  patient?: Patient;
}

interface SetState {
  type: ModalType;
  data?: ModalData;
}

interface ModalStore {
  type: ModalType | null;
  data?: ModalData;
  isOpen: boolean;
  onOpen: (state: SetState) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {
    eventDay: dayjs(),
  },
  isOpen: false,
  onOpen: ({ type, data }: SetState) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, data: {}, type: null }),
}));
