import React from 'react'
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const ThirdPage = () => {
  return (
    <div>
      <div id="contact" className="py-20 bg-gradient-to-b from-imperial-blue to-deep-maroon relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="m-0 text-royal-gold text-lg md:text-xl lg:text-2xl font-bold cinzel tracking-wider"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="m-0 text-cream-ivory text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight playfair"
          >
            Get in <span className='text-royal-gold'>Touch</span>
          </motion.h1>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-royal-gold/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-royal-gold/10 to-deep-maroon/30 p-12 rounded-2xl border border-royal-gold/30 backdrop-blur-sm">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-cream-ivory cinzel mb-8">About Us</h3>
                  <p className="text-cream-ivory/80 font-light leading-relaxed max-w-md mx-auto">
                    We're building a platform that makes event photography easier and more accessible using modern technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="contact-info bg-gradient-to-br from-royal-gold/5 to-deep-maroon/20 p-8 md:p-12 rounded-2xl border border-royal-gold/30 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-royal-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream-ivory cinzel">Our Address</h3>
                    <p className="text-cream-ivory/70 font-light">Bangalore, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center">
                    <FaEnvelope className="text-royal-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream-ivory cinzel">Email Us</h3>
                    <p className="text-cream-ivory/70 font-light">pannagaperumal404@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-royal-gold/5 border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center">
                    <FaPhone className="text-royal-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream-ivory cinzel">Call Us</h3>
                    <p className="text-cream-ivory/70 font-light">+91 7975519844</p>
                  </div>
                </div>
              </div>
              <div className="social mt-8 flex justify-center gap-4">
                <a href="https://www.instagram.com" className="w-12 h-12 rounded-full bg-royal-gold/10 border border-royal-gold/30 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-imperial-blue transition-all duration-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer" className="py-8 bg-imperial-blue border-t border-royal-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <p className="text-cream-ivory/70 font-light">&copy; 2024 <span className="text-royal-gold font-playfair font-semibold">Snaprr</span>. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <p className="text-cream-ivory/50 text-sm">Event Photography Platform</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThirdPage
