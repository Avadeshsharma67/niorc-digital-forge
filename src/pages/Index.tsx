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
        title="Niorc Consulting - Complete Digital Transformation & Full-Stack Development Services"
        description="Transform your business with Niorc Consulting's complete digital solutions. We provide strategic consulting, full-stack development, AI integration, enterprise mobility, and digital marketing services. Get your custom project board, design + development bundles, and explore white-label resale opportunities. Based in New Delhi, India, serving clients globally."
        keywords="Niorc Consulting, digital transformation, full-stack development, AI integration, strategic consulting, enterprise mobility, product engineering, quality engineering, digital marketing, custom development, white-label solutions, project management, New Delhi India, global technology consulting"
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