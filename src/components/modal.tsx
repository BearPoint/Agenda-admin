import useEsc from "@/hooks/useEsc";
import { useClickAway } from "@uidotdev/usehooks";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closeHandler?: () => void;
  title?: string;
}
export function Modal({
  isOpen,
  children,
  closeHandler = () => {},
  title = "",
}: Props) {
  useEsc(() => closeHandler());


  return isOpen ? (
    <div className="bg-slate-700/80 fixed z-50 top-0 right-0 left-0 bottom-0 flex justify-center items-center">
      <div
        className="w-4/5 relative bg-white rounded-lg h-4/5 p-5 grid grid-rows-[20px_1fr_50px]"
      >
        <div className="flex justify-between w-full items-center">
          <div>{title}</div>
          <button className="text-end cursor-pointer" onClick={closeHandler}>
            close X
          </button>
        </div>
        {children}
        
      </div>
    </div>
  ) : null;
}
