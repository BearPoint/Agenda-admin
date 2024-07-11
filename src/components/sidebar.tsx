'use client'
import Link from "next/link";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Separator } from "./ui/separator";
import { useEffect } from "react";

export default function Sidebar() {
  const supabase = createClientComponentClient();
  const pathname = usePathname()
  const router = useRouter();
  
  const logout = () => {
    supabase.auth.signOut();
    router.refresh()
  };
  return (
    <div className=" hidden md:flex flex-col justify-evenly bg-[#f3f4f6] ">
      <div className="px-3 flex-1">
        <div className="h-28 flex justify-between items-center mb-5 ">
          <div className="flex items-center">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={32}
              height={32}
              className=""
            />
            <div className="text-font-color font-semibold text-sm font-sans">DOC TRACKER</div>
          </div>
         
        </div>
        <div>
          <p className="text-base  font-medium leading-none text-muted-foreground">Main Menu</p>
          <div className="mt-3">
            <Link className={`${pathname.length === 1 ? 'bg-primary': ''} hover:bg-primary hover:text-black group px-1 py-1 rounded-lg my-1 flex items-center font-semibold`} href={'/'}>
              <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} className='mr-2 group-hover:fill-black fill-[#2B3750]' viewBox="0 0 448 512">
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
              </svg>
              Calendario
            </Link>
            <Link className={`${pathname.includes('/patient') ? 'bg-primary': ''} hover:bg-primary hover:text-black group px-1 py-1 rounded-lg my-1 flex items-center font-semibold`} href={'/patient'}>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className='mr-2 group-hover:fill-black fill-[#2B3750]' viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
            </svg>
              Pacientes
            </Link>
            <Link className={`${pathname.includes('/citas') ? 'bg-primary': ''} hover:bg-primary hover:text-black group px-1 py-1 rounded-lg my-1 flex items-center font-semibold`} href={'/ciitas'}>
              <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} className='mr-2 group-hover:fill-black fill-[#2B3750]' viewBox="0 0 448 512">
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
              </svg>
              Citas
            </Link>
            <Link className={`${pathname.includes('/Expedientes') ? 'bg-primary': ''} hover:bg-primary hover:text-black group px-1 py-1 rounded-lg my-1 flex items-center font-semibold`} href={'/patient'}>
            <svg xmlns="http://www.w3.org/2000/svg"width={16} height={16} className='mr-2 group-hover:fill-black fill-[#2B3750]' viewBox="0 0 384 512">
              <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"/>
            </svg>
              Expedientes
            </Link>
          </div>
          <Separator className="my-4" />
          <p className="text-sm  font-medium leading-none text-muted-foreground">others</p>
          <div className="mt-3">
            <Link className={`${pathname.includes('/settings') ? 'bg-primary': ''} hover:bg-primary hover:text-black  group px-1 py-1 rounded-lg my-1 flex items-center font-semibold`} href={'/settings'}>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className='mr-2 group-hover:fill-black fill-[#2B3750]' viewBox="0 0 512 512">
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
            </svg>
              Ajustes
            </Link>
            <Link className={`${pathname.includes('/callCenter') ? 'bg-primary': ''} hover:bg-primary hover:text-black group px-1 py-1 rounded-lg my-1 flex items-center font-semibold`} href={'/help Support'}>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className='mr-2 group-hover:fill-black fill-[#2B3750]' viewBox="0 0 512 512">
            <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/>
            </svg>
              Centro de Ayuda
            </Link>
          </div>
        </div>

      </div>
      <div className=" w-full">
        {/* TODO: add profile */}
      </div>
    </div>
  );
}
