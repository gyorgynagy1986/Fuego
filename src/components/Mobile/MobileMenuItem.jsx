import React from 'react'
import style from './MobileMenu.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const menuColorHanndeler = [
    {
      url:'/',
      name: 'Főoldal',
      id:1
    },
    {
      url:'/galeria',
      name: 'Galéria',
      id:2
    },
    {
      url:'/etlap',
      name: 'Étlap',
      id:3
    },
    {
      url:'/kapcsolat',
      name: 'Kapcsolat',
      id:4
    }
  ]
  

const MobileMenuItem = ({mobileClose}) => {
const pathname = usePathname();
 
return (
    <>
       {menuColorHanndeler.map((linkItem)=> (
       <Link onClick={mobileClose}
             className={style.mobileMenuLink }
             href={linkItem.url}>
         <li className={pathname === linkItem.url ? style.active : ''}>
         {linkItem.name}
         </li>
        </Link>))}
    </>
  )
}

export default MobileMenuItem