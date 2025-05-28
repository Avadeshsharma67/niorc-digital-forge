
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  const slidesRef = useRef<HTMLDivElement>(null);

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
      changeSlide('right');
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (newDirection: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newDirection);
    
    setTimeout(() => {
      if (newDirection === 'right') {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  const nextSlide = () => changeSlide('right');
  const prevSlide = () => changeSlide('left');

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQTFBMUEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek02IDVWMEgwdjVoNnpNMCA1aDVhNSA1IDAgMCAwLTUtNXY1em0wIDJWNkgwdjF6bTYgMzFWMjdIMHYxMWg2em0wLTE4VjloLTZWMGgtNnY2YTYgNiAwIDAgMCA2IDZoNnptNi0xM1YxMkgwdjVoMTJ6TTE2IDIwVjBoLTZ2MjNoNnptLTEyIDdIMHY5aDRWMjd6bTQtMjRhNCAxLjk5OSAwIDAgMS01IDJ2LTRINHpNMCA0M2g0djVIMHptNiA1aC01djZhNSA1IDAgMCAwIDUtNXptNC0xNWgtNHYxNWg0VjMzem0yLTE1SDh2MzFoNFYxOHptMiAwaDR2MzFoLTRWMTh6bTE0IDBoLTR2MzFoNFYxOHptMTAgMEgyOHYzMWgxMFYxOHptLTYtMThoLTR2MTNoNFYwem0tNiAwSDEwdjEzaDhWMHptMTYgMGgtNnYxM2g2VjB6TTAgNDloNHY1SDB6bTAgNmg0djVIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/5 to-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Success <span className="text-blue-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and achieve remarkable growth through our digital solutions.
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial with enhanced animations */}
          <div 
            className="bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
            style={{transform: 'perspective(1000px)'}}
          >
            {/* Enhanced quote icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100 animate-float" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-r from-blue-100/30 to-cyan-100/30 rounded-full blur-xl"></div>
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-xl"></div>
            
            {/* Testimonial content with sliding animation */}
            <div 
              ref={slidesRef}
              className={`relative z-10 transition-all duration-500 ${
                isAnimating ? (direction === 'right' ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10') : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Stars with animation */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-fade-in-scale" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Enhanced testimonial quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium italic">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Author info with enhanced styling */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
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

          {/* Enhanced navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg hover:shadow-blue-500/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg hover:shadow-blue-500/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Enhanced dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide 
                    ? 'bg-blue-400 w-8 h-3 animate-glow-pulse' 
                    : 'bg-gray-600 hover:bg-gray-500 w-3 h-3 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos with enhanced animations */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8 text-lg">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="text-white text-lg font-semibold bg-white/5 backdrop-blur-sm p-4 rounded-xl transform hover:scale-105 transition-all duration-300 border border-white/10 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
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
