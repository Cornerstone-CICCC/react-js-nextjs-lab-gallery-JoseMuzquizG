export const revalidate = 600

export async function GET(
  request: Request,
  { params }: {params: { id: string }}
) {
  const { id } = await params

  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  const data = await res.json()
  return Response.json(data)
}