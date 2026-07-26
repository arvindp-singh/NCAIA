import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const VISION_IMG = 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/20fe51c43_generated_4ea3a11e.png';

export default function VisionSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={VISION_IMG}
          alt="Indian American community members gathered on a Virginia landscape during golden hour"
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
            Our Vision
          </h2>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-6">
            We envision a vibrant and united community that preserves Indian heritage, embraces diversity,
            supports future generations, and builds stronger bridges between India and the United States.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Our members serve as goodwill ambassadors who reflect the spirit of a secular, multilingual,
            and multi-faith India while actively participating in the cultural fabric of America.
          </p>
        </motion.div>
      </div>
    </section>
  );
}