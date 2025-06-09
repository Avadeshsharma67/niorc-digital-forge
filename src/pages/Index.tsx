
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
        title="Niorc Consulting - Leading Digital Transformation & AI Automation Services in India"
        description="Transform your business with Niorc Consulting's premium digital transformation, AI automation, and enterprise technology solutions. Expert consulting services for modern enterprises in Delhi, India."
        keywords="Niorc Consulting, digital transformation Delhi, AI automation India, enterprise technology consulting, business digital solutions, technology consulting services Delhi, enterprise mobility solutions India, digital transformation company"
        type="website"
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
