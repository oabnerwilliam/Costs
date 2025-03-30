import React from 'react'
import style from './Message.module.css'

function Message({type, msg}) {
  return (
    <>
        <p className={`${style.message} ${style[type]}`}>{msg}</p>
    </>
  )
}

export default Message
