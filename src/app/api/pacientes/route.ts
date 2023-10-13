import { Patient } from '@/types/Pacient';

const dataUsuarios: Patient[] = [
  {
    id: 1,
    fullName: "Juan Pérez",
    dateOfBirth: "1990-01-01",
    address: "Calle 123, Ciudad de México",
    phone: "123-456-7890",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 2,
    fullName: "María González",
    dateOfBirth: "1991-02-02",
    address: "Avenida 456, Guadalajara",
    phone: "234-567-8901",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 3,
    fullName: "Pedro Hernández",
    dateOfBirth: "1992-03-03",
    address: "Prolongación 789, Monterrey",
    phone: "345-678-9012",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 4,
    fullName: "Juan Pérez",
    dateOfBirth: "1990-01-01",
    address: "Calle 123, Ciudad de México",
    phone: "123-456-7890",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 5,
    fullName: "María González",
    dateOfBirth: "1991-02-02",
    address: "Avenida 456, Guadalajara",
    phone: "234-567-8901",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 6,
    fullName: "Pedro Hernández",
    dateOfBirth: "1992-03-03",
    address: "Prolongación 789, Monterrey",
    phone: "345-678-9012",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 7,
    fullName: "Juan Pérez",
    dateOfBirth: "1990-01-01",
    address: "Calle 123, Ciudad de México",
    phone: "123-456-7890",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 8,
    fullName: "María González",
    dateOfBirth: "1991-02-02",
    address: "Avenida 456, Guadalajara",
    phone: "234-567-8901",
    photo: "https://random.imagecdn.app/50/50",
  },
  {
    id: 9,
    fullName: "Pedro Hernández",
    dateOfBirth: "1992-03-03",
    address: "Prolongación 789, Monterrey",
    phone: "345-678-9012",
    photo: "https://random.imagecdn.app/50/50",
  },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const search = url.searchParams.get("search");
  if (search) {
    const filterData = dataUsuarios.filter((user) =>
      user.fullName.toLocaleLowerCase().includes(search.toLowerCase())
    );
    filterData.sort(
      (a, b) => a.fullName.indexOf(search) - b.fullName.indexOf(search)
    );
    return Response.json(filterData);
  }
  return Response.json(dataUsuarios);
}
