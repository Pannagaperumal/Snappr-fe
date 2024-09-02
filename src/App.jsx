import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
// import FirstPage from './components/FirstPage';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
// import SecondPage from './components/SecondPage';
// import ThirdPage from './components/ThirdPage';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './Dashboard/dashBoard';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
            <Route path="/" element={<Header isScrolled={isScrolled} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/dashboard' element={<DashBoard />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
