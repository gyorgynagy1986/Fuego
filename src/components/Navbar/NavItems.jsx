import React from 'react'
import { usePathname } from 'next/navigation';
import style from './Navbar.module.css'
import Link from 'next/link'

const items = [
    {
        id:1,
        name: 'Főoldal', 
        url: '/'
    }, 
    {
        id:2,
        name: 'Galéria', 
        url: '/galeria'
    }, 
    {
        id:3,
        name: 'Étlap',  
        url: '/etlap'
    }, 
    {
        id:4,
        name: 'Kapcsolat', 
        url: '/kapcsolat',
    }, 
]

const NavItems = ({mobileMenucolse}) => {
    const pathname = usePathname();
  return (
    <>
    {items.map((item) => (
        <li key={item.id}>
          <Link  
               onClick={mobileMenucolse} 
              className={`${style.link} ${pathname === item.url ? style.active : ''}`}
              href={item.url}>
            {item.name}
          </Link>
        </li>
      ))}
      </>
  )
}

export default NavItems