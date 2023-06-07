import React from 'react'
import logo from '../../../../public/assets/logo/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import style from './Logo.module.css'


const Logo = () => {
  return (
    <>
    <Link className={style.logoMain} href=''><Image priority alt='Fuego étterem logója' src={logo}/></Link> 
    </>
  )
}

export default Logo