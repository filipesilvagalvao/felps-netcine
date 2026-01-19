import { getMedia } from "@/api/midias"
import styles from "./Serie.module.css"
type SerieProps = {
    id_tmdb: string,
    media: "serie" | "anime",
    typeMediaTMDB: "tv" | "movie"
}

async function Serie({ id_tmdb, media, typeMediaTMDB }: SerieProps) {
    const serie = await getMedia(id_tmdb, typeMediaTMDB)

    if (!serie || !serie.id) {
        return <div className={styles.serie__error}>Série não encontrada.</div>
    }

    return (
        <main className={styles.serie}>

            <div className={styles.serie__imgContent}>
                <img src={`https://image.tmdb.org/t/p/w1280${serie.backdrop_path}`} alt={serie.name} className={styles.serie__img} />
            </div>

            <div className={styles.serie__content}>

                <h2 className={styles.serie__title}>Assistir {serie.name}</h2>

                <p className={styles.serie__}><span>Overview</span>: {serie.overview}</p>

                <p><span>Gênero</span>: {serie.genres?.map((genre: { id: number; name: string }) => genre.name).join(", ")}</p>

                <p><span>TMDB</span>: {serie.vote_average?.toFixed(1)}⭐</p>

                <iframe src={`https://superflixapi.buzz/${media}/${id_tmdb}`} className={styles.serie__video} allow="encrypted-media" allowFullScreen loading="lazy"></iframe>
            </div>
        </main>
    )
}

export default Serie