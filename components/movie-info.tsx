import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css"

async function getMovie(id: string) {
    console.log(`Fetching Movies: ${Date.now()}`)
    // await new Promise(((resolve) => setTimeout(resolve, 5000)));
    const response = await fetch(`${API_URL}/${id}`)

    return response.json();
}

export default async function MovieInfo({id}:{id: string}) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h1>🎬 {movie.vote_average.toFixed(1)}</h1>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    )
}