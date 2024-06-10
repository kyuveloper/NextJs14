/* 
    [] 대괄호 안에 id를 넣으면 Next.js가 해당 폴더를 읽어 page 파일을 화면으로 출력한다.
*/

export default function MovieDetail({params: {id}}: {params: {id: string}}) {
    
    /*
        - http://localhost:3000/movies/1212 일 때
        { params: { id: '1212' }, searchParams: {} }

        - http://localhost:3000/movies/1212?region=kr&page=2 일 때
        { params: { id: '1212' }, searchParams: { region: 'kr', page: '2' } }
    */
    
    return <h1>Movie {id}</h1>
}