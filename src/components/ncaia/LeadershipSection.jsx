import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, Lightbulb } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { aboutPageContent } from '@/content/aboutContent';

const { leadership } = aboutPageContent;
const iconMap = { Crown, Users, Lightbulb };

const avatarPalettes = [
  'from-saffron to-saffron-dark',
  'from-navy to-navy-light',
  'from-emerald to-emerald-light',
  'from-brass to-brass-dark',
];

const getInitials = (name) =>
  name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const Group = ({ group }) => {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = iconMap[group.icon];

  return (
    <div ref={ref} className="mb-16 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-11 h-11 rounded-xl bg-saffron/10 flex items-center justify-center">
          <Icon size={22} className="text-saffron-dark" />
        </div>
        <h3 className="font-display text-2xl font-bold text-navy">{group.title}</h3>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {group.members.map((m, i) => (
          <motion.div
            key={m.name}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="group flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-navy/8 hover:border-saffron/30 transition-all duration-400 hover:-translate-y-1 p-6"
          >
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${avatarPalettes[i % avatarPalettes.length]} flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md`}
            >
              {getInitials(m.name)}
            </div>
            <h4 className="font-display font-semibold text-navy text-base leading-tight">{m.name}</h4>
            <p className="text-saffron-dark text-sm font-medium mt-1.5">{m.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default function LeadershipSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="leadership" className="py-24 sm:py-32 bg-gradient-to-b from-white to-saffron/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brass/10 text-brass-dark text-sm font-semibold mb-5 tracking-wide">
            {leadership.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {leadership.title}
          </h2>
          <p className="text-navy/60 mt-4 text-sm font-semibold uppercase tracking-wider">
            {leadership.term}
          </p>
          <p className="text-navy/50 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {leadership.subtitle}
          </p>
        </motion.div>

        {leadership.groups.map((group) => (
          <Group key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}