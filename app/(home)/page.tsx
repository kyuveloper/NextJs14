import Navigation from "../../components/navigation";
/* 
    - Route Group
    상위 폴더를 괄호로 묶으면 ((home)) 해당 이름으로는 url이 생성되지 않는다. 
*/

export const metadata = {
    title: 'Home',
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise(((resolve) => setTimeout(resolve, 5000)));
    const response = await fetch(URL);
    const json = await response.json();
    return json; 
}

export default async function HomePage() {

    const movies = await getMovies();

    return (
        <div>
            {JSON.stringify(movies)}
        </div>
    );
}