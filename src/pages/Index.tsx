
import React, { Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
import HeroOptimized from '../components/HeroOptimized';
import ServicesSectionOptimized from '../components/ServicesSectionOptimized';
import Footer from '../components/Footer';
import VisitorCounter from '../components/VisitorCounter';
import ScrollAnimations from '../components/ScrollAnimations';
import SEOHead from '../components/SEOHead';

// Lazy load non-critical components
const ClientBoard = lazy(() => import('../components/ClientBoard'));
const TestimonialsSlider = lazy(() => import('../components/TestimonialsSlider'));
const LeadCapture = lazy(() => import('../components/LeadCapture'));
const InternalLinks = lazy(() => import('../components/InternalLinks'));
const AIChat = lazy(() => import('../components/AIChat'));

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <SEOHead 
        title="Niorc Consulting - #1 Digital Transformation & AI Automation Company India | 500+ Successful Projects"
        description="🚀 Leading Digital Transformation Company in India with 500+ successful projects! Expert AI automation, full-stack development, enterprise mobility & strategic consulting. 98% client satisfaction. Get FREE consultation today! Serving 25+ countries globally."
        keywords="digital transformation company India, AI automation services, full-stack development company, enterprise mobility solutions, digital marketing agency India, business automation, cloud solutions, mobile app development, web development services, strategic consulting, product engineering, quality engineering, New Delhi technology company, best digital transformation services, AI integration company, RPA automation, custom software development, enterprise solutions, digital innovation, technology consulting firm, Niorc Consulting"
        type="website"
      />
      
      {/* Essential scroll animations */}
      <ScrollAnimations />
      
      {/* Navigation with improved accessibility */}
      <Navigation />
      
      {/* Hero section with enhanced CTAs */}
      <HeroOptimized />
      
      {/* Main content sections with proper spacing and SEO optimization */}
      <main>
        <section id="services" className="animate-on-scroll reveal" aria-label="Digital Transformation Services">
          <ServicesSectionOptimized />
        </section>
        
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }>
          <section id="project-board" className="animate-on-scroll reveal" aria-label="Transparent Project Management">
            <ClientBoard />
          </section>
          
          <section id="testimonials" className="animate-on-scroll reveal" aria-label="Client Success Stories">
            <TestimonialsSlider />
          </section>
          
          {/* Internal linking for SEO */}
          <InternalLinks currentPage="/" />
          
          <section id="contact" className="animate-on-scroll reveal" aria-label="Get FREE Consultation">
            <LeadCapture />
          </section>
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        {/* Enhanced AI Chat Assistant */}
        <AIChat />
      </Suspense>
      
      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Index;
