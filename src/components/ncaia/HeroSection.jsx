import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import StatPill from './StatPill';

const HERO_IMG = 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/e16752420_generated_981020d7.png';

const stats = [
  { value: 50, suffix: '+', label: 'Annual Events' },
  { value: 25, suffix: '+', label: 'Community Partners' },
  { value: null, text: 'Nationwide', label: 'Impact Across the USA' },
];

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Diverse Indian American community gathering celebrating cultural heritage together in a scenic outdoor setting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/80 via-navy/70 to-emerald/60" />
        <div className="absolute inset-0 bg-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            Nonprofit Organization · Virginia, USA
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Celebrating Indian Heritage, Building Community
            <span className="text-saffron-light"> in America</span>
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mb-10 leading-relaxed">
            NCAIA is a non-profit, non-political organization headquartered in Virginia that brings together
            Asian Indian Americans from diverse linguistic, cultural, and multi-faith backgrounds. We preserve
            India's rich heritage through cultural, educational, charitable, and community programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#getinvolved')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl bg-saffron text-white hover:bg-saffron-dark transition-all duration-300 shadow-xl shadow-saffron/30 hover:shadow-saffron/50 hover:-translate-y-0.5"
            >
              Join Our Community
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <StatPill key={i} stat={stat} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={20} className="text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}