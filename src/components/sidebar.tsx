import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className="bg-blue-500 h-28 flex justify-center items-center mb-5">
        logo
      </div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/pacientes"}>pacientes</Link>
        </li>
        <li>
          <Link href={"/citas"}>citas</Link>
        </li>
        <li>
          <Link href={"/ho"}>historias clinicas</Link>
        </li>
      </ul>
    </div>
  );
}
