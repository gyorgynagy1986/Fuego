import React from 'react'
import style from './Contact.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Buttons/Button'
import ButtonGetInTouch from '../UI/Buttons/ButtonGetInTouch'
import Image from 'next/image'
import ContactItems from './ContactItems'


import mapPhoto from '../../../public/assets/sections/map_contact.png' 

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h3: 'Nyitvatartás',
    btn:'asztalfoglalás',
    btn2: 'kapcsolat' 
}

const Contact = ({reservation}) => {
  return (
    <section className={style.container}>
        <div className={style.imageContainer}>
          <div className={style.layer}></div>
          <Image placeholder="blur" alt='Fuego' src={mapPhoto}/>
        </div>
        <div className={style.textContainer}>
            <h3 className={dosis.className}>{textContent.h3}</h3>
            <div className={style.textBoxContainer}>
              <ContactItems />
            </div>
            <div className={style.btnContainer}>
                <Button url={reservation} name={textContent.btn}/>
                <ButtonGetInTouch url={'/kapcsolat'} name={textContent.btn2}/>
            </div>
        </div>
    </section>
  )
}

export default Contact