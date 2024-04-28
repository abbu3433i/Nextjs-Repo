import React from 'react'
import Link from "next/link"

function Header() {
  return (
    <>
    <div className='bg-green-600 flex items-center justify-between px-6 text-2xl mb-4 py-4'>Logo
    <div className='flex gap-10'>
      <Link href='/About'>About</Link>
      <Link href='/Home'>Home</Link>
      <Link href='/Section'>Section</Link>
    </div>
    </div>
    </>
  )
}

export default Header