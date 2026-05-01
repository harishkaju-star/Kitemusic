import { motion } from 'motion/react';
import { Play, Music4 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[45vh] md:h-screen w-full overflow-hidden flex items-center pt-20">
      {/* Background Image - 100% Opacity as requested */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/img/hero/Hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content Overlay - Designed for extreme consistency */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Headline - Updated with specific responsive sizing */}
            <h1 className="text-[29px] sm:text-[86px] font-extrabold leading-[28px] sm:leading-[1] mb-[20px] sm:mb-[25px] mt-[-5px] sm:mt-0 sm:pt-[35px] text-royal-blue tracking-tighter drop-shadow-md w-[227px] sm:w-full sm:max-w-[651px]">
              Nurturing <span className="text-vibrant-pink italic serif font-normal">Talent</span> <br />
              Inspiring <span className="text-purple font-normal italic">Dreams</span>
            </h1>
            
            {/* Subheadline - Updated with specific responsive sizing */}
            <p className="text-[9px] sm:text-[19px] text-gray-800 mb-4 sm:mb-10 w-[165px] sm:w-full sm:max-w-xl font-medium leading-relaxed drop-shadow-sm mt-[-22px] sm:mt-0">
              Quality music education that builds confidence, creativity, and lifelong love for music.
            </p>
            
            {/* CTA Buttons - More refined desktop sizing */}
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-3.5 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-royal-blue via-purple to-vibrant-pink text-white rounded-full sm:rounded-2xl font-black text-[9px] sm:text-base overflow-hidden transition-all whitespace-nowrap uppercase tracking-widest"
              >
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-3">
                  Explore Courses 
                  <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-white text-royal-blue flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                    <Play className="w-2 sm:w-4 h-2 sm:h-4 fill-current ml-0.5" />
                  </div>
                </span>
                {/* Shine Sweep Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-3.5 sm:px-8 py-2 sm:py-4 bg-white text-royal-blue border-2 border-royal-blue/5 rounded-full sm:rounded-2xl font-black text-[9px] sm:text-base hover:bg-royal-blue hover:text-white transition-all whitespace-nowrap uppercase tracking-widest"
              >
                Book Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Vibe-Code visual accents */}
      <div className="absolute bottom-10 right-10 hidden md:flex items-end gap-1.5 h-20 opacity-20">
        {[0.4, 0.7, 0.3, 0.9, 0.5, 0.8, 0.2, 0.6, 1].map((h, i) => (
          <motion.div 
            key={i}
            animate={{ height: [`${h * 100}%`, `${(1-h) * 100}%`, `${h * 100}%`] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-royal-blue rounded-full"
          />
        ))}
      </div>
    </section>
  );
}
