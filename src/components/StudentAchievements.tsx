import { motion } from 'motion/react';
import { Star, Trophy, Music, Award } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    name: "Sarah Jenkins",
    achievement: "Grade 8 Piano - Distinction",
    board: "Trinity College London",
    image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&q=80&w=800",
    color: "bg-royal-blue"
  },
  {
    name: "Rahul Mehta",
    achievement: "Young Violinist of the Year",
    board: "National Merit",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    color: "bg-vibrant-pink"
  },
  {
    name: "Emma Wilson",
    achievement: "Theory of Music Grade 5",
    board: "London College of Music",
    image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&q=80&w=800",
    color: "bg-purple"
  },
  {
    name: "James Chen",
    achievement: "Classical Guitar Excellence",
    board: "ABRSM Certified",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800",
    color: "bg-royal-blue"
  }
];

export default function StudentAchievements() {
  return (
    <section id="achievements" className="py-12 sm:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-pink/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-vibrant-pink font-bold text-[8px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 bg-vibrant-pink/5 px-3 py-1 rounded-full md:bg-transparent md:p-0"
            >
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
              Excellence Redefined
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-5xl font-extrabold text-royal-blue leading-tight mb-4 sm:mb-6"
            >
              Our Student <span className="serif font-normal italic text-vibrant-pink">Success Stories</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-[10px] sm:text-lg font-medium leading-relaxed"
            >
              Celebrating the hard work, passion, and global recognition achieved by our talented musicians.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-end gap-5 sm:gap-6"
          >
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-black text-royal-blue">500+</div>
              <div className="text-[7px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-400">Distinctions</div>
            </div>
            <div className="w-px h-8 sm:h-12 bg-gray-100" />
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-black text-vibrant-pink">100%</div>
              <div className="text-[7px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-400">Pass Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Grid - 2 Columns on small mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[280px] sm:h-[450px] overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl shadow-royal-blue/5"
            >
              {/* Student Image */}
              <img 
                src={item.image} 
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/95 via-royal-blue/20 to-transparent" />

              {/* Achievement Badge */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
                <div className="bg-white/90 backdrop-blur-md p-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl">
                  <Star className="w-3 h-3 sm:w-5 sm:h-5 text-vibrant-pink fill-vibrant-pink" />
                </div>
              </div>

              {/* Content Context */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                <div className="flex items-center gap-1 mb-1 sm:mb-2">
                  <Music className="w-2 h-2 sm:w-3 sm:h-3 text-vibrant-pink" />
                  <span className="text-[6px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                    {item.board}
                  </span>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.name}</h3>
                <p className="text-[8px] sm:text-xs font-medium text-white/80 leading-relaxed line-clamp-2">
                  {item.achievement}
                </p>
                
                {/* Expand Decoration (Hidden on small mobile unless high height) */}
                <div className="hidden sm:block mt-6 pt-6 border-t border-white/10 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                   <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-vibrant-pink">
                     <Award className="w-3 h-3" />
                     Official Certification
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
