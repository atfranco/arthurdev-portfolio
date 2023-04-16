import Celulas from '../components/Celulas'
import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';

export default function Sobre() {
    return(
        <div>
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
            <Botaoglow />
        </div>

    )
}