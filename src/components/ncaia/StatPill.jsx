import React from 'react';
import { motion } from 'framer-motion';
import useCountUp from '@/hooks/useCountUp';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function StatPill({ stat, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const count = useCountUp(stat.value || 0, 2000, isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl px-5 py-5 text-center hover:bg-white/20 transition-all duration-300 group cursor-default"
    >
      <div className="text-3xl sm:text-4xl font-display font-bold text-white group-hover:text-saffron-light transition-colors duration-300">
        {stat.text || `${count}${stat.suffix}`}
      </div>
      <div className="text-white/70 text-sm mt-1 font-medium">{stat.label}</div>
    </motion.div>
  );
}