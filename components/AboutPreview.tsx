'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Star, Heart } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-rose-gold/10 blur-3xl rounded-full transform rotate-12 scale-110" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-rose-gold/30 p-6 sm:p-8 bg-[#050403] shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#0a0a0a]">
                <Image
                  src="https://image2url.com/r2/default/images/1774349619900-0340047e-792d-4ba8-a877-07aeab2f0c64.png"
                  alt="Shine n Glow Salon Team"
                  fill
                  className="object-contain object-center brightness-105 contrast-125 saturate-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050403]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-dark-surface p-6 rounded-2xl border border-rose-gold/30 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold">
                  <Star size={24} />
                </div>
                <div>
                  <p className="text-2xl font-serif text-white">10+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Elevating Beauty in <span className="text-gradient italic">Chamba</span>
            </h2>
            <p className="text-gray-400 font-light mb-6 leading-relaxed">
              Shine n Glow is more than just a salon; it&apos;s a sanctuary where luxury meets expertise. For over a decade, we have been dedicated to providing premium beauty services, transforming our clients with passion and precision.
            </p>
            <p className="text-gray-400 font-light mb-10 leading-relaxed">
              Our team of highly trained professionals uses only the finest products to ensure you leave feeling confident, radiant, and completely refreshed.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col gap-2">
                <Sparkles className="text-rose-gold mb-2" size={24} />
                <h4 className="text-white font-serif text-xl">Premium Quality</h4>
                <p className="text-xs text-gray-500 font-light">Top-tier products & services.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Heart className="text-rose-gold mb-2" size={24} />
                <h4 className="text-white font-serif text-xl">Client Focused</h4>
                <p className="text-xs text-gray-500 font-light">Personalized care for everyone.</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-rose-gold text-rose-gold rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose-gold hover:text-dark-bg transition-all duration-500 ease-in-out"
            >
              Discover More
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
