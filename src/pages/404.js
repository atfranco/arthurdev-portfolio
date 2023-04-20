import Link from "next/link";
import styles from '../styles/404.module.css';
import Espacador from '../components/Espacador'

export default function Naoencontrado() {
    return (
        <>
        <div className={styles.telaerro}>
            <h1 className={styles.h1}>404</h1>
            <h2 className={styles.h2}>Esta pagina não existe</h2>
            <Espacador />
            <Link href='/'><h1 className={styles.voltar}>Voltar</h1></Link>
        </div>
        </>
    )
}