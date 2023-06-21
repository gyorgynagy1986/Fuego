import React from 'react'
import style from './Contact.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Buttons/Button'
import ButtonGetInTouch from '../UI/Buttons/ButtonGetInTouch'
import Image from 'next/image'
import ContactItems from './ContactItems'
import mapPhoto from '../../../public/assets/sections/map_contact.jpg' 

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h3: 'Nyitvatartás',
    btn:'asztalfoglalás',
    btn2: 'kapcsolat',
    url:'/kapcsolat'
}

const textContentEn = {
  h3: 'Openin Hours',
  btn:'reservation',
  btn2: 'Get in Touch',
  url:'/en/contact'
}

const Contact = ({reservation, lang}) => {
  return (
    <section className={style.container}>
        <div className={style.imageContainer}>
          <div className={style.layer}></div>
          <Image placeholder="blur" alt='Fuego' src={mapPhoto}/>
        </div>
        <div className={style.textContainer}>
            <h3 className={dosis.className}>{!lang ? textContent.h3 : textContentEn.h3 }</h3>
            <div className={style.textBoxContainer}>
              <ContactItems lang={lang} />
            </div>
            <div className={style.btnContainer}>
                <Button engColorPreReserv={lang ? true : false} url={reservation} name={!lang ? textContent.btn : textContentEn.btn }/>
                <ButtonGetInTouch url={!lang ? textContent.url :textContentEn.url} name={!lang ? textContent.btn2 : textContentEn.btn2 }/>
            </div>
        </div>
    </section>
  )
}

export default Contact