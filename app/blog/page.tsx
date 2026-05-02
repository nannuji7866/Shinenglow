'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1920&q=80"
            alt="Blog Hero"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/95 to-dark-bg" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Expert Insights
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              The <span className="text-gradient italic">Style Hub</span>
            </h1>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our collection of beauty tips, trend reports, and care guides curated by the Shine n Glow experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group h-full flex flex-col bg-dark-surface rounded-3xl overflow-hidden border border-dark-border hover:border-rose-gold/30 transition-all duration-500 hover:-translate-y-2"
              >
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-1.5 bg-dark-bg/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-rose-gold border border-rose-gold/20">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-rose-gold" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-rose-gold" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif text-white group-hover:text-rose-gold transition-colors duration-500 mb-4 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-dark-border">
                    <div className="flex items-center gap-2 group/author">
                      <div className="w-8 h-8 rounded-full bg-dark-bg flex items-center justify-center text-rose-gold text-xs border border-dark-border group-hover/author:border-rose-gold transition-colors duration-300">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium group-hover/author:text-white transition-colors duration-300">
                        {post.author}
                      </span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-rose-gold text-[10px] uppercase tracking-widest font-bold group/link"
                    >
                      Read full
                      <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
