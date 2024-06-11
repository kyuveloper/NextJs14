/* 
    Next.js가 loading.tsx 파일을 찾으면 해당 url의 page 파일 내에서
    fetch가 끝날 때까지 화면 출력은 loading 파일의 화면을 사용자에게 제공해준다
*/

export default function Loading() {
    return <h2>Loading...</h2>
}