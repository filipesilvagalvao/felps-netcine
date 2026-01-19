import { getMedia } from "@/api/midias"
import Serie from "@/components/serie/Serie"
import { Metadata } from "next"

type PageProps = {
  params: Promise<{
    slugs: string[]
  }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slugs } = await params
  const [id] = slugs

  const serie = await getMedia(id, "tv")

  const canonicalUrl = `${baseUrl}/series/${id}`

  return {
    title: serie.name,
    description: serie.overview,
    openGraph: {
      images: [
        {
          url: `https://image.tmdb.org/t/p/original${serie.backdrop_path}`,
          width: 1200,
          height: 630,
          alt: serie.title,
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    }
  }
}

async function page({ params }: PageProps) {
  const { slugs } = await params
  const [id] = slugs

  return (
    <main>
      <Serie id_tmdb={id} media="serie" typeMediaTMDB="tv" />
    </main>
  )
}

export default page