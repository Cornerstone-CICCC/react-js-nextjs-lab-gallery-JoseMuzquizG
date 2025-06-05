import { Photo } from "@/app/gallery/page"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/photos/${id}`)
  const data: Photo = await res.json()

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-lg">
        <Image src={data.thumbnailUrl} alt={data.title} width={500} height={500}/>
        <Link href="/gallery" className="bg-blue-500 text-white rounded-md text-center px-4 py-2 font-semibold">Close</Link>
      </div>
    </div>
  )
}

export default page