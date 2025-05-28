
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechCorp',
      company: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Niorc transformed our entire digital infrastructure. Their AI automation solutions reduced our processing time by 80% and significantly improved our operational efficiency.'
    },
    {
      name: 'Michael Chen',
      position: 'CEO, InnovateLabs',
      company: 'InnovateLabs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The mobile app development team at Niorc exceeded our expectations. They delivered a scalable, user-friendly solution that has become the backbone of our business operations.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Their digital marketing strategies drove a 300% increase in our qualified leads. The team\'s analytical approach and trend insights are unmatched in the industry.'
    },
    {
      name: 'David Park',
      position: 'VP of Engineering, DataFlow',
      company: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Niorc\'s cloud integration and API development services helped us scale from startup to enterprise. Their technical expertise is truly world-class.'
    },
    {
      name: 'Lisa Thompson',
      position: 'COO, RetailMax',
      company: 'RetailMax',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The RPA solutions implemented by Niorc automated 70% of our manual processes. The ROI was visible within the first quarter of implementation.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Success <span className="text-blue-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and achieve remarkable growth through our digital solutions.
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="text-center">
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-blue-600 font-semibold">
                    {testimonials[currentSlide].position}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8 text-lg">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-white text-lg font-semibold">
                {testimonial.company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
