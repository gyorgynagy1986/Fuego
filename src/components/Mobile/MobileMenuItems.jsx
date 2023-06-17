import React from 'react'
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


const MobileMenuItems = () => {
  return (
    <ul>
      <Link href={'/'}>asdsadasd</Link>
      
    </ul>
  )
}

export default MobileMenuItems