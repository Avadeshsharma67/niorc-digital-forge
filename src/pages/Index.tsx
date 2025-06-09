
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
        title="Niorc Consulting - Full-Stack Development & AI Integration Services"
        description="Transform your business with complete full-stack solutions. Beyond design-only agencies - we provide strategic consulting, AI integration, custom development, and end-to-end digital transformation. Get your Design + Development bundle, client project board access, and explore our resale opportunities."
        keywords="Niorc Consulting, full-stack development, AI integration, strategic consulting, design development bundle, client project board, resale solutions, digital transformation, enterprise technology, consulting-first approach, custom development India"
        type="website"
      />
      
      {/* Optimized background effects */}
      <ParticleBackground />
      <MorphingBlobs />
      <ScrollAnimations />
      
      {/* Navigation with improved accessibility */}
      <Navigation />
      
      {/* Hero section with enhanced CTAs */}
      <Hero />
      
      {/* Main content sections with proper spacing */}
      <main>
        <section id="services" className="animate-on-scroll reveal" aria-label="Our Services">
          <ServicesSection />
        </section>
        
        <section id="project-board" className="animate-on-scroll reveal" aria-label="Client Project Board">
          <ClientBoard />
        </section>
        
        <section id="resale" className="animate-on-scroll reveal" aria-label="Resale Solutions">
          <ResaleSection />
        </section>
        
        <section id="testimonials" className="animate-on-scroll reveal" aria-label="Client Testimonials">
          <TestimonialsSlider />
        </section>
        
        {/* Internal linking for SEO */}
        <InternalLinks currentPage="/" />
        
        <section id="contact" className="animate-on-scroll reveal" aria-label="Get Started">
          <LeadCapture />
        </section>
      </main>
      
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
