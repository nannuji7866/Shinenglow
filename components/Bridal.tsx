'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import BridalTransformation from './BridalTransformation';

const packages = [
  {
    name: 'Classic Bridal',
    price: '₹10,000',
    features: ['HD Makeup', 'Basic Hairstyling', 'Draping', 'Nail Paint'],
  },
  {
    name: 'Premium Bridal',
    price: '₹15,000',
    features: ['Airbrush Makeup', 'Advanced Hairstyling', 'Draping', 'Premium Lashes', 'Nail Extension'],
  },
  {
    name: 'Luxury Bridal',
    price: '₹25,000',
    features: ['Signature Airbrush', 'Custom Hairstyling', 'Draping', 'Mink Lashes', 'Pre-Bridal Package (Facial, Waxing, Spa)'],
  },
];

export default function Bridal() {
  return (
    <div className="bg-dark-bg text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1920&q=80"
            alt="Bridal Makeup Background"
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
              Your Special Day
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Bridal <span className="text-gradient italic">Elegance</span>
            </h1>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
              Look breathtaking on your wedding day with our bespoke bridal makeup and styling services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Crafting Your <span className="text-gradient italic">Perfect Look</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                At Shine n Glow, we understand that your wedding day is one of the most important days of your life. Our expert bridal team is dedicated to creating a look that is uniquely yours, enhancing your natural beauty and ensuring you feel confident and radiant.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                From traditional to contemporary styles, we use only premium products and advanced techniques like HD and Airbrush makeup to guarantee a flawless, long-lasting finish that looks stunning in person and in photographs.
              </p>
              <Link
                href="#packages"
                className="inline-block px-8 py-4 bg-dark-surface border border-rose-gold/30 text-rose-gold rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose-gold hover:text-dark-bg transition-all duration-300"
              >
                View Packages
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-dark-border"
            >
              <Image
                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80"
                alt="Bridal Makeup"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before / After Transformations */}
      <BridalTransformation />

      {/* Packages */}
      <section id="packages" className="py-24 bg-dark-surface border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-6">
              Bridal <span className="text-gradient italic">Packages</span>
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Choose the perfect package for your special day. We also offer customized packages tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className={`bg-dark-bg rounded-2xl p-8 border ${index === 1 ? 'border-rose-gold shadow-[0_0_30px_rgba(197,160,130,0.15)] relative' : 'border-dark-border'} hover:-translate-y-2 transition-transform duration-500 flex flex-col`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-gold text-dark-bg px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-serif text-white mb-2 text-center">{pkg.name}</h3>
                <p className="text-3xl text-rose-gold font-light text-center mb-8">{pkg.price}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 font-light text-sm">
                      <span className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-full uppercase tracking-widest text-xs font-semibold transition-all duration-300 ${index === 1 ? 'btn-gold' : 'bg-dark-surface border border-dark-border text-white hover:border-rose-gold hover:text-rose-gold'}`}
                >
                  Book Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Gallery */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-6">
              Bridal <span className="text-gradient italic">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1546804784-896d1eb2ba00?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=800&q=80"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.1, ease: "easeOut" }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden border border-dark-border group"
              >
                <Image
                  src={src}
                  alt={`Bridal Look ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="btn-gold inline-block px-10 py-5 rounded-full uppercase tracking-widest text-sm font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500"
            >
              Book Bridal Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
