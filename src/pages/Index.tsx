
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import LeadCapture from '../components/LeadCapture';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServicesSection />
      <TestimonialsSlider />
      <LeadCapture />
      <Footer />
    </div>
  );
};

export default Index;
