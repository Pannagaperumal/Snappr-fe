import { Banknote, CameraIcon, Gauge, LockIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCamera, FaVideo, FaPlug, FaLock } from 'react-icons/fa';
import { FaLaptop, FaSlidersH, FaCheck, FaArrowRight } from 'react-icons/fa';

const FirstPage = () => {
  

  return (
    <div id='firstPage' className="h-fit w-full flex flex-col bg-gradient-to-b from-imperial-blue to-imperial-blue-light relative overflow-hidden">
      <div className='mt-[97px] flex justify-center items-center px-4'>
      <div className='w-full max-w-7xl rounded-2xl p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-br from-deep-maroon/80 to-imperial-blue/90 backdrop-blur-sm border border-royal-gold/30 shadow-premium'>
  <motion.div
   className='flex flex-col justify-center text-cream-ivory text-center items-center p-6 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 hover:shadow-royal'
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
   whileHover={{ scale: 1.05, y: -5 }}
   >
    <motion.div 
      className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <CameraIcon className='text-royal-gold h-8 w-8' />
    </motion.div>
    <h1 className='text-xl font-semibold cinzel mb-2'>High Quality</h1>
    <p className='text-sm text-cream-ivory/70'>Photos retain their original quality</p>
  </motion.div>
  <motion.div
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1, delay: 0.1 }}
  className='flex flex-col justify-center text-cream-ivory text-center items-center p-6 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 hover:shadow-royal'
  whileHover={{ scale: 1.05, y: -5 }}
  >
    <motion.div 
      className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4"
      animate={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Gauge className='text-royal-gold h-8 w-8' />
    </motion.div>
    <h1 className='text-xl font-semibold cinzel mb-2'>Fast & Convenient</h1>
    <p className='text-sm text-cream-ivory/70'>Easy QR interface for quick access</p>
  </motion.div>
  <motion.div
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1, delay: 0.2 }}
  className='flex flex-col justify-center text-cream-ivory text-center items-center p-6 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 hover:shadow-royal'
  whileHover={{ scale: 1.05, y: -5 }}
  >
    <motion.div 
      className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <LockIcon className='text-royal-gold h-8 w-8' />
    </motion.div>
    <h1 className='text-xl font-semibold cinzel mb-2'>Secure</h1>
    <p className='text-sm text-cream-ivory/70'>Photos grouped by facial recognition</p>
  </motion.div>
  <motion.div
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1, delay: 0.3 }}
  className='flex flex-col justify-center text-cream-ivory text-center items-center p-6 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 hover:shadow-royal'
  whileHover={{ scale: 1.05, y: -5 }}
  >
    <motion.div 
      className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center mb-4"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <Banknote className='text-royal-gold h-8 w-8' />
    </motion.div>
    <h1 className='text-xl font-semibold cinzel mb-2'>Affordable Pricing</h1>
    <p className='text-sm text-cream-ivory/70'>Pricing based on event type</p>
  </motion.div>
</div>
      </div>
      <div  className="mt-32 max-w-[900px] mx-auto mb-[45px] pb-[20px]">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="m-0 text-royal-gold text-lg md:text-xl lg:text-2xl font-bold text-center cinzel tracking-wider"
        >
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="m-0 text-cream-ivory text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-center playfair"
        >
          Who We <span className=' text-royal-gold'>Are</span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='m-0 text-center text-2xl font-light text-cream-ivory/80 max-w-3xl mx-auto'
        >
          We are a team of developers using AI to make event photography better and more accessible for everyone.
        </motion.h3>
        <div className="relative mt-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '3rem'} }
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-royal-gold bottom-[10px]"
          ></motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '6rem'} }
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-cream-ivory/50 bottom-0"
          ></motion.div>
        </div>
      </div>
      <div>
      <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col pr-8 items-end">
          <div className="product-feature md:w-[400px] w-full flex items-center gap-4 mb-8">
          <div className="product-icon items-center md:hidden">
              <FaCamera className="text-4xl text-royal-gold text-center" />
            </div>
            <div className="product-content flex flex-col text-right items-end">
              <h2 className="text-2xl text-cream-ivory font-bold cinzel">Candid Moments</h2>
              <p className='text-lg text-cream-ivory/70 font-light'>We believe candid photos are the most authentic way to capture memories.</p>
            </div>
            <div className="product-icon items-center md:flex hidden">
              <FaCamera className="text-4xl text-royal-gold text-center" />
            </div>
          </div>
          <div className="product-feature md:w-[400px] w-full flex items-center gap-4 mb-8">
          <div className="product-icon items-center md:hidden">
              <FaPlug className="text-4xl text-royal-gold" />
            </div>
            <div className="product-content flex flex-col text-right items-end">
              <h2 className="text-2xl text-cream-ivory font-bold cinzel">Fully Connected</h2>
              <p className='text-lg text-cream-ivory/70 font-light'>The entire process is managed by a single platform.</p>
            </div>
            <div className="product-icon items-center md:flex hidden">
              <FaPlug className="text-4xl text-royal-gold" />
            </div>
          </div>
        </div>

        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <div className="product-img relative">
            <div className="absolute inset-0 bg-royal-gold/20 rounded-lg blur-xl"></div>
            <img src="/about.png" alt="Product Image" className="w-full rounded-lg relative z-10 border-2 border-royal-gold/30" />
          </div>
        </div>

        <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col pl-8 items-start">
        <div className="product-feature md:w-[400px] w-full flex items-center gap-4 mb-8">
        <div className="product-icon">
              <FaVideo className="text-4xl text-royal-gold" />
            </div>
            <div className="product-content">
              <h2 className="text-2xl text-cream-ivory font-bold cinzel">High Quality Images</h2>
              <p className='text-lg text-cream-ivory/70 font-light'>Photos go directly from camera to your phone instantly.</p>
            </div>
          </div>
          <div className="product-feature md:w-[400px] w-full flex items-center gap-4 mb-8">
            <div className="product-icon">
              <FaLock className="text-4xl text-royal-gold" />
            </div>
            <div className="product-content">
              <h2 className="text-2xl text-cream-ivory font-bold cinzel">Secure</h2>
              <p className='text-lg text-cream-ivory/70 font-light'>Facial recognition keeps your photos organized and private.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div>
      <div className="mt-32 max-w-[900px] mx-auto mb-[45px] pb-[10px]">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="m-0 text-royal-gold text-lg md:text-xl lg:text-2xl font-bold text-center cinzel tracking-wider"
        >
          How It Works
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="m-0 text-cream-ivory text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-center playfair"
        >
          The Process
        </motion.h1>
        <div className="relative mt-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '3rem'} }
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-royal-gold bottom-[10px]"
          ></motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '6rem'} }
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-cream-ivory/50 bottom-0"
          ></motion.div>
        </div>
        </div>
        <div className="mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="process-col text-center relative p-8 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-royal-gold/20 flex items-center justify-center mx-auto mb-4">
            <FaLaptop className="text-4xl text-royal-gold" />
          </div>
          <h2 className="text-xl font-semibold mb-2 cinzel text-cream-ivory">Register</h2>
          <p className="text-cream-ivory/70 mb-4">
            Sign up as a photographer after buying a plan.
          </p>
          <ul className="text-cream-ivory/60 text-sm text-left space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Create your photographer account</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Choose your pricing plan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Set up your event details</span>
            </li>
          </ul>
          <FaArrowRight className="text-5xl text-royal-gold/30 hidden md:flex absolute right-0 bottom-2/3 transform translate-y-1/2" />
        </div>
        <div className="process-col text-center relative p-8 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-royal-gold/20 flex items-center justify-center mx-auto mb-4">
            <FaSlidersH className="text-4xl text-royal-gold" />
          </div>
          <h2 className="text-xl font-semibold mb-2 cinzel text-cream-ivory">Upload Photos</h2>
          <p className="text-cream-ivory/70 mb-4">
            Upload your event photos to the platform.
          </p>
          <ul className="text-cream-ivory/60 text-sm text-left space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Upload photos during or after event</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Photos are automatically organized</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>AI groups photos by faces</span>
            </li>
          </ul>
          <FaArrowRight className="text-5xl text-royal-gold/30 hidden md:flex absolute right-0 bottom-2/3 transform translate-y-1/2" />
        </div>
        <div className="process-col text-center relative p-8 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-royal-gold/20 flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-4xl text-royal-gold" />
          </div>
          <h2 className="text-xl font-semibold mb-2 cinzel text-cream-ivory">Place QR Code</h2>
          <p className="text-cream-ivory/70 mb-4">
            Put the QR code at the venue for guests to download photos.
          </p>
          <ul className="text-cream-ivory/60 text-sm text-left space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Generate unique QR code for event</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Display at venue for guests to scan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-royal-gold">•</span>
              <span>Guests download their photos instantly</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default FirstPage;
