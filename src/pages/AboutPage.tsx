import { motion } from 'motion/react';
import { Award, Music, Users, Calendar, MapPin, GraduationCap, Star, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-vibrant-pink font-bold text-xs uppercase tracking-[0.3em] mb-4"
          >
            Our Legacy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-7xl font-extrabold text-royal-blue leading-tight mb-8"
          >
            Where Passion Meets <br />
            <span className="serif font-normal italic text-vibrant-pink">Performance Exceptionalism</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-gray-600 text-lg sm:text-xl font-medium leading-relaxed"
          >
            Kites Academy of Music is a premier music learning institute based in JP Nagar – Bilekahalli, Vijayabank Layout, dedicated to nurturing passion, creativity, and performance in every student.
          </motion.p>
        </div>

        {/* About Academy Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6 text-gray-600 text-lg font-medium leading-loose">
                <p>
                  With over 10 years of teaching experience, our academy offers professional training in Keyboard, Piano, Guitar, Violin, Carnatic Vocal, Western Vocal, Hindustani Vocal, Tabla, and Flute.
                </p>
                <p>
                  At Kites Academy of Music, we believe that music is not just about learning notes — it is about expression, confidence, and stage presence. Our teaching style is designed to suit all age groups, from beginners to advanced learners, ensuring every student enjoys their musical journey.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-8 rounded-3xl border-transparent bg-royal-blue/5">
                  <span className="text-3xl font-black text-royal-blue block mb-2">10+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Years Experience</span>
                </div>
                <div className="glass-card p-8 rounded-3xl border-transparent bg-vibrant-pink/5">
                  <span className="text-3xl font-black text-vibrant-pink block mb-2">500+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Students Trained</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80" 
                  alt="Academy Atmosphere" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-[2rem] shadow-xl border-white/20 max-w-[280px]">
                <p className="font-bold text-royal-blue mb-2 italic">"Music is not just about notes — it is about expression."</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-vibrant-pink" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Kites Philosophy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-gray-50 py-24 sm:py-32 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-blue/5 -skew-x-12 transform translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 text-royal-blue font-bold text-xs uppercase tracking-[0.3em] mb-6 px-4 py-2 bg-royal-blue/5 rounded-full">
                  <Star className="w-4 h-4" />
                  About the Founder
                </div>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-royal-blue mb-8 leading-tight">
                  Meet <span className="serif font-normal italic text-vibrant-pink">Vinay P</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 text-lg font-medium leading-relaxed">
                  <p>
                    Vinay P is a passionate pianist, performer, and music educator, and the founder of Kites Academy of Music. He holds a degree in Mechanical Engineering and has been professionally teaching music since 2016.
                  </p>
                  <p>
                    A graduate with distinction from the London College of Music (LCM), Vinay has dedicated his journey to building a platform where students can learn music with both discipline and creativity.
                  </p>
                  <p>
                    As a performer, Vinay is associated as a lobby pianist at The Ritz-Carlton, Bangalore and has performed at prestigious venues including ITC, Taj, JW Marriott, and The Leela Palace. He also leads his own band, <span className="text-royal-blue font-bold">24th Main Band</span>.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <GraduationCap className="w-5 h-5 text-purple" />
                    <span className="text-sm font-bold text-royal-blue">LCM Distinction</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <Music className="w-5 h-5 text-vibrant-pink" />
                    <span className="text-sm font-bold text-royal-blue">Professional Performer</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1200&q=80" 
                      alt="Vinay P - Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Performance Badge */}
                  <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center">
                    <Zap className="w-8 h-8 text-vibrant-pink mb-2" />
                    <span className="text-2xl font-black text-royal-blue">150+</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Active Students</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-royal-blue mb-6">What Makes Us <span className="serif font-normal italic text-vibrant-pink">Unique</span></h2>
            <p className="text-gray-600 font-medium">Quality over quantity is our cornerstone. We maintain limited batch sizes to ensure every learner receives personalized attention and guidance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[3rem] bg-royal-blue/5 hover:bg-royal-blue/10 transition-colors border border-transparent hover:border-royal-blue/10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-royal-blue" />
              </div>
              <h3 className="text-2xl font-extrabold text-royal-blue mb-4">Limited Batches</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Personalized attention to each student to build strong fundamentals and explore individual styles.</p>
            </div>

            <div className="p-10 rounded-[3rem] bg-vibrant-pink/5 hover:bg-vibrant-pink/10 transition-colors border border-transparent hover:border-vibrant-pink/10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8">
                <Award className="w-8 h-8 text-vibrant-pink" />
              </div>
              <h3 className="text-2xl font-extrabold text-royal-blue mb-4">Performance Focus</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Monthly stage shows, events, and live performances help our students build immense stage confidence.</p>
            </div>

            <div className="p-10 rounded-[3rem] bg-purple/5 hover:bg-purple/10 transition-colors border border-transparent hover:border-purple/10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8">
                <Calendar className="w-8 h-8 text-purple" />
              </div>
              <h3 className="text-2xl font-extrabold text-royal-blue mb-4">Global Exams</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Structured preparation for internationally recognized boards including Trinity and LCM.</p>
            </div>
          </div>
        </section>

        {/* Location / Experience */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-royal-blue rounded-[4rem] p-12 sm:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-5xl font-extrabold mb-8">Join the Musical Journey in <span className="serif font-normal italic text-sky-blue">JP Nagar</span></h2>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-sky-blue" />
                  <p className="text-lg font-medium text-white/80 italic">JP Nagar – Bilekahalli, Vijayabank Layout, Bengaluru</p>
                </div>
                <p className="text-white/60 font-medium leading-relaxed">
                  We invite you to be a part of a learning space where passion meets performance. Suited for all age groups, from complete beginners to advanced learners.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                 <div className="glass-card bg-white/10 p-8 rounded-3xl border-white/20">
                    <p className="text-4xl font-extrabold text-sky-blue mb-2">150+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Active Students</p>
                 </div>
                 <div className="glass-card bg-white/10 p-8 rounded-3xl border-white/20">
                    <p className="text-4xl font-extrabold text-vibrant-pink mb-2">10+ yrs</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Teaching Legacy</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
