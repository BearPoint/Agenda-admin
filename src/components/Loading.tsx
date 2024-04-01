import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-cente h-full">
      <Image src={"/icons/loading.svg"} alt="loading Icon" width={100} height={100} />
    </div>
  );
}
