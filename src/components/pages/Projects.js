import React, { useEffect, useState } from 'react'
import Project from '../project/Project'
import style from './Projects.module.css'

const Projects = () => {
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
      <h1>Projetos</h1>
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
