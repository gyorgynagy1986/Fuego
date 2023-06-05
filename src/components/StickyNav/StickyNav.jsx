import React from 'react'
import style from './StickyNav.module.css'

const StickyNav = ({opacity}) => {
  return (
    <div className={`${style.stickynav} ${style.opacity}`}></div>
  )
}

export default StickyNav