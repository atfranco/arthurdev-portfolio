import AnimatedText from 'react-animated-text-content';

export default function Contato() {
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
            Contato
            </AnimatedText>
        </div>

    )
}