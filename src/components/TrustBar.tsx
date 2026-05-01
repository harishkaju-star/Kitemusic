import { motion } from 'motion/react';
import { Users, BookOpen, Star, GraduationCap } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Users, title: 'Expert Teachers', color: 'bg-royal-blue' },
  { icon: BookOpen, title: 'Personalized Learning', color: 'bg-vibrant-pink' },
  { icon: Star, title: 'Performance Opportunities', color: 'bg-purple' },
  { icon: GraduationCap, title: 'All Age Groups', color: 'bg-joyful-yellow' },
];

export default function TrustBar() {
  return (
    <section className="pt-12 pb-24 sm:pt-20 sm:pb-32 relative z-20 mt-[-19px] ml-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-2 sm:gap-6">
          {TRUST_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl sm:rounded-[2rem] p-3 sm:p-6 text-center group cursor-pointer border-transparent hover:border-royal-blue/10 transition-all"
            >
              <div className={`${item.color} w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 text-white shadow-lg group-hover:rotate-6 transition-transform`}>
                <item.icon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <p className="font-bold text-gray-800 text-[8px] sm:text-sm leading-tight text-balance">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
