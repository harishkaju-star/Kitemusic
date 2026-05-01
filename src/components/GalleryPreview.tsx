import { motion } from 'motion/react';
import { ImageIcon, MonitorPlay, Users, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1541689221361-ad95003ea0d5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515524738708-327f6b0037a7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
];

const CATEGORIES = [
  { name: 'Performances', icon: MonitorPlay },
  { name: 'Classes', icon: LayoutGrid },
  { name: 'Events', icon: ImageIcon },
  { name: 'Student Moments', icon: Users },
];

export default function GalleryPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-8 sm:py-32 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-16 gap-8">
          <div>
            <p className="text-royal-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-sm mb-4">Inside the Vibe</p>
            <h2 className="text-[29px] sm:text-5xl font-extrabold text-royal-blue leading-[29px] sm:leading-tight">Our <span className="serif font-normal italic text-purple">Gallery</span></h2>
          </div>
          
          <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap gap-2 sm:gap-4 w-full justify-start sm:justify-center no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button key={cat.name} className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-gray-100 hover:border-royal-blue hover:text-royal-blue transition-all font-bold text-[9px] sm:text-xs uppercase tracking-widest text-gray-400 whitespace-nowrap bg-white sm:bg-transparent">
                <cat.icon className="w-3 h-3" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible snap-x no-scrollbar scroll-smooth"
          >
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="min-w-[45%] sm:min-w-0 relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-[2.5rem] group cursor-pointer shadow-xl snap-center"
              >
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-8">
                  <p className="text-white font-bold text-[10px] sm:text-lg">Performance @ City Hall</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows for Mobile */}
          <div className="flex sm:hidden justify-center gap-6 mt-4">
            <button onClick={() => scroll('left')} className="p-2 rounded-xl bg-white shadow-md text-royal-blue">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-xl bg-white shadow-md text-royal-blue">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-2xl bg-vibrant-pink text-white font-bold shadow-lg shadow-vibrant-pink/20 text-xs sm:text-base">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
