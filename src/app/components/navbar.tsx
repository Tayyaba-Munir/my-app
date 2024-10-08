import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
