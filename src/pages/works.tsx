import styles from '@/styles/Posts.module.css';
import Cardportfolio from '@/components/Cardportfolio';
import Espacador from '@/components/Espacador';

type Data = {
    name: string;
};

type Works = {
    id: string;
    nome: string;
    Works: any;
    descricao: any;
};

export async function getStaticProps() {
    const data = await fetch('https://arthurdev-portfolio.vercel.app/api/trabalhos')
    const works = await data.json()
    console.log(works)
    return {
        props: { works }
    }
}

export default function Works({ works }) {
    return (
        <>
        <div className='tela'>
            <div className='esquerda'>
                <h1>Trabalhos recentes</h1>
                <Espacador />
            </div>
            <div className='direita'>
                <div className={styles.formata}>
                    <div className={styles.coluna}>
                    {works.map((work) => 
                    (<Cardportfolio key={works.id} work={work} />))}
                    </div>
                </div>                
            </div>
        </div>
        </>
    )
}