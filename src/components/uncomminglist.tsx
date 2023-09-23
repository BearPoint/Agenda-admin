import '@/styles/unComming.css'

export default function Uncomminglist() {
  return (
    <div className='rounded-lg bg-white p-5 container grid grid-rows-[50px_1fr] grid-cols-1'>
      <h2 className='font-normal text-[28px]'>Un Comming List</h2>
      <ul className='overflow-y-auto py-3 px-1'>
        {Array(6).fill(0).map((item, index) => (
          <li key={index} className='bg-green-300 w-full rounded-xl h-24 my-2 p-2'>
            Citas con jana {item}
          </li>
        ))} 
      </ul>
    </div>
  )
}