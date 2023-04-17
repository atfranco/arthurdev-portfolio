import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import Graficoteste from '@/components/Graficoteste';
import Graficoradar from  '@/components/Graficoradar';
import Espacador from '@/components/Espacador';
import styles from '@/styles/Sobre.module.css';
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

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
        [carousel]
      )

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
            <p className='texto'>I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.</p>
            <Espacador />
            <div className="wrappercarrousel">
            <div className="scenecarrousel">
                <div className="carousel keen-slider" ref={sliderRef}>
                <div className="carousel__cell number-slide1 ">ABC</div>
                <div className="carousel__cell number-slide2">2</div>
                <div className="carousel__cell number-slide3">3</div>
                <div className="carousel__cell number-slide4">4</div>
                <div className="carousel__cell number-slide5">5</div>
                <div className="carousel__cell number-slide6">6</div>
                </div>
            </div>
            </div>
            <Espacador />
            <Botaoglow />
            <Espacador /> 
            </div>
                <div className='direita'>
                    <div className={styles.primeirografico}>
                        <p className='texto'>Interesses</p>
                    <Graficoradar />
                    </div>
                    <Espacador />
                    <Espacador />
                    <div className={styles.segundografico}>
                        <p className='texto'>Experiência</p>
                    <Graficoteste />
                </div>
            </div>
        </div>

    )
}