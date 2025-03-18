import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

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
            <Route path="company" element={<Company/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="newproject" element={<NewProject/>} />
          </Routes>
        </Container>  
        <Footer/>
      </Router>
    </div>
  );
}

export default App
