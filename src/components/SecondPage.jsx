import React from 'react';
import { motion } from 'framer-motion';

const SecondPage = () => {
  const products = [
    { title: 'Weddings and Large Events', description: '50-100 GB', price: '₹2,999', imgSrc: '/product-1.png' },
    { title: 'Corporate Events', description: '20-50GB', price: '₹1,999', imgSrc: '/product-2.png' },
    { title: 'Parties', description: '10-20GB', price: '₹399', imgSrc: '/product-3.png' },
    { title: 'School & College Events', description: '5-10GB', price: '₹399', imgSrc: '/college.jpg' }
  ];

  return (
    <div id="products" className="flex flex-col justify-center items-center mt-8">
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="m-0 text-red-500 text-[25px] font-bold"
          >
            Affordable
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="m-0 text-black text-[50px] md:text-[70px] font-bold uppercase tracking-tight"
          >
            PRICE
          </motion.h1>
          <div className="relative mt-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '3rem' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-red-500 bottom-[10px]"
            ></motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-black bottom-0"
            ></motion.div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          {products.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2 md:p-4">
              <div className="product-single bg-white h-full p-4 md:p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-red-400 hover:scale-105">
                <div className="product-title text-center mb-4 h-[80px]">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div className="product-img mb-4">
                  <img src={product.imgSrc} alt="Product Image" className="w-full h-40 md:h-50 object-cover rounded-lg" />
                </div>
                <div className="product-footer text-center">
                  <h3 className="text-xl font-bold text-gray-800">{product.price}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
