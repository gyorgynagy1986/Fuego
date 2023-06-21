"use client"

import '../../../src/app/page.module.css';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import Button from '../UI/Buttons/Button'
import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'
import logo_footer from '../../../public/assets/logo/logo_footer.svg'
import hambiOpen from '../../../public/assets/hambi/hambi_open.svg'
import hambiClose from '../../../public/assets/hambi/hambi_close.svg'
import MobileMenu from '../Mobile/MobileMenu'
import NavItems from './NavItems';
import LanguageLinks from './LanguageLinks';
import { usePathname } from 'next/navigation';


const textContentHu = {
    btnName:'asztalfoglalás',
}

const textContentEng = {
  btnName:'reservation',
}

const links = {
  facebook: 'https://www.facebook.com/FUEGOchicken/?locale=hu_HU',
  instagram: 'https://www.instagram.com/fuegobp/?hl=hu',
  reservation: 'https://reservours.com/fuego/tablereservation?s=website' 
}

const Navbar = ({NavFooter, nav, colorMobileMenu, lang}) => {

  const [mobileMenu, SetMobileMene] = useState(false);
  const pathname = usePathname()

  const mobileMenuHandeler = () => {
    SetMobileMene(prevmobileMenu => !prevmobileMenu )
  }

  const mobileClose = () => {
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
        {mobileMenu && <MobileMenu  mobileClose={mobileClose} /> }
        <nav className={`${style.nav} ${nav && style.navNav} ${NavFooter && style.footerNav} ${colorMobileMenu && style.colorMobileMenu}`}>
          {NavFooter && <Link className={`${NavFooter && style.logoFooterMobile}`} href='/'><Image alt='Fuego étterem logója' src={logo_footer}/></Link>  }
          <div className={`${style.rightItemsContainer} ${NavFooter && style.ulCenter} ${NavFooter && style.containerUlMobile}`}>
            <ul className={`${style.ul} ${nav && style.ulHide} ${NavFooter && style.ulMobile}` }>
             <NavItems />
            </ul>
            <div className={`${style.social} ${nav && style.socialNav} ${NavFooter && style.socialNavFooter}`}>
              <Link href={links.facebook}><Image src={facebook} alt='Fuego facebbok oldala'/></Link> 
              <Link href={links.instagram}><Image src={instagram} alt='Fuego instagram oldala'/></Link> 
            </div>
            <div className={`${style.lng} ${NavFooter && style.lngHide} ${nav && style.lngNav}`}>
              <LanguageLinks />
            </div>
            <div className={`${nav && style.btnNav}`}><Button url={links.reservation} name={pathname === '/en' || pathname === '/en/menu' || pathname === '/en/contact' ||  pathname === '/en/gallery' ? textContentEng.btnName : textContentHu.btnName } /></div>
          </div>
          {nav && <Image width={25} onClick={mobileMenuHandeler} className={style.hambi} src={mobileMenu ? hambiOpen : hambiClose} alt='hamburger menu'/>}
        </nav>
    </>
  )
}

export default Navbar