import Link from "next/link"
import styles from "./Header.module.css"
import Search_bar from "../search__bar/Search_bar"
import { movieGenres, tvGenres } from "@/api/ids"

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

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>

                <h1 className={styles.header__logo}>

                    <Link href="/"><img src="/netcine-logo.png" alt="logo" />
                    </Link>
                </h1>

                <input type="checkbox" id="menuToggle" className={styles.checkbox__hamburger} />
                <label htmlFor="menuToggle" className={styles.label__hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={styles.header__nav}>
                    <Link href="/"><i className="fa-regular fa-house"></i> Home</Link>
                    <Link href="/top-filmes/1" prefetch><i className="fa-solid fa-trophy"></i> Top filmes</Link>
                    <Link href="/top-series/1" prefetch><i className="fa-solid fa-trophy"></i> Top séries</Link>

                    <div className={styles.header__dropDownCategory}>

                        <input type="checkbox" id="movieDrop" className={styles.header__movieDrop} />

                        <label htmlFor="movieDrop" className={styles.header__category}>
                            Filmes <i className="fa-solid fa-caret-right"></i>
                        </label>

                        <ul className={styles.header__list}>
                            {
                                Object.entries(movieGenres).map(([key, value]) => (
                                    <li key={value}>
                                        <a
                                            href={`/categoria/${key}/filmes/${slugify(value)}/1`}
                                        >{value}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles.header__dropDownCategory}>

                        <input type="checkbox" id="tvDrop" className={styles.header__tvDrop} />

                        <label htmlFor="tvDrop" className={styles.header__category}>
                            Séries <i className="fa-solid fa-caret-right"></i>
                        </label>

                        <ul className={styles.header__list}>
                            {
                                Object.entries(tvGenres).map(([key, value]) => (
                                    <li key={value}>
                                        <a
                                            href={`/categoria/${key}/series/${slugify(value)}/1`}
                                        >{value}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>

                <Search_bar />

            </div>
        </header>
    )
}

export default Header