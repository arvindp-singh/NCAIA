import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const campaign = {
  badge: "Urgent Relief Appeal",
  title: "Nepal Flood Relief Fund",
  image: {
    src: "https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/e08817fd4_ncaia_zeffy_image.png",
    alt: "NCAIA Nepal Flood Relief Fund campaign poster",
  },
  donateUrl: "https://www.zeffy.com/en-US/donation-form/nepal-floods-relief",
  cta: "Donate Now",
};

export default function ReliefCampaignBanner() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-navy via-navy-light to-emerald/30 relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-saffron/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center"
        >
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-sm lg:max-w-md w-full rounded-2xl overflow-hidden shadow-2xl shadow-navy/40 border border-white/10"
          >
            <img
              src={campaign.image.src}
              alt={campaign.image.alt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </motion.div>

          {/* CTA */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/15 text-saffron text-xs font-bold uppercase tracking-wider mb-5">
              <AlertCircle size={14} />
              {campaign.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {campaign.title}
            </h2>
            <p className="text-white/70 leading-relaxed mb-7 max-w-md mx-auto lg:mx-0">
              Stand with Nepal. Help rebuild hope — every contribution provides
              emergency relief, medical aid, shelter, and long-term recovery.
            </p>
            <a
              href={campaign.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-saffron text-white hover:bg-saffron-dark transition-all duration-300 shadow-lg shadow-saffron/30 hover:shadow-saffron/50 hover:-translate-y-0.5"
            >
              {campaign.cta}
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
