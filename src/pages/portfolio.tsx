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
              <div className={styles.enquadragaleria}></div>
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">1</div>
              <div className="keen-slider__slide number-slide2">2</div>
              <div className="keen-slider__slide number-slide3">3</div>
              <div className="keen-slider__slide number-slide4">4</div>
              <div className="keen-slider__slide number-slide5">5</div>
              <div className="keen-slider__slide number-slide6">6</div>
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
              <div className="keen-slider__slide number-slide1">1</div>
              <div className="keen-slider__slide number-slide2">2</div>
              <div className="keen-slider__slide number-slide3">3</div>
              <div className="keen-slider__slide number-slide4">4</div>
              <div className="keen-slider__slide number-slide5">5</div>
              <div className="keen-slider__slide number-slide6">6</div>
            </div>
              
            </div>
        </div>
        </>
    )
}