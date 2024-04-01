export default function SectionTitle({title}: {title: string}) {
  return (
    <div className='flex font-bold text-xl mt-4 my-2'>
      {title}
      <hr className='flex-1 my-auto ml-3 h-px bg-gray-300 border-0'></hr>
    </div>
  )
}