'use client';

import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import Script from 'next/script';

export default function InstagramFeed() {
  return (
    <section className="py-[40px] bg-dark-bg relative border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold">
              <Instagram size={24} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
            Follow Our Work on <span className="text-gradient italic">Instagram</span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Real transformations. Real results. Stay connected with us.
          </p>
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl min-h-[400px]">
            {/* SociableKit Instagram Feed Embed */}
            <div className="sk-instagram-feed" data-embed-id="25666301"></div>
            <Script 
              src="https://widgets.sociablekit.com/instagram-feed/widget.js" 
              strategy="lazyOnload" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
