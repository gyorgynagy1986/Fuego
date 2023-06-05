import React from 'react'
import style from './StickyNav.module.css'
import Navbar from '../Navbar/Navbar'
import logo from '../../../public/assets/logo/logo.svg'
import Image from 'next/image'

const StickyNav = () => {
  return (
    <div className={`${style.stickynav} ${style.opacity}`}>
      <Image priority className={style.logo} alt='Fuego étterem logója' src={logo}/>
      <Navbar mobileMenuHeigthPrefix={true} nav={true}/>
    </div>
  )
}

export default StickyNav