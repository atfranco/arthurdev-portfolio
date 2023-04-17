import styles from '@/styles/Posts.module.css';

type Listadetrabalhos = {
    id: string;
    nome: string;
    Works: any;
};

type Data = {
    name: string;
};

export async function getStaticProps() {
    const data = await fetch('http://localhost:3000/api/trabalhos')

    const listadetrabalhos = await data.json()

    console.log(listadetrabalhos)

    return {
        props: { listadetrabalhos }
    }
}

export default function Listadetrabalhos({ listadetrabalhos }) {
    return (
        <>
        <h1>Lista de Trabalhos</h1>
        <ul className={styles.lista}>
            {listadetrabalhos.map((listadetrabalho) => (
                <li key={listadetrabalho.id}>{listadetrabalho.nome}</li>
            ))}
        </ul>
        </>
    )
}