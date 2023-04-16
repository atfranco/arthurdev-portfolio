import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import Celulasgreen from '@/components/Celulasgreen';
import Espacador from '@/components/Espacador';

export default function Contato() {
    return(
        <div>
            <Celulasgreen />
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
            <div><span className='texto'>arthurdev.tech</span></div>
            <div><span className='texto'>(11) 97565-3159</span></div>
            <div><span className='texto'>contato@arthurdev.tech</span></div>
            <Botaoglow />
        </div>

    )
}