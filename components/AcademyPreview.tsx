'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { GraduationCap, ArrowRight } from 'lucide-react';

export default function AcademyPreview() {
  return (
    <section className="py-24 bg-dark-bg relative border-y border-dark-border overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-rose-gold)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center justify-center gap-2">
            <GraduationCap size={16} /> Professional Training
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Shine n Glow <span className="text-gradient italic">Academy</span>
          </h2>
          <p className="text-gray-400 font-light">
            Turn your passion for beauty into a professional career with hands-on training from industry experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Course 1 Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="group relative bg-dark-surface rounded-3xl p-8 border border-dark-border hover:border-rose-gold/50 transition-all duration-700"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs uppercase tracking-widest font-semibold mb-6">
              Fast Track Course
            </span>
            <h3 className="text-2xl font-serif mb-2">Crash Beauty Course</h3>
            <p className="text-gray-400 font-light text-sm mb-6">
              A short intensive training program designed for beginners.
            </p>
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Price</p>
                <p className="text-2xl font-serif text-rose-gold">₹35,000</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm text-gray-300">15 Days</p>
              </div>
            </div>
            <Link href="/academy" className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-rose-gold text-rose-gold rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose-gold hover:text-dark-bg transition-all duration-500">
              View Details <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Course 2 Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="group relative bg-dark-surface rounded-3xl p-8 border border-rose-gold/30 hover:border-rose-gold transition-all duration-700 shadow-[0_0_30px_rgba(242,166,90,0.05)]"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold text-dark-bg text-xs uppercase tracking-widest font-semibold mb-6">
              Professional Certification
            </span>
            <h3 className="text-2xl font-serif mb-2">Professional Bridal Makeup</h3>
            <p className="text-gray-400 font-light text-sm mb-6">
              A complete program for aspiring bridal makeup artists.
            </p>
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Price</p>
                <p className="text-2xl font-serif text-rose-gold">₹60,000</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm text-gray-300">2 Months</p>
              </div>
            </div>
            <Link href="/academy" className="btn-gold flex items-center justify-center gap-2 w-full py-3 rounded-full uppercase tracking-widest text-xs font-semibold transition-all duration-500">
              View Details <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            href="/academy"
            className="inline-block px-8 py-4 bg-transparent border border-rose-gold text-rose-gold rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose-gold hover:text-dark-bg transition-all duration-500 ease-in-out"
          >
            Explore Academy
          </Link>
        </div>
      </div>
    </section>
  );
}
