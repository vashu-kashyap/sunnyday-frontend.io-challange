import React from 'react'
import Link from 'next/link'
import Facebook from './Facebook'
import Twitter from './Twitter'
import Instagram from './Instagram'
import Pinterest from './Pineterest'


const Footer = () => {
  return (
    <footer className='bg-[#90D4C5] p-8 '>
      <div className="footer-logo my-10">
        <Link href={'/'} className='block text-center text-5xl text-Dark-desaturated-cyan/70 font-barlow font-bold'>
            sunnyside
        </Link>
      </div>
      <nav className="footer-menu mb-20">
        <ul className="menu-list flex  justify-center items-center gap-x-16">
            <li className="menu-item text-lg text-Dark-moderate font-barlow font-semibold hover:text-white transition-all duration-300 ease-in-out"><Link href={'/'}>About</Link></li>
            <li className="menu-item text-lg text-Dark-moderate font-barlow font-semibold hover:text-white transition-all duration-300 ease-in-out"><Link href={'/'}>Services</Link></li>
            <li className="menu-item text-lg text-Dark-moderate font-barlow font-semibold hover:text-white transition-all duration-300 ease-in-out"><Link href={'/'}>Projects</Link></li>
        </ul>
      </nav>
      <div className="social-menu ">
        <ul className='menu-list flex justify-center items-center gap-x-8'>
            <li className="menu-item"><Link href={'/'}><Facebook /></Link></li>
            <li className="menu-item"><Link href={'/'}><Instagram /></Link></li>
            <li className="menu-item"><Link href={'/'}><Twitter /></Link></li>
            <li className="menu-item"><Link href={'/'}><Pinterest /></Link></li>
           
        </ul>
      </div>
    </footer>
  )
}

export default Footer
