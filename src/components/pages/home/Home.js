import styles from './Home.module.css'
import savings from '../../../img/savings.svg'
import LinkButton from '../../layout/LinkButton'

const Home = () => {
  return(
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs!</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <div>
        <LinkButton to="/newproject" text="Criar Projeto" color="black"/>
        <LinkButton to="/projects" text="Ver Projetos" color="gold"/>
      </div>
      <img src={savings} alt="Costs"/>
    </section>
  )
}

export default Home
