/* 
    [] 대괄호 안에 id를 넣으면 Next.js가 해당 폴더를 읽어 page 파일을 화면으로 출력한다.
*/

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// import { API_URL } from "../../../(home)/page"

// async function getMovie(id: string) {
//     console.log(`Fetching Movies: ${Date.now()}`)
//     await new Promise(((resolve) => setTimeout(resolve, 5000)));
//     const response = await fetch(`${API_URL}/${id}`)

//     return response.json();
// }

// async function getVideos(id: string) {
//     console.log(`Fetching Videos: ${Date.now()}`)
//     await new Promise(((resolve) => setTimeout(resolve, 5000)));
//     const response = await fetch(`${API_URL}/${id}/videos`)

//     return response.json();
// }

export default async function MovieDetail({params: {id}}: {params: {id: string}}) {
    
    /*
        - http://localhost:3000/movies/1212 일 때
        { params: { id: '1212' }, searchParams: {} }

        - http://localhost:3000/movies/1212?region=kr&page=2 일 때
        { params: { id: '1212' }, searchParams: { region: 'kr', page: '2' } }
    */

    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    /* 
        Promise.all을 통해서 안에 있는 array의 fetch들을 동시에 진행하며
        모두 마무리될 때까지 기다렸다가 fetch가 끝나면 array로 반환한다
    */
    
    // return <h1>{movie.title}</h1>

    return (
        <div>
            {/* 
                Suspense 안에 있는 컴포넌트의 fetch가 끝날 때까지 fallback 함수를 사용자에게 보여주고
                fetch가 끝나면 컴포넌트를의 결과를 화면에 출력한다.
                이런 경우엔 해당 URL 내의 loading 파일은 읽지 않는다.
                모든 컴포넌트가 끝날 때까지 로딩화면을 볼 필요가 없이, fetch가 끝나는 컴포넌트 순으로 화면에 출력하기 때문에
                사용자 편의성이 증가한다
            */}
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<h1>Loading movie video</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}