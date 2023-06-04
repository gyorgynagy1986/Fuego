import Image from "next/image";
import etlap from '../../../public/assets/menu/1.png'
import itallap from '../../../public/assets/menu/2.png'
import Style from './page.module.css'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

const Menu = () => {
  return (
    <>
      <h1 className={`${Style.h1} ${dosis.className}`}>Étlap</h1>
      <div className={Style.container}>
        <Image  alt="Fuego étterem itallapja" src={itallap}/>
        <Image  alt="Fuego étterem Étlapja" src={etlap}/>
      </div>
    </>
  )
}

export default Menu