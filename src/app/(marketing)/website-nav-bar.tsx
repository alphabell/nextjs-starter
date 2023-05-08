import Link from "next/link";

export default function WebsiteNavBar() {
    return (
        <header>
            <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-12">
                        <div>
                        <Link href="/"><span className="text-slate-600 font-bold text-2xl">Nextjs Starter</span></Link>
                        </div>
                        <div>
                            <Link href="/auth/login" className="text-slate-600 font-bold">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}