import { motion } from 'motion/react';
import { ChevronRight, Filter } from 'lucide-react';
import { COURSES } from '../constants/courses';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-vibrant-pink font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Excellence in Music
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold text-royal-blue leading-tight mb-6"
            >
              Explore Our <span className="serif font-normal italic">Music Programs</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-gray-600 text-lg font-medium leading-relaxed"
            >
              From traditional classical training to modern synthesis, we offer a comprehensive range of instrumental and vocal courses tailored for every level.
            </motion.p>
          </div>

          {/* Filters/Categories Placeholder */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-royal-blue text-white font-bold text-sm">
              All Instruments
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 text-royal-blue font-bold text-sm hover:bg-gray-100 transition-colors">
              Strings
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 text-royal-blue font-bold text-sm hover:bg-gray-100 transition-colors">
              Vocals
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 text-royal-blue font-bold text-sm hover:bg-gray-100 transition-colors">
              Keys
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 text-royal-blue font-bold text-sm hover:bg-gray-100 transition-colors">
              Percussion
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.color} to-transparent z-20`} />
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white">
                    <course.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-3xl font-extrabold text-royal-blue mb-4">{course.name}</h3>
                  <p className="text-gray-500 text-base mb-8 flex-1 font-medium leading-relaxed">
                    {course.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <button className="px-8 py-4 rounded-2xl bg-royal-blue text-white font-bold text-sm hover:shadow-lg hover:shadow-royal-blue/20 transition-all">
                      Enrol Now
                    </button>
                    <button className="flex items-center gap-2 font-bold text-royal-blue hover:text-vibrant-pink transition-colors">
                      Course Details <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
