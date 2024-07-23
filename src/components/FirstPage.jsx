import { Banknote, CameraIcon, Gauge, LockIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCamera, FaVideo, FaPlug, FaLock } from 'react-icons/fa';
import { FaLaptop, FaSlidersH, FaCheck, FaArrowRight } from 'react-icons/fa';

const FirstPage = () => {
  

  return (
    <div id='firstPage' className="h-fit w-full flex flex-col">
      <div className=' mt-[97px] flex justify-center items-center'>
      <div className='w-fit rounded-md p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-red-500'>
  <motion.div
   className='flex flex-col justify-center text-white text-center items-center'
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
   >
    <CameraIcon className='text-white h-14 w-14' /><br />
    <h1 className='text-xl font-semibold'>High Quality</h1>
    <p className='text-lg text-slate-200'>Photos retain quality</p>
  </motion.div>
  <motion.div
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
  className='flex flex-col justify-center text-white text-center items-center'>
    <Gauge className='text-white h-14 w-14' /><br />
    <h1 className='text-xl font-semibold'>Fast & Convenient</h1>
    <p className='text-lg text-slate-200'>QR interface</p>
  </motion.div>
  <motion.div
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
  className='flex flex-col justify-center text-white text-center items-center'>
    <LockIcon className='text-white h-14 w-14' /><br />
    <h1 className='text-xl font-semibold'>Secure</h1>
    <p className='text-lg text-slate-200'>Grouping photos by facial recognition</p>
  </motion.div>
  <motion.div
   initial={{ opacity: 0, x: -50 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
  className='flex flex-col justify-center text-white text-center items-center'>
    <Banknote className='text-white h-14 w-14' /><br />
    <h1 className='text-xl font-semibold'>Affordable pricing</h1>
    <p className='text-lg text-slate-200'>Pricing based on Event</p>
  </motion.div>
</div>
      </div>
      <div  className="mt-24 max-w-[900px] mx-auto mb-[45px] pb-[20px]">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="m-0 text-red-500 text-[25px] font-bold text-center"
        >
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="m-0 text-black text-[70px] font-bold uppercase tracking-tight text-center"
        >
          Who are we <span className=' text-red-500'>?</span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='m-0 text-center text-2xl font-semibold'
        >
          We are a passionate group of developers who are aiming to bring about a new change in the field of photography using technology and AI.
        </motion.h3>
        <div className="relative mt-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '3rem'} }
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-red-500 bottom-[10px]"
          ></motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '6rem'} }
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-black bottom-0"
          ></motion.div>
        </div>
      </div>
      <div>
      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row  justify-between items-center">
        <div className="md:w-1/3  mb-8 md:mb-0 flex flex-col pr-8 items-end ">
          <div className="product-feature md:w-[400px] w-full flex  items-center gap-4 mb-8">
          <div className="product-icon items-center md:hidden">
              <FaCamera className="text-4xl text-red-500 text-center" />
            </div>
            <div className="product-content flex flex-col text-right items-end">
              <h2 className="text-2xl text-gray-800 font-bold">Capturing candid moments</h2>
              <p className=' text-lg text-gray-600 font-medium'>We believe that candid photos are the most authentic and meaningful way to capture memories.</p>
            </div>
            <div className="product-icon items-center md:flex hidden">
              <FaCamera className="text-4xl text-red-500 text-center" />
            </div>
          </div>
          <div className="product-feature md:w-[400px] w-full flex items-center gap-4 mb-8">
          <div className="product-icon items-center md:hidden">
              <FaPlug className="text-4xl text-red-500" />
            </div>
            <div className="product-content flex flex-col text-right items-end">
              {/* <h2 className="text-2xl text-gray-800 font-bold">Providing High Quality images</h2>
              <p className=' text-md text-gray-600 font-medium'>Photos reach directly from the camera to your phone instantly.</p> */}
              <h2 className="text-2xl text-gray-800 font-bold">Fully connected</h2>
              <p className=' text-lg text-gray-600 font-medium'>The process is maintained by a single entity.</p>
            </div>
            <div className="product-icon items-center md:flex hidden">
              <FaPlug className="text-4xl text-red-500" />
            </div>
          </div>
        </div>

        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <div className="product-img">
            <img src="/about.png" alt="Product Image" className="w-full rounded-lg" />
          </div>
        </div>

        <div className="md:w-1/3  mb-8 md:mb-0 flex flex-col pl-8 items-start ">
        <div className="product-feature md:w-[400px] w-full flex items-center gap-4 mb-8">
        <div className="product-icon">
              <FaVideo className="text-4xl text-red-500" />
            </div>
            <div className="product-content">
              {/* <h2 className="text-2xl text-gray-800 font-bold">Fully connected</h2>
              <p>The process is maintained by a single entity.</p> */}
              <h2 className="text-2xl text-gray-800 font-bold">Providing High Quality images</h2>
              <p className=' text-lg text-gray-600 font-medium'>Photos reach directly from the camera to your phone instantly.</p>
            </div>
          </div>
          <div className="product-feature md:w-[400px] w-full flex items-center gap-4 mb-8">
            <div className="product-icon">
              <FaLock className="text-4xl text-red-500" />
            </div>
            <div className="product-content">
              <h2 className="text-2xl text-gray-800 font-bold">Secure</h2>
              <p className=' text-lg text-gray-600 font-medium'>The process is secured by the use of facial recognition models.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div>
      <div className="mt-24 max-w-[900px] mx-auto mb-[45px] pb-[10px]">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="m-0 text-red-500 text-[25px] font-bold text-center"
        >
          How Does
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="m-0 text-black text-[70px] font-bold uppercase tracking-tight text-center"
        >
          This work
        </motion.h1>
        <div className="relative mt-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '3rem'} }
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-red-500 bottom-[10px]"
          ></motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{width: '6rem'} }
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-black bottom-0"
          ></motion.div>
        </div>
        </div>
        <div className=" mx-auto px-4 py-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="process-col text-center relative">
          <FaLaptop className="text-8xl mb-4 mx-auto text-red-500" />
          <h2 className="text-xl font-semibold mb-2">Register</h2>
          <p className="text-gray-700">
            As soon as you buy the plan, register on our website as a photographer with the credentials.
          </p>
          <FaArrowRight className="text-5xl text-gray-400 hidden md:flex absolute right-0 bottom-2/3 transform translate-y-1/2" />
        </div>
        <div className="process-col text-center relative">
          <FaSlidersH className="text-8xl mb-4 mx-auto text-red-500" />
          <h2 className="text-xl font-semibold mb-2">Upload your clicks</h2>
          <p className="text-gray-700">
            Upload your clicks onto the website.
          </p>
          <FaArrowRight className="text-5xl text-gray-400 hidden md:flex absolute right-0 bottom-2/3 transform translate-y-1/2" />
        </div>
        <div className="process-col text-center relative">
          <FaCheck className="text-8xl mb-4 mx-auto text-red-500" />
          <h2 className="text-xl font-semibold mb-2">Place the QR</h2>
          <p className="text-gray-700">
            Place your QR code at the venue for users to download photos.
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default FirstPage;
