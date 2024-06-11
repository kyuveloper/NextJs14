import Link from "next/link";
import Navigation from "../../components/navigation";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
/* 
    - Route Group
    상위 폴더를 괄호로 묶으면 ((home)) 해당 이름으로는 url이 생성되지 않는다. 
*/

export const metadata = {
    title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    await new Promise(((resolve) => setTimeout(resolve, 1000)));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {

    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
            )
            )}
            {/* <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                    {movie.title}
                </Link>
            </li>)} */}
        </div>
    );
}