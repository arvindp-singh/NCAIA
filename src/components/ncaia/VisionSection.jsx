import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { homePageContent } from '@/content/homeContent';

const { vision } = homePageContent;

export default function VisionSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={vision.image.src}
          alt={vision.image.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brass/20 mb-8">
            <Eye size={32} className="text-brass" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {vision.title}
          </h2>
          {vision.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed ${i === 0 ? 'sm:text-xl text-white/85 mb-6' : 'text-white/70'}`}
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}