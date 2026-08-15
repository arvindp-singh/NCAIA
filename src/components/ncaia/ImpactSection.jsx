import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, GraduationCap, Trophy, HeartHandshake } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { aboutPageContent } from '@/content/aboutContent';

const { impact } = aboutPageContent;
const iconMap = { ArrowLeftRight, GraduationCap, Trophy, HeartHandshake };

export default function ImpactSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="impact" className="py-24 sm:py-32 bg-navy">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/20 text-saffron text-sm font-semibold mb-6 tracking-wide">
            {impact.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {impact.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impact.areas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-7 hover:bg-white/15 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-saffron/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} className="text-saffron" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{area.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          {impact.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base sm:text-lg leading-relaxed ${i === 0 ? 'text-white/70' : 'text-white/60'}`}
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}