"use client"

import React from 'react'
import style from './JoinUs.module.css'
import Button from  '../UI/Buttons/Button'
import { Dosis } from 'next/font/google'
import { useParallax } from 'react-scroll-parallax';

const dosis = Dosis({ subsets: ['latin'] })


const textContent = {
  h2: 'Dolgozz velünk!', 
  btn:'Csatlakozom',
}

const JoinUs = () => {

  const parallax = useParallax({
    opacity	: [-1, 4],
    speed:-5

  });

  return (
    <div ref={parallax.ref} className={style.container}>
      <div className={style.containerText}>
          <h2 className={dosis.className}>{textContent.h2}</h2>
          <p className={style.h2}>Írj nekünk a return <span>hola@fuegobp.hu</span> e-mail címre és küldd el az önéletrajzod a pozíció megjelölésével! Amint lehetőségünk lesz rá, mielőbb válaszolni fogunk Neke</p>
          <Button differentTexMainColor={true} name={textContent.btn} url={'/kapcsolat'} />
        </div>
      </div>
  )
}

export default JoinUs