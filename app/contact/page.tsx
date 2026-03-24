'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Contact <span className="text-gradient italic">Us</span>
          </h1>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
            Book an appointment, inquire about our academy, or simply say hello. We are here to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-8">Visit Our Salons</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center flex-shrink-0 text-rose-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Main Branch</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-2">
                    2nd Floor, Puri Medical Store Building, Main Bazaar<br />
                    Chowgan Mohalla, Chamba, Himachal Pradesh 176310
                  </p>
                  <a href="https://maps.google.com/?q=Shine+n+Glow+Unisex+Salon+Chamba" target="_blank" rel="noopener noreferrer" className="text-rose-gold text-sm hover:underline">Get Directions</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center flex-shrink-0 text-rose-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Bhadram Branch</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-2">
                    Bhadram 0 Point<br />
                    Sarol, Himachal Pradesh
                  </p>
                  <a href="https://share.google/9NRBgOKU9udMbv0Wh" target="_blank" rel="noopener noreferrer" className="text-rose-gold text-sm hover:underline">Get Directions</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center flex-shrink-0 text-rose-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Phone</h3>
                  <p className="text-gray-400 font-light">
                    <a href="tel:+918894221777" className="hover:text-rose-gold transition-colors">
                      +91 88942 21777
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center flex-shrink-0 text-rose-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Hours</h3>
                  <p className="text-gray-400 font-light">
                    Monday - Sunday<br />
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-dark-border">
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-gray-400 hover:text-rose-gold hover:border-rose-gold transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-gray-400 hover:text-rose-gold hover:border-rose-gold transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-dark-surface border border-dark-border rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-gold transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-gold transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                <select
                  id="service"
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-gold transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="hair">Hair Styling & Treatment</option>
                  <option value="makeup">Party Makeup</option>
                  <option value="academy">Academy Courses</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-gold transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="button"
                className="btn-gold w-full rounded-xl py-4 uppercase tracking-widest text-xs font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 rounded-3xl overflow-hidden border border-dark-border h-[400px] relative"
        >
          {/* Replace src with actual Google Maps embed URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.123456789012!2d76.12345678901234!3d32.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b123456789012%3A0x1234567890123456!2sShine%20n%20Glow%20Salon%20%26%20Academy!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border border-dark-border rounded-3xl mix-blend-overlay"></div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
