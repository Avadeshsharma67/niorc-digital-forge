
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import LeadCapture from '../components/LeadCapture';
import Footer from '../components/Footer';
import VisitorCounter from '../components/VisitorCounter';
import ParticleBackground from '../components/ParticleBackground';
import MorphingBlobs from '../components/MorphingBlobs';
import ScrollAnimations from '../components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ParticleBackground />
      <MorphingBlobs />
      <ScrollAnimations />
      <Navigation />
      <Hero />
      <div data-section="services" className="animate-on-scroll reveal">
        <ServicesSection />
      </div>
      <div className="animate-on-scroll reveal">
        <TestimonialsSlider />
      </div>
      <div className="animate-on-scroll reveal">
        <LeadCapture />
      </div>
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
