import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const TESTIMONIALS = [
  { name: 'Dr. Sarah Wilson', role: 'Parent', content: 'KITES has transformed my daughter\'s confidence. The teachers are not just instructors, but mentors who truly care.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Michael Chen', role: 'Student', content: 'The guitar program is incredible. I went from knowing zero chords to performing live in just 6 months!', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { name: 'Priya Sharma', role: 'Parent', content: 'The best music school in town. The focus on performance opportunities is what sets KITES apart.', avatar: 'https://i.pravatar.cc/150?u=priya' },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-8 sm:py-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-music -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4 sm:mb-16">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-royal-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-sm mb-4">Harmony</p>
            <h2 className="text-[29px] sm:text-5xl font-extrabold text-royal-blue mb-4 leading-[29px] sm:leading-tight">Voices of Our <span className="serif font-normal italic">Community</span></h2>
          </div>
          
          <div className="hidden sm:flex items-center gap-4">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-royal-blue/20 hover:bg-royal-blue hover:text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-royal-blue/20 hover:bg-royal-blue hover:text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-8 overflow-x-auto snap-x no-scrollbar scroll-smooth"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[75%] sm:min-w-[400px] glass-card rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 snap-center flex flex-col items-center text-center shadow-2xl shadow-royal-blue/5"
              >
                <div className="bg-vibrant-pink/10 p-2 sm:p-4 rounded-full mb-4 sm:mb-6">
                  <Quote className="w-4 h-4 sm:w-8 sm:h-8 text-vibrant-pink fill-vibrant-pink" />
                </div>
                <p className="text-[10px] sm:text-lg text-gray-700 italic font-serif leading-relaxed mb-4 sm:mb-8 font-medium">"{t.content}"</p>
                
                <div className="mt-auto flex flex-col items-center">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-white shadow-lg mb-2 sm:mb-3" referrerPolicy="no-referrer" />
                  <h4 className="font-extrabold text-royal-blue text-[10px] sm:text-base">{t.name}</h4>
                  <p className="text-vibrant-pink text-[8px] sm:text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex sm:hidden justify-center gap-6 mt-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-xl bg-white shadow-md text-royal-blue">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-xl bg-white shadow-md text-royal-blue">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
