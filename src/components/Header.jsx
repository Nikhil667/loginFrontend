import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='bg-[#E0E0E0] min-h-12 flex justify-center items-center'>
      <Link to="/" className='text-2xl font-semibold text-[#666]'>Logo</Link>
    </nav>
  )
}
