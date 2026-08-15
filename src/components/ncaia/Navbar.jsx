import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navbarContent } from '@/content/siteContent';

export default function Navbar() {
  const { brand, homeLink, pageLinks, anchorLinks, cta, logo } = navbarContent;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const desktopLinkClass = `relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-black/5 group ${
    scrolled ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white'
  }`;
  const mobileLinkClass =
    'block px-4 py-3 text-navy/80 hover:text-navy hover:bg-navy/5 rounded-xl font-medium transition-colors';

  const Underline = () => (
    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-navy/5 border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to={homeLink.to} className="flex items-center gap-3">
            <img
              src={logo.src}
              alt={logo.alt}
              className={`w-11 h-11 rounded-full object-cover border-2 transition-colors duration-300 ${
                scrolled ? 'border-brass' : 'border-white/40'
              }`}
            />
            <span
              className={`font-bold text-xl transition-colors duration-300 [font-family:'Be_Vietnam_Pro',_sans-serif] ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {brand}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to={homeLink.to} className={desktopLinkClass}>
              {homeLink.label}
              <Underline />
            </Link>
            {pageLinks.map((link) => (
              <Link key={link.to} to={link.to} className={desktopLinkClass}>
                {link.label}
                <Underline />
              </Link>
            ))}
            {anchorLinks.map((link) => (
              <Link key={link.to} to={link.to} className={desktopLinkClass}>
                {link.label}
                <Underline />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to={cta.to}
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-saffron text-white hover:bg-saffron-dark transition-all duration-300 shadow-lg shadow-saffron/25 hover:shadow-saffron/40 hover:-translate-y-0.5"
            >
              {cta.label}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? 'text-navy hover:bg-navy/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <Link to={homeLink.to} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>
                {homeLink.label}
              </Link>
              {pageLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>
                  {link.label}
                </Link>
              ))}
              {anchorLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>
                  {link.label}
                </Link>
              ))}
              <Link
                to={cta.to}
                onClick={() => setMobileOpen(false)}
                className="block mt-3 px-4 py-3 text-center text-white font-semibold rounded-xl bg-saffron hover:bg-saffron-dark transition-colors"
              >
                {cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}