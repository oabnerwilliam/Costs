import React from 'react'

import { useRef, useState } from 'react'
import style from './SearchInput.module.css'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({name, placeholder, handleOnChange, setIsOpen, isOpen}, ref) => {
  //const [isOpen, setIsOpen] = useState('')
  const searchRef = useRef(null)

  const openSearch = (e) => {
    setIsOpen(true)
  }
  
  return (
    <div className={style.search} ref={ref}>
        <div className={`${style.overlay} ${isOpen ? style.open : ''}`}>
        <button onClick={openSearch}>
            <FaSearch/>
        </button>
        </div>
        <input type="text" 
        name={name} 
        id={name} 
        onChange={handleOnChange}
        className={style.input}
        placeholder={placeholder}/> 
    </div>
  )
}

export default React.forwardRef(SearchInput)
