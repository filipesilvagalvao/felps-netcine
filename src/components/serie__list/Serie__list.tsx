"use client"
import styles from "./Serie__list.module.css"
import { useEffect, useState } from "react"
import { mediaList } from "@/api/midias"
import Card__serie from "../card__serie/Card__serie"
import Spinner from "../spinner/Spinner"

type Results = {
    adult: boolean,
    backdrop_path: boolean,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
type SeriesProps = {
    page: number,
    results: Results[],
    total_pages: number,
    total_results: number
}

function Serie__list() {
    const [page, setPage] = useState(1)
    const [series, setSeries] = useState<SeriesProps | null>(null)

    const changePage = (switcher: boolean) => {

        if (page === 1 && (!switcher)) {
            return
        }

        switcher ? setPage(page => page + 1) : setPage(page => page - 1)
    }

    useEffect(() => {
        async function loadSeries() {
            const tv = await mediaList(page,"tv")
            setSeries(tv)
        }
        loadSeries()
    }, [page])

    if(!series){return <Spinner/>}
    
    return (
        <section className={styles.series}>
            <div className={styles.series__container}>
                {
                    series?.results.map((serie, i) => (
                        <div className={styles.item} style={{ ['--i' as any]: i }} key={serie.id}>
                            <Card__serie
                            id={serie.id} 
                            poster_path={serie.poster_path} 
                            first_air_date={serie.first_air_date}
                            name={serie.name}
                            vote_average={serie.vote_average}
                            />
                        </div>
                    ))
                }
            </div>

            <div className={styles.series__changePageContent}>
                <button className={styles.series__changePage} onClick={() => changePage(false)}>Prev</button>

                <span>{page}</span>

                <button className={styles.series__changePage} onClick={() => changePage(true)}>Next</button>
            </div>
        </section>
    )
}

export default Serie__list