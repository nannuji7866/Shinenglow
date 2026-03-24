'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Interior'];

const galleryItems = [
  { id: 1, category: 'Bridal', src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Look 1' },
  { id: 2, category: 'Makeup', src: 'https://images.unsplash.com/photo-1512496015851-a1c8f4819844?auto=format&fit=crop&w=800&q=80', alt: 'Party Makeup' },
  { id: 3, category: 'Hair', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80', alt: 'Hair Styling' },
  { id: 4, category: 'Interior', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', alt: 'Salon Interior' },
  { id: 5, category: 'Bridal', src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Look 2' },
  { id: 6, category: 'Hair', src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80', alt: 'Hair Coloring' },
  { id: 7, category: 'Makeup', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', alt: 'HD Makeup' },
  { id: 8, category: 'Interior', src: 'https://images.unsplash.com/photo-1521590832167-7bfc17454f5e?auto=format&fit=crop&w=800&q=80', alt: 'Salon Reception' },
  { id: 9, category: 'Bridal', src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Look 3' },
  { id: 10, category: 'Makeup', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80', alt: 'Evening Makeup' },
  { id: 11, category: 'Hair', src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80', alt: 'Hair Treatment' },
  { id: 12, category: 'Bridal', src: 'https://images.unsplash.com/photo-1546804784-896d1eb2ba00?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Look 4' },
  { id: 13, category: 'Interior', src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80', alt: 'Styling Stations' },
  { id: 14, category: 'Makeup', src: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=800&q=80', alt: 'Airbrush Makeup' },
  { id: 15, category: 'Hair', src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80', alt: 'Creative Coloring' },
  { id: 16, category: 'Bridal', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Look 5' },
  { id: 17, category: 'Interior', src: 'https://images.unsplash.com/photo-1516975080661-422fc2bc9258?auto=format&fit=crop&w=800&q=80', alt: 'Waiting Area' },
  { id: 18, category: 'Makeup', src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', alt: 'Subtle Glam' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-dark-bg text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1920&q=80"
            alt="Gallery Background"
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
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              The <span className="text-gradient italic">Gallery</span>
            </h1>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
              A visual journey through our finest work, showcasing the artistry and elegance of Shine n Glow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-500 ease-in-out ${
                  activeCategory === category
                    ? 'bg-rose-gold text-dark-bg font-semibold shadow-[0_0_15px_rgba(197,160,130,0.4)]'
                    : 'bg-dark-bg border border-dark-border text-gray-400 hover:border-rose-gold/50 hover:text-rose-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-dark-border group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <span className="text-rose-gold text-xs uppercase tracking-widest font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-white font-serif text-lg">{item.alt}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
