import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants/courses';

export default function Courses() {
  const featuredCourses = COURSES.slice(0, 5);

  return (
    <section id="courses" className="py-4 sm:py-32 bg-white/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-row items-end justify-between mb-4 sm:mb-16 gap-2 sm:gap-6">
          <div className="mt-[-67px]">
            <p className="text-vibrant-pink font-bold uppercase tracking-[0.3em] text-[10px] sm:text-sm mb-4">Discovery</p>
            <h2 className="text-[29px] sm:text-5xl font-extrabold text-royal-blue tracking-tight mb-8 leading-[29px] sm:leading-tight">Our Featured <br className="sm:hidden" /><span className="serif font-normal italic">Courses</span></h2>
          </div>
          <Link to="/courses" className="hidden sm:flex items-center gap-1 sm:gap-2 group font-bold text-royal-blue hover:text-vibrant-pink transition-colors text-[10px] sm:text-base shrink-0 mb-1">
            View All Courses <ChevronRight className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-8">
          {featuredCourses.map((course, idx) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col h-full border border-gray-100"
            >
              {/* Image Header with Gradient Accent */}
              <div className="relative h-32 sm:h-48 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${course.color} to-transparent z-20`} />
                <img 
                  src={course.image} 
                  alt={course.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-white">
                  <course.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              <div className="p-3 sm:p-6 flex flex-col flex-1">
                <h3 className="text-sm sm:text-2xl font-extrabold text-royal-blue mb-1 sm:mb-2">{course.name}</h3>
                <p className="text-gray-500 text-[8px] sm:text-sm mb-4 sm:mb-6 flex-1 font-medium leading-relaxed">{course.desc}</p>
                
                <button className="w-full py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gray-50 text-royal-blue font-bold text-[8px] sm:text-sm hover:bg-royal-blue hover:text-white transition-all flex items-center justify-center gap-1 sm:gap-2">
                  Learn More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden flex justify-center">
          <Link to="/courses" className="flex items-center gap-2 font-bold text-royal-blue text-sm uppercase tracking-widest">
            View All Courses <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
