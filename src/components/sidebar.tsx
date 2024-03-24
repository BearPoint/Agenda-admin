import Link from "next/link";
import Image from "next/image";
export default function Sidebar() {
  return (
    <div className=" hidden md:flex flex-col justify-between">
      <div>
        <div className="h-28 flex justify-center items-center mb-5">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="mx-5"
          />
        </div>
        <ul className="m-2 lg:ml-4">
          <li className="my-7">
            <Link href={"/"} className="flex justify-center">
              <Image
                src={`/icons/house.svg`}
                alt={`icon house`}
                width={12}
                height={12}
                className="md:w-5 md:h-5"
              />
            </Link>
          </li>
          <li className="my-7">
            <Link
              href={"/pacientes"}
              className="flex justify-center"
            >
              <Image
                src={`/icons/user-doctor.svg`}
                alt={`icon user-doctor`}
                width={12}
                height={12}
                className="md:w-5 md:h-5"
              />
            </Link>
          </li>
          <li className="my-7">
            <Link
              href={"/citas"}
              className="flex justify-center"
            >
              <Image
                src={`/icons/calendar.svg`}
                alt={`icon calendar`}
                width={12}
                height={12}
                className="md:w-5 md:h-5"
              />
            </Link>
          </li>
          <li className="my-7">
            <Link href={"/ho"} className="flex justify-center">
              <Image
                src={`/icons/file-medical.svg`}
                alt={`icon file-medical`}
                width={12}
                height={12}
                className="md:w-5 md:h-5"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto mx-auto mb-4">
        <Link
          href={"/citas"}
          className="flex justify-center my-4"
        >
          <Image
            src={`/icons/gear.svg`}
            alt={`icon gear`}
            width={12}
            height={12}
            className="md:w-5 md:h-5"
          />
        </Link>
        <Link href={"/citas"} className="flex justify-center">
          <Image
            src={`/icons/logout.svg`}
            alt={`icon logout`}
            width={12}
            height={12}
            className="md:w-5 md:h-5"
          />
        </Link>
      </div>
    </div>
  );
}
