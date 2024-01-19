
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Ideas from './pages/Ideas/Ideas';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Portfolio />} />
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
