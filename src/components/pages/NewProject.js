import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useEffect, useState } from 'react'

function NewProject() {
  const navigate = useNavigate()
  const [idCounter, setIdCounter] = useState(0)

  useEffect(() => {
    fetch("http://localhost:5000/idControl", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setIdCounter(data.idCounter)
      })
      .catch((err) => console.log(err))
  }, [])

  function createPost(project) {
    //initialize cost and services
    project.cost = 0
    project.services = []
    project.id = idCounter

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(project)
    })
      .then(resp => resp.json())
      .then((data)=> {
        const newId = idCounter + 1
        setIdCounter(newId)
        updateIdCounter(newId)
        //redirect
        const state = {message: 'Projeto criado com sucesso!'}
        navigate("/projects", {state})
      })
      .catch(error => console.log(error))
  }
  
  function updateIdCounter(newId) {
    fetch("http://localhost:5000/idControl", {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ "idCounter": newId })
    })
      .then((resp) => {
        console.log("Resposta do servidor:", resp);
        if (!resp.ok) {
          throw new Error(`Erro ao atualizar ID: ${resp.status}`);
        }
        return resp.json()})
      .then((data)=> {
        console.log("ID atualizado no banco!", data)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </div>
  )
}

export default NewProject

