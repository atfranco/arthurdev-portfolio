import Head from 'next/head';
import AnimatedText from '../../node_modules/react-animated-text-content';
import Botaoglow from '@/components/Botaoglow'
import Espacador from '@/components/Espacador';

export default function Home() {
  return (
    <>
      <Head>
      <title>Arthurdev.tech | Desenvolvedor front end + Designer Gráfico</title>
      <meta name="description" content="Pronto para atender empresas e profissionais liberais que busquem inclusão digital, automação e tecnologia de ponta. Com vasta experiência na criação Sites, E-commerces, Manipulação de dados e Integração de Sistemas." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Arthurdev.tech | Desenvolvedor front end + Designer Gráfico"/>
      <meta property="og:image" content="https://arthurdev-portfolio.vercel.app/screenthumb.jpg"/>
      <meta property="og:url" content="https://arthurdev.tech"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:description" content="Pronto para atender empresas e profissionais liberais que busquem inclusão digital, automação e tecnologia de ponta. Com vasta experiência na criação Sites, E-commerces, Manipulação de dados e Integração de Sistemas."/>
      <meta property="og:site_name" content="Arthurdev.tech | Desenvolvedor front end + Designer Gráfico"/>
      <meta name="twitter:image:alt" content="Conheça o portfólio"/>
      <meta property="fb:app_id" content="your_app_id"/>
      <meta name="twitter:site" content="@tutaoo"/>
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
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
            &#123;arthur.franco&#125;
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
