"use client"

import { cn } from "@/lib/utils"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Header = () => {
    const pathname = usePathname();
    return (
        <header>
            <div className="main-container inner">
                <Link href="/" className="inline-flex">
                    <Image src="/logo.svg" alt="CoinPulse Logo" width={132} height={42} className="h-[42px] w-[132px]" loading="eager" />
                </Link>
                <nav>
                    <Link href="/" className={cn('nav-link', {
                        'is-active': pathname === '/',
                        'is-home': true
                    })}>Home</Link>
                    <p>search modal</p>
                    <Link href="/coins" className={cn('nav-link', {
                        'is-active': pathname === '/coins',
                        'is-home': true
                    })}>All Coins</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header