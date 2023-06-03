import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import Image from 'next/image'
import Button from '../UI/Button'

import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'

const textContent = {
    btnName:'asztalfoglalás',
}


const items = [
    {
        id:1,
        name: 'Home', 
        url: '/'
    }, 
    {
        id:1,
        name: 'Geléria', 
        url: '/galeria'
    }, 
    {
        id:1,
        name: 'Étlap', 
        url: '/etlap'
    }, 
    {
        id:1,
        name: 'Kapcsoalt', 
        url: '/kapcsolat'
    }, 
]



const Navbar = () => {
  return (
    <nav className={style.nav}>
        <ul className={style.ul}>
            {items.map((items)=>(<li><Link className={style.link} key={items.id} href={items.url}>{items.name}</Link></li>))}
        </ul>
        <div className={style.social}>
            <Image src={facebook} alt='Fuego facebbok oldala'/>
            <Image src={instagram} alt='Fuego instagram oldala'/>
        </div>
        <div className={style.lng}>
            <span>EN </span>
            <span> /</span>
            <span> HU</span>
        </div>
        <Button url='/' name={textContent.btnName} />
    </nav>
  )
}

export default Navbar