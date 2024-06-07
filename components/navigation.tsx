/* 
    Next.js는 나의 자바스크립트 코드들을 server side rendering을 통해 모두 읽은 후에
    page의 request에 대한 response로 전달하기 때문에 React만으로 개발하는 것보다 많은 이점이 있다.

    "use client"가 client server rendering을 의미하는 것이 아닌다.
    모든 컴포넌트와 페이지들은 먼저 server side rendering이 된다.
    (rendering이란 나의 자바스크립트 코드들을 html 코드로 변환해서 UI를 만드는 것)

    사용자가 페이지에 접근하면 일단 redering을 통해 만들어진 UI(HTML코드)를 제공하고나서
    hydration을 통해 React Component를 렌더링해서 UI에 입힌다.
    유저가 알아채기 전에 빠르게 server side rendering을 통해 사용자 경험을 향상시킬 수 있다.

    React만으로 만들어진 페이지는 client 단에서 rendering 되기 때문에 자바스크립트를 비활성화 하면 UI가 생성되지 않으며
    로딩 시간도 더 소요된다.
*/

"use client"
// 해당 컴포넌트를 hydration을 통해 렌더링 하겠다. 클라이언트에서 렌더링하겠다는 의미가 아님
// use client 작성하지 않으면 해당 컴포넌트는 클라이언트 단에서 렌더링되지 않음 (효율적임)

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation () {

    const path = usePathname();
    // const [count, setCount] = useState(0);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path ==="/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path ==="/about-us" ? "🔥" : ""}
                </li>
                {/* <li>
                    <button onClick={()=> setCount((c)=>c+1)}>{count}</button>
                </li> */}
            </ul>
        </nav>
    )
}