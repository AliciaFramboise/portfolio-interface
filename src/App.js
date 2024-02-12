
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Ideas from './pages/Ideas/Ideas';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Login from './pages/Login/Login'
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )   
}

export default App;
