
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ClientBoard from '../components/ClientBoard';
import ResaleSection from '../components/ResaleSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ClientSuccessStories from '../components/ClientSuccessStories';
import LeadCapture from '../components/LeadCapture';
import Footer from '../components/Footer';
import VisitorCounter from '../components/VisitorCounter';
import ParticleBackground from '../components/ParticleBackground';
import MorphingBlobs from '../components/MorphingBlobs';
import ScrollAnimations from '../components/ScrollAnimations';
import SEOHead from '../components/SEOHead';
import InternalLinks from '../components/InternalLinks';
import AIChat from '../components/AIChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <SEOHead 
        title="Niorc Consulting - #1 Digital Transformation & AI Automation Company India | 500+ Successful Projects"
        description="🚀 Leading Digital Transformation Company in India with 500+ successful projects! Expert AI automation, full-stack development, enterprise mobility & strategic consulting. 98% client satisfaction. Get FREE consultation today! Serving 25+ countries globally."
        keywords="digital transformation company India, AI automation services, full-stack development company, enterprise mobility solutions, digital marketing agency India, business automation, cloud solutions, mobile app development, web development services, strategic consulting, product engineering, quality engineering, New Delhi technology company, best digital transformation services, AI integration company, RPA automation, custom software development, enterprise solutions, digital innovation, technology consulting firm, Niorc Consulting"
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
      
      {/* Main content sections with proper spacing and SEO optimization */}
      <main>
        <section id="services" className="animate-on-scroll reveal" aria-label="Digital Transformation Services">
          <ServicesSection />
        </section>
        
        <section id="success-stories" className="animate-on-scroll reveal" aria-label="Client Success Stories">
          <ClientSuccessStories />
        </section>
        
        <section id="project-board" className="animate-on-scroll reveal" aria-label="Transparent Project Management">
          <ClientBoard />
        </section>
        
        <section id="resale" className="animate-on-scroll reveal" aria-label="White-Label Solutions">
          <ResaleSection />
        </section>
        
        <section id="testimonials" className="animate-on-scroll reveal" aria-label="Client Testimonials">
          <TestimonialsSlider />
        </section>
        
        {/* Internal linking for SEO */}
        <InternalLinks currentPage="/" />
        
        <section id="contact" className="animate-on-scroll reveal" aria-label="Get FREE Consultation">
          <LeadCapture />
        </section>
      </main>
      
      {/* Enhanced AI Chat Assistant */}
      <AIChat />
      
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
