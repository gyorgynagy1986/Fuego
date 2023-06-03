import React from 'react'
import style from './Hero.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Button'
import Image from 'next/image'

import logo from '../../../public/assets/logo/logo_desktop.png'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    title: 'Lorem ipsum dolor sit amet',
    main: 'Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam. ',
    btnName:'asztalfoglalás'
}


const Hero = () => {
  return (
    <header className={style.container} >
        <div className={style.textContainer}>
            <Image className={style.logo} alt='Fuego étterem logója' src={logo}/>
            <h1 className={dosis.style}>{textContent.title}</h1>
            <p>{textContent.main}</p>
            <div>
                <Button url='/' name={textContent.btnName}/>
            </div>
        </div>
    </header>
  )
}

export default Hero