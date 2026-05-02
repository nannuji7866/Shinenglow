'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Excellence in Every Detail',
    subtitle: 'Premium Unisex Salon',
    description: 'Experience the pinnacle of luxury grooming and beauty treatments in Chamba & Bhadram.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80',
    btnText: 'Our Services',
    btnLink: '#services'
  },
  {
    id: 2,
    title: 'Bridal Transformations',
    subtitle: 'Expert Makeup Artistry',
    description: 'Crafting the perfect look for your most special moments with precision and passion.',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=1920&q=80',
    btnText: 'Bridal Packages',
    btnLink: '/bridal'
  },
  {
    id: 3,
    title: 'Masterful Hair Styling',
    subtitle: 'Redefine Your Style',
    description: 'From classic cuts to modern coloring, our stylists bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80',
    btnText: 'Explore Academy',
    btnLink: '/academy'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <span className="text-rose-gold uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 block drop-shadow-lg">
                {slides[current].subtitle}
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight text-white drop-shadow-2xl">
                {slides[current].title.split(':').length > 1 ? (
                   <>
                     {slides[current].title.split(':')[0]}: <br />
                     <span className="text-gradient italic">{slides[current].title.split(':')[1]}</span>
                   </>
                ) : slides[current].title}
              </h1>
              
              <p className="text-gray-300 text-base md:text-xl max-w-xl mb-12 leading-relaxed font-light drop-shadow-lg">
                {slides[current].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href={slides[current].btnLink}
                  className="btn-gold px-10 py-5 rounded-full uppercase tracking-widest text-xs font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 ease-in-out inline-block text-center shadow-2xl"
                >
                  {slides[current].btnText}
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 border border-white/20 text-white rounded-full uppercase tracking-widest text-xs font-bold hover:bg-white/10 hover:border-white transition-all duration-500 ease-in-out inline-block text-center backdrop-blur-md"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-4 sm:right-12 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-rose-gold hover:border-rose-gold hover:text-black transition-all duration-500 group backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-rose-gold hover:border-rose-gold hover:text-black transition-all duration-500 group backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-4 sm:left-12 z-20 flex flex-col gap-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group flex items-center gap-4 text-left"
          >
            <div className={`h-10 w-[2px] transition-all duration-500 ${current === index ? 'bg-rose-gold scale-y-100' : 'bg-white/20 scale-y-50 group-hover:scale-y-75'}`} />
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${current === index ? 'text-rose-gold opacity-100 translate-x-0' : 'text-white opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0'}`}>
              0{index + 1}
            </span>
          </button>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-gray-500 mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-rose-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
