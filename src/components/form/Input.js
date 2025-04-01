import React from 'react'
import styles from './Input.module.css'
import Cleave from 'cleave.js/react'

function Input({type, text, name, placeholder, handleOnChange}) {
  return(
    <div className={styles.form_container}>
        {text && (
          <label htmlFor={name}>{text}</label>
        )}
        {type=='number'?(
          <Cleave 
          options={{
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
          }}
          className={styles.input} 
          name={name} 
          id={name} 
          placeholder={placeholder}
          onChange={handleOnChange}
          required/>
        ):(
          <input className={styles.input} 
          type={type} 
          name={name} 
          id={name} 
          placeholder={placeholder}
          onChange={handleOnChange}
          required/>
        )}
    </div>
  ) 
}

export default Input

