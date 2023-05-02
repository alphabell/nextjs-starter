
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-24 lg:px-8">
            {children}
        </div>
    )
}