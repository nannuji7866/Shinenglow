'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-surface border-t border-dark-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
              Premium Unisex Salon in Chamba. Enhancing beauty, delivering excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 hover:text-rose-gold hover:border-rose-gold/50 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 hover:text-rose-gold hover:border-rose-gold/50 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-gray-400 hover:text-rose-gold hover:border-rose-gold/50 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-6">Salon</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">About</Link></li>
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">Services</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-6">Academy</h4>
            <ul className="space-y-4">
              <li><Link href="/academy" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">Courses</Link></li>
              <li><Link href="/academy#certification" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">Certification</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-rose-gold mt-1 flex-shrink-0" size={18} />
                <div className="text-sm text-gray-500 leading-relaxed font-light">
                  <p className="font-medium text-gray-300 mb-1">Main Branch</p>
                  2nd Floor, Puri Medical Store Building<br />
                  Main Bazaar, Chowgan Mohalla<br />
                  Chamba, Himachal Pradesh 176310
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-rose-gold mt-1 flex-shrink-0" size={18} />
                <div className="text-sm text-gray-500 leading-relaxed font-light">
                  <p className="font-medium text-gray-300 mb-1">Bhadram Branch</p>
                  Bhadram 0 Point<br />
                  Sarol, Himachal Pradesh
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-rose-gold flex-shrink-0" size={18} />
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <a href="tel:+918894221777" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">
                    088942 21777
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-rose-gold flex-shrink-0" size={18} />
                <a href="mailto:info@shinenglow.com" className="text-sm text-gray-500 hover:text-rose-gold transition-colors font-light">
                  info@shinenglow.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-light">
            &copy; {new Date().getFullYear()} Shine n Glow Unisex Salon. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 font-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 font-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
