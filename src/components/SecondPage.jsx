import React from 'react';
import { motion } from 'framer-motion';

const SecondPage = () => {
  const products = [
    { title: 'Weddings & Large Events', description: '50-100 GB', price: '₹2,999', imgSrc: '/product-1.png', tag: 'Popular' },
    { title: 'Corporate Events', description: '20-50GB', price: '₹1,999', imgSrc: '/product-2.png', tag: 'Business' },
    { title: 'Parties', description: '10-20GB', price: '₹399', imgSrc: '/product-3.png', tag: 'Value' },
    { title: 'School & College Events', description: '5-10GB', price: '₹399', imgSrc: '/college.jpg', tag: 'Student' }
  ];

  return (
    <div id="products" className="flex flex-col justify-center items-center py-20 bg-gradient-to-b from-imperial-blue-light to-imperial-blue relative overflow-hidden">
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="m-0 text-royal-gold text-lg md:text-xl lg:text-2xl font-bold cinzel tracking-wider"
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="m-0 text-cream-ivory text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight playfair"
          >
            Our <span className='text-royal-gold'>Plans</span>
          </motion.h1>
          <div className="relative mt-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '3rem' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-royal-gold bottom-[10px]"
            ></motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute h-[2px] left-1/2 transform -translate-x-1/2 bg-cream-ivory/50 bottom-0"
            ></motion.div>
          </div>
        </div>
        <div className="flex justify-center mt-12 gap-6 overflow-x-auto pb-4">
          {products.map((product, index) => (
            <div key={index} className="w-80 flex-shrink-0 p-2 md:p-4">
              <motion.div 
                className="product-single bg-gradient-to-br from-royal-gold/10 to-deep-maroon/20 h-full p-6 md:p-8 rounded-2xl border border-royal-gold/30 backdrop-blur-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-royal relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-royal-gold/20 border border-royal-gold/50 rounded-full text-xs font-semibold text-royal-gold cinzel uppercase tracking-wider">
                    {product.tag}
                  </span>
                </div>
                <div className="product-title text-center mb-6 h-[80px]">
                  <h2 className="text-xl md:text-2xl font-semibold text-cream-ivory cinzel mb-2">{product.title}</h2>
                  <p className="text-cream-ivory/70 font-light">{product.description}</p>
                </div>
                <div className="product-img mb-6 relative">
                  <div className="absolute inset-0 bg-royal-gold/10 rounded-lg blur-xl"></div>
                  <img src={product.imgSrc} alt="Product Image" className="w-full h-48 object-cover rounded-lg relative z-10 border border-royal-gold/20" />
                </div>
                <div className="product-footer text-center">
                  <h3 className="text-3xl font-bold text-royal-gold cinzel mb-4">{product.price}</h3>
                  <button className="w-full py-3 bg-gradient-gold text-imperial-blue font-semibold rounded-lg border border-royal-gold/50 hover:shadow-glow transition-all duration-300 cinzel">
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
