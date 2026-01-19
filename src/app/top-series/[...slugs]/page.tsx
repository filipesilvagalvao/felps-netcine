import { topMedia } from "@/api/midias"
import styles from "./Top__series.module.css"
import Link from "next/link"
import Card__serie from "@/components/card__serie/Card__serie"
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

    const data = await topMedia(+page, "tv")

    if(!data || !data.results) {
        return <div className={styles.topMedia__error}>Nenhuma série encontrada.</div>
    }
    const { results } = data
    return (
        <main className={styles.topMedia}>
            <h2 className={styles.topMedia__title}>Top séries</h2>
            <div className={styles.topMedia__container}>
                {
                    results.map((serie: Result) => (
                        <Card__serie
                            id={serie.id}
                            poster_path={serie.poster_path}
                            first_air_date={serie.first_air_date}
                            name={serie.name}
                            vote_average={serie.vote_average}
                            key={serie.id}
                        />
                    ))
                }

            </div>
            <div className={styles.topMedia__changePageContent}>
                <Link href={`/top-series/${Number(page) === 1 ? 1 : Number(page) - 1}`}>Prev</Link>

                <span>{page}</span>

                <Link href={`/top-series/${Number(page)+1}`}>Next</Link>
            </div>
        </main>
    )
}

export default page