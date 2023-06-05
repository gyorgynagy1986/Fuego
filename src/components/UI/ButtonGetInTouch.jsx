import React from 'react'
import Link from 'next/link'
import style from './Button.module.css'
import {Bebas_Neue } from 'next/font/google'


const bebas = Bebas_Neue({ subsets: ['latin'], weight: "400" })


const ButtonGetInTouch = ({url, name, underline}) => {

  return (
    <Link href={url}><button className={`${style.buttonGetInTouch} ${underline && style.underline} ${bebas.className}`}>{name}</button></Link>
    )
}

export default ButtonGetInTouch