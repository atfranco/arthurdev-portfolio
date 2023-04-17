import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import Graficoteste from '@/components/Graficoteste';
import Graficoradar from  '@/components/Graficoradar';
import Espacador from '@/components/Espacador';
import styles from '@/styles/Sobre.module.css';


export default function Sobre() {
    return(
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
            Breve Resumo
            </AnimatedText>
            <p className='texto'>I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.</p>

            <Botaoglow />
            </div>
                <div className='direita'>
                    <div className={styles.primeirografico}>
                    <Graficoradar />
                    </div>
                    <Espacador />
                    <Espacador />
                    <div className={styles.segundografico}>
                    <Graficoteste />
                </div>
            </div>
        </div>

    )
}