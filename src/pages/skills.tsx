import AnimatedText from 'react-animated-text-content';
import Botaoglow from '@/components/Botaoglow';
import dynamic from 'next/dynamic';

const Chartforce = dynamic(() => import('@/components/Chartforce'), {
    ssr: false,
  })

export default function Skills() {
    return(
        <div>
            <Chartforce />
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
            Habilidades
            </AnimatedText>
            <Botaoglow />
        </div>

    )
}