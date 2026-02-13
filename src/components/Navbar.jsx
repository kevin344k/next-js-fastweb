import React from 'react'
import Link from "next/link"
import "./Navbar.css"
export default function Navbar() {
  return (
        <nav className='navbar'>
     <Link href="/">   <h1 className='font-bold py-5 text-3xl'>Nextjs Course</h1></Link>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
               <li><Link href="/tienda">Tienda</Link></li>
               <li><Link href="/posts">Posts</Link></li>
        </ul>
        </nav>
  )
}
