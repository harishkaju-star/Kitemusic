import { motion, AnimatePresence } from 'motion/react';
import { Trophy, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AchievementPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="achievement-popup"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm glass-card rounded-2xl p-4 flex items-center gap-4 shadow-2xl"
        >
          <div className="bg-joyful-yellow/20 p-3 rounded-full">
            <Trophy className="w-6 h-6 text-joyful-yellow" />
          </div>
          <div className="flex-1">
            <p className="text-[8px] sm:text-xs font-semibold text-royal-blue uppercase tracking-wider">Achievement</p>
            <p className="text-[9px] sm:text-sm font-medium leading-tight">
              KITES student achieved highest score in London College of Music!
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
