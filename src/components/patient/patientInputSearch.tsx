'use client'
import { Input } from "../ui/input";
import { Label } from '../ui/label';

export default function PatientInputSearch({
  onChangeHandler,
}: {
  onChangeHandler: (name: string) => void;
}) {
  return (
    <div className='py-4'>
      <Label>Name</Label>
      <Input onChange={(e) => onChangeHandler(e.target.value)} />
    </div>
  );
}
