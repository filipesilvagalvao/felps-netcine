import styles from "./Footer.module.css"

function Footer() {
    const date = new Date()

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <p>&copy; Todos os direitos reservados - {date.getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer