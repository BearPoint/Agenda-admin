import PatientProfile from "@/components/common/patientProfile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
    <div>
      <PatientProfile patient={data} className="my-10" />
      <div>
        <Tabs defaultValue="hc" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="hc">Historia Clinica</TabsTrigger>
            <TabsTrigger value="Consultas">Consultas</TabsTrigger>
            <TabsTrigger value="archivos">Archivos</TabsTrigger>
          </TabsList>
          <TabsContent value="hc">
            <Collapsible>
              <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
              <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No attribution
                required.
              </CollapsibleContent>
            </Collapsible>
          </TabsContent>
          <TabsContent value="Consultas">

          </TabsContent>
          <TabsContent value="archivos">

          </TabsContent>
        </Tabs>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
