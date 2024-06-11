import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

async function getVideos(id: string) {
    // console.log(`Fetching Videos: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error('something broke..') -> 에러 발생시키기
    const response = await fetch(`${API_URL}/${id}/videos`)

    return response.json();
}

export default async function MovieVideos({id}:{id: string}) {
    const videos = await getVideos(id);
    return (
        <div >
            {videos.map((video) => (
            <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
            />))}
        </div>
    )
}