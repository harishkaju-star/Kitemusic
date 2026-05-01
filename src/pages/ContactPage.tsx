import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-vibrant-pink font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Get In Touch
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-7xl font-extrabold text-royal-blue leading-tight mb-8"
            >
              Let's Start Your <br />
              <span className="serif font-normal italic text-vibrant-pink">Musical Journey</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-gray-600 text-lg font-medium leading-relaxed"
            >
              Have questions about our courses, schedules, or certifications? Reach out to us — we'd love to help you find your rhythm.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
              >
                {/* Phone Card */}
                <div className="glass-card p-10 rounded-[2.5rem] border-transparent bg-royal-blue/5 hover:bg-royal-blue/10 transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-royal-blue" />
                  </div>
                  <h3 className="text-xl font-extrabold text-royal-blue mb-2">Call Us Anytime</h3>
                  <p className="text-gray-500 font-medium mb-4 text-sm">Mon-Sat from 10am to 8pm.</p>
                  <a href="tel:+916360921634" className="text-2xl font-black text-royal-blue hover:text-vibrant-pink transition-colors">
                    +91 6360921634
                  </a>
                </div>

                {/* Email Card */}
                <div className="glass-card p-10 rounded-[2.5rem] border-transparent bg-vibrant-pink/5 hover:bg-vibrant-pink/10 transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-vibrant-pink" />
                  </div>
                  <h3 className="text-xl font-extrabold text-royal-blue mb-2">Chat with Us</h3>
                  <p className="text-gray-500 font-medium mb-4 text-sm">Our friendly team is here to help.</p>
                  <a href="mailto:vinayp@kitesmusic.com" className="text-lg font-bold text-vibrant-pink hover:underline uppercase tracking-wider">
                    vinayp@kitesmusic.com
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-10 rounded-[2.5rem] border-transparent bg-purple/5"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-royal-blue mb-2">Visit Our Academy</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      JP Nagar – Bilekahalli,<br />
                      Vijayabank Layout, Bengaluru
                    </p>
                    <button className="mt-4 flex items-center gap-2 text-purple font-bold text-sm hover:underline">
                      View on Google Maps <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-10">
                  <MessageSquare className="w-6 h-6 text-royal-blue" />
                  <h2 className="text-2xl font-extrabold text-royal-blue">Send us a Message</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-8 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-royal-blue outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 000 000 0000"
                        className="w-full px-8 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-royal-blue outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Interested Course</label>
                    <select className="w-full px-8 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-royal-blue outline-none transition-all font-medium appearance-none">
                      <option>Piano & Keyboard</option>
                      <option>Guitar</option>
                      <option>Vocals (Carnatic/Western)</option>
                      <option>Violin</option>
                      <option>Percussion (Tabla)</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your musical interests..."
                      className="w-full px-8 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-royal-blue outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full py-5 bg-royal-blue text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-royal-blue/20 hover:bg-royal-blue/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Connect */}
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-royal-blue mb-2">Connect with Our Community</h2>
            <p className="text-gray-500 font-medium">Follow us for performance updates and student highlights.</p>
          </div>
          <div className="flex justify-center gap-6">
            {[
              { icon: Instagram, color: 'bg-vibrant-pink', label: 'Instagram' },
              { icon: Facebook, color: 'bg-royal-blue', label: 'Facebook' },
              { icon: Youtube, color: 'bg-red-600', label: 'YouTube' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -10 }}
                className={`w-16 h-16 ${social.color} rounded-3xl flex items-center justify-center shadow-xl shadow-black/5 hover:shadow-2xl transition-all`}
              >
                <social.icon className="w-8 h-8 text-white" />
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
