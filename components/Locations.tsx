'use client';

import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import Image from 'next/image';

const locations = [
  {
    id: 1,
    name: "Shine & Glow Unisex Salon – Main Branch",
    address: "2nd Floor, Puri Medical Store Building, Main Bazaar, Chowgan Mohalla, Chamba, Himachal Pradesh 176310",
    link: "https://maps.google.com/?q=Shine+n+Glow+Unisex+Salon+Chamba", // Fallback link
    mapEmbedUrl: "https://maps.google.com/maps?q=Shine+n+Glow+Unisex+Salon+Chamba,+Himachal+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 2,
    name: "Shine & Glow Unisex Salon – Bhadram Branch",
    address: "Bhadram 0 Point, Sarol, Himachal Pradesh",
    link: "https://share.google/9NRBgOKU9udMbv0Wh",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bhadram,+Sarol,+Himachal+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-dark-bg relative overflow-hidden border-t border-dark-border">
      {/* Subtle Blurred Map / Location Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80"
          alt="Map Background"
          fill
          className="object-cover grayscale blur-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Now Serving You at 2 Premium Locations in Chamba
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Our <span className="text-gradient italic">Locations</span>
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Visit Shine & Glow at your nearest branch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group relative bg-dark-surface rounded-3xl p-8 md:p-10 border border-dark-border hover:border-rose-gold/40 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(197,160,130,0.1)] flex flex-col h-full"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 rounded-full bg-dark-bg border border-rose-gold/30 flex items-center justify-center text-rose-gold shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(197,160,130,0.2)] transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3 leading-tight group-hover:text-rose-gold transition-colors duration-500">{location.name}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="w-full h-48 mb-8 rounded-xl overflow-hidden border border-dark-border/50">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              <div className="mt-auto pt-8 border-t border-dark-border/50">
                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 w-full py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 ease-in-out"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
