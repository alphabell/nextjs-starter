import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavigationBar from './website-nav-bar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="py-24">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">This is the NextJs Starter Home Page</h1>
            <p className="mt-2">
                Get started by <Link href="/auth/register" className="font-bold underline">registering</Link> or <Link href="/auth/login"  className="font-bold underline"  >logging in</Link>!
            </p>
        </div>
    </div>
</div>
  )
}
