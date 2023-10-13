import useEsc from "@/hooks/useEsc";
import { useClickAway } from "@uidotdev/usehooks";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closeButton?: boolean;
  closeHandler?: () => void;
  event: {};
  submitHandler: () => void;
  submitLabel?: string;
  title?: string;
}
export function Modal({
  isOpen,
  children,
  closeHandler = () => {},
  closeButton,
  submitHandler = () => {},
  submitLabel,
  title = "",
}: Props) {
  useEsc(() => closeHandler());
  const ref: any = useClickAway(() => closeHandler());

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    submitHandler();
  };
  return isOpen ? (
    <div className="bg-slate-700/80 fixed z-50 top-0 right-0 left-0 bottom-0 flex justify-center items-center">
      <div
        ref={ref}
        className="w-4/5 relative bg-white rounded-lg h-4/5 p-5 grid grid-rows-[20px_1fr_50px]"
      >
        <div className="flex justify-between w-full items-center">
          <div>{title}</div>
          <button className="text-end cursor-pointer" onClick={closeHandler}>
            close X
          </button>
        </div>
        <div>{children}</div>
        <div className="text-end">
          {closeButton ? (
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={closeHandler}
            >
              close
            </button>
          ) : null}
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={onSubmitHandler}
          >
            {submitLabel || "submit"}
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
