
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
import PatientProfile from "../common/patientProfile";

export default function PreviewPatientModal() {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter()
  const isModalOpen = isOpen && type === ModalType.previewPatientModal;

  return (
    <Modal
      isOpen={isModalOpen}
      closeHandler={onClose}
    >
      <div className="mx-4">
        <div className="h-20 flex justify-center items-center">
            <PatientProfile patient={data?.patient}/>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-primary text-white py-1 px-3 h-[42px]">Acciones</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push(`/patient/appointment/${data?.patient?.id}`)}>Nueva Consulta</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(`/patient/${data?.patient?.id}`)}>Ver Expediente</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(`/patient/edit/${data?.patient?.id}`)}>Editar Expediente</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                {Object.entries(data?.patient?.family_background as Family_background || {}).map(([key, value], id) => (
                  value != '' && <li key={id} className="my-2">{key} : {value} </li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <div className="text-lg font-semibold">Antecedenes Patologicos</div>
              <ul>
                {Object.entries(data?.patient?.pathological_history as PathologicalBackground || {}).map(([key, value], id) => (
                  value != '' && <li key={id} className="my-2">{key} : {value}</li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <div className="text-lg font-semibold">Antecedenes No Patologicos</div>
              <ul>
                {Object.entries(data?.patient?.non_pathological_history as NonPathologicalBackground || {}).map(([key, value], id) => (
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