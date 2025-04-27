import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import './App.scss';
import Home from './home/index';
import Consultation from './consultation';
import Contact from './contact';
import Footer from './footer';
import About from './about';

function Services() {
  return <div>Services Page</div>; // Replace with actual component
}

function App() {
  return (
    <Router>
      <NavBar />  
      <div className="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
