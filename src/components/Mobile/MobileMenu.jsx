import React from 'react'
import style from './MobileMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../UI/Logo/Logo'
import MobileMenuItem from './MobileMenuItem'
import Button from '../UI/Buttons/Button'

import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'

const textContent = {
  btn: 'asztalfoglalás'
}


const MobileMenu = ({mobileClose}) => {


  return (
    <>
    <div className={style.mobileMenu}>
      <div className={style.mobileMenuContainer}>
          <Logo mobileClose={mobileClose} />
          <ul className={style.mobileMenuUl}>
        <MobileMenuItem mobileClose={mobileClose} />
          </ul>
        <div className={style.mobileMenuSocialContainer}>
            <Link href='/'><Image src={facebook} /></Link>
            <Link href='/'><Image src={instagram} /></Link>
        </div>
        <Button url={'/'} name={textContent.btn} />
      </div>
    </div>
  </>
  )
}

export default MobileMenu