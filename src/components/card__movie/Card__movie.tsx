import Link from "next/link";
import styles from "./Card__movie.module.css"

type Card__movieProps = {
    id: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
}

function slugify(text: string) {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

function Card__movie({ id, poster_path, release_date, title, vote_average }: Card__movieProps) {
    return (
        <article className={styles.card__movie} key={id}>
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} className={styles.card__movieCover} />

            <div className={styles.card__movieContents}>
                <h2 title={title}>{title}</h2>
                <div>
                    <span>{vote_average.toFixed(1) + "⭐"}</span>
                    <span>{release_date.substring(0, 4)}</span>
                </div>
            </div>
            <Link
                href={`/filmes/${id}/${slugify(title)}`}
                className={styles.card__movieLink}
            >
                <i className="fa-regular fa-circle-play"></i>
            </Link>
        </article>
    )
}

export default Card__movie