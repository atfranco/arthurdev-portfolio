import styles from '../styles/Botaoglow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'

export default function Botaoglow() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.btn}>                    
                    <a href="#"><FontAwesomeIcon className={styles.icones} icon={faMailForward}/>Entre em contato</a>
                </div>
            </div>
        </>
    )
}





