import { useEffect, useState } from 'react'
import Project from '../../project/Project'
import style from './Projects.module.css'
import Message from '../../layout/Message'
import { useLocation } from 'react-router-dom'
import AnimatedLinkButton from '../../layout/AnimatedLinkButton'
import Loader from '../../layout/Loader'
import HandleSearch from '../../../handlers/handleSearch/HandleSearch'
import useProjects from './useProjects'

const Projects = () => {
  const {
    projects,
    setSearchText,
    searchText,
    filteredProjects,
    setFilteredProjects,
    message,
    projectMessage,
    loading,
    removeProject
  } = useProjects()
  
  return (
    <div className={style.projects}>
      <div className={style.title}>
        <h1>Meus Projetos</h1>
        <div className={style.add_search}>
          <AnimatedLinkButton to="/newproject" text="Novo Projeto" type="add"/>
          <HandleSearch 
          list={projects}
          setSearchText={setSearchText}
          searchText={searchText}
          placeholder="Pesquisar projeto"
          setFiltered={setFilteredProjects}/>
        </div>
      </div>
      {message && (
        <Message
        msg={message}
        type="success"
        />  
      )}
      {projectMessage && (
        <Message
        msg={projectMessage}
        type="success"/>  
      )}
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
