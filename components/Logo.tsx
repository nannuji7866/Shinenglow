'use client';

import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className = '', isScrolled = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <motion.div
           animate={{ 
             rotate: 360,
             scale: [1, 1.1, 1]
           }}
           transition={{ 
             rotate: { duration: 20, repeat: Infinity, ease: "linear" },
             scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
           }}
           className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        >
          {/* Logo SVG - Elegant Sparkle/Sunburst Icon */}
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-rose-gold"
          >
            <path 
              d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45L5 5Z" 
              className="fill-current opacity-20"
            />
            <circle cx="50" cy="50" r="15" className="fill-rose-gold" />
            <path 
              d="M50 15V35M50 65V85M15 50H35M65 50H85M25.25 25.25L39.39 39.39M60.61 60.61L74.75 74.75M25.25 74.75L39.39 60.61M60.61 39.39L74.75 25.25" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-rose-gold/20 blur-xl rounded-full translate-z-0" />
      </div>

      <div className={`flex flex-col transition-all duration-700 ${isScrolled ? 'opacity-90' : 'opacity-100'}`}>
        <span className="font-serif text-xl md:text-2xl tracking-[0.3em] text-white font-bold block leading-none">
          SHINE<span className="text-rose-gold font-light">&</span>GLOW
        </span>
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-rose-gold/60 mt-1.5 block font-medium">
          Premium Unisex Salon
        </span>
      </div>
    </div>
  );
}
