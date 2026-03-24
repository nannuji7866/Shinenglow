'use client';

import { motion } from 'motion/react';

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-dark-surface relative border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Luxury <span className="text-gradient italic">Services</span>
          </h2>
          <p className="text-gray-400 font-light">
            Experience premium beauty treatments delivered by our expert professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
