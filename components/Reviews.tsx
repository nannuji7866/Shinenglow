'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

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
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-rose-gold)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Client <span className="text-gradient italic">Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl font-serif text-white">4.3</span>
            <div className="flex text-rose-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} className={i === 4 ? "text-rose-gold/50" : ""} />
              ))}
            </div>
          </div>
          <p className="text-gray-400 font-light">
            Based on 40 reviews from our wonderful clients.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-dark-surface p-8 rounded-2xl border border-dark-border hover:border-rose-gold/30 transition-colors flex flex-col h-full"
            >
              <div className="flex text-rose-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
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

        {/* CTA */}
        <div className="text-center bg-dark-surface border border-rose-gold/20 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h3 className="text-2xl md:text-3xl font-serif mb-4 relative z-10">Ready for your transformation?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto font-light relative z-10">
            Book your appointment today and experience the premium service that our clients love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="tel:+918894221777"
              className="btn-gold px-8 py-4 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors w-full sm:w-auto inline-block text-center"
            >
              Call 088942 21777
            </a>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
