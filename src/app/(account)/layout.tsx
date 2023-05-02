import AccountNavBar from "./account-nav-bar"

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <AccountNavBar />
            {children}
        </>
    )
}