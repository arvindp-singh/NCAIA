import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const sponsors = [
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/b7b84b3ee_Balagan-New-Logo.png', alt: 'B & T logo', name: 'B & T', dark: true },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/cda320e34_Blue_ocean_Diamonds.jpg', alt: 'Blue Ocean Diamonds logo by Meenal Singh', name: 'Blue Ocean Diamonds', dark: true },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/520d88baf_Somireddy-law-group_logo2.jpg', alt: 'Somireddy Law Group logo', name: 'Somireddy Law Group', dark: false },
];

export default function SponsorsSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brass/10 text-brass-dark text-sm font-semibold mb-5 tracking-wide">
            With Gratitude
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Proud Sponsors
          </h2>
          <p className="text-navy/50 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            We thank our generous sponsors for their continued support of NCAIA's mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-navy/8 hover:border-saffron/20 transition-all duration-400 hover:-translate-y-1 overflow-hidden h-44 p-6"
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className={`max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                  sponsor.dark ? 'mix-blend-normal' : ''
                }`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}