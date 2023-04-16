import styles from '../styles/Botaoglow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Botaoglow() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.btn}>                    
                    <Link
                     href={{
                        pathname: '/contato',
                    }}>
                    <FontAwesomeIcon className={styles.icone} icon={faMailForward}/>Entre em contato
                    </Link>
                </div>
            </div>
        </>
    )
}





