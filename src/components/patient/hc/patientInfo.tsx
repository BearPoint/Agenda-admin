import Patient from "@/types/Patient"
import Card from '@/components/common/card'
export default function PatientCartInfo({patient}: {patient: Patient}) {
  return (
    <Card style="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-10 bg-[#f0f8f7]">
      <div className="">
        <InfoItem fieldName="Nombre" fieldValue={patient.name}/>
      </div>
      <div>
        <InfoItem fieldName="Fecha de Nacimiento" fieldValue={patient.date_birth}/>
      </div>
      <div>
        <InfoItem fieldName="Sexo" fieldValue={patient.gender}/>
      </div>
      <div>
        <InfoItem fieldName="email" fieldValue={patient.email}/>
      </div>
      <div>
        <InfoItem fieldName="Telefono" fieldValue={patient.phone}/>
      </div>
      <div>
        <InfoItem fieldName="Dirrecion" fieldValue={patient.address}/>
      </div>
      <div>
        <InfoItem fieldName="Lugar de Nacimiento" fieldValue={patient.place_birth}/>
      </div>
      <div>
        <InfoItem fieldName="Estado Civil" fieldValue={patient.marital_status}/>
      </div>
      <div>
        <InfoItem fieldName="Religion" fieldValue={patient.religion}/>
      </div>
      <div>
        <InfoItem fieldName="Escolaridad" fieldValue={patient.schooling}/>
      </div>
    </Card>
  )
}



const InfoItem = ({fieldName, fieldValue}: {fieldName: string, fieldValue: string} ) => {
  return (
    <div>
      <div className="text-xs font-semibold break-words normal-case">{fieldName}:</div>
      <div className=" break-words capitalize">{fieldValue}</div>
    </div>
  )
}