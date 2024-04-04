import { Patient } from '@/types/Pacient';
import Image from "next/image";

export default function SearchPacientsItem({
  patient: {avatar_url, fullName, phone},
  removeButton,
  removeHandler,
}: {
  patient: Patient;
  removeButton?: boolean;
  removeHandler?: () => void;
}) {
  return (
    <div className="grid gap-5 grid-cols-[50px_1fr_20px] w-full">
      <div className="h-14">
        <Image
          src={avatar_url || ''}
          alt="foto del paciente paciente"
          width={50}
          height={50}
          className="rounded-full h-12 w-12 border-2 border-slate-700/20"
        />
      </div>

      <div>
        <div>{fullName}</div>
        <div>{phone}</div>
      </div>
      {removeButton ? (
        <div onClick={removeHandler} className="mr-2 m-auto">
          X
        </div>
      ) : null}
    </div>
  );
}
