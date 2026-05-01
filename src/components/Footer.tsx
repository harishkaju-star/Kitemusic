import { motion } from 'motion/react';
import { Music, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-royal-blue text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-vibrant-pink/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center">
              <img 
                src="/img/logo/Kites%20Logo%20Horizontal.png" 
                alt="KITES Academy of Music" 
                className="h-16 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sky-blue/80 text-[9px] sm:text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
              Quality music education that builds confidence, creativity, and lifelong love for music. Flying high with every note.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-sky-blue" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-xs sm:text-lg font-bold mb-6 sm:mb-8 text-sky-blue">Academy</h4>
            <ul className="space-y-3 sm:space-y-4">
              {['Home', 'About Us', 'Courses', 'Concerts', 'Careers', 'Student Portal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sky-blue/60 hover:text-white transition-colors text-[9px] sm:text-sm font-medium flex items-center justify-center lg:justify-start gap-2">
                    <span className="w-1 h-1 bg-vibrant-pink rounded-full shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy */}
          <div className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-xs sm:text-lg font-bold mb-6 sm:mb-8 text-sky-blue">Support</h4>
            <ul className="space-y-3 sm:space-y-4">
              {['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sky-blue/60 hover:text-white transition-colors text-[9px] sm:text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-xs sm:text-lg font-bold mb-6 sm:mb-8 text-sky-blue">Get in Touch</h4>
            <div className="space-y-6 w-full max-w-xs sm:max-w-none">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-vibrant-pink" />
                </div>
                <div>
                  <p className="text-vibrant-pink text-[8px] sm:text-xs font-black uppercase tracking-widest leading-none mb-1">Call Us</p>
                  <p className="text-[9px] sm:text-sm font-bold">+91 6360921634</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-joyful-yellow" />
                </div>
                <div>
                  <p className="text-joyful-yellow text-[8px] sm:text-xs font-black uppercase tracking-widest leading-none mb-1">Email</p>
                  <p className="text-[9px] sm:text-sm font-bold">vinayp@kitesmusic.com</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-blue" />
                </div>
                <div>
                  <p className="text-sky-blue text-[8px] sm:text-xs font-black uppercase tracking-widest leading-none mb-1">Visit Us</p>
                  <p className="text-[9px] sm:text-sm font-bold">JP Nagar, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sky-blue/40 text-xs font-medium">
            © 2026 KITES Academy of Music. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sky-blue/40 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <Globe className="w-3 h-3" /> English (US)
            </a>
            <span className="font-accent text-vibrant-pink text-lg tracking-wide">Fly high with music</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
