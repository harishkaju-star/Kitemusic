import { motion } from 'motion/react';
import { Music4, ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-8 sm:py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-royal-blue -z-20" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-48 -right-48 w-96 h-96 bg-vibrant-pink rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, -45, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-purple rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-blue text-xs font-bold uppercase tracking-widest mb-8 border border-white/5"
        >
          <Sparkles className="w-3 h-3" /> Join the family
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[29px] sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter leading-none"
        >
          Unlock the <span className="serif font-normal italic text-joyful-yellow">Joy of Music</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[9px] sm:text-xl text-sky-blue/80 mb-12 font-medium max-w-xl mx-auto"
        >
          Start your musical journey with KITES Academy today. Nurturing your talent is our lifelong mission.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-10 py-5 bg-vibrant-pink text-white rounded-2xl font-bold text-lg shadow-2xl shadow-vibrant-pink/30 hover:scale-105 transition-transform flex items-center justify-center gap-3">
            Enroll Today <Music4 className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
            Schedule Demo <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-accent text-xl sm:text-3xl text-joyful-yellow mt-16 rotate-[-2deg]"
        >
          Enroll now and fly high with your music...
        </motion.p>
      </div>
    </section>
  );
}
