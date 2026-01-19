import { getMediaList } from "@/api/midias"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const page = Number(searchParams.get("page")) || 1
  const type = searchParams.get("type") as "tv" | "movie"

  if (!type || !["tv", "movie"].includes(type)) {
    return Response.json(
      { error: "Tipo inválido" },
      { status: 400 }
    )
  }

  const data = await getMediaList(page, type)
  return Response.json(data)
}
