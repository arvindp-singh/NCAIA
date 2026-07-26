import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const MISSION_IMG = 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/1b9de6e95_generated_4d093b07.png';

export default function MissionSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="mission"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={MISSION_IMG}
          alt="Traditional Indian cultural textures including lit diyas, silk fabric, and marigold flowers"
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
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6">
            Our mission is to preserve and promote the time-honored traditions, values, and cultural heritage
            of India while fostering unity, mutual respect, and stronger ties between Indian Americans and
            the broader American community.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            We serve our members through educational, cultural, charitable, leadership, and community
            initiatives that inspire service, strengthen relationships, and celebrate diversity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}