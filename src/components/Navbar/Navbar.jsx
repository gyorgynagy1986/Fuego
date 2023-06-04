"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import Button from '../UI/Button'
import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'
import logo_footer from '../../../public/assets/logo/logo_footer.svg'

const textContent = {
    btnName:'asztalfoglalás',
}

const items = [
    {
        id:1,
        name: 'Főoldal', 
        url: '/'
    }, 
    {
        id:2,
        name: 'Galéria', 
        url: '/galeria'
    }, 
    {
        id:3,
        name: 'Étlap', 
        url: '/etlap'
    }, 
    {
        id:4,
        name: 'Kapcsolat', 
        url: '/kapcsolat',
    }, 
]

const Navbar = ({color, logoFooter, logoVisible}) => {
  const pathname = usePathname();

  console.log(logoFooter, logoVisible)
    
  return (
        <nav className={`${style.nav} ${color && style.footerNav} ${logoFooter && style.spaceBetween}`}>
       {logoVisible && <Link href='/'><Image  src={logo_footer}/></Link>  }
        <div className={style.rightItemsContainer}>
        <ul className={style.ul}>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                className={`${style.link} ${pathname === item.url ? style.active : ''}`}
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.social}>
            <Image src={facebook} alt='Fuego facebbok oldala'/>
            <Image src={instagram} alt='Fuego instagram oldala'/>
        </div>
        <div className={style.lng}>
            <span>EN </span>
            <span>/</span>
            <span>HU</span>
        </div>
        <Button url='/' name={textContent.btnName} />
        </div>
    </nav>
  )
}

export default Navbar