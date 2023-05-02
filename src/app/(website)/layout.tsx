import WebsiteNavBar from "./website-nav-bar"

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <WebsiteNavBar />
            {children}
        </>
    )
}