import { getMedia } from '@/api/midias'
import Movie from '@/components/movie/Movie'
import { Metadata } from 'next'
type PageProps = {
  params: Promise<{
    slugs: string[]
  }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slugs } = await params
  const [id] = slugs

  const movie = await getMedia(id, "movie")

  const canonicalUrl = `${baseUrl}/filmes/${id}`

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [
        {
          url: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          width: 1200,
          height: 630,
          alt: movie.title,
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
      <Movie id_tmdb={id} media='filme' typeMediaTMDB='movie' />
    </main>
  )
}

export default page