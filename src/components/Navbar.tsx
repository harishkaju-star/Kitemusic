import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Events', href: '/#events' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderColor: scrolled ? "rgba(30, 58, 139, 0.1)" : "rgba(255, 255, 255, 0)",
          y: scrolled ? 10 : 0,
        }}
        className={`
          w-full max-w-6xl pointer-events-auto
          flex items-center justify-between
          px-8 py-3 rounded-[2rem] border transition-shadow duration-300
          ${scrolled ? 'shadow-xl shadow-royal-blue/5' : ''}
        `}
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/img/logo/Kites Logo Horizontal.png" 
              alt="KITES Academy" 
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              id="nav-logo"
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {NAV_LINKS.map((link) => {
            const isHash = link.href.includes('#');
            const isActive = location.pathname === '/' && isHash;
            
            const linkProps = {
              className: "relative text-[0.7rem] font-bold uppercase tracking-[0.25em] text-gray-700 hover:text-royal-blue transition-colors group",
              id: `nav-link-${link.name.toLowerCase()}`
            };

            const content = (
              <>
                {link.name}
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-vibrant-pink origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            );

            if (isActive) {
              return (
                <a key={link.name} {...linkProps} href={link.href.substring(link.href.indexOf('#'))}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={link.name} {...linkProps} to={link.href}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Right: CTAs */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            to="/login" 
            className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-600 hover:text-royal-blue transition-colors"
            id="btn-login"
          >
            Login
          </Link>
          <button 
            className="px-8 py-2.5 rounded-full bg-royal-blue text-white text-[0.7rem] font-bold uppercase tracking-widest shadow-2xl shadow-royal-blue/30 hover:bg-royal-blue/90 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            id="btn-apply"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-royal-blue cursor-pointer"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed inset-x-4 top-28 z-50 lg:hidden overflow-hidden rounded-3xl bg-white/90 backdrop-blur-2xl border border-royal-blue/10 shadow-2xl p-8 flex flex-col gap-8 pointer-events-auto"
            id="mobile-menu"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-royal-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="h-px bg-royal-blue/10 w-full" />
            
            <div className="flex flex-col gap-4">
              <button className="w-full py-4 text-royal-blue font-bold uppercase tracking-widest text-[0.7rem]">
                Login
              </button>
              <button className="w-full py-4 rounded-2xl bg-royal-blue text-white font-bold uppercase tracking-widest text-[0.7rem] shadow-xl shadow-royal-blue/20">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
