'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Label } from '../ui/label';

export default function PatientInputSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='py-4'>
      <Label>Name</Label>
      <Input defaultValue={searchParams.get('query') || ''} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
