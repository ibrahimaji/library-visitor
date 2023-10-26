"use client"
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BsSun, BsMoon } from 'react-icons/bs'
import { SignOutButton } from '@clerk/nextjs'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const path = usePathname()
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }
  return (
    <div className='p-4 py-4 max-w-7xl mx-auto flex items-center justify-between'>
      <div className='flex-1'>
        <Link href="/">
          <Image alt="Logo Website" className='h-8 w-28 object-contain' src="/tut-wuri.png" height={100} width={200} />
        </Link>
      </div>
      <div className='flex-0 flex items-center justify-center space-x-2 md:space-x-4'>
        Buku Tamu Perpustakaan UPT SDN Wirogunan Kota Pasuruan
      </div>
      <div className='flex mx-5 justify-center items-center'>
        <div>
          <h1 className='text-white font-bold bg-green-500 px-2 py-2 text-lg my-2 w-full md:w-fit mr-3'>
            <SignOutButton />
          </h1>
        </div>
      <div className='flex-1 flex justify-end'>
        {theme === "light" ? <p onClick={handleTheme} className='text-xl font-bold cursor-pointer'><BsSun /></p> :
          <p onClick={handleTheme} className='text-xl font-bold cursor-pointer'><BsMoon /></p>
        }
      </div>
      </div>
    </div>
  )
}
