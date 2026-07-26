import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const images = [
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/4a75b3d7b_generated_dd6d7211.png', alt: 'Vibrant Holi celebration with colorful powders', label: 'Holi Celebration' },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/97ee36cc1_generated_8f64841c.png', alt: 'Beautiful Diwali celebration with lit diyas and decorations', label: 'Diwali Festival' },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/b0d122f7c_generated_3ee9693d.png', alt: 'India Day Parade with participants marching with flags', label: 'India Day Parade' },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/a57c0f710_generated_88d4d7ec.png', alt: 'International Yoga Day group practice outdoors', label: 'Yoga Day' },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/9465c44c2_generated_d0a83932.png', alt: 'Community service volunteers at a charity event', label: 'Community Service' },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/1f8a3b5f7_generated_a17c6f61.png', alt: 'Traditional Indian classical dance performance on stage', label: 'Cultural Dance' },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/98f55051f_generated_ae1783d3.png', alt: 'Indian flag hoisting ceremony at community event', label: 'Flag Hoisting' },
  { src: 'https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/4f1e2f6a5_generated_ea85821b.png', alt: 'Youth leadership program with young Indian Americans collaborating', label: 'Youth Programs' },
];

export default function GallerySection() {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brass/10 text-brass-dark text-sm font-semibold mb-6 tracking-wide">
            Our Moments
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                i === 0 || i === 5 ? 'md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}