import PatientProfile from "@/components/common/patientProfile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PatientPage({ params: { id } }: { params: { id: string } }) {

  const supabase = await createServerComponentClient({ cookies })
  const { data, error } = await supabase
    .from('patient ')
    .select('*, emergency_contact(*), appointment(*)').
    eq('id', id)
    .single()

  if (!data || error) {
    return redirect('/patient')
  }
  return (
    <div>
      <PatientProfile patient={data} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
