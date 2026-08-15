import React from 'react';
import Navbar from '@/components/ncaia/Navbar';
import HeroSection from '@/components/ncaia/HeroSection';
import AboutSection from '@/components/ncaia/AboutSection';
import VisionSection from '@/components/ncaia/VisionSection';
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
      <VisionSection />
      <GetInvolvedSection />
      <ContactSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}