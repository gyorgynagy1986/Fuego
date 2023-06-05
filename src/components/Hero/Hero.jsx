import React from 'react'
import style from './Hero.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Button'
import Image from 'next/image'
import logo from '../../../public/assets/logo/logo_desktop.png'
import ButtonGetInTouch from '../UI/ButtonGetInTouch'

import HeroCoverPhoto from '../../../public/hero_tablet.png'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h1: 'Lorem ipsum dolor sit amet',
    p: 'Suspendisse in bibendum lorem,Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diamSuspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diamSuspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diamSuspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor.',
    btn:'asztalfoglalás',
    btn2: 'kapcsolat'
}

// <div className={style.tabletPhoto}></div>


const Hero = () => {
  return (
    <header className={style.container} >
        <div className={style.imageContainer}>
        <div className={style.layer}></div>
          <Image src={HeroCoverPhoto}/>
        </div>

        <div className={style.textContainer}>
            <h1 className={dosis.className}>{textContent.h1}</h1>
            <p>{textContent.p}</p>
            <div className={style.btnContainer}>
                <Button url={'/'} name={textContent.btn}/>
                <ButtonGetInTouch url={'/kapcsolat'} name={textContent.btn2}/>
            </div>
        </div>
    </header>
  )
}

export default Hero