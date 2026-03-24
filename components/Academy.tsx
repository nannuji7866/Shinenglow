'use client';

import { motion, useInView, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, GraduationCap, Sparkles, Star, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => 
    `₹${Math.round(current).toLocaleString('en-IN')}`
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-dark-bg relative border-y border-dark-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-rose-gold)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center justify-center gap-2">
            <GraduationCap size={16} /> Professional Training
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Shine n Glow <span className="text-gradient italic">Beauty Academy</span>
          </h2>
          <p className="text-xl text-gray-300 font-light mb-4">
            Learn professional makeup artistry and hairstyling with hands-on training from industry professionals.
          </p>
          <p className="text-gray-400 font-light">
            Turn your passion for beauty into a professional career with real salon training and expert guidance.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {[
            { title: 'Expert Trainers', desc: 'Learn directly from industry professionals with years of experience.' },
            { title: 'Hands-on Practice', desc: 'Real-world training on live models to build your confidence.' },
            { title: 'Career Support', desc: 'Guidance and support to help you start your career in beauty.' }
          ].map((item, i) => (
            <div key={i} className="bg-dark-surface p-8 rounded-2xl border border-dark-border text-center hover:border-rose-gold/30 transition-colors">
              <div className="w-12 h-12 bg-rose-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-rose-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 font-light text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Course 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="group relative bg-dark-surface rounded-3xl p-8 md:p-10 border border-dark-border hover:border-rose-gold/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(197,160,130,0.1)] transition-all duration-700 ease-in-out overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-rose-gold/15 transition-colors duration-700" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs uppercase tracking-widest font-semibold mb-6 border border-rose-gold/20 group-hover:animate-pulse">
                Fast Track Course
              </span>
              <h3 className="text-3xl font-serif mb-2">Crash Beauty Course</h3>
              <p className="text-gray-400 font-light text-sm mb-6 h-10">
                A short intensive training program designed for beginners who want to quickly learn professional beauty skills.
              </p>
              
              <div className="flex items-end gap-4 mb-8 pb-8 border-b border-dark-border/50">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Price</p>
                  <p className="text-3xl font-serif text-rose-gold"><AnimatedCounter value={35000} /></p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Duration</p>
                  <p className="text-lg text-gray-300">15 Days</p>
                </div>
              </div>

              <div className="mb-10">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-semibold">Course Includes:</p>
                <ul className="space-y-3">
                  {['Basic Makeup Techniques', 'Party Makeup Looks', 'Hair Styling Basics', 'Product Knowledge', 'Client Handling', 'Practice on Live Models'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 font-light text-sm">
                      <CheckCircle2 size={18} className="text-rose-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="flex items-center justify-center gap-2 w-full py-4 bg-transparent border border-rose-gold text-rose-gold rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-gradient-to-r hover:from-rose-gold hover:to-rose-gold-light hover:text-dark-bg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(197,160,130,0.3)] transition-all duration-500 ease-in-out">
                Apply Now <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Course 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="group relative bg-dark-surface rounded-3xl p-8 md:p-10 border border-rose-gold/30 hover:border-rose-gold hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(197,160,130,0.15)] transition-all duration-700 ease-in-out overflow-hidden shadow-[0_0_30px_rgba(242,166,90,0.05)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-rose-gold/25 transition-colors duration-700" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold text-dark-bg text-xs uppercase tracking-widest font-semibold mb-6 group-hover:animate-pulse">
                Professional Certification Course
              </span>
              <h3 className="text-3xl font-serif mb-2">Professional Bridal Makeup</h3>
              <p className="text-gray-400 font-light text-sm mb-6 h-10">
                A complete professional program for students who want to become bridal makeup artists.
              </p>
              
              <div className="flex items-end gap-4 mb-8 pb-8 border-b border-dark-border/50">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Price</p>
                  <p className="text-3xl font-serif text-rose-gold"><AnimatedCounter value={60000} /></p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Duration</p>
                  <p className="text-lg text-gray-300">2 Months</p>
                </div>
              </div>

              <div className="mb-10">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-semibold">Course Includes:</p>
                <ul className="space-y-3">
                  {['HD Makeup Techniques', 'Bridal Makeup Mastery', 'Advanced Hairstyling', 'Skin Preparation Techniques', 'Client Consultation Skills', 'Live Bridal Demonstration', 'Portfolio Shoot Practice'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 font-light text-sm">
                      <Sparkles size={18} className="text-rose-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="btn-gold flex items-center justify-center gap-2 w-full py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 ease-in-out shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Enroll Now <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Certification Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-rose-gold/20 blur-3xl rounded-full transform -rotate-6 scale-90" />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/3] rounded-2xl border border-rose-gold/30 p-2 bg-dark-bg/50 backdrop-blur-sm shadow-2xl"
            >
              <div className="w-full h-full relative rounded-xl overflow-hidden border border-dark-border">
                <Image
                  src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80"
                  alt="Professional Certificate Mockup"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay to make it look more like a certificate */}
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg/80 via-transparent to-rose-gold/20 mix-blend-overlay" />
              </div>
            </motion.div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <motion.h3 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-serif mb-6"
            >
              Become a Certified <span className="text-gradient italic">Beauty Professional</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-gray-400 font-light mb-8 leading-relaxed"
            >
              Students who successfully complete training receive an Authorized Professional Certificate from Shine n Glow Beauty Academy, validating their professional beauty training and skills.
            </motion.p>
            <ul className="space-y-4">
              {['Authorized Professional Certificate', 'Hands-on Practical Training', 'Live Model Practice', 'Industry Standard Techniques', 'Career Guidance'].map((point, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "backOut" }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-8 h-8 rounded-full bg-rose-gold/10 flex items-center justify-center shrink-0 border border-rose-gold/20">
                    <CheckCircle2 size={16} className="text-rose-gold" />
                  </div>
                  <span className="font-light">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Opportunities & Limited Seats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Career Opportunities */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 bg-dark-surface rounded-3xl p-8 md:p-12 border border-dark-border hover:border-rose-gold/30 transition-colors duration-700"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Start Your Career in the <span className="text-gradient italic">Beauty Industry</span></h3>
            <p className="text-gray-400 font-light mb-8">
              Our academy prepares students for professional careers in beauty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Salon Makeup Artist', 'Freelance Bridal Makeup Artist', 'Beauty Influencer', 'Salon Professional'].map((career, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                  className="flex items-center gap-3 bg-dark-bg p-4 rounded-xl border border-dark-border/50 hover:border-rose-gold/50 transition-colors duration-500"
                >
                  <Star size={16} className="text-rose-gold shrink-0" />
                  <span className="text-sm text-gray-300">{career}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Limited Seats Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 bg-rose-gold/10 rounded-3xl p-8 md:p-12 border border-rose-gold/30 relative overflow-hidden flex flex-col justify-center text-center hover:border-rose-gold transition-colors duration-700"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-serif mb-4 text-white">Limited Seats Per Batch</h3>
            <p className="text-gray-300 font-light text-sm mb-8">
              To ensure personal attention and high-quality training, Shine n Glow Academy accepts only limited students per batch.
            </p>
            
            <div className="flex flex-col gap-3 relative z-10">
              <a href="#contact" className="w-full py-3.5 bg-rose-gold text-dark-bg rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-gradient-to-r hover:from-rose-gold hover:to-rose-gold-light hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(197,160,130,0.4)] transition-all duration-500 ease-in-out">
                Apply Now
              </a>
              <a href="https://wa.me/918894221777" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-transparent border border-rose-gold text-rose-gold rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose-gold/10 hover:scale-[1.02] transition-all duration-500 ease-in-out">
                WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
