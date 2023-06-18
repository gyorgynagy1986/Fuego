import React from 'react'
import style from './Fotter.module.css'
import Link from 'next/link'
import Button from '../UI/Buttons/ButtonGetInTouch'


const Footer = () => {
  return (
    <footer className={style.container}>
        <div className={style.containerTextleft}>
          <p className={style.containerTextleftCookieMobile} >Cookie policy</p>    
            <Button url={'/'} underline={true} name={'GRUPO 10'}/>
            <div className={style.containerTextP}>
                <p className={style.containerTextleftP}>Quisque ornare convallis quam sit amet hendrerit. Duis tincidunt condimentum eros ut laoreet. </p>
            </div>
             <Link href='/'>Learn more</Link>
            <div className={style.containerCookie}>
                <div className={style.containerTextleftReserved}> <p> All rights reserved <span>©</span></p><p><a href="https://www.grupo10.hu/">Grupo10.hu</a></p> <p className={style.mobileTurn}>|</p> <p>2023</p> </div>
                <p className={style.containerTextleftCookie} >Cookie policy</p>    
            </div>
        </div>
    </footer>
  )
}

export default Footer