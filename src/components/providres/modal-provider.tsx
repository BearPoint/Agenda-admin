'use client'
import { CreateEventModal } from '../createEventModal';
import {useState, useEffect} from 'react'
import EventModal from '../eventModal';

export default function ModalProvider (){
  
  return (
    <>
      <CreateEventModal/>
      <EventModal />
    </>
  )
}