import { cn } from "@/lib/utils";
import { Patient } from "@/types/Pacient";
import { getInitialName } from "@/utils/getInitialsName";
import { getYearsAll } from "@/utils/getYearsAll";
import { ReactNode } from "react";
import SectionTitle from "../common/sectionTitle";

export default function PatientGeneralInformation({
  information,
}: {
  information: Patient;
}) {
  const {
    fullname,
    date_birth,
    gender,
    address,
    place_birth,
    scholarship,
    religion,
    email,
    phone,
    emergency_contact,
    marital_status,
  } = information;
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-none mt-4 mb-2">
        <Item label="Nombre" className="">
          <div className="">
            {fullname} {getInitialName(fullname)}
          </div>
        </Item>
        <Item label="Edad">
          <div className="">{getYearsAll(date_birth)}</div>
        </Item>
        <Item label="Genero">
          <div className="">{gender}</div>
        </Item>
        <Item label="direccion">
          <div className="">{address}</div>
        </Item>
        <Item label="lugar de nacimento">
          <div className="">{place_birth}</div>
        </Item>
        <Item label="coreo">
          <div className="">{email}</div>
        </Item>
        <Item label="phone">
          <div className="">{phone}</div>
        </Item>
        <Item label="scholarship">
          <div className="">{scholarship}</div>
        </Item>
        <Item label="religion">
          <div className="">{religion}</div>
        </Item>
        <Item label="Estado Civil">
          <div className="">{marital_status}</div>
        </Item>
      </div>
      <SectionTitle title="Contactos de Emergencia" />
      {emergency_contact?.map(
        ({ id, fullname, address, email, relationship }) => (
          <div
            key={id}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-none mt-4 mb-2"
          >
            <Item label="Nombre" className="">
              <div className="">
                {fullname} {getInitialName(fullname)}
              </div>
            </Item>
            <Item label="email">
              <div className="">{email}</div>
            </Item>
            <Item label="dirrecion">
              <div className="">{address}</div>
            </Item>
            <Item label="relationship">
              <div className="">{relationship}</div>
            </Item>
          </div>
        )
      )}
    </div>
  );
}

function Item({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-r-2 ", className)}>
      <div className="font-bold text-wrap">{label}</div>
      <div className="truncate">{children}</div>
    </div>
  );
}
