import React from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input type="text" text="Nome do projeto:" placeholder="Insira o nome do projeto" name="nome"/>
      <Input type="number" text="Orçamento do projeto:" placeholder="Insira o orçamento do projeto" name="nome"/>
      <Select text="Selecionar:" name="Seleção"/>
    </form>
  )
}

export default ProjectForm
