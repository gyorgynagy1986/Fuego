import React from 'react'
import style from './Fotter.module.css'
import Link from 'next/link'
import Button from '../UI/Buttons/ButtonGetInTouch'


const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.containerTextleft}>
            <Button url={''} underline={true} name={'GRUPO10'}/>
            <div className={style.containerTextP}>
                <p className={style.containerTextleftP}>Quisque ornare convallis quam sit amet hendrerit. Duis tincidunt condimentum eros ut laoreet. </p>
            </div>
             <Link href='/'>Learn more</Link>
            <div className={style.containerCookie}>
                <p className={style.containerTextleftReserved}>All rights reserved <span>©</span> <span>Grupo10.hu</span> <span>|</span> 2023</p>
                <p className={style.containerTextleftCookie} >Cookie policy</p>    
            </div>
        </div>
    </div>
  )
}

export default Footer