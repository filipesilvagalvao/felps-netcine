import { topMedia } from "@/api/midias"
import styles from "./Top__filmes.module.css"
import Card__movie from "@/components/card__movie/Card__movie"
import Link from "next/link"
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
    const [page] = slugs

    const data = await topMedia(+page, "movie") as DataProps

    if (!data || !data.results) {
        return <div className={styles.topMedia__error}>Nenhum filme encontrado.</div>
    }

    const { results } = data
    return (
        <main className={styles.topMedia}>
            <h2 className={styles.topMedia__title}>Top filmes</h2>
            <div className={styles.topMedia__container}>
                {
                    results.map((movie: Result) => (
                        <Card__movie
                            id={movie.id}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            key={movie.id}
                        />
                    ))
                }

            </div>
            <div className={styles.topMedia__changePageContent}>
                <Link href={`/top-filmes/${Number(page) === 1 ? 1 : Number(page) - 1}`}>Prev</Link>

                <span>{page}</span>

                <Link href={`/top-filmes/${Number(page) + 1}`}>Next</Link>
            </div>
        </main>
    )
}

export default page