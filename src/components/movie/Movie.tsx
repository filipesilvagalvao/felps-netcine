import { getMedia } from "@/api/midias"
import styles from "./Movie.module.css"

type MovieProps = {
    id_tmdb: string,
    media: "filme",
    typeMediaTMDB: "tv" | "movie"
}

async function Movie({ id_tmdb, media, typeMediaTMDB }: MovieProps) {
    const movie = await getMedia(id_tmdb, typeMediaTMDB)

    if (!movie || !movie.id) {
        return <div className={styles.movie__error}>Filme não encontrado.</div>
    }
    return (
        <section className={styles.movie}>

            <div className={styles.movie__imgContent}>
                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.name} className={styles.movie__img} />
            </div>

            <div className={styles.movie__content}>

                <h2 className={styles.movie__title}>Assistir {movie.title}</h2>

                <p className={styles.movie__}><span>Overview</span>: {movie.overview}</p>

                <p><span>Gênero</span>: {movie.genres.map((genre: { id: number; name: string }) => genre.name).join(", ")}</p>

                <p><span>TMDB</span>: {movie.vote_average.toFixed(1)}⭐</p>

                <iframe src={`https://superflixapi.buzz/${media}/${id_tmdb}`} className={styles.movie__video} allow="encrypted-media" allowFullScreen loading="lazy"></iframe>
            </div>
        </section>
    )
}

export default Movie