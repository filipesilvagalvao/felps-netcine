"use client"
import { FormEvent, useState } from "react"
import styles from "./Search__bar.module.css"
import { useRouter } from "next/navigation"

function Search_bar() {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        if (!query.trim()) return

        router.push(`/pesquisar?q=${encodeURIComponent(query)}`)

        setQuery("")
    }

    return (
        <>
            <input type="checkbox" id="searchToggle" className={styles.checkbox__search} />

            <label htmlFor="searchToggle" className={styles.label__search}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <form onSubmit={handleSearch} className={styles.header__search}>

                <input
                    type="search"
                    value={query}
                    placeholder="Buscar conteúdo..."
                    className={styles.header__searchInput}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button className={styles.header__searchBtn}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </>

    )
}

export default Search_bar