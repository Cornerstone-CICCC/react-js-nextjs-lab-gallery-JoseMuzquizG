import Image from "next/image"
import Link from "next/link"

export interface Photo {
  id: number
  title: string
  url: string
  thumbnailUrl: string
} 

const fetchPhotos = async() => {
  const res = await fetch("http://localhost:3000/api/photos")
  const data = await res.json()
  return data
}


const page = async () => {
  const gallery: Photo[] = await fetchPhotos()
  const newThumbnailUrl: string = "https://placehold.co/300x300"

  return (
    <div className="flex flex-col gap-10 items-center">
      <h1>Gallery</h1>
      <div>
        <ul className="grid grid-cols-10 gap-4">
          {gallery.map(photo => (
            <li key={photo.id}>
              <Link href={`/gallery/${photo.id}`}>
                <Image src={newThumbnailUrl} alt={`${photo.title}`} width={100} height={100}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default page