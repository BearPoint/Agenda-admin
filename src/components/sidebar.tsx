import Link from "next/link";
import Image from "next/image";
export default function Sidebar() {
  return (
    <div className=''>

      <div className="bg-blue-500 h-28 flex justify-center items-center mb-5">
        <p>

        logo
        </p>
      </div>
      <ul className="ml-4">
        <li className='my-3'>
          <Link href={"/"} className="flex">
            <Image
              src={`/icons/house.svg`}
              alt={`icon house`}
              width={12}
              height={12}
              className="mr-2"
            />
            <span>Home</span>
          </Link>
        </li>
        <li className='my-3'>
          <Link href={"/pacientes"} className="flex">
            <Image
              src={`/icons/user-doctor.svg`}
              alt={`icon user-doctor`}
              width={12}
              height={12}
              className="mr-2"
            />
            pacientes
          </Link>
        </li>
        <li className='my-3'>
          <Link href={"/citas"} className="flex">
            <Image
              src={`/icons/calendar.svg`}
              alt={`icon calendar`}
              width={12}
              height={12}
              className="mr-2"
            />
            citas
          </Link>
        </li>
        <li className='my-3'>
          <Link href={"/ho"} className="flex">
            <Image
              src={`/icons/file-medical.svg`}
              alt={`icon file-medical`}
              width={12}
              height={12}
              className="mr-2"
            />
            historias clinicas
          </Link>
        </li>
      </ul>
      <div className='mt-auto'>
        log out
      </div>
    </div>
  );
}
