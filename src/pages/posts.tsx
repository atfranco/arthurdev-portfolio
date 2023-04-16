import styles from '@/styles/Posts.module.css';

export async function getStaticProps() {
    const data = await  fetch('https://jsonplaceholder.typicode.com/posts')

    const posts = await data.json()

    console.log(posts)

    return {
        props: { posts }
    }
}

export default function Posts({ posts }) {
    return (
        <>
        <h1>Postagens</h1>
        <ul className={styles.lista}>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </>
    )
}