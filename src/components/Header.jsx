import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import LandingPage from './LandingPage';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
// import { Link } from 'react-router-dom';
const Header = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('data-target');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={`fixed h-[90px] w-full flex z-50 justify-between items-center py-4 px-6 md:px-[75px] transition-all duration-500 ${isScrolled ? 'bg-imperial-blue/95 backdrop-blur-md shadow-premium border-b border-royal-gold/30' : 'bg-gradient-to-b from-imperial-blue/80 to-transparent'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow">
            <span className="text-imperial-blue font-bold text-xl cinzel">S</span>
          </div>
          <h1 className='font-cinzel font-bold text-[28px] md:text-[36px] text-royal-gold tracking-wider'>Snappr</h1>
        </div>
      </div>
      <main className="flex-grow">
          <LandingPage />
          <FirstPage />
          <SecondPage />
          <ThirdPage />
      </main>
  </div>
  );
};

export default Header;
