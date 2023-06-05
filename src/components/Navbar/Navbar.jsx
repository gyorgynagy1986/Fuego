"use client"

import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import Button from '../UI/Button'
import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'
import logo_footer from '../../../public/assets/logo/logo_footer.svg'
import hambiOpen from '../../../public/assets/hambi/hambi_open.svg'

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

const Navbar = ({NavFooter, nav}) => {
  const pathname = usePathname();

  const [mobileMenu, SetMobileMene] = useState(false);

  const mobileMenuHandeler = () => {
    SetMobileMene(prevmobileMenu => !prevmobileMenu )
  }

  return (
    <>
      {mobileMenu && <div className={style.mobileMenu}></div>}
        <nav className={`${style.nav} ${nav && style.navNav} ${NavFooter && style.footerNav} ${NavFooter && style.spaceBetween} ${NavFooter && style.tabletPositon}`}>
          {NavFooter && <Link  href='/'><Image src={logo_footer}/></Link>  }
          <div className={`${style.rightItemsContainer} ${NavFooter && style.ulCenter}`}>
          <ul className={`${style.ul} ${nav && style.ulHide}` }>
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
          <div className={`${style.social} ${nav && style.socialNav}`}>
              <Image src={facebook} alt='Fuego facebbok oldala'/>
              <Image src={instagram} alt='Fuego instagram oldala'/>
          </div>
          <div className={`${style.lng} ${NavFooter && style.lngHide} ${nav && style.lngNav}`}>
              <span>EN </span>
              <span>/</span>
              <span>HU</span>
          </div>
          <div className={`${nav && style.btnNav}`}><Button url='/' name={textContent.btnName} /></div>
          </div>
          {nav && <Image onClick={mobileMenuHandeler} className={style.hambi} src={hambiOpen} alt='hamburger menu'/>}
        </nav>
    </>
  )
}

export default Navbar