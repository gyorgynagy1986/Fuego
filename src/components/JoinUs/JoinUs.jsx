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

const textContentEn = {
  h2: 'Join our team! ', 
  btn:'I want to join',
}

const text = <p className={style.h2}>Írj nekünk a return <span>hola@fuegobp.hu</span> e-mail címre és küldd el az önéletrajzod a pozíció megjelölésével! Amint lehetőségünk lesz rá, mielőbb válaszolni fogunk Neked!</p>
const textEn = <p className={style.h2}>Drop us an e-mail to  <span>hola@fuegobp.hu</span> with your CV and position you’d be interested in! We’ll get back to you as soon as possible!</p>

const JoinUs = ({lang}) => {

  const parallax = useParallax({
    opacity	: [-1, 4],
    speed:-5

  });

  return (
    <div ref={parallax.ref} className={style.container}>
      <div className={style.containerText}>
          <h2 className={dosis.className}>{!lang ? textContent.h2 : textContentEn.h2 }</h2>
            {!lang ? text : textEn}
          <Button differentTexMainColor={true} name={!lang ? textContent.btn : textContentEn.btn } url={'/kapcsolat'} />
        </div>
      </div>
  )
}

export default JoinUs