"use client"

import Image from "next/image";
import etlap from '../../../../public/assets/menu/1.png'
import itallap from '../../../../public/assets/menu/2_eng.png'
import style from './page.module.css'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

const Menu = () => {

  const handleClickFood = () => {
    window.location.href = '/menu_eng.pdf';
  };

  const handleClickDrinks = () => {
    window.location.href = '/itallap.pdf';
  };


  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>Menu</h1>
      <div className={style.container}>
        <Image style={{cursor:'pointer'}} onClick={handleClickFood} placeholder="blur" priority alt="Fuego étterem itallapja" src={itallap}/>
        <Image style={{cursor:'pointer'}} onClick={handleClickDrinks} placeholder="blur" priority alt="Fuego étterem Étlapja" src={etlap}/>
      </div>
    </>
  )
}

export default Menu