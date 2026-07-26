import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, HandHeart, Handshake, CalendarDays } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const actions = [
  { icon: Users, label: 'Join Our Community', desc: 'Become a member and be part of a growing family.' },
  { icon: HandHeart, label: 'Become a Volunteer', desc: 'Contribute your time and talents to our programs.' },
  { icon: Handshake, label: 'Partner With Us', desc: 'Collaborate to create greater community impact.' },
  { icon: CalendarDays, label: 'Attend Our Events', desc: 'Participate in cultural celebrations and gatherings.' },
];

export default function GetInvolvedSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="getinvolved" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-saffron via-saffron-dark to-brass" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Become Part of Our<br />Growing Community
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-14">
            Whether you want to volunteer, partner, or simply attend an event — every step strengthens our community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white/10 border-2 border-white/30 rounded-2xl p-6 text-left hover:bg-white hover:border-white transition-all duration-400 cursor-pointer"
              >
                <Icon size={28} className="text-white group-hover:text-saffron mb-4 transition-colors duration-300" />
                <h3 className="font-display text-base font-bold text-white group-hover:text-navy mb-2 transition-colors duration-300">
                  {action.label}
                </h3>
                <p className="text-white/70 group-hover:text-navy/60 text-sm transition-colors duration-300">
                  {action.desc}
                </p>
                <ArrowRight size={16} className="mt-4 text-white/50 group-hover:text-saffron group-hover:translate-x-1 transition-all duration-300" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}