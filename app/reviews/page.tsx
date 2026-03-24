'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Star, ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: "Natasha Singhal",
    time: "7 months ago",
    text: "I had a great experience at shine & glow (SNG)! booked an appointment for a haircut and highlights after seeing their positive reviews online. My stylish Mr. Aman was very friendly and listened to my ideas about the cut and color.",
    rating: 5
  },
  {
    name: "Vivek Tomer",
    time: "3 months ago",
    text: "They work with full enthusiasm and give best service every time…..👍🏻 All the best to the team of Shine n glow (Badhram) …",
    rating: 5
  },
  {
    name: "Paarijat Sharma",
    time: "a month ago",
    text: "The staff was really good and I really like my haircut.@Nitin",
    rating: 5
  },
  {
    name: "Happy Client",
    time: "recently",
    text: "Normal price and probationl service👍👍🙏🙏 iam fully happy",
    rating: 5
  },
  {
    name: "Satisfied Customer",
    time: "recently",
    text: "Amazing experience with amazing staff. She made me feel like a princess with her makeup skills.",
    rating: 5
  },
  {
    name: "Priya Rajput",
    time: "2 months ago",
    text: "Best salon in Chamba! The bridal makeup was exactly what I wanted. Highly recommend their services.",
    rating: 5
  },
  {
    name: "Anjali Thakur",
    time: "5 months ago",
    text: "Got a keratin treatment done. The results are amazing and the staff is very professional.",
    rating: 5
  },
  {
    name: "Neha Sharma",
    time: "8 months ago",
    text: "Very clean and hygienic place. The facial was very relaxing. Will definitely visit again.",
    rating: 4
  }
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
            alt="Reviews Background"
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
              Client Love
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              What They <span className="text-gradient italic">Say</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl font-serif text-white">4.3</span>
              <div className="flex text-rose-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill={i < 4 ? "currentColor" : "none"} className={i === 4 ? "text-rose-gold/50" : ""} />
                ))}
              </div>
            </div>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg mb-8">
              Based on 40+ authentic reviews from our wonderful clients.
            </p>
            <a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-dark-surface border border-rose-gold/30 text-rose-gold rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose-gold hover:text-dark-bg transition-all duration-300"
            >
              Write a Review <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 relative bg-dark-surface border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-6">
              Client <span className="text-gradient italic">Stories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-dark-border group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Video Testimonial ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-dark-bg/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-rose-gold/90 rounded-full flex items-center justify-center text-dark-bg pl-1 transform group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(197,160,130,0.5)]">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Reviews Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                className="bg-dark-surface p-8 rounded-2xl border border-dark-border hover:border-rose-gold/30 transition-colors flex flex-col h-full"
              >
                <div className="flex text-rose-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-rose-gold/30" : ""} />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light italic mb-6 flex-grow">
                  &quot;{review.text}&quot;
                </p>
                <div className="mt-auto">
                  <h4 className="text-white font-medium text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
