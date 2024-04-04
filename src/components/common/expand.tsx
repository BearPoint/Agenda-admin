"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode, useState } from "react";

export default function Expand({
  children,
  title,
  defaultPotition = false
}: {
  defaultPotition?: boolean;
  children: ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultPotition);

  return (
    <div className="w-full my-4 py-4 px-2 border-2 border-gray-300 rounded-xl bg-white ">
      <div className="flex">
        <div onClick={() => setIsOpen((old) => !old)}>
          <Image
            src={`/icons/chevron-${isOpen ? 'up': 'down'}.svg`}
            alt={`icon logout`}
            width={12}
            height={12}
            className="md:w-5 md:h-5"
          />
        </div>
        <div className="ml-3 text-lg font-bold">{title}</div>
      </div>
      <div
        className={cn(
          "hidden mx-4",
          isOpen && "block animate-fade-down animate-duration-300"
        )}
      >
        {children}
      </div>
    </div>
  );
}
