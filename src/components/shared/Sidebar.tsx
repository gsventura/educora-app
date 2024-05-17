"use client"

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ModeToggle } from '../ui/theme-switcher'


const Sidebar = () => {
    const pathname = usePathname();

  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'>
                <Image src='/assets/images/logo-text.svg' alt='logo' width={180} height={28}/>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        
                        {navLinks.slice(0,4).map((link) => {
                            const isActive = link.route === pathname

                            return(
                                <li key={link.route}
                                className={`sidebar-nav_element group ${isActive ? 'text-white' : 'text-gray-700'}`}
                                style={{
                                    background: isActive ? 'linear-gradient(to bottom right, #14213D, #375BA9)' : 'none',
                                  }}>
                                    <Link className='sidebar-link' href={link.route}>
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
                        
                        <ul className='sidebar-nav_elements'>
                            <div>
                                <ModeToggle/>   
                            </div>
                        {navLinks.slice(4).map((link) => {
                            
                            const isActive = link.route === pathname
                            
                            return(
                                <li key={link.route}
                                className={`sidebar-nav_element group ${isActive ? 'text-white' : 'text-gray-700'}`}
                                style={{
                                    background: isActive ? 'linear-gradient(to bottom right, #14213D, #375BA9)' : 'none',
                                  }}>
                                    <Link className='sidebar-link' href={link.route}>
                                        <Image 
                                        src={link.icon}
                                        alt='logo'
                                        width={24}
                                        height={24} />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className='sidebar-nav_element group flex-center cursor-pointer gap-4 p-2'>
                            <UserButton afterSignOutUrl='/' showName/>
                        </li>
                        
                    </ul>
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
        </div>
    </aside>
  )
}

export default Sidebar