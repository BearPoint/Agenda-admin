import { create } from "zustand";

type State = {
  idPatient: string;
}
type action = {
  updateIdPatient: (idPatient: string)=> void;  
}


export const usePatientStore = create<State & action>((set) => ({
  idPatient: "",
  updateIdPatient: (idPatient) => set(() => ({ idPatient })),
}));
