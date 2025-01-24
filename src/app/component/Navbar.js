import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"

export const Navbar = () => {
  return (
    <div className='fixed w-full h-16 flex items-center justify-between px-8 bg-green-200 shadow-md'>
        <div>
            <Link href={'/'}>
                <h1 className=" text-2xl font-semibold text-blue-900 hover:text-blue-700 transition-colors">
                    Me & My Homies Hate Cups
                </h1>
            </Link>
        </div>
        <div>
            <ul className='flex space-x-6 text-lg'>
                <Link href={'/About'}>
                    <li className='text-blue-800 hover:text-blue-600 hover:underline transition-all'>
                        About
                    </li>
                </Link>
                <Link href={'/Contacts'}>
                    <li className='text-blue-800 hover:text-blue-600 hover:underline transition-all'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

