import { searchMedia } from "@/api/midias"
import styles from "./Search.module.css"
import Card__movie from "@/components/card__movie/Card__movie"
import Card__serie from "@/components/card__serie/Card__serie"
type SearchPageProps = {
    searchParams: {
        q?: string
    }
}

type ResultInfoProps = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    name: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: "movie" | "tv",
    original_language: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    first_air_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type Result = {
    results: ResultInfoProps[]
}
async function page({ searchParams }: SearchPageProps) {

    const params = await searchParams
    const data: Result = !!params.q && await searchMedia(params.q)

    if (!data || !data.results || data.results.length === 0) {
        return <div className={styles.search__error}>Nenhum resultado encontrado para {params.q}</div>
    }

    const { results } = data
    return (
        <main className={styles.search}>
            <h2 className={styles.search__title}>Resultados para: {params.q}</h2>
            <div className={styles.search__container}>

                {results.map((media) => (
                    (media.overview && media.poster_path) && (media.media_type === "movie" ?
                        <Card__movie
                            id={media.id}
                            poster_path={media.poster_path}
                            release_date={media.release_date}
                            title={media.title}
                            vote_average={media.vote_average}
                            key={media.id}
                        /> :
                        <Card__serie
                            id={media.id}
                            poster_path={media.poster_path}
                            first_air_date={media.first_air_date}
                            name={media.name}
                            vote_average={media.vote_average}
                            key={media.id}
                        />)
                ))}
            </div>
        </main>
    )
}

export default page