import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import Image from 'next/image'
import Espacador from '@/components/Espacador';
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { MutableRefObject } from 'react';
import styles from '@/styles/Portfolio.module.css'
import Topografia from '@/components/Topografia'
import Vtrunk from '@/components/Vtrunk'
import Vhalo from '@/components/Vhalo'

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}


export default function Portfolio() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

    return(
        <>
        <Vhalo />
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
            <p className='texto'>I am interested in freelance opportunities.</p>
            <p className='texto'>Especialidade em freelance opportunities.</p>
            <Botaoglow />
            </div>
            <div className='direita'>
              <div className={styles.enquadragaleria}>
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"></div>
                <div className="keen-slider__slide number-slide2"></div>
                <div className="keen-slider__slide number-slide3"></div>
                <div className="keen-slider__slide number-slide4"></div>
                <div className="keen-slider__slide number-slide5"></div>
                <div className="keen-slider__slide number-slide6"></div>
              </div>
              <div ref={thumbnailRef} className="keen-slider thumbnail">
                <div className="keen-slider__slide number-slide1">PLANOACCD</div>
                <div className="keen-slider__slide number-slide2">ADVOCACIA MARQUESI</div>
                <div className="keen-slider__slide number-slide3">LAYOUT EVENTOS</div>
                <div className="keen-slider__slide number-slide4">FMMLR SHOP</div>
                <div className="keen-slider__slide number-slide5">EKOPUFFS</div>
                <div className="keen-slider__slide number-slide6">LOMA CONSULTORIA</div>
              </div>
              </div>              
            </div>
        </div>
        </>
    )
}