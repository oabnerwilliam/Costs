import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

import style from './ProjectPage.module.css'

import Loader from '../layout/Loader'
import AnimatedLinkButton from '../layout/AnimatedLinkButton'
import { FaPencil, FaX } from 'react-icons/fa6'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

function ProjectPage() {
    const {id} = useParams()
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState({})
    const [loading, setLoading] = useState(true)
    const [projectForm, setProjectForm] = useState(false)
    const [message, setMessage] = useState('')

    const location = useLocation()

    useEffect(()=>{
        if (location.state) {
        setProjectForm(location.state.edit)
    }

    const handleSetProjects = (item) => {
        setProjects(item)
    }
    }, [])

    /*useEffect(() => {
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
    }, [])*/
    
    useEffect(()=>{
        setTimeout(()=>{
            /*let projectData
            if(projects.length > 0 && id) {
                projectData = projects.find((p) => Number(p.id) === Number(id))
            }
            if (projectData) {
                setCurrentProject(projectData)
                setLoading(false)
            }*/
           fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
           })
           .then((resp)=>resp.json())
           .then((data)=>{
            setCurrentProject(data)
            setLoading(false)
           })
           .catch((err)=>console.log("Erro ao buscar projeto:", err))
        }, 1000)
    }, [projects, id])

    const showForm = () => {
        if (projectForm) {
            setProjectForm(false)
        } else {
            setProjectForm(true)
        }
    }

    const editProject = (project) => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setCurrentProject(data)
            setProjectForm(false)
            setMessage('Projeto editado com sucesso!')
        })
        .catch((err)=>console.log(err))
    }

    return (
        <>
            {
                loading ? (
                    <Loader/>
                ) : (
                <div className={style.project}>
                    <div className={style.info}>
                        {
                            message && (
                                <Message type="success" msg="Projeto editado com sucesso!"/>
                            )
                        }
                        <AnimatedLinkButton to="/projects" text="Ver Projetos" type="see"/>
                        {
                            !projectForm ? (
                                <div className={style.text}>
                                    <h1>{currentProject.name}</h1>
                                    <p><strong>Categoria:</strong> {currentProject.category?.name||""}</p>
                                    <p><strong>Orçamento:</strong> {currentProject.budget}</p>
                                </div>
                            ) : (
                                <div>
                                    <h1>Editar Projeto</h1>
                                    <ProjectForm projectData={currentProject}
                                    btnText="Enviar Alterações"
                                    handleSubmit={editProject}/>    
                                </div>
                                
                            )
                        }
                        
                    </div>
                    <button onClick={showForm}>
                        {projectForm ? (
                            <FaX/>
                        ) : (
                            <FaPencil/>     
                        )}
                           
                    </button>
                    
                </div>
                 
                )
            }
        </>
    )
}

export default ProjectPage
