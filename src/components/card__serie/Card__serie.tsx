import Link from "next/link"
import styles from "./Card__serie.module.css"

type Card__serieProps = {
    id: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average: number
}


function slugify(text: string) {
    return text
        .toString()
        .normalize("NFD")                 // remove acentos
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")      // remove caracteres especiais
        .replace(/\s+/g, "-")              // espaços por hífen
        .replace(/-+/g, "-");              // remove hífens duplicados
}

function Card__serie({ id, poster_path, name, vote_average, first_air_date }: Card__serieProps) {
    return (
        <article className={styles.card__serie} key={id}>
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={name} className={styles.card__serieCover} />

            <div className={styles.card__serieContents}>
                <h2 title={name}>{name}</h2>
                <div>
                    <span>{vote_average.toFixed(1) + "⭐"}</span>
                    <span>{first_air_date.substring(0, 4)}</span>
                </div>
            </div>
            <Link
                href={`/series/${id}/${slugify(name)}`}
                className={styles.card__serieLink}
            >
                <i className="fa-regular fa-circle-play"></i>
            </Link>
        </article>
    )
}

export default Card__serie