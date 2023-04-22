import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import Graficoteste from '@/components/Graficoteste';
import Graficoradar from  '@/components/Graficoradar';
import Espacador from '@/components/Espacador';
import styles from '@/styles/Sobre.module.css';
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faReact,
  faNodeJs,
  faNode,
  faWordpress,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function Sobre() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel])

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
              Desenvolvedor Front End / Especialista em Wordpress / Designer Gráfico
            </AnimatedText>
            <Espacador />
            <Espacador />
            <p className='animado-texto'>
            Mais de 10 anos de experiência na criação de Sites, Ecommerce, Wordpress, dominio em Html, CSS e edição de imagens/pacote Adobe.
            </p>
            <Espacador />
            <p className='animado-texto'>          
            No momento me especializando em Javascript e banco de dados para atingir FullStack em MERN: "MongoDB + Express + React + Node.JS"
            </p>
            <Espacador />
            <div className="wrappercarousel">
              <div className="scenecarousel">
                  <div className="carousel keen-sliderr" ref={sliderRef}>
                    <div className="carousel__cell stack-slide1"><FontAwesomeIcon className={styles.icone} icon={faReact} color="#fff" /><p>React</p></div>
                    <div className="carousel__cell stack-slide2"><FontAwesomeIcon className={styles.icone} icon={faNodeJs} color="#fff" /><p>Nodejs</p></div>
                    <div className="carousel__cell stack-slide3"><FontAwesomeIcon className={styles.icone} icon={faWordpress} color="#fff" /><p>Wordpress</p></div>
                    <div className="carousel__cell stack-slide4"><FontAwesomeIcon className={styles.icone} icon={faNode} color="#fff" /><p>Node</p></div>
                    <div className="carousel__cell stack-slide5"><FontAwesomeIcon className={styles.icone} icon={faFigma} color="#fff" /><p>FIGMA</p></div>
                    <div className="carousel__cell stack-slide6"><FontAwesomeIcon className={styles.icone} icon={faGitAlt} color="#fff"/><p>Git</p></div>
                  </div>
              </div>
            </div>
            <Botaoglow />
            <Espacador /> 
            </div>
                <div className='direita'>
                    <Espacador />
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