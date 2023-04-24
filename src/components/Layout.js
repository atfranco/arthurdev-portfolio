import Navbar from './Navbar'
import Navbarmobile from '@/components/Navbarmobile'
import styles from '../styles/Layout.module.css'
import Topografia from '@/components/Topografia'
import Head from 'next/head'

export default function Layout({children}) {
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
        <Navbar />
            <div className={styles.container}>
                <p className={styles.htopo}>&lt;html&gt;</p>
                <p className={styles.htopo}>&lt;body&gt;</p>
                    <div className={styles.alturaminima}>{children}</div>
                <p className={styles.hbottom}>&lt;/body&gt;</p>
                <p className={styles.hbottom}>&lt;/html&gt;</p>
            </div>
        <Navbarmobile />
        <Topografia />
        </>
    )
}

