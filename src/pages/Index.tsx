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
import SEOHead from '../components/SEOHead';
import InternalLinks from '../components/InternalLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <SEOHead 
        title="Niorc Consulting | Premium Digital Transformation & AI Automation Services"
        description="Niorc Consulting delivers premium digital transformation, AI automation, enterprise mobility, and product engineering services. Transform your business with expert technology consulting and innovative digital solutions for modern enterprises."
        keywords="Niorc Consulting, digital transformation, AI automation, enterprise technology, business consulting, digital solutions, technology consulting, enterprise mobility, product engineering, quality engineering, digital marketing, India, Delhi"
      />
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
      <InternalLinks currentPage="/" />
      <div className="animate-on-scroll reveal">
        <LeadCapture />
      </div>
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
