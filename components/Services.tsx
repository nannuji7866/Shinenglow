'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const servicesList = [
  {
    title: 'Hair Styling',
    description: 'Expert cuts, blowouts, and styling for any occasion.',
    price: 'Starts at ₹500',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hair Coloring',
    description: 'Global color, highlights, balayage, and root touch-ups.',
    price: 'Starts at ₹1500',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hair Treatments',
    description: 'Keratin, Botox, Spa, and deep conditioning treatments.',
    price: 'Starts at ₹1200',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bridal Makeup',
    description: 'Flawless HD and Airbrush makeup for your special day.',
    price: 'Starts at ₹10,000',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Party Makeup',
    description: 'Elegant and long-lasting makeup for events and parties.',
    price: 'Starts at ₹2500',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Skin Treatments',
    description: 'Facials, cleanups, D-Tan, and advanced skin therapies.',
    price: 'Starts at ₹800',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Grooming Services',
    description: 'Threading, waxing, manicures, and pedicures.',
    price: 'Starts at ₹100',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  return (
    <div className="bg-dark-bg text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
            alt="Services Background"
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
              Our Menu
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Premium <span className="text-gradient italic">Services</span>
            </h1>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
              Explore our comprehensive range of luxury treatments designed to enhance your natural beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group bg-dark-surface rounded-2xl overflow-hidden border border-dark-border hover:border-rose-gold/30 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif mb-3 text-white group-hover:text-rose-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-dark-border">
                    <span className="text-rose-gold font-medium tracking-wide">
                      {service.price}
                    </span>
                    <Link
                      href="/contact"
                      className="text-xs uppercase tracking-widest font-semibold text-white hover:text-rose-gold transition-colors"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
