import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

import style from './ProjectPage.module.css'

function ProjectPage() {
    const {id} = useParams()
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState([])

    const handleSetProjects = (item) => {
        setProjects(item)
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
    
    useEffect(()=>{
        let projectData
        if(projects.length > 0 && id) {
            projectData = projects.find((p) => Number(p.id) === Number(id))
        }
        if (projectData) {
            setProject(projectData)
        }
        
    }, [projects, id])

    return (
        <div className={style.project}>
            <h1>{project.name}</h1>
            <p>Categoria: {project.category?.name||"Carregando"}</p>
            <p>Orçamento: {project.budget}</p>
        </div>
    )
}

export default ProjectPage
