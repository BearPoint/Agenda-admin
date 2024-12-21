import { cn } from "@/lib/utils";
import { Patient } from "@/types/Patient";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function PatientProfile({
  patient,
  className,
}: {
  patient: Patient | undefined;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full", className)}>
      <Avatar className="w-20 h-20">
        <AvatarImage src="https://placehold.co/test.png" alt="@shadcn" />
        <AvatarFallback className="text-2xl font-bold">{patient?.name.split(' ').map(name=> name[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <div className="font-bold text-xl">{patient?.name}</div>
        <div className="text-gray-600 text-sm">Telefono: {patient?.phone}</div>
        <div className="text-gray-600 text-sm">
          Fecha de Naciemneto: {patient?.date_birth}
        </div>
        <div className="text-gray-600 text-sm">Sexo: {patient?.gender}</div>
      </div>
    </div>
  );
}
