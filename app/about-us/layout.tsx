/* AboutUs 컴포넌트만을 위한 레이아웃 */

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            &copy; Next Js is great!
        </div>
    )
}
