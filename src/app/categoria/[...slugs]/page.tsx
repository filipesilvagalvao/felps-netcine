import { movieGenres, tvGenres } from '@/api/ids'
import { getCategory } from '@/api/midias'
import Card__movie from '@/components/card__movie/Card__movie'
import Card__serie from '@/components/card__serie/Card__serie'
import Link from 'next/link'
import styles from "./Categoria.module.css"

type PageParams = {
  params: {
    slugs: (number | string)[]
  }
}

type DataProps = {
  page: number,
  results: Result[],
  total_pages: number,
  total_results: number
}

type Result = {
  adult: boolean,
  backdrop_path: string | null,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  first_air_date: string,
  name: string
}


async function page({ params }: PageParams) {

  const { slugs } = await params
  const [id, type, genre, page] = slugs

  const media = type === "filmes" ? "movie" : "tv"

  const data = await getCategory(media, +id, +page) as DataProps

  if (!data || !data.results) {
    return <div className={styles.category__error}>Nenhum filme ou série encontrado.</div>
  }
  const { results } = data


  return (
    <main className={styles.category}>
      <h2 className={styles.category__title}>Categoria: {type === "filmes" ? movieGenres[+id] : tvGenres[+id]}</h2>
      <div className={styles.category__container}>
        {results?.map((typeMedia: Result) => (
          (typeMedia.overview && typeMedia.poster_path) && (media === "movie" ?
            <Card__movie
              id={typeMedia.id}
              poster_path={typeMedia.poster_path}
              release_date={typeMedia.release_date}
              title={typeMedia.title}
              vote_average={typeMedia.vote_average}
              key={typeMedia.id}
            /> :
            <Card__serie
              id={typeMedia.id}
              poster_path={typeMedia.poster_path}
              first_air_date={typeMedia.first_air_date}
              name={typeMedia.name}
              vote_average={typeMedia.vote_average}
              key={typeMedia.id}
            />)
        ))}

      </div>
      <div className={styles.category__changePageContent}>
        <Link href={`/categoria/${id}/${type}/${genre}/${Number(page) === 1 ? 1 : Number(page) - 1}`}>Prev</Link>

        <span>{page}</span>

        <Link href={`/categoria/${id}/${type}/${genre}/${Number(page)+1}`}>Next</Link>
      </div>
    </main>
  )
}

export default page