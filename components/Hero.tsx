'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import GoldenDust from './GoldenDust';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#050403] pt-20">
      {/* Cinematic Golden Dust Background */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        <GoldenDust />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-center lg:text-left pt-10 lg:pt-0"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px) drop-shadow(0px 0px 8px rgba(212,175,55,0.5))' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px) drop-shadow(0px 0px 8px rgba(212,175,55,0.5))' }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="text-rose-gold uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 block"
            >
              Premium Unisex Salon
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px) drop-shadow(0px 0px 25px rgba(212,175,55,0.4))' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px) drop-shadow(0px 0px 25px rgba(212,175,55,0.4))' }}
              transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#D4AF37] to-[#AA7C11]"
            >
              Shine n Glow
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px) drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px) drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              className="text-gray-300 text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
            >
              Discover the power of your natural beauty. We offer premium salon services, haircuts, and professional makeup in Chamba & Bhadram, designed to elevate your style.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <a
                href="#services"
                className="btn-gold px-8 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 ease-in-out w-full sm:w-auto inline-block text-center"
              >
                Our Services
              </a>
              <a
                href="#reviews"
                className="px-8 py-4 border border-[#D4AF37]/40 text-[#D4AF37] rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:scale-105 transition-all duration-500 ease-in-out w-full sm:w-auto backdrop-blur-sm"
              >
                Read Reviews
              </a>
            </motion.div>
          </motion.div>

          {/* Premium Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(20px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            style={{ y }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] w-full max-w-md ml-auto rounded-t-full rounded-b-3xl overflow-hidden border border-rose-gold/30 p-2 bg-dark-surface/40 backdrop-blur-sm shadow-[0_0_50px_rgba(212,175,55,0.15)]">
              <div className="w-full h-full relative rounded-t-full rounded-b-2xl overflow-hidden">
                <Image
                  src="https://image2url.com/r2/default/images/1774349619900-0340047e-792d-4ba8-a877-07aeab2f0c64.png"
                  alt="Shine n Glow Professional Staff"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent opacity-80" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-rose-gold/50 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-rose-gold/50 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
      
      {/* Soft vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-0" />
    </section>
  );
}
