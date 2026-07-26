import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Music, Sparkles, Award, Heart, Handshake,
  Users, GraduationCap
} from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const cards = [
  {
    icon: Globe,
    title: 'Cultural Programs',
    desc: 'Organize educational, cultural, social, and charitable programs across the United States.',
    color: 'bg-saffron/10 text-saffron',
  },
  {
    icon: Music,
    title: 'Promote Indian Heritage',
    desc: 'Celebrate dance, music, art, cuisine, yoga, language, and traditions.',
    color: 'bg-emerald/10 text-emerald',
  },
  {
    icon: Sparkles,
    title: 'Festivals',
    desc: "Celebrate Holi, Diwali, Navaratri, Baisakhi, Eid, India's Independence Day, and Republic Day.",
    color: 'bg-brass/10 text-brass-dark',
  },
  {
    icon: Award,
    title: 'Community Recognition',
    desc: 'Honor achievers, community leaders, embassy officials, volunteers, and distinguished guests.',
    color: 'bg-navy/10 text-navy',
  },
  {
    icon: Heart,
    title: 'Philanthropy',
    desc: 'Support peace, non-violence, mental health, business growth, and community development.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    desc: 'Collaborate with nonprofits, cultural organizations, educational institutions, and local communities.',
    color: 'bg-saffron/10 text-saffron',
  },
  {
    icon: Users,
    title: 'Women & Youth Leadership',
    desc: "Advance Nari Shakti, women's empowerment, youth leadership, mentorship, and volunteerism.",
    color: 'bg-emerald/10 text-emerald',
  },
  {
    icon: GraduationCap,
    title: 'Education & Innovation',
    desc: 'Promote education, STEM, AI, digital advancement, sanitation, literacy, healthcare, and rural development.',
    color: 'bg-navy/10 text-navy',
  },
];

export default function WhatWeDoSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="whatwedo" className="py-24 sm:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-semibold mb-6 tracking-wide">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            What We Do
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-navy/8 border border-gray-100 hover:border-saffron/20 transition-all duration-400 hover:-translate-y-1 cursor-default"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}