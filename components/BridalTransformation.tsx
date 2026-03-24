'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function BridalTransformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const x = 'touches' in event 
        ? event.touches[0].clientX - containerRect.left 
        : (event as MouseEvent).clientX - containerRect.left;
      
      const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
      setSliderPosition(position);
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Initial position update on click/touch
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e 
      ? e.touches[0].clientX - containerRect.left 
      : (e as React.MouseEvent).clientX - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <section className="py-24 bg-dark-bg relative border-y border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Signature Magic
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Bridal <span className="text-gradient italic">Transformation</span>
          </h2>
          <p className="text-gray-400 font-light">
            Experience the magic of our professional bridal makeup. Drag the slider to see the before and after transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-rose-gold/20 shadow-[0_0_40px_rgba(197,160,130,0.1)] group"
        >
          <div 
            ref={containerRef}
            className="relative aspect-[4/3] md:aspect-[16/9] w-full cursor-ew-resize select-none"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80"
                alt="Bridal Makeup After"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-dark-bg/80 backdrop-blur-sm rounded-full border border-dark-border">
                <span className="text-rose-gold text-xs uppercase tracking-widest font-semibold">After</span>
              </div>
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80"
                alt="Bridal Makeup Before"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-dark-bg/80 backdrop-blur-sm rounded-full border border-dark-border">
                <span className="text-gray-300 text-xs uppercase tracking-widest font-semibold">Before</span>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-rose-gold cursor-ew-resize flex items-center justify-center group-hover:bg-rose-gold-light transition-colors"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-8 h-8 bg-dark-bg border-2 border-rose-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(197,160,130,0.5)]">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-rose-gold rounded-full" />
                  <div className="w-0.5 h-3 bg-rose-gold rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
