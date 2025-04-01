import React, { useEffect, useRef, useState } from 'react'
import Project from '../project/Project'
import style from './Projects.module.css'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import AnimatedLinkButton from '../layout/AnimatedLinkButton'
import SearchInput from '../form/SearchInput'
import Loader from '../layout/Loader'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [projectMessage, setProjectMessage] = useState('')
  const [searchText, setSearchText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const searchInputRef = useRef(null)
  
  let message = ""
  const location = useLocation()
  if(location.state) {
    message = location.state.message
  }
  
  const handleSetProjects = (projects) => {
    setProjects(projects)
  }

  useEffect(() => {
    setTimeout(()=>{
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          handleSetProjects(data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }, 1000)
  }, [])

  projects.sort((a, b)=>b.id-a.id)

  const removeProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
       method: 'DELETE',
       headers: {
        'Content-Type': 'application/json'
       }
    }).then((resp)=>resp.json)
      .then(()=>{
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
      })
      .catch(err => console.log(err))
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchText.toLowerCase())
  )

  const pesquisarProjeto = (e) => {
    setSearchText(e.target.value)
  }

  const handleClickOutside = (e) => {
    // Verifica se o clique foi fora do SearchInput
    if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
      setIsOpen(false)  // Reseta o estado do SearchInput
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return(
    <div className={style.projects}>
      <div className={style.title}>
        <h1>Meus Projetos</h1>
        <div className={style.add_search}>
          <AnimatedLinkButton to="/newproject" text="Novo Projeto" type="add"/>
          <SearchInput name="search" 
          placeholder="Pesquisar projeto" 
          handleOnChange={pesquisarProjeto}
          ref={searchInputRef}
          isOpen={isOpen}
          setIsOpen={setIsOpen}/>  
        </div>
        
        {/*<Input type="text" name="pesquisaProjeto" placeholder="Pesquisar projeto" handleOnChange={pesquisarProjeto} value=""/>*/}
      </div>
      {message && (
        <Message
        msg={message}
        type="success"/>  
      )}
      {projectMessage && (
        <Message
        msg={projectMessage}
        type="success"/>  
      )}
      {/*projects.length > 0 ? (
        projects.map((project)=>(
          <Project item={project} key={project.id} handleRemove={removeProject}/>
        ))
      ) : (
        <h1>Não há projetos</h1>
      )
      */}
      {/*filteredProjects.length > 0 ? (
        filteredProjects.map((project)=>(
          <Project item={project} key={project.id} handleRemove={removeProject}/>
        ))
      ) : (
        <h1>Não há projetos</h1>
      )
      */}
      {loading==true ? <Loader/> : 
        filteredProjects.length > 0 ? (
          filteredProjects.map((project)=>(
            <Project item={project} key={project.id} handleRemove={removeProject}/>
          ))
        ) : (
          <h1>Não há projetos</h1>
        )  
      }
    </div>
  )
}

export default Projects
