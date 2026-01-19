import styles from "./Card__carousel.module.css"
import Link from "next/link"

type Card__carouselProps = {
    cover: `https://image.tmdb.org/t/p/w1280/${string}`,
    name: string,
    average: number,
    genders: string[],
    year: number,
    overview: string,
    link: `/filmes/${string}` | `/series/${string}`

}

function Card__carousel({ cover, name, average, genders, year, overview, link }: Card__carouselProps) {
    return (
        <article className={styles.card}>
            <figure className={styles.card__figure}>
                <img src={cover} alt={name} className={styles.card__img} />

                <figcaption className={styles.card__figcaption}>

                    <h2 className={styles.card__title}>{name}</h2>

                    <ul className={styles.card__list}>
                        <li>⭐ {average.toFixed(1)}</li>

                        {genders.map((gender) => <li key={gender}>{gender}</li>)}
                        
                        <li>{year}</li>
                    </ul>

                    <p className={styles.card__overview}>
                        {overview}
                    </p>

                    <Link href={link} className={styles.card__link}>Assistir Agora <i className="fa-regular fa-circle-play"></i></Link>
                </figcaption>
            </figure>
        </article>
    )
}

export default Card__carousel