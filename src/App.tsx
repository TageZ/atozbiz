import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import './App.scss';
import Home from './home';
import Consultation from './consultation';
import Contact from './contact';

function About() {
  return <div>About Page</div>; // Replace with actual component
}

function Services() {
  return <div>Services Page</div>; // Replace with actual component
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </Router>
  );
}

export default App;
