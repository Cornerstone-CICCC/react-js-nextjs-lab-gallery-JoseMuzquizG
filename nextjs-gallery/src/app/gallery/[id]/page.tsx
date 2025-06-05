import Image from "next/image"
import { Photo } from "../page"

type Props = {
  params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/photos/${id}`)
  const data: Photo = await res.json()
  const newUrl: string = "https://placehold.co/1000x1000"

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>{data.title} - ID: {data.id}</h1>
      <Image src={newUrl} alt={data.title} width={600} height={600}/>
    </div>
  )
}

export default page