import { Photo } from "@/app/gallery/page"

export const revalidate = 600

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
  const data = await res.json()

  const newGallery = data.map((photo: Photo) => {
    return {...photo,
    id: photo.id,
    title: photo.title,
    thumbnailUrl: "https://placehold.co/300x300",
    url: "https://placehold.co/1000x1000"}
  })

  return Response.json(newGallery)
} 

