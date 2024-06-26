"use client"

import React from 'react'
import {
Sheet,
    SheetContent,
SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'


const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className='header'>
        <Link href='/'
        className='flex items-center gap=2 md:py-2'>
            <Image className='block dark:hidden' src='/assets/images/logo-text.svg' alt='logo' width={180} height={28}/>
                <Image className='hidden dark:block' src='/assets/images/logo-text-dark.svg' alt='logo' width={180} height={28}/>
        </Link>

        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>

                <Sheet>
                    <SheetTrigger>
                        <Image
                            src='/assets/icons/menu.svg'
                            alt='menu'
                            width={32}
                            height={32}
                            className='cursor-pointer' />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                        <>
                        <Image className='block dark:hidden' src='/assets/images/logo-text.svg' alt='logo' width={152} height={23}/>
                        <Image className='hidden dark:block' src='/assets/images/logo-text-dark.svg' alt='logo' width={152} height={23}/>

                            <ul className='header-nav_elements'>
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname

                                return(
                                    <li 
                                    className={`${isActive && 'text-dark-500'} p-18 flex whitespace-nowrap`}
                                    key={link.route}
                                    >
                                        <Link className='sidebar-link cursor-pointer' href={link.route}>
                                            <Image 
                                            src={link.icon}
                                            alt='logo'
                                            width={24}
                                            height={24} />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}</ul>
                        </>
                    </SheetContent>
                </Sheet>

            </SignedIn>
            <SignedOut>
                    <Button asChild className={`sidebar-nav_element group 'text-gray-700'`}
                                style={{
                                    background: 'linear-gradient(to bottom right, #14213D, #375BA9)',
                                  }}>
                        <Link href='/sign-in'>
                            Login
                        </Link>
                    </Button>           
                </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav