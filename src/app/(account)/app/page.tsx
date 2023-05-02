
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";

export default async function Dashboard() {

    // We have made sure that the user is authenticated before this page is rendered, using nextjs middleware
    // See src/app/middleware.ts for more details
    const session = await getServerSession(authOptions)

    return (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="py-24">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold">My Dashboard</h1>
                        <p className="mt-2">
                            Hello <span className="underline">{session?.user.name}</span>! You're signed in!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}