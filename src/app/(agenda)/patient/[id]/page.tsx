import PatientProfile from "@/components/common/patientProfile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PatientCartInfo from "@/components/patient/hc/patientInfo";

export default async function PatientPage({ params: { id } }: { params: { id: string } }) {

  const supabase = await createServerComponentClient({ cookies })
  const { data, error } = await supabase
    .from('patient')
    .select('*, emergency_contact(*), appointment(*)')
    .order('date', { ascending: false, foreignTable: 'appointment'})
    .eq('id', id)
    .single()
  if (!data || error) {
    console.log({data, error})
    //return redirect('/patient')
  }

  return (
    <div className="px-5 md:px-5">
      <PatientProfile patient={data} className="my-10" />
      <div className="">
        <PatientCartInfo patient={data}/>
      </div>
    </div>
  );
}
