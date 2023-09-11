"use client";

import Image from 'next/image';

interface Props {
  type: string;
  onChange: (value: string) => void;
  name: string;
  icon: string;
}

export default function Input({ type, onChange, name, icon }: Props) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none ">
        <Image src={`/icons/${icon}.svg`} alt={`icon ${icon}`} width={12} height={12}/>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        className="bg-[#e6e4e7] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
        placeholder="name@flowbite.com"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
