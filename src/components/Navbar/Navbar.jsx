"use client"

import '../../../src/app/page.module.css';

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import Button from '../UI/Button'
import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'
import logo_footer from '../../../public/assets/logo/logo_footer.svg'
import hambiOpen from '../../../public/assets/hambi/hambi_open.svg'
import MobileMenu from '../Mobile/MobileMenu'


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

const Navbar = ({NavFooter, nav, mobileMenuHeigthPrefix, colorMobileMenu}) => {
  const pathname = usePathname();

  const [mobileMenu, SetMobileMene] = useState(false);

  const mobileMenuHandeler = () => {
    SetMobileMene(prevmobileMenu => !prevmobileMenu )
  }

  useEffect(() => {
    if (mobileMenu) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [mobileMenu]);


  return (
    <>
      {mobileMenu && <MobileMenu  mobileMenuHeigthPrefix={mobileMenuHeigthPrefix} />}
        <nav className={`${style.nav} ${nav && style.navNav} ${NavFooter && style.footerNav} ${colorMobileMenu && style.colorMobileMenu}`}>
          {NavFooter && <Link className={`${NavFooter && style.logoFooterMobile}`} href='/'><Image src={logo_footer}/></Link>  }
          <div className={`${style.rightItemsContainer} ${NavFooter && style.ulCenter} ${NavFooter && style.containerUlMobile}`}>
            <ul className={`${style.ul} ${nav && style.ulHide} ${NavFooter && style.ulMobile}` }>
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
            <div className={`${style.social} ${nav && style.socialNav} ${NavFooter && style.socialNavFooter}`}>
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