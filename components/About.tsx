'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, MapPin, Star, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-dark-bg text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
            alt="Salon Interior Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/90 to-dark-bg" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Discover Our Journey
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              About <span className="text-gradient italic">Shine n Glow</span>
            </h1>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
              A decade of excellence in beauty, transforming lives with passion, precision, and luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Salon Story & Experience */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-t-full overflow-hidden border border-rose-gold/20 p-2 bg-dark-surface/50">
                <div className="w-full h-full relative rounded-t-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80"
                    alt="Salon Story"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-dark-surface p-8 rounded-2xl border border-rose-gold/30 shadow-2xl">
                <p className="font-serif text-5xl text-rose-gold mb-2">10+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Years of<br/>Excellence</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Our <span className="text-gradient italic">Story</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                Founded over a decade ago in the heart of Chamba, Shine n Glow Unisex Salon began with a simple vision: to provide a sanctuary where luxury meets expertise. What started as a small boutique parlor has blossomed into the region&apos;s premier destination for comprehensive beauty and wellness services.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                Our journey has been defined by an unwavering commitment to quality, continuous learning, and a deep understanding of our clients&apos; unique needs. We believe that true beauty shines from within, and our role is simply to help it glow brighter.
              </p>
              <div className="flex items-center gap-4 text-rose-gold">
                <MapPin size={24} />
                <span className="text-sm tracking-widest uppercase">Main Branch & Bhadram Branch</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark-surface border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-dark-bg p-10 rounded-3xl border border-dark-border hover:border-rose-gold/30 transition-colors"
            >
              <Target className="text-rose-gold mb-6" size={40} />
              <h3 className="text-2xl font-serif mb-4">Our Mission</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                To empower individuals by enhancing their natural beauty through exceptional, personalized salon services. We strive to create a welcoming, luxurious environment where every client feels valued, relaxed, and confident.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-dark-bg p-10 rounded-3xl border border-dark-border hover:border-rose-gold/30 transition-colors"
            >
              <Heart className="text-rose-gold mb-6" size={40} />
              <h3 className="text-2xl font-serif mb-4">Our Vision</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                To be the most trusted and innovative beauty destination in the region, setting industry standards for quality, creativity, and customer care, while nurturing the next generation of beauty professionals through our academy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team / Founder */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              The Experts
            </span>
            <h2 className="text-4xl font-serif mb-6">
              Meet Our <span className="text-gradient italic">Team</span>
            </h2>
            <p className="text-gray-400 font-light">
              Our salon is home to a team of passionate, highly trained professionals dedicated to their craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Aman", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80" },
              { name: "Nitin", role: "Creative Director", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80" },
              { name: "Priya", role: "Lead Makeup Artist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-dark-border">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-serif text-white mb-1">{member.name}</h4>
                  <p className="text-xs text-rose-gold uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-24 bg-dark-surface border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-6">
              Our <span className="text-gradient italic">Sanctuary</span>
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Step into a world of luxury and relaxation. Our salon interior is designed to provide the ultimate comfort while you receive premium treatments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1521590832167-7bfc17454f5e?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="relative aspect-square rounded-2xl overflow-hidden border border-dark-border group"
              >
                <Image
                  src={src}
                  alt={`Salon Interior ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
