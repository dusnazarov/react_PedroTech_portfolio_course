import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './companents/Navbar';
import Footer from './companents/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>          
          <Route path="/experince" element={<Experience />}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}
export default App;
