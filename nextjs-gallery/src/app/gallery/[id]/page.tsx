import Image from "next/image"
import { Photo } from "../page"

type Props = {
  params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/photos/${id}`)
  const data: Photo = await res.json()
  
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>{data.title} - ID: {data.id}</h1>
      <Image src={data.url} alt={data.title} width={600} height={600}/>
    </div>
  )
}

export default page