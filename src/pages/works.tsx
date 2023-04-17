import styles from '@/styles/Posts.module.css';

type Data = {
    name: string;
  };

type Works = {
    id: string;
    nome: string;
    Works: any;
};


export async function getStaticProps() {
    const data = await fetch('http://localhost:3000/api/trabalhos')

    const works = await data.json()

    console.log(works)

    return {
        props: { works }
    }
}

export default function Works({ works }) {
    return (
        <>
        <h1>Works</h1>
        <ul className={styles.lista}>
            {works.map((work) => (
                <li key={work.id}>{work.nome}</li>
            ))}
        </ul>
        </>
    )
}