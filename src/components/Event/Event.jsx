import React from 'react'
import style from './Event.module.css'
import Button from  '../UI/Buttons/Button'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
  h2: 'Szeretnél egy rendezvényt tartani a Fuego-ban? ', 
  p: 'Hívj minket vagy írj nekünk, ha rendezvényt szeretnél tartani nálunk! Bátran bízd ránk a szervezést, Ti pedig élvezzétek az élményt!',
  btn:'kapcsolat'
}

const Event = () => {
  return (
    <div className={style.container}>
      <div className={style.containerText}>
          <h2 className={dosis.className}>{textContent.h2}</h2>
          <p className={style.h2}>{textContent.p} </p>
          <Button buttonContact={true} name={textContent.btn} url={'/kapcsolat'} />
        </div>
      </div>
  )
}

export default Event