import React from 'react';
import { motion } from 'framer-motion';
import { Link2, HeartHandshake, Flag, Handshake, Leaf, BookOpen } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { aboutPageContent } from '@/content/aboutContent';

const { values } = aboutPageContent;
const iconMap = { Link2, HeartHandshake, Flag, Handshake, Leaf, BookOpen };

export default function ValuesSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="values" className="py-24 sm:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald text-sm font-semibold mb-6 tracking-wide">
            {values.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 leading-tight">
            {values.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {values.values.map((v, i) => {
            const Icon = iconMap[v.icon];
            return (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                <span className="text-navy font-semibold text-sm text-center leading-snug">{v.label}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-navy/60 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          {values.footer}
        </motion.p>
      </div>
    </section>
  );
}