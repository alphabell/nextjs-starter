
"use client";

// This is the navigation bar component for the account area.

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function AccountNavBar() {
    return (
        <header>
            <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-12">
                        <div>
                        <Link href="/">
                            <span className="text-slate-600 font-bold text-2xl">Nextjs Starter</span>
                            </Link>
                        </div>
                        <div>
                            <button onClick={()=>signOut({callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/auth/login`})} className="text-slate-600 font-bold">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}