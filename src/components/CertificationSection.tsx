import { motion } from 'motion/react';
import { GraduationCap, Globe } from 'lucide-react';

export default function CertificationSection() {
  return (
    <section className="relative z-30 -mt-10 sm:-mt-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-[2rem] p-4 sm:px-12 sm:py-6 relative overflow-hidden group border-white/40 mt-[52px] ml-0"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl group-hover:bg-vibrant-pink/5 transition-colors duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-vibrant-pink/5 rounded-full blur-3xl group-hover:bg-purple/5 transition-colors duration-1000" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-12 relative z-10">
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-lg">
              <h2 className="text-base sm:text-2xl font-extrabold text-royal-blue leading-tight mb-1 sm:mb-2">
                Global Music <span className="text-vibrant-pink italic serif font-normal">Examination</span> Pathways
              </h2>
              <p className="text-[8px] sm:text-sm text-gray-600 font-medium mb-3 sm:mb-4 leading-relaxed max-w-md mx-auto lg:mx-0">
                KITES Academy partner leading music boards, providing internationally recognized certifications.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1 text-royal-blue font-bold text-[5px] sm:text-[7px] uppercase tracking-widest bg-royal-blue/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-royal-blue" />
                  International Placements
                </div>
                <div className="flex items-center gap-1 text-purple font-bold text-[5px] sm:text-[7px] uppercase tracking-widest bg-purple/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-purple" />
                  University Pathways
                </div>
              </div>
            </div>

            {/* Right: Partner Logos */}
            <div className="flex items-center gap-8 sm:gap-16">
              {/* Trinity College London */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <img 
                  src="/img/logo/Trinity.png" 
                  alt="Trinity College London" 
                  className="h-8 sm:h-[50px] w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 rounded-none"
                />
              </motion.div>

              {/* University of West London / LCM */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <img 
                  src="/img/logo/West london.png" 
                  alt="University of West London" 
                  className="h-8 sm:h-[41px] w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>

          {/* Placement Options Hint: Ribbon effect bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-royal-blue via-purple to-vibrant-pink" />
        </motion.div>
      </div>
    </section>
  );
}
