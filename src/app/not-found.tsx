import Link from "next/link"
import styles from "./not-found.module.css"
function Not_found() {
  return (
    <main className={styles.notfound}>
        <h1>404</h1>
        <p>Essa página não existe</p>
        <Link href="/">Voltar para a home</Link>
    </main>
  )
}

export default Not_found