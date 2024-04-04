'use client'
import { usePatientStore } from '@/hooks/usePatientStore';
import { getYearsAll } from '@/utils/getYearsAll';

export default function PatientItem({
  id,
  fullName,
  phone,
  date_birth,
}: {
  id:string
  fullName: string;
  date_birth: string;
  phone: string;
}) {
  const updateIdPatient = usePatientStore((state)=> state.updateIdPatient)

  return (
    <li className="flex  border-b-2 border-gray-200 py-2 cursor-pointer" onClick={()=> updateIdPatient(id)}>
      <div className="rounded-full h-11 w-11 flex justify-center items-center">
        JP
      </div>
      <div className="pl-4 w-full">
        <div>{fullName}</div>
        <div className="flex justify-between">
          <div>{getYearsAll(date_birth)} años</div>
          <div>{phone}</div>
        </div>
      </div>
    </li>
  );
}
