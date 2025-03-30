import React, { useEffect } from 'react'
import style from './Project.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Project({ item }) {
  const navigate = useNavigate()

  return (
    <>
        <Link className={style.project} to={`/projectpage/${item.id}`}>
          <h1>{item.name}</h1>
          <p>Categoria: {item.category.name}</p>
          <p>Orçamento: R${item.budget}</p>
        </Link>
    </>
  )
}

export default Project
