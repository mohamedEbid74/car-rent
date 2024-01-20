import { footerLinks } from '@/Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-[1440px] m-auto '>
      <div className='flex  gap-5 max-md:flex-col flex-wrap justify-between sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/logo.svg" alt='logo' width={118} height={18} className='object-contain'/>
          <p className='text-base text-gray-700'>Carhub 2024 <br /> All rights &copy;</p>
        </div>
        <div className='footer__links'>
          {footerLinks.map(link => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              <div className='flex flex-col gap-5'>
                {link.links.map(li => (
                  <Link key={li.title} href={li.url} className='text-gray-500'>{li.title}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex border-t border-gray-400 gap-20 py-6 justify-between sm:px-16 max-sm:flex-col max-sm:gap-5'>
        <p className='text-gray-700 capitalize max-sm:px-14'>@2024 CarHub. all rights reserved &copy; 3bid</p>
        <div className='flex flex-1 justify-around items-center text-gray-800 text-sm'>
          <Link href="/">Privacy & Police</Link>
          <Link href="/">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
