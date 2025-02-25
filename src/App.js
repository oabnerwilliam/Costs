import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import styles from './components/layout/App.module.css'
import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <ul className={styles.menu}>
          <Link to="/" className={styles.botao}>Início</Link>
          <Link to="company" className={styles.botao}>Empresa</Link>
          <Link to="contact" className={styles.botao}>Contato</Link>
          <Link to="newproject" className={styles.botao}>Novo Projeto</Link>
        </ul>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="company" element={<Company/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="newproject" element={<NewProject/>} />
          </Routes>
        </Container>  
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
