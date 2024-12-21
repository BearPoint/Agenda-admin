import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export default function NewPatientForm({onSubmit}: {onSubmit: (values: z.infer<typeof formSchema>)=> void}) {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    date_birth: z.date(),
    email: z.string().email(),
    phone: z.string().length(10),
    gender: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      date_birth: new Date(),   
      email: '',
      phone: '',
      gender: '',
    },
  })

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className='mt-3 relative'>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='my-2'>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input {...field} autoComplete='off' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-5 w-full my-4'>
          <FormField
            control={form.control}
            name="date_birth"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 relative" align="start">
                    <Calendar
                      mode="single"
                      endMonth={new Date()}
                      captionLayout='dropdown'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Correo Electronico</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} autoComplete='off' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex gap-5 w-full my-4'>
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Genero</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || 'Mujer'}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Mujer">Mujer</SelectItem>
                    <SelectItem value="Hombre">Hombre</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Numero Telefonico</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} autoComplete='off' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <FormField
          control={form.control}
          name="allergy"
          render={({ field }) => (
            <FormItem className=''>
              <FormLabel>Alergias</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <div className='flex justify-end my-5'>

          <Button type="submit">Crear Paciente</Button>
        </div>
      </form>
    </Form>
  )
}