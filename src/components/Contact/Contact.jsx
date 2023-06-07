import React from 'react'
import style from './Contact.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Buttons/Button'
import ButtonGetInTouch from '../UI/Buttons/ButtonGetInTouch'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h3: 'Opening hours',
    btn:'asztalfoglalás',
    btn2: 'kapcsolat' 
}

const Contact = () => {
  return (
    <header className={style.container}>
        <div className={style.tabletPhoto}></div>
        <div className={style.textContainer}>
            <h3 className={dosis.className}>{textContent.h3}</h3>
            <div class={style.textBoxContainer}>
                <div>
                    <p>Monday - Wednesday</p>
                    <p>17:00 - 23:00</p>
                 </div>
                 <div>
                    <p>Thursday - Saturday</p>
                    <p>17:00 - 03:00</p>
                 </div>
                 <div>
                    <p>Sunday</p>
                    <p>17:00 - 23:00</p>
                 </div>
            </div>
            <div className={style.btnContainer}>
                <Button url={'/'} name={textContent.btn}/>
                <ButtonGetInTouch url={'/kapcsolat'} name={textContent.btn2}/>
            </div>
        </div>
    </header>
  )
}

export default Contact