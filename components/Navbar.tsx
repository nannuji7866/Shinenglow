'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Bridal', href: '/bridal' },
    { name: 'Academy', href: '/academy' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Locations', href: '/#locations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-rose-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
          isScrolled ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border/50 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className={`flex flex-col transition-transform duration-700 ease-in-out origin-left ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <Link href="/">
                <span className="font-serif text-2xl md:text-3xl tracking-widest text-gradient font-semibold block">SNG</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1 block">Shine n Glow</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs lg:text-sm uppercase tracking-widest transition-colors duration-500 group py-2 ${
                    pathname === link.href ? 'text-rose-gold' : 'text-gray-300 hover:text-rose-gold'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-rose-gold transition-all duration-500 ease-in-out ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-gold flex items-center gap-2 px-4 lg:px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 ease-in-out text-xs lg:text-sm uppercase tracking-wider"
              >
                <Phone size={14} />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-rose-gold transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border/50 md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm uppercase tracking-widest transition-colors duration-300 py-2 ${
                      pathname === link.href ? 'text-rose-gold' : 'text-gray-300 hover:text-rose-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
