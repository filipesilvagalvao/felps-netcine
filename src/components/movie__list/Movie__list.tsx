"use client"
import styles from "./Movie__list.module.css"
import { useEffect, useState } from "react"
import Card__movie from "../card__movie/Card__movie"
import { mediaList } from "@/api/midias"
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
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
type MoviesProps = {
    page: number,
    results: Results[],
    total_pages: number,
    total_results: number
}

function Movie__list() {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState<MoviesProps | null>(null)

    const changePage = (switcher: boolean) => {

        if (page === 1 && (!switcher)) {
            return
        }

        switcher ? setPage(page => page + 1) : setPage(page => page - 1)
    }



    useEffect(() => {
        async function loadMovies() {
            const filmes = await mediaList(page,"movie")
            setMovies(filmes)
        }
        loadMovies()
    }, [page])

    if(!movies){return <Spinner/>}

    return (
        <section className={styles.movies}>
            <div className={styles.movies__container}>
                {
                    movies?.results.map((movie, i) => (
                        <div className={styles.item} style={{ ['--i' as any]: i }} key={movie.id}>
                            <Card__movie 
                            id={movie.id} 
                            poster_path={movie.poster_path} 
                            release_date={movie.release_date}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            />
                        </div>
                    ))
                }
            </div>

            <div className={styles.movies__changePageContent}>
                <button className={styles.movies__changePage} onClick={() => changePage(false)}>Prev</button>

                <span>{page}</span>

                <button className={styles.movies__changePage} onClick={() => changePage(true)}>Next</button>
            </div>
        </section>
    )
}

export default Movie__list