'use client'
import { useEffect } from "react";

type Props = () => void;

export default function useEsc(callback: Props) {
  const validEscapKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", validEscapKey);
    return () => removeEventListener("keydown", validEscapKey);
  }, []);
}
