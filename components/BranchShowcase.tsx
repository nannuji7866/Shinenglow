'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function BranchShowcase() {
  return (
    <section className="w-full bg-dark-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh]">
        
        {/* Left Side - Chamba Branch */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group overflow-hidden cursor-pointer"
        >
          <Image
            src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/799a550c-7884-4525-a562-58263cd6ba45.jpeg"
            alt="Chamba Branch"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        </motion.div>

        {/* Right Side - Bhadram Branch */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group overflow-hidden cursor-pointer"
        >
          <Image
            src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ec942ab5-d795-49dc-ada3-acc63de88019.png"
            alt="Bhadram Branch"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        </motion.div>

      </div>
    </section>
  );
}
