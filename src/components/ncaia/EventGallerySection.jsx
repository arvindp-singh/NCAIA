import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function EventGallerySection({ event }) {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState(null);

  const isDark = event.theme === 'dark';

  return (
    <section
      id={event.id}
      className={`py-24 sm:py-32 ${isDark ? 'bg-navy' : 'bg-white'}`}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide ${
              isDark
                ? 'bg-saffron/20 text-saffron-light'
                : 'bg-saffron/10 text-saffron-dark'
            }`}
          >
            {event.badge}
          </span>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
              isDark ? 'text-white' : 'text-navy'
            }`}
          >
            {event.title}
          </h2>
          <p
            className={`mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-white/60' : 'text-navy/50'
            }`}
          >
            {event.description}
          </p>
        </motion.div>

        <div className={`grid ${event.grid} gap-4`}>
          {event.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl transition-shadow ${
                isDark
                  ? 'border border-white/10'
                  : 'border border-gray-100 shadow-sm hover:shadow-lg'
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover ${event.minImageHeight} group-hover:scale-110 transition-transform duration-700`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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