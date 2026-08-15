import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { homePageContent } from '@/content/homeContent';

const { about } = homePageContent;

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-semibold mb-6 tracking-wide">
              {about.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
              {about.title}
            </h2>
            <div className="space-y-5 text-navy/70 leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/10">
              <img
                src={about.image.src}
                alt={about.image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-saffron/10 -z-10" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-emerald/10 -z-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}