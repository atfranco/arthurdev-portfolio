import AnimatedText from 'react-animated-text-content';
import Celulasgreen from '@/components/Celulasgreen';
import Espacador from '@/components/Espacador';
import styles from '@/styles/Contato.module.css';
import { Formulario } from '@/components/Formulario'
import Map from '@/components/Map';

const DEFAULT_CENTER = [-23.5400208, -46.6753272]

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
                    <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                        ease: 'ease-in-out',
                    }}
                    animationType="bounce"
                    interval={0.01}
                    duration={3}
                    tag="p"
                    className="animado-texto"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="50%">
                    Pronto para atender empresas e profissionais liberais que busquem inclusão digital, automação e tecnologia de ponta. Com vasta experiência na criação de Sistemas personalizados, E-commerces, Manipulação de dados e Integração de Sistemas.
                    </AnimatedText>
                    <Espacador />
                    <Espacador />
                    <Formulario />
                    <Espacador />
                </div>
                <div className='direita'>
                    <Map className={styles.homeMap} width="800" height="400" center={DEFAULT_CENTER} zoom={14}>
                    {({ TileLayer, Marker, Popup }) => (
                    <>
                        <TileLayer/>
                        <Marker position={DEFAULT_CENTER}>
                        <Popup>
                            MSG. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </>
                    )}
                </Map>                          
            </div>
        </div>
        </div>        
    )
}