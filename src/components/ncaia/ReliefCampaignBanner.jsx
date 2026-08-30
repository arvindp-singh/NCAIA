import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, AlertCircle } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const campaign = {
  badge: "Urgent Relief Appeal",
  title: "Nepal Flood Relief",
  image: {
    src: "https://media.base44.com/images/public/6a4a6a9615f41df5f3b80e97/472abf635_ncaia_zeffy_image.png",
    alt: "NCAIA Nepal Relief Fund campaign poster",
  },
  excerpt:
    "Our brothers and sisters in Nepal are facing unimaginable loss from devastating floods. Stand with NCAIA — every contribution, every prayer, every helping hand becomes a ray of hope for those who have lost everything.",
  note: "100% of your donation goes to the mission — Zeffy covers all fees.",
  donateUrl: "https://www.zeffy.com/en-US/donation-form/nepal-flood-relief",
  cta: "Donate Now",
  secondaryCta: "Learn More",
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
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-navy/30"
        >
          {/* Image */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[20rem] order-first lg:order-none">
            <img
              src={campaign.image.src}
              alt={campaign.image.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/15 text-saffron text-xs font-bold uppercase tracking-wider mb-5">
              <AlertCircle size={14} />
              {campaign.badge}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {campaign.title}
            </h2>

            <p className="text-white/70 leading-relaxed mb-6">
              {campaign.excerpt}
            </p>

            <div className="flex items-center gap-2 text-white/50 text-sm mb-7">
              <Heart size={15} className="text-saffron shrink-0" />
              <span>{campaign.note}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={campaign.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-saffron text-white hover:bg-saffron-dark transition-all duration-300 shadow-lg shadow-saffron/30 hover:shadow-saffron/50 hover:-translate-y-0.5"
              >
                {campaign.cta}
                <ArrowRight size={18} />
              </a>
              <a
                href={campaign.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl border-2 border-white/25 text-white hover:bg-white/10 transition-all duration-300"
              >
                {campaign.secondaryCta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
