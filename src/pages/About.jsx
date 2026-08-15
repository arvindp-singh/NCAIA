import React from 'react';
import Navbar from '@/components/ncaia/Navbar';
import AboutSection from '@/components/ncaia/AboutSection';
import MissionSection from '@/components/ncaia/MissionSection';
import WhatWeDoSection from '@/components/ncaia/WhatWeDoSection';
import ValuesSection from '@/components/ncaia/ValuesSection';
import ImpactSection from '@/components/ncaia/ImpactSection';
import LeadershipSection from '@/components/ncaia/LeadershipSection';
import Footer from '@/components/ncaia/Footer';
import { aboutPageContent } from '@/content/aboutContent';

export default function About() {
  const { header } = aboutPageContent;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-28 sm:pt-36 pb-10 sm:pb-14 bg-gradient-hero text-center px-4">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {header.title}
        </h1>
        <p className="text-white/80 mt-5 max-w-2xl mx-auto text-base sm:text-lg">
          {header.subtitle}
        </p>
      </header>
      <AboutSection />
      <MissionSection />
      <WhatWeDoSection />
      <ValuesSection />
      <ImpactSection />
      <LeadershipSection />
      <Footer />
    </div>
  );
}