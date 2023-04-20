import styles from '@/styles/Posts.module.css';

type Data = {
    name: string;
};

type Works = {
    id: string;
    nome: string;
    descricao: string;
    Works: any;
};


//const Endereco="http://localhost:3000"
const Endereco="https://arthurdev-portfolio.vercel.app/"

export async function getStaticProps() {
    const data = await fetch(Endereco + '/api/trabalhos')

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
            </div>
            <div className='direita'>
                <div className={styles.formata}>
                    <div className={styles.coluna}>
                    {works.map((work) => (<p key={work.id}>{work.nome}</p>))}
                    </div>
                    <div className={styles.coluna}>
                    {works.map((work) => (<p key={work.id}>{work.descricao}</p>))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}