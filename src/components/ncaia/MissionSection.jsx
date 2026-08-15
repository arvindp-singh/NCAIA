import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { aboutPageContent } from '@/content/aboutContent';

const { mission } = aboutPageContent;

export default function MissionSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={mission.image.src}
          alt={mission.image.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-saffron/20 mb-8">
            <Target size={32} className="text-saffron" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {mission.title}
          </h2>
          {mission.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed ${i === 0 ? 'sm:text-xl text-white/80 mb-6' : 'text-white/70'}`}
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}