import { useModal } from "@/hooks/useModal";
import { Modal } from "../modal";
import NewPatientForm from "./newPatientForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { NewPatient } from "@/types/Patient";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

export default function CreatePatientModal() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const {toast} = useToast()
  const {
    onClose,
    isOpen,
  } = useModal();

  const onSubmit = async (values: NewPatient) => {
    const {data:{user}, error:errorUser }= await supabase.auth.getUser()
    
    const {data,error}= await supabase.from('patient').insert([{id_account: user?.id, ...values}])
    
    if (error || errorUser) {
      toast({
        title: "Server Error",
        description: errorUser?.message || error?.message
      })
    } else {
      router.refresh()
      onClose();
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      title="Nuevo Paciente"
      closeHandler={onClose}
    >
      <NewPatientForm onSubmit={onSubmit}/>
    </Modal>
  )
}