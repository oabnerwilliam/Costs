import React from 'react'
import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
  return(
    <div className={styles.form_container}>
        <label htmlFor={name}>{text}</label>
        <select name={name} 
        id={name} 
        onChange={handleOnChange} 
        value={value || ''} required>
            <option value="" disabled>Selecione uma categoria:</option>
            {
              options.map((option)=>(
                <option value={option.id} 
                key={option.id}>{option.name}</option>
            ))
            }
        </select>
    </div>
  ) 
}

export default Select

