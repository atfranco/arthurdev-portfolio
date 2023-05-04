import AnimatedText from 'react-animated-text-content';
import Espacador from '@/components/Espacador';
import styles from '@/styles/Contato.module.css';
import { Formulario } from '@/components/Formulario';
import Map from '@/components/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const LOCALIZACAO = [-23.5400208, -46.6753272]

export default function Contato() {   
  
    return (
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
                    <Espacador />
                    <div>
                        <ul>
                            <li><FontAwesomeIcon className={styles.icones} icon={faLocationDot}/><p className='animado-texto'>Perdizes - São Paulo</p></li>
                            <li><FontAwesomeIcon className={styles.icones} icon={faWhatsapp}/><p className='animado-texto'>+55 11 97565-3159</p></li>
                            <a href='mailto:contato@arthurdev.tech'>
                            <li className='comlink'><FontAwesomeIcon className={styles.icones} icon={faEnvelope}/><p className='animado-texto'>contato@arthurdev.tech</p></li>
                            </a>
                        </ul>
                    </div>
                    <Espacador />
                    <Formulario />
                    <Espacador />
                </div>
                <div className='direita'>
                    <Map className={styles.homeMap} width="800" height="400" center={LOCALIZACAO} zoom={6}>
                {({ TileLayer, Marker }) => (
                <>
                        <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={LOCALIZACAO}/>
                        </>
                        )}
                    </Map>                         
                </div>
            </div>       
    )
}