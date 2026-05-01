import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Ticket, Clock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const EVENTS = [
  { 
    title: "Monsoon Melodies Showcase", 
    dateDisplay: "June 15 | 6:00 PM", 
    targetDate: "2026-06-15T18:00:00",
    type: "Performance", 
    color: "from-royal-blue",
    image: "https://images.unsplash.com/photo-1520529612392-49133bd55ab6?auto=format&fit=crop&w=800&q=80",
    tagline: "Student Excellence Gala"
  },
  { 
    title: "Piano & Kathak Fusion", 
    dateDisplay: "July 20 | 7:30 PM", 
    targetDate: "2026-07-20T19:30:00",
    type: "Fusion Night", 
    color: "from-vibrant-pink",
    image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=800&q=80",
    tagline: "East meets West"
  },
  { 
    title: "Krishna Janmashtami Event", 
    dateDisplay: "Aug 24 | 4:00 PM", 
    targetDate: "2026-08-24T16:00:00",
    type: "Festive", 
    color: "from-joyful-yellow",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    tagline: "Devotional Symphony"
  },
];

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-1.5 sm:gap-3">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.mins },
        { label: 'Sec', value: timeLeft.secs },
      ].map((unit) => (
        <div key={unit.label} className="text-center group">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl flex flex-col items-center justify-center">
            <span className="font-black text-white text-[10px] sm:text-2xl leading-none">{String(unit.value).padStart(2, '0')}</span>
            <span className="text-[5px] sm:text-[8px] font-black uppercase text-white/50 mt-0.5 sm:mt-1">{unit.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function UpcomingEvents() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % EVENTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % EVENTS.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);

  const event = EVENTS[current];

  return (
    <section id="events" className="py-10 sm:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="text-vibrant-pink font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">Stage is Set</p>
            <h2 className="text-[24px] sm:text-6xl font-extrabold text-royal-blue leading-tight tracking-tighter">
              Upcoming <span className="serif font-normal italic text-purple">Experiences</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 mr-6">
              {EVENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    current === i ? "w-8 bg-vibrant-pink" : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <button className="flex items-center gap-2 group font-bold text-royal-blue hover:text-vibrant-pink transition-colors text-sm sm:text-base">
              View All Events <Calendar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
              className="group relative overflow-hidden bg-white rounded-[1.5rem] sm:rounded-[4rem] shadow-2xl flex flex-row h-[200px] sm:h-[450px] border border-gray-100"
            >
              {/* Left Side: Poster/Image */}
              <div className="w-[40%] sm:w-[45%] h-full relative overflow-hidden shrink-0">
                <img 
                  src={event.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={event.title}
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-40 mix-blend-multiply`} />
                <div className="absolute top-2 left-2 sm:top-10 sm:left-10 z-10">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 px-2 py-0.5 sm:px-4 sm:py-2 rounded-full inline-flex items-center gap-1 sm:gap-2 text-white text-[6px] sm:text-xs font-bold uppercase tracking-widest shadow-xl">
                    <Sparkles className="w-1.5 h-1.5 sm:w-3 sm:h-3 text-joyful-yellow animate-spin-slow" />
                    Featured
                  </div>
                </div>
              </div>

              {/* Right Side: Info & Countdown */}
              <div className={`w-[60%] sm:w-[55%] p-3 sm:p-16 flex flex-col justify-center relative bg-gradient-to-br ${event.color}/5 overflow-hidden`}>
                <div className="flex flex-wrap items-center gap-1 sm:gap-4 mb-2 sm:mb-8">
                  <div className="flex items-center gap-1 text-vibrant-pink text-[7px] sm:text-sm font-black uppercase tracking-widest">
                    <Clock className="w-2 h-2 sm:w-4 h-4" /> Start:
                  </div>
                  <Countdown targetDate={event.targetDate} />
                </div>

                <div className="space-y-1 sm:space-y-6">
                  <div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[6px] sm:text-xs mb-0.5 sm:mb-2">
                       {event.dateDisplay} • {event.type}
                    </p>
                    <h3 className="text-[11px] sm:text-5xl font-extrabold text-royal-blue group-hover:text-vibrant-pink transition-colors leading-tight line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-[7px] sm:text-xl text-gray-500 font-medium mt-0.5 sm:mt-2 italic line-clamp-1">
                      "{event.tagline}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-10 border-t border-gray-100 pt-2 sm:pt-8 mt-2 sm:mt-4">
                    <div className="hidden xs:flex items-center gap-1 sm:gap-2 text-gray-600">
                      <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full bg-royal-blue/5 flex items-center justify-center">
                        <MapPin className="w-2 h-2 sm:w-4 h-4 text-royal-blue" />
                      </div>
                      <p className="text-[6px] sm:text-xs font-bold whitespace-nowrap">Auditorium</p>
                    </div>
                    <button className="flex-1 sm:flex-none px-3 py-1.5 sm:py-5 bg-royal-blue text-white rounded-md sm:rounded-2xl font-black text-[7px] sm:text-sm uppercase tracking-widest flex items-center justify-center gap-1 sm:gap-3 shadow-lg shadow-royal-blue/20 hover:bg-vibrant-pink hover:shadow-vibrant-pink/20 transition-all">
                      <Ticket className="w-2 h-2 sm:w-5 h-5" /> Book
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 z-20">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-royal-blue hover:text-vibrant-pink hover:scale-110 transition-all border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 z-20">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-royal-blue hover:text-vibrant-pink hover:scale-110 transition-all border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

