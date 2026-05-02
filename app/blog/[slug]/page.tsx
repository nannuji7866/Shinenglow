import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost, blogPosts } from '@/lib/blog';
import { Calendar, User, Clock, ChevronLeft, Share2, Facebook, Twitter, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Shine n Glow',
    };
  }

  return {
    title: `${post.title} | Shine n Glow Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      
      {/* Featured Image Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-20">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-rose-gold text-xs uppercase tracking-widest font-bold mb-8 hover:-translate-x-1 transition-transform duration-300"
          >
            <ChevronLeft size={16} />
            Back to Hub
          </Link>
          
          <div className="flex items-center gap-6 text-[10px] text-rose-gold uppercase tracking-[0.2em] mb-6 font-bold">
            <span className="px-4 py-1.5 bg-rose-gold/10 backdrop-blur-md rounded-full border border-rose-gold/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 pt-6 border-t border-dark-border/50">
            <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center text-rose-gold border border-rose-gold/30 font-serif">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mb-0.5">Author</p>
              <p className="text-sm font-medium text-white">{post.author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar / Social Share */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32 flex flex-col items-center gap-6">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 [writing-mode:vertical-lr] rotate-180 mb-2">Share Story</p>
                <div className="w-[1px] h-10 bg-dark-border mb-2" />
                <button className="text-gray-500 hover:text-rose-gold transition-colors duration-300">
                  <Facebook size={20} />
                </button>
                <button className="text-gray-500 hover:text-rose-gold transition-colors duration-300">
                  <Twitter size={20} />
                </button>
                <button className="text-gray-500 hover:text-rose-gold transition-colors duration-300">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Main Column */}
            <div className="lg:col-span-8">
              <div 
                className="prose prose-invert prose-gold max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light prose-strong:text-white prose-strong:font-semibold prose-a:text-rose-gold hover:prose-a:text-white transition-colors"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tag Section */}
              <div className="mt-16 pt-8 border-t border-dark-border flex flex-wrap gap-3">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 mr-2 flex items-center">In this post:</span>
                {['Beauty', 'Trends', post.category, 'Salon'].map(tag => (
                  <span key={tag} className="px-5 py-1.5 bg-dark-surface rounded-full text-[10px] uppercase tracking-widest text-gray-400 border border-dark-border hover:border-rose-gold/30 hover:text-rose-gold transition-all duration-300 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <aside className="lg:col-span-3">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-rose-gold" />
                    Latest Stories
                  </h4>
                  <div className="space-y-8">
                    {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(related => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                        <span className="text-[10px] text-rose-gold uppercase tracking-widest block mb-2">{related.category}</span>
                        <h5 className="text-sm font-serif text-gray-300 group-hover:text-white transition-colors duration-300 leading-snug line-clamp-2">
                          {related.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="bg-dark-surface border border-dark-border rounded-3xl p-8 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-rose-gold/5 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-full blur-3xl opacity-0 group-hover:opacity-100" />
                  <h4 className="text-lg font-serif text-white mb-4 relative z-10">Get Your Transformation</h4>
                  <p className="text-xs text-gray-400 font-light mb-6 relative z-10 leading-relaxed">Book an appointment and let our experts craft your dream look.</p>
                  <Link href="/contact" className="btn-gold block w-full py-4 rounded-full text-[10px] uppercase tracking-widest font-bold font-sans relative z-10">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
