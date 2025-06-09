
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ClientBoard from '../components/ClientBoard';
import ResaleSection from '../components/ResaleSection';
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
        title="Niorc Consulting - Full-Stack Development & AI Integration Services | Strategic Consulting First"
        description="Beyond design-only agencies. Complete full-stack solutions with AI integration, strategic consulting, and end-to-end development. Design + Development bundles, client project boards, and resale opportunities."
        keywords="Niorc Consulting, full-stack development India, AI integration services, strategic consulting, design development bundle, client project board, white-label solutions, consulting-first approach, enterprise technology Delhi"
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
        <ClientBoard />
      </div>
      <div className="animate-on-scroll reveal">
        <ResaleSection />
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
