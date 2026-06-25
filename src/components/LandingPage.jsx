import { SquareArrowRightIcon } from 'lucide-react';
import '../index.css';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div id='Land' className="relative h-screen w-screen flex justify-start items-center overflow-hidden">
      {/* Background with Indian Heritage Patterns */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-geometric-pattern opacity-20"></div>
      
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 bg-center filter" style={{ backgroundImage: "url('/wallpaperflare.com_wallpaper2.jpg')" }}></div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-imperial-blue/95 via-imperial-blue/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-blue/70 via-transparent to-imperial-blue/90"></div>
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-royal-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-deep-maroon/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Indian Pattern Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-royal-gold/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-royal-gold/10 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      
      {/* Landing page elements */}
      <div className="relative flex flex-col gap-8 px-4 md:px-[75px] items-start ml-4 md:ml-20 justify-center h-fit w-fit max-w-4xl z-10">
        <motion.div 
          className="font-playfair max-w-4xl text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-royal-gold/20 border border-royal-gold/40 rounded-full text-royal-gold text-sm font-medium tracking-wider uppercase">
              Event Photography Platform
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream-ivory leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Event Photos <br />
            Delivered <br />
            The Same <motion.span 
              className="text-royal-gold inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >Day</motion.span>
          </motion.h2>
          <motion.p 
            className="text-cream-ivory/90 text-lg md:text-xl font-light mt-6 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Stop waiting weeks for your event photos. Our platform lets photographers upload photos instantly, and guests download them by scanning a QR code at the venue. No more chasing photographers or sharing links.
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact" className="px-8 py-4 text-base md:text-lg text-imperial-blue font-semibold bg-gradient-gold rounded-lg transition-all duration-300 hover:shadow-royal border border-royal-gold/50 text-center block">
                Contact Sales
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to='/demo' className="px-8 py-4 text-base md:text-lg text-royal-gold font-semibold bg-transparent border-2 border-royal-gold rounded-lg transition-all duration-300 hover:bg-royal-gold/10 text-center block">
                Try Demo
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Premium Stats */}
          <motion.div 
            className="flex gap-12 mt-12 pt-8 border-t border-royal-gold/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <div className="text-3xl font-bold text-royal-gold cinzel">10K+</div>
              <div className="text-cream-ivory/70 text-sm">Events Captured</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <div className="text-3xl font-bold text-royal-gold cinzel">50M+</div>
              <div className="text-cream-ivory/70 text-sm">Photos Delivered</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <div className="text-3xl font-bold text-royal-gold cinzel">99%</div>
              <div className="text-cream-ivory/70 text-sm">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
    </div>
  );
};

export default LandingPage;
