'use client'
import { CreateEventModal } from '../createEventModal';
import EventModal from '../eventModal';
import PreviewPatientModal from '../dashboard/previewPatientModal';

export default function ModalProvider (){
  
  return (
    <>
      <CreateEventModal/>
      <EventModal />
      <PreviewPatientModal/>
    </>
  )
}