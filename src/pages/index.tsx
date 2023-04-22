import Head from 'next/head';
import AnimatedText from '../../node_modules/react-animated-text-content';
import Botaoglow from '@/components/Botaoglow'
import Espacador from '@/components/Espacador';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arthur.dev | Dev + Design</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='tela'>
        <div className='esquerda'>
          <AnimatedText
            type="chars" // animate words or chars
            animation={{
              ease: 'ease-in-out',
            }}
            animationType="throw"
            interval={0.1}
            duration={1}
            tag="p"
            className="animado-titulo"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="50%">
            &#123;Arthur.Franco&#125;
          </AnimatedText>
          <Espacador />
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.1}
            duration={1}
            tag="p"
            className="animado-subtitulo"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="50%">
            Desenvolvedor Front End + Especialista em Wordpress + Designer Gráfico
          </AnimatedText>
          <Espacador />
          <p className='animado-texto'>Pronto para atender empresas e profissionais liberais que busquem inclusão digital, automação e tecnologia de ponta. Com vasta experiência na criação Sites, E-commerces, Manipulação de dados e Integração de Sistemas.</p>
          <Botaoglow />
        </div>
        <div className='direita'></div>
      </div>
    </>
  )
}
