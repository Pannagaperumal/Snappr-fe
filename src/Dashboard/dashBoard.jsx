import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import LottieAnimation from './LottieAnimations/LottieAnimation copy';
import { gsap } from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { ImagePlus, XCircle } from 'lucide-react';

const DashBoard = () => {
  // const [file, setFile] = useState();
  const comp = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('data-target');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [files, setFiles] = useState([]);

const handleChange = (e) => {
  setFiles([...files, ...Array.from(e.target.files)]);
};

const handleRemoveImage = (index) => {
  const newFiles = files.filter((_, i) => i !== index);
  setFiles(newFiles);
};

const handleDrop = (e) => {
  e.preventDefault();
  setFiles([...files, ...Array.from(e.dataTransfer.files)]);
};


  const notifications = [
    "New message from John",
    "Your order has been shipped",
    "You have a new follower",
    "Your password was changed",
  ];

  const notificationRefs = useRef([]);
 

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        "#animation",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      )
        .from("#real", {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
          duration: 0.5,
        })
        .to("#real", {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
          duration: 0.5,
        })
        .to("#animation", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "power2.in",
          onComplete: () => {
            // Hide the element after the animation
            document.getElementById('animation').style.display = 'none';
          }
        })
        .fromTo(
          "#main-content",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.5"
        );

      return () => ctx.revert();
    }, comp);
  }, [comp]);


  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const droppedFile = e.dataTransfer.files[0];
  //   if (droppedFile) {
  //     const fileURL = URL.createObjectURL(droppedFile);
  //     setFile(fileURL);
  //   }
  //   setIsDragging(false);
  // };

  

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const closePopup = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="h-screen w-screen " ref={comp}>
      <div
        id="animation"
        className="justify-center z-20 text-center h-screen w-full flex absolute items-center"
      >
        <LottieAnimation id="real" className="max-w-screen-lg h-screen" />
      </div>
      <div id="main-content">

        {/* Header */}
        <header className="bg-white shadow-lg w-full z-10">
            <div className="h-[80px] flex justify-between items-center px-6 md:px-14 text-red-500 ">
              <h1 className="comfortaa font-bold text-[30px] md:text-[39px]">Snappr</h1>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="focus:outline-none flex justify-center"
                >
                  {menuOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
                </button>
              </div>
              <div className="comfortaa hidden md:flex text-center items-center font-bold text-lg space-x-9">
                <a
                  href="#Land"
                  className="hover:underline"
                  data-target="#Land"
                  onClick={handleClick}
                >
                  Home
                </a>
                <a
                  href="#firstPage"
                  className="hover:underline"
                  data-target="#firstPage"
                  onClick={handleClick}
                >
                  Features
                </a>
                <a
                  href="#products"
                  className="hover:underline"
                  data-target="#products"
                  onClick={handleClick}
                >
                  Packages
                </a>
                <a
                  href="#contact"
                  className="hover:underline"
                  data-target="#contact"
                  onClick={handleClick}
                >
                  Contact
                </a>
              </div>
              {menuOpen && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-20"
                  initial={{ opacity: 0, y: -20 }}
                  exit={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm relative">
                    <motion.button
                      onClick={toggleMenu}
                      className="absolute top-4 right-4 text-red-500 bg-gray-200 p-2 rounded-full"
                      initial={{ opacity: 0, scale: 0.2 }}
                      exit={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <HiX className="w-6 h-6" />
                    </motion.button>
                    <a
                      href="#Land"
                      className="block text-lg font-semibold hover:underline text-red-500 mb-4"
                      data-target="#Land"
                      onClick={handleClick}
                    >
                      Home
                    </a>
                    <a
                      href="#firstPage"
                      className="block text-lg font-semibold hover:underline text-red-500 mb-4"
                      data-target="#firstPage"
                      onClick={handleClick}
                    >
                      Features
                    </a>
                    <a
                      href="#products"
                      className="block text-lg font-semibold hover:underline text-red-500 mb-4"
                      data-target="#products"
                      onClick={handleClick}
                    >
                      Packages
                    </a>
                    <a
                      href="#contact"
                      className="block text-lg font-semibold hover:underline text-red-500"
                      data-target="#contact"
                      onClick={handleClick}
                    >
                      Contact
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
        </header>

        <div className="min-h-screen h-screen relative  ">


        {/* Image Adding and Review Container */}
<section
  className="backkk p-4 h-[55%] flex flex-col items-center justify-center"
>
  <div 
    className={`flex flex-col items-center justify-center border-2 w-[100%] md:w-[60%] h-[85%] md:h-[95%] rounded-lg bg-slate-100 border-dashed border-black p-4 shadow transition-transform duration-300 ${isDragging ? 'scale-110' : 'scale-100'} filter brightness-45 opacity-90`}
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
  >
    {/* Content inside the div */}
    {files.length > 0 ? (
      <div className="p-4 bg-white gap-3 text-center flex items-center justify-between rounded-lg shadow-lg filter brightness-100 opacity-95 w-full overflow-x-auto">
        <div className="flex items-center space-x-4">
          {files.map((file, index) => (
            <div key={index} className="flex flex-col items-center m-2">
              <img
                src={URL.createObjectURL(file)}
                alt={`Selected file preview ${index + 1}`}
                className="w-[290px] h-[150px] rounded-lg border border-gray-200 shadow"
              />
              <div className="flex mt-2 space-x-2">
                <XCircle
                  onClick={() => handleRemoveImage(index)}
                  className="h-7 w-7 text-red-500 hover:text-red-600 cursor-pointer transition-colors"
                />
              </div>
            </div>
          ))}
    {/* <PauseCircleIcon className="h-8 w-8 text-red-500 hover:text-red-600 cursor-pointer transition-colors" /> Pause function for image upload */}
        </div>
        <h2 className="md:text-xl font-semibold ">
          <label htmlFor="file-upload" className="cursor-pointer text-red-500">
            Browse...
          </label>
        </h2>
        <input
          type="file"
          onChange={handleChange}
          className="hidden"
          id="file-upload"
          multiple // Allows multiple file selection
        />
      </div>
    ) : (
      <div className="text-center justify-center flex flex-col items-center">
        <ImagePlus className='text-red-500 md:h-[70px] md:w-[70px] h-12 w-12' />
        <h2 className="md:text-xl font-semibold mb-4">
          Drop your images here, or{" "}
          <label htmlFor="file-upload" className="cursor-pointer text-red-500">
            Browse...
          </label>
        </h2>
        <input
          type="file"
          onChange={handleChange}
          className="hidden"
          id="file-upload"
          multiple // Allows multiple file selection
        />
      </div>
    )}
  </div>
</section>



          {/* Main Content */}
          <main className=" bg-gradient-to-br from-darkBlue via-darkPurple to-darkBlue h-screen md:pl-9 md:pr-9 pr-3 pl-3 pt-2 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Welcome Message and Quick Stats */}
            <section className=" h-auto rounded-lg shadow-gray-800 shadow-md">
            <div className="relative ">
            <h1 className="text-xl text-white relative z-10 p-4 font-semibold mb-4">Welcome, [User]!</h1>

    <svg
      className="waves absolute top-0 left-0 w-full h-[70px] md:rounded-none rounded-md -translate-y-[10%]"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>

      <g className="wavy">
        <use xlinkHref="#gentle-wave" x="28" y="0" fill="#EA5455" />
        <use xlinkHref="#gentle-wave" x="28" y="6" fill="rgb(14, 27, 66)" />
        <use xlinkHref="#gentle-wave" x="28" y="9" fill="rgb(14, 27, 66)" />
        <use xlinkHref="#gentle-wave" x="28" y="3" fill="#EA5455" />
      </g>
    </svg>

   <div className=' mt-2 bg-white relative rounded-b-lg md:rounded-t-none rounded-t-lg '>  
  <p className=" p-4">Quick Stats:</p>
  <div className="grid p-4 grid-cols-2 gap-2">
    <div>
      <h1 className="font-semibold">Total Storage:</h1>
      <p>100 GB</p>
    </div>
    <div>
      <h1 className="font-semibold">Storage Consumed:</h1>
      <p>60 GB</p>
    </div>
    <div>
      <h1 className="font-semibold">Storage Left:</h1>
      <p>40 GB</p>
    </div>
    <div>
      <h1 className="font-semibold">Images Uploaded:</h1>
      <p>1,200</p>
    </div>
    <div>
      <h1 className="font-semibold">Images Deleted:</h1>
      <p>300</p>
    </div>
    <div>
      <h1 className="font-semibold">Images Converted to QR:</h1>
      <p>900</p>
    </div>
  </div>
   </div>
  </div>
  
            </section>


            {/* Notification Center */}
            <section className="h-auto rounded-lg shadow-gray-800 bg-gradient-to-br from-darkBlue via-darkPurple to-darkBlue shadow-md  p-4 ">
      <div className="relative h-[70px] w-full rounded-lg bg-red-500 mb-4 mt-0">
        <h1 className="text-xl text-white relative text-center p-4 font-semibold">
          Notifications
        </h1>
      </div>
      <div
        className={`${
          notifications.length > 3 ? 'max-h-[200px] overflow-y-auto' : ''
        }`}
      >
        {notifications.map((notification, index) => (
          <div
            key={index}
            className=" text-black font-semibold bg-white flex justify-between rounded-lg p-4 mb-2 cursor-pointer"
            ref={(el) => (notificationRefs.current[index] = el)}
            onClick={() => handleNotificationClick(notification)}
          >
 <span>{notification}</span>
    <XCircle
      className="h-6 w-6 text-red-500 cursor-pointer"
    />          
    </div>
        ))}
      </div>

      {/* Popup for full message display */}
      {selectedNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4">Notification</h2>
            <p className="mb-4">{selectedNotification}</p>
            <button
              onClick={closePopup}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>

            {/* Upload Management */}
            <section className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Upload Management</h2>
              {/* Upload management details */}
            </section>

            {/* QR Code Management */}
            <section className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">QR Code Management</h2>
              {/* QR code management details */}
            </section>

            {/* Generate QR Code UI */}
            <section className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Generate QR Code</h2>
              {/* QR code generation details */}
            </section>

            {/* Track QR Code Usage UI */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Track QR Code Usage</h2>
              {/* QR code usage tracking details */}
            </section>

            {/* User Management */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">User Management</h2>
              {/* User management details */}
            </section>

            {/* Account Settings */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              {/* Account settings details */}
            </section>

            {/* Subscription Management */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Subscription Management</h2>
              {/* Subscription management details */}
            </section>

            {/* Support Center */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Support Center</h2>
              {/* Support center details */}
            </section>

            {/* Download Stats */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Download Stats</h2>
              {/* Download stats details */}
            </section>

            {/* Revenue Reports */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Revenue Reports</h2>
              {/* Revenue reports details */}
            </section>

            {/* Theme Settings */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
              {/* Theme settings details */}
            </section>

            {/* Branding */}
            <section className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Branding</h2>
              {/* Branding details */}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
