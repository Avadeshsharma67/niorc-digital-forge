
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import PartnersSection from '../components/PartnersSection';
import CtaSection from '../components/CtaSection';
import LeadCapture from '../components/LeadCapture';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Main content sections */}
      <div data-section="about">
        <AboutSection />
      </div>
      
      <div data-section="services">
        <ServicesSection />
      </div>
      
      <ProcessSection />
      
      <CaseStudiesSection />
      
      <TestimonialsSlider />
      
      <PartnersSection />
      
      <CtaSection />
      
      <LeadCapture />
      
      <Footer />
    </div>
  );
};

export default Index;
