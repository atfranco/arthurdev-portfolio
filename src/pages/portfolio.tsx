import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import Espacador from '@/components/Espacador';



const animation = { duration: 50000, easing: (t: number) => t }


export default function Portfolio() {

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: true,
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      })

    return(
        <>
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
            Portfólio
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
              Recentes trabalhos
            </AnimatedText>
            <Espacador />
            <Botaoglow />
            </div>
            <div className='direita'>
                <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-photo1">Aroma</div>
                <div className="keen-slider__slide number-photo2"></div>
                <div className="keen-slider__slide number-photo3"></div>
                <div className="keen-slider__slide number-photo4"></div>
                <div className="keen-slider__slide number-photo5"></div>
                <div className="keen-slider__slide number-photo6"></div>
                </div>
            </div>
        </div>
        </>
    )
}