import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossOrigin=""/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"></script>
     </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
