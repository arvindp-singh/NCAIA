import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ABOUT_IMG = 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/89898dc35_generated_d2c81253.png';

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-semibold mb-6 tracking-wide">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
              About NCAIA
            </h2>
            <div className="space-y-5 text-navy/70 leading-relaxed">
              <p>
                The National Council of Asian Indian Associations (NCAIA), headquartered in Virginia, is a
                non-profit and non-political organization dedicated to celebrating, preserving, and sharing
                the rich heritage, values, philosophy, and culture of India in the United States.
              </p>
              <p>
                We bring together Asian Indian Americans from diverse linguistic, cultural, and multi-faith
                backgrounds to build community, strengthen understanding, and promote harmony.
              </p>
              <p>
                We believe our community can honor its roots while contributing meaningfully to the social,
                cultural, and civic life of America.
              </p>
              <p>
                Through cultural, educational, charitable, and community-based programs, we strengthen
                relationships among people across the United States and beyond.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/10">
              <img
                src={ABOUT_IMG}
                alt="Artistic illustration showing the cultural connection between India and the United States with diverse community members"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-saffron/10 -z-10" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-emerald/10 -z-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}