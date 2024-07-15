export default async function PacientePage({ params: {id} }: { params: { id: string } }) {
  
  return (
    <div>
      Patient {id}
    </div>
  );
}
