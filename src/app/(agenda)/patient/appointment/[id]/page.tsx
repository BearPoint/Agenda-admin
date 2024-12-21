export default async function AppointmentPage({ params: {id} }: { params: { id: string } }) {
  
  return (
    <div>
      Appointment Patient {id}
    </div>
  );
}
