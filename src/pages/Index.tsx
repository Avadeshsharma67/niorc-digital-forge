
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import LeadCapture from '../components/LeadCapture';
import Footer from '../components/Footer';
import Background3D from '../components/3d/Background3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative">
      <Background3D />
      <Navigation />
      <Hero />
      <div data-section="services">
        <ServicesSection />
      </div>
      <TestimonialsSlider />
      <LeadCapture />
      <Footer />
    </div>
  );
};

export default Index;
