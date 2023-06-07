"use client"

import '../../../src/app/page.module.css';

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import Button from '../UI/Buttons/Button'
import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'
import logo_footer from '../../../public/assets/logo/logo_footer.svg'
import hambiOpen from '../../../public/assets/hambi/hambi_open.svg'
import MobileMenu from '../Mobile/MobileMenu'
import NavItems from './NavItems';


const textContent = {
    btnName:'asztalfoglalás',
}


const Navbar = ({NavFooter, nav, mobileMenuHeigthPrefix, colorMobileMenu}) => {

  const [mobileMenu, SetMobileMene] = useState(false);

  const mobileMenuHandeler = () => {
    SetMobileMene(prevmobileMenu => !prevmobileMenu )
  }

  const mobileMenucolse = () => {
    SetMobileMene(false);
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
        {mobileMenu && <MobileMenu mobileMenucolse={mobileMenucolse}  mobileMenuHeigthPrefix={mobileMenuHeigthPrefix}/> }
        <nav className={`${style.nav} ${nav && style.navNav} ${NavFooter && style.footerNav} ${colorMobileMenu && style.colorMobileMenu}`}>
          {NavFooter && <Link className={`${NavFooter && style.logoFooterMobile}`} href='/'><Image src={logo_footer}/></Link>  }
          <div className={`${style.rightItemsContainer} ${NavFooter && style.ulCenter} ${NavFooter && style.containerUlMobile}`}>
            <ul className={`${style.ul} ${nav && style.ulHide} ${NavFooter && style.ulMobile}` }>
             <NavItems />
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