import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Cart({ children, style }: { children: ReactNode, style?: string }) {
  return (
    <div className={cn('w-full rounded-md bg-secondary px-5 py-10', style)}>
      {children}
    </div>
  )
}