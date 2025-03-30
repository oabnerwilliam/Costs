import React, { useEffect, useState } from 'react'
import Project from '../project/Project'
import style from './Projects.module.css'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projects = () => {
  let message = ""
  const location = useLocation()
  if(location.state) {
    message = location.state.message
  }
  
  const [projects, setProjects] = useState([])
  
  const handleSetProjects = (projects) => {
    setProjects(projects)
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        handleSetProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])

  projects.sort((a, b)=>b.id-a.id)

  return(
    <div className={style.projects}>
      <div className={style.title}>
        <h1>Meus Projetos</h1>
        <Link to="/newproject">
          <div className={style.cobertura}></div>
          <FaPlus/>
          <p>Novo Projeto</p>
        </Link>
      </div>
      {message && (
        <Message
        msg={message}
        type="success"/>  
      )}
      {projects.length > 0 ? (
        projects.map((project)=>(
          <Project item={project} key={project.id}/>
        ))
      ) : (
        <h1>Não há projetos</h1>
      )
      }
    </div>
  )
}

export default Projects
