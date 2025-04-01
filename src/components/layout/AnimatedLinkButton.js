import React from 'react'
import { Link } from 'react-router-dom'
import style from './AnimatedLinkButton.module.css'
import { FaPlus } from 'react-icons/fa'

function AnimatedLinkButton({to, text}) {
  return (
    <Link to={to} className={style.btn}>
        <div className={style.overlay}></div>
        <FaPlus/>
        <p>{text}</p>
    </Link>
  )
}

export default AnimatedLinkButton
