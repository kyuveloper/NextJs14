"use client"

/* 
    에러가 발생하더라도 전체 페이지에 에러 발생이 아닌
    해당 컴포넌트 부분에만 에러 메시지를 출력하면서 다른 페이지 기능에는
    영향을 끼치지 않는다
*/
export default function ErrorOMG() {
    return <h1>Something broke...!</h1> // 사용자 화면에 출력되는 메시지
}