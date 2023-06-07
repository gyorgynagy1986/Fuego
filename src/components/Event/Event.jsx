import React from 'react'
import style from './Event.module.css'
import Button from  '../UI/Buttons/Button'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
  h2: 'Want to have an event at Fuego?', 
  p: 'Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam vitae turpis interdum, nec feugiat magna vestibulum. bibendum silo rupio marbuculum. ',
  btn:' get in touch'
}

const Event = () => {
  return (
    <div className={style.container}>
      <div className={style.containerText}>
          <h2 className={dosis.className}>{textContent.h2}</h2>
          <p className={style.h2}>{textContent.p} </p>
          <Button btnBlue={true} name={textContent.btn} url={'/kapcsolat'} />
        </div>
      </div>
  )
}

export default Event