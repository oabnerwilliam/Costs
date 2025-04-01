import React from 'react'
import { Link } from 'react-router-dom'
import style from './AnimatedLinkButton.module.css'
import { FaPlus } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

function AnimatedLinkButton({to, text, type}) {
  return (
    <Link to={to} className={`${style.btn} ${style[type]}`}>
        <div className={style.overlay}></div>
        {
          type=="add" ? (
           <FaPlus/> 
          ) : (
            <FaEye/>
          )
        }
        
        <p>{text}</p>
    </Link>
  )
}

export default AnimatedLinkButton
