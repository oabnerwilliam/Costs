import React, { useEffect } from 'react'
import style from './Project.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

function Project({ item, handleRemove }) {
  const navigate = useNavigate()

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
            <Link to="/">
              <BsFillTrashFill/>
              <p>Excluir</p>
            </Link>
          </div>
        </Link>
    </>
  )
}

export default Project
