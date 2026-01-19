"use client"
import { ChangeEvent, useState } from "react"
import styles from "./Switcher.module.css"
import Movie__list from "../movie__list/Movie__list"
import Serie__list from "../serie__list/Serie__list"

function Switcher() {
    const [show, setShow] = useState<string>("movies")
    return (
        <section className={styles.switcher}>

            <div className={styles.switcher__content}>
                <input
                    type="radio"
                    name="midia"
                    id="movies"
                    className={styles.switcher__input}
                    checked={show === "movies"}
                    value="movies"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setShow(e.target.value)}
                />
                <label htmlFor="movies" className={styles.switcher__label}>
                    <i className="fa-solid fa-film"></i> Filmes
                </label>

                <input
                    type="radio"
                    name="midia"
                    id="tvs"
                    className={styles.switcher__input}
                    checked={show === "tvs"}
                    value="tvs"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setShow(e.target.value)}
                />
                <label htmlFor="tvs" className={styles.switcher__label}>
                    <i className="fa-solid fa-layer-group"></i> Séries
                </label>
            </div>

            <div>
                {show === "movies" ? <Movie__list /> : <Serie__list />}
            </div>
        </section>
    )
}

export default Switcher