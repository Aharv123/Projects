import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='ABC'>
        <Navbar title="TextOps" home="Home" about="About" />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm heading="Enter Text" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
