import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { homePageContent } from '@/content/homeContent';

const { contact } = homePageContent;
const iconMap = { MapPin, Globe };

export default function ContactSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-semibold mb-6 tracking-wide">
            {contact.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {contact.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl font-bold text-navy mb-2">{contact.orgName}</h3>
            <p className="text-navy/50 mb-8">{contact.orgShort}</p>

            <div className="space-y-5">
              {contact.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-saffron" />
                    </div>
                    <div>
                      <div className="text-sm text-navy/50 font-medium">{item.label}</div>
                      <div className="text-navy font-semibold">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social */}
            <div className="mt-10">
              <div className="text-sm text-navy/50 font-medium mb-4">{contact.followLabel}</div>
              <div className="flex gap-3">
                {contact.socials.map((social) => (
                  <a
                    key={social}
                    href={`https://www.${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-navy/5 hover:bg-saffron hover:text-white text-navy/60 flex items-center justify-center transition-all duration-300 text-sm font-bold"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 min-h-[350px] flex items-center justify-center"
          >
            <iframe
              title="NCAIA Location"
              src={contact.mapEmbedUrl}
              className="w-full h-full min-h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}