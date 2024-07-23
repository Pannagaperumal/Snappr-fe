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
      <div className={`bg-inherit fixed h-[80px] w-full flex z-10 justify-between items-center py-4 px-6 md:px-[75px] ${isScrolled ? 'bg-white text-red-500 shadow-lg' : 'bg-transparent text-white'} transition-colors duration-300`}>
    <h1 className='comfortaa font-bold text-[30px] md:text-[39px]'>Snappr</h1>
    <div className='md:hidden'>
      <button onClick={toggleMenu} className="focus:outline-none items-center flex justify-center text-center  md:text-current">
        {menuOpen ? <HiX className="w-8 h-8 " /> : <HiMenu className="w-8 h-8" />}
      </button>
    </div>
    <div className='comfortaa hidden md:flex flex-row text-center justify-center items-center font-bold text-[18px] space-x-9'>
      <a href="#Land" className='hover:underline' data-target="#Land" onClick={handleClick}>Home</a>
      <a href="#firstPage" className='hover:underline' data-target="#firstPage" onClick={handleClick}>Features</a>
      <a href="#products" className='hover:underline' data-target="#products" onClick={handleClick}>Packages</a>
      <a href="#contact" className='hover:underline' data-target="#contact" onClick={handleClick}>Contact</a>
    </div>
    {/* Popup menu for mobile view */}
    {menuOpen && (
      <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, y: -20 }}
      exit={{opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm relative">
          <motion.button onClick={toggleMenu} className="absolute top-4 right-4 text-red-500 bg-gray-200 p-2 rounded-full"
          initial={{ opacity: 0, scale: 0.2 }}
          exit={{opacity: 0, y: 20}}
            animate={{ opacity: 1 , scale: 1}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <HiX className="w-6 h-6" />
          </motion.button>
          <a href="#Land" className='block text-lg font-semibold hover:underline text-red-500 mb-4' data-target="#Land" onClick={handleClick}>Home</a>
          <a href="#firstPage" className='block text-lg font-semibold hover:underline text-red-500 mb-4' data-target="#firstPage" onClick={handleClick}>Features</a>
          <a href="#products" className='block text-lg font-semibold hover:underline text-red-500 mb-4' data-target="#products" onClick={handleClick}>Packages</a>
          <a href="#contact" className='block text-lg font-semibold hover:underline text-red-500' data-target="#contact" onClick={handleClick}>Contact</a>
        </div>
      </motion.div>
    )}
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
