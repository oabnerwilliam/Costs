import React, { useEffect, useState } from 'react'
import style from './Project.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

import ReactModal from 'react-modal'

function Project({ item, handleRemove }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const remove = (e) => {
    e.preventDefault()
    handleRemove(item.id)
  }
  
  return (
    <>
        <Link className={style.project} to={`/projectpage/${item.id}`}>
          <div className={style.text}>
            <h1>{item.name}</h1>
            <p>Categoria: {item.category.name}</p>
            <p>Orçamento: R${item.budget}</p>
          </div>
          <div className={style.actions}>
            <Link to="/">
              <BsPencil/>
              <p>Editar</p>
            </Link>
            <button onClick={remove}>
              <BsFillTrashFill/>
              <p>Excluir</p>
            </button>
          </div>
        </Link>
    </>
  )
}

export default Project
