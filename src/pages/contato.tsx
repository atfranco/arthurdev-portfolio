import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import Celulasgreen from '@/components/Celulasgreen';
import Espacador from '@/components/Espacador';
import styles from '@/styles/Contato.module.css';
import { Formulario } from '@/components/Formulario'

export default function Contato() {
    return (
        <div>
            <Celulasgreen />
            <div className='tela'>
                <div className='esquerda'>
                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            ease: 'ease-in-out',
                        }}
                        animationType="throw"
                        interval={0.1}
                        duration={1.5}
                        tag="p"
                        className="animado-titulo"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="50%">
                        Contato
                    </AnimatedText>
                    <Espacador />
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            ease: 'ease-in-out',
                        }}
                        animationType="bounce"
                        interval={0.2}
                        duration={1}
                        tag="p"
                        className="animado-subtitulo"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="50%">
                        Vamos fazer sua empresa crescer?
                    </AnimatedText>
                    <Espacador />
                    <p className='texto'>I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.</p>
                    <Espacador />
                    <Espacador />
                    <Formulario />
                    <Espacador />
                </div>
                <div className='direita'>
                <div className={styles.mapa}>
                <h1>MAPA</h1>
                </div>
            </div>
        </div>
        </div>        
    )
}