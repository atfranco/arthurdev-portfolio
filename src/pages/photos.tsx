import styles from '@/styles/Posts.module.css';

export async function getStaticProps() {
    const data = await  fetch('https://jsonplaceholder.typicode.com/photos')

    const photos = await data.json()

    console.log(photos)

    return {
        props: { photos }
    }
}

export default function Photos({ photos }) {
    return (
        <>
        <h1>Photos</h1>
        <ul className={styles.lista}>
            {photos.map((photo) => (
                <li key={photo.id}>{photo.title}</li>
            ))}
        </ul>
        </>
    )
}