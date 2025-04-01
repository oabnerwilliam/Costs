import { useState } from 'react'
import { useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        //setCategories(data)
        handleSetCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

//TODO: descobrir o real motivo de usar os handlers
  const handleSetCategories = (item) =>{
    setCategories(item)
  }

  const submit = (e) => {
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({
      ...project, 
      [e.target.name]: e.target.value
    })
  }

  function handleCategory(e) {
    setProject({
      ...project, 
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input type="text" 
      text="Nome do projeto:" 
      placeholder="Insira o nome do projeto" 
      name="name"
      handleOnChange={handleChange}
      value={project.name ? project.name : ''}/>
      <Input type="number" 
      text="Orçamento do projeto:" 
      placeholder="Insira o orçamento do projeto" 
      name="budget"
      handleOnChange={handleChange}
      value={project.budget ? project.budget : ''}/>
      <Select text="Selecione a categoria:" 
      name="seleção" 
      options={categories}
      handleOnChange={handleCategory}
      value={project.category ? project.category.id : ''}/>
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default ProjectForm
