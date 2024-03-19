import dayjs, { Dayjs } from "dayjs";
import { create } from "zustand";

export enum ModalType {
  "CreateAppoiment",
  "viewAppoiment",
}

interface ModalData {
  event?: any;
  eventDay?: Dayjs | string;
  envetId?: string;
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
