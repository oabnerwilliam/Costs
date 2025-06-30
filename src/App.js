import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/home'
import NewProject from './components/pages/new-project'
import Projects from './components/pages/projects'
import ProjectPage from './components/pages/project-page'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="newproject" element={<NewProject/>} />
            <Route path="projects" element={<Projects/>}/>
            <Route path="projectpage/:id" element={<ProjectPage/>}/>
          </Routes>
        </Container>  
        <Footer/>
      </Router>
    </div>
  );
}

export default App
