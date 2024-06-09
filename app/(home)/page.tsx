import Navigation from "../../components/navigation";
/* 
    - Route Group
    상위 폴더를 괄호로 묶으면 ((home)) 해당 이름으로는 url이 생성되지 않는다. 
*/

export const metadata = {
    title: 'Home',
    description: 'The best movies on the best framework',
}

export default function Page() {
    return (
        <div>
            <h1>Hello!</h1>
        </div>
    );
}