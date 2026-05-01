import { motion } from 'motion/react';
import { Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-20">
          {/* Visuals - Small & Stylish */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-[300px] sm:h-[400px] object-cover" 
                alt="Vinay P - Founder" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Founder & Educator</p>
                <h3 className="text-2xl font-black italic">Vinay P.</h3>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-vibrant-pink p-6 rounded-3xl shadow-xl z-20 hidden sm:block -rotate-3 hover:rotate-0 transition-transform cursor-default">
              <div className="text-white text-center">
                <div className="text-3xl font-black">10+</div>
                <div className="text-[8px] font-bold uppercase tracking-widest leading-none">Years of<br/>Legacy</div>
              </div>
            </div>
          </motion.div>

          {/* Content - Super Concise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-vibrant-pink" />
              <p className="text-royal-blue font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">Our Legacy</p>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-royal-blue leading-tight mb-6">
              Where <span className="serif font-normal italic text-vibrant-pink">Passion</span> Meets <br/>
              <span className="text-purple">Performance</span>
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-lg font-medium leading-relaxed mb-8 max-w-xl">
              Kites Academy of Music is a premier music institute in JP Nagar, dedicated to nurturing creativity through personalized instruction and world-class certification.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/about" className="px-8 py-4 bg-royal-blue text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-royal-blue/20 transition-all group flex items-center gap-2">
                Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">500+ Students trained</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
