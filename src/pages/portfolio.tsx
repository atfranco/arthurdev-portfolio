import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';

export default function Portfolio() {
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
            Portfolio
            </AnimatedText>
            <Botaoglow />
        </div>

    )
}