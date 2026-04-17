"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({children,href}) => {
    const path=usePathname();
    return (
        <Link href={href} className={`
            btn 
        ${path === href ? 'bg-[#244D3F] text-white': ''  } text-black rounded-lg 
        `}>

        {children}
        </Link>
    );
};

export default NavLinks;