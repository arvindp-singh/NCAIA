import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const contactItems = [
  { icon: MapPin, label: 'Headquarters', value: 'Virginia, USA' },
  { icon: Globe, label: 'Website', value: 'ncaiausa.org' },
];

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
            Reach Out
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl font-bold text-navy mb-2">
              National Council of Asian Indian Associations
            </h3>
            <p className="text-navy/50 mb-8">(NCAIA)</p>

            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
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
              <div className="text-sm text-navy/50 font-medium mb-4">Follow Us</div>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
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

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 min-h-[350px] flex items-center justify-center"
          >
            <iframe
              title="NCAIA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398242.5204615!2d-77.61535!3d38.8951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sVirginia%2C%20USA!5e0!3m2!1sen!2sus!4v1704124800000!5m2!1sen!2sus"
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