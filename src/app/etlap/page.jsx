import Image from "next/image";
import etlap from '../../../public/assets/menu/1.png'
import itallap from '../../../public/assets/menu/2.png'
import style from './page.module.css'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

const Menu = () => {
  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>Étlap</h1>
      <div className={style.container}>
        <Image priority  alt="Fuego étterem itallapja" src={itallap}/>
        <Image priority alt="Fuego étterem Étlapja" src={etlap}/>
      </div>
    </>
  )
}

export default Menu