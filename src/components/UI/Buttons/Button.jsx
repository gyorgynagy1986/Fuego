import Link from 'next/link'
import React from 'react'
import style from './Button.module.css'
import {Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: "400" })

const Button = ({name, url, btnBlue}) => {
  return (
   <Link href={url}><button className={`${style.button} ${btnBlue && style.butnBlue} ${bebas.className}`}>{name}</button></Link>
  )
}

export default Button