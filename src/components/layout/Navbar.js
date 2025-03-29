import React from 'react'
import {Link} from "react-router-dom"
import styles from './Navbar.module.css'
import Container from './Container'
import logo from '../../img/costs_logo.png'

function Navbar() {
  return (
    <div>
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="" /></Link>
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="newproject">Novo Projeto</Link>
                    </li>
                    {/* <li>
                        <Link to="company" >Empresa</Link>
                    </li>
                    <li>
                        <Link to="contact">Contato</Link>
                    </li> */}
                </ul>
            </Container>
        </nav>
    </div>
  )
}

export default Navbar
