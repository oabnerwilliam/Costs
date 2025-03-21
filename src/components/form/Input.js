import React from 'react'
import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}) {
  return(
    <div className={styles.form_container}>
        <label htmlFor={name}>{text}</label>
        <input className={styles.input} 
        type={type} 
        name={name} id={name} 
        placeholder={placeholder}
        onChange={handleOnChange}/>
    </div>
  ) 
}

export default Input

