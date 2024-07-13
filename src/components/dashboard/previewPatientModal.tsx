
'use client'

import { ModalType, useModal } from "@/hooks/useModal";
import { Modal } from "../modal";
import Image from "next/image";
import { Family_background, NonPathologicalBackground, PathologicalBackground } from "@/types/Patient";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

export default function PreviewPatientModal() {
  const { isOpen, onClose, type, data } = useModal();
  const router= useRouter()
  const isModalOpen = isOpen && type === ModalType.previewPatientModal;
  console.log({ data })
  

  return (
    <Modal
      isOpen={isModalOpen}
      closeHandler={onClose}
    >
      <div className="mx-4">
        <div className="h-20 flex justify-center items-center">
          <div className="flex w-full">
            <div className="w-20 h-20 relative">
              <Image alt="profile" src={'https://placehold.co/100x100.png'} fill className="rounded-full " />
            </div>
            <div className="ml-4">
              <div className="font-bold text-xl">{data?.patient?.fullName}</div>
              <div className="text-gray-600 text-sm">
                Telefono: {data?.patient?.phone}
              </div>
              <div className="text-gray-600 text-sm">
                Fecha de Naciemneto: {data?.patient?.date_birth}</div>
              <div className="text-gray-600 text-sm">
                Sexo: {data?.patient?.gender}</div>
            </div>
          </div>
          <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-primary text-white py-1 px-3 w-full h-[42px]">Acciones</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=> router.push(`/patient/profile/consulta?patientId=${data?.patient?.id}`)}>Nueva Consulta</DropdownMenuItem>
              <DropdownMenuItem>Ver Expediente</DropdownMenuItem>
              <DropdownMenuItem>Editar Expediente</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
        <div className="pb-5 flex gap-10 mt-5 justify-between items-stretch ">
          <div className="w-1/2 overflow-auto h-[calc(550px-168px)]">
            <div className="mb-5">
              <div className="text-lg font-semibold">Antecedentes Importantes</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. diam quis enim lobortis scelerisque fermentum dui faucibus.</p>
            </div>
            <div className="mb-5">
              <div className="text-lg font-semibold">Alergias</div>
              <p>{data?.patient?.allergy || '-'}</p>
              
            </div>
            <div className="mb-5">
              <div className="text-lg font-semibold">Motivo de consulta</div>
              <p>null</p>
            </div>
            <div className="mb-5">
              <div className="text-lg font-semibold">Observaciones</div>
              <p>paciente tiene un ojo mas peque;o</p>
            </div>
          </div>
          <div className="w-1/2 overflow-auto h-[calc(550px-168px)]">
            <div className="mb-5">
              <div className="text-lg font-semibold">Antecedentes Familiares</div>
              <ul>
                {Object.entries(data?.patient?.family_background as Family_background || {}).map(([key, value], id)=> (
                  value != '' && <li key={id} className="my-2">{key} : {value} </li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <div className="text-lg font-semibold">Antecedenes Patologicos</div>
              <ul>
                {Object.entries(data?.patient?.pathological_history as PathologicalBackground || {}).map(([key, value], id)=> (
                  value != '' && <li key={id} className="my-2">{key} : {value}</li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <div className="text-lg font-semibold">Antecedenes No Patologicos</div>
              <ul>
                {Object.entries(data?.patient?.non_pathological_history as NonPathologicalBackground || {}).map(([key, value], id)=> (
                  value != '' && <li key={id} className="my-2">{key} : {value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal >
  )
}