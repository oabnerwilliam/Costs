import React, { useEffect, useState } from 'react'
import style from './Message.module.css'

function Message({type, msg}) {
    const [visible, setVisible] = useState(false)
    
    useEffect(()=>{
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && (
                <p className={`${style.message} ${style[type]}`}>{msg}</p>    
            )}
            
        </>
    )
}

export default Message
