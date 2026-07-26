import React from 'react';
import Navbar from '@/components/ncaia/Navbar';
import HeroSection from '@/components/ncaia/HeroSection';
import AboutSection from '@/components/ncaia/AboutSection';
import MissionSection from '@/components/ncaia/MissionSection';
import WhatWeDoSection from '@/components/ncaia/WhatWeDoSection';
import ValuesSection from '@/components/ncaia/ValuesSection';
import VisionSection from '@/components/ncaia/VisionSection';
import ImpactSection from '@/components/ncaia/ImpactSection';
import GallerySection from '@/components/ncaia/GallerySection';
import GetInvolvedSection from '@/components/ncaia/GetInvolvedSection';
import ContactSection from '@/components/ncaia/ContactSection';
import SponsorsSection from '@/components/ncaia/SponsorsSection';
import Footer from '@/components/ncaia/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WhatWeDoSection />
      <ValuesSection />
      <VisionSection />
      <ImpactSection />
      <GallerySection />
      <GetInvolvedSection />
      <ContactSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}