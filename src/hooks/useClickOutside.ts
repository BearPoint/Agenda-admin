import { useEffect, type Ref } from "react";

export default function useClickOutside(ref: HTMLDivElement | null, callback: () => void): void {
  useEffect(()=>{
    const clickHandler = (event: MouseEvent)=> {
      if(!ref?.contains(event?.target as Node)) {
        callback()
      }
    }
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  },[])
}
