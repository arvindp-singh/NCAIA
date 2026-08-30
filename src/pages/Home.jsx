import React from "react";
import Navbar from "@/components/ncaia/Navbar";
import HeroSection from "@/components/ncaia/HeroSection";
import ReliefCampaignBanner from "@/components/ncaia/ReliefCampaignBanner";
import AboutSection from "@/components/ncaia/AboutSection";
import VisionSection from "@/components/ncaia/VisionSection";
import SponsorsSection from "@/components/ncaia/SponsorsSection";
import Footer from "@/components/ncaia/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ReliefCampaignBanner />
      <AboutSection />
      <VisionSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}
