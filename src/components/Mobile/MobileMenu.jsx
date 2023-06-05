import React from 'react'
import style from './MobileMenu.module.css'
import Navbar from '../Navbar/Navbar'


const MobileMenu = ({mobileMenuHeigthPrefix}) => {
  return (
    <div className={`${style.mobileMenu} ${mobileMenuHeigthPrefix && style.mobileMenuHeigthPrefix} `}>
      <Navbar colorMobileMenu={true} NavFooter={true} />
    </div>
  )
}

export default MobileMenu