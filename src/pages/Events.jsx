import React from 'react';
import Navbar from '@/components/ncaia/Navbar';
import EventGallerySection from '@/components/ncaia/EventGallerySection';
import Footer from '@/components/ncaia/Footer';
import { eventsPageContent } from '@/content/eventsContent';

export default function Events() {
  const { header, events } = eventsPageContent;

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
      {events.map((event) => (
        <EventGallerySection key={event.id} event={event} />
      ))}
      <Footer />
    </div>
  );
}