'use client'
import { CreateEventModal } from '../createEventModal';
import EventModal from '../eventModal';
import PreviewPatientModal from '../dashboard/previewPatientModal';
import CreatePatientModal from '../patient/createPatientModal';
import { ModalType, useModal } from '@/hooks/useModal';

export default function ModalProvider (){
  const {type} = useModal()
  return (
    <>
      {type === ModalType.CreateAppointment && <CreateEventModal/>}
      {type === ModalType.viewAppointment && <EventModal />}
      {type === ModalType.previewPatientModal && <PreviewPatientModal/>}
      {type === ModalType.createPatientModal && <CreatePatientModal/>}
    </>
  )
}