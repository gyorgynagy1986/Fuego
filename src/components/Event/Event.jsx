import React from 'react'
import style from './Event.module.css'
import Button from  '../UI/Buttons/Button'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
  h2: 'Szeretnél egy rendezvényt tartani a Fuego-ban? ', 
  p: 'Hívj minket vagy írj nekünk, ha rendezvényt szeretnél tartani nálunk! Bátran bízd ránk a szervezést, Ti pedig élvezzétek az élményt!',
  btn:'kapcsolat',
  url: '/kapcsolat'
}

const textContentEn = {
  h2: 'Want to have an event at Fuego?', 
  p: 'Call us or drop us a message if you would like to host an event with us. Feel free to entrust us with the organization, while you enjoy the experience to the fullest!',
  btn:'Get in touch',
  url: '/en/contact'
}

const Event = ({lang}) => {
  return (
    <div className={style.container}>
      <div className={style.containerText}>
          <h2 className={dosis.className}>{!lang ? textContent.h2 :textContentEn.h2}</h2>
          <p className={style.h2}>{!lang ? textContent.p :textContentEn.p} </p>
          <Button engColorPrefixBlueContact={lang ? true : false} buttonContact={true} name={!lang ? textContent.btn :textContentEn.btn} url={!lang ? textContent.url :textContentEn.url} />
        </div>
      </div>
  )
}

export default Event