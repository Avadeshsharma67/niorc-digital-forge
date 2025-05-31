
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2, Award, TrendingUp } from 'lucide-react';

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
      text: 'Niorc transformed our entire digital infrastructure. Their AI automation solutions reduced our processing time by 80% and significantly improved our operational efficiency.',
      metrics: { improvement: '80%', category: 'Process Efficiency' },
      industry: 'Technology'
    },
    {
      name: 'Michael Chen',
      position: 'CEO, InnovateLabs',
      company: 'InnovateLabs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The mobile app development team at Niorc exceeded our expectations. They delivered a scalable, user-friendly solution that has become the backbone of our business operations.',
      metrics: { improvement: '300%', category: 'User Engagement' },
      industry: 'Software'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Their digital marketing strategies drove a 300% increase in our qualified leads. The team\'s analytical approach and trend insights are unmatched in the industry.',
      metrics: { improvement: '300%', category: 'Lead Generation' },
      industry: 'Marketing'
    },
    {
      name: 'David Park',
      position: 'VP of Engineering, DataFlow',
      company: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Niorc\'s cloud integration and API development services helped us scale from startup to enterprise. Their technical expertise is truly world-class.',
      metrics: { improvement: '500%', category: 'Scalability' },
      industry: 'Data & Analytics'
    },
    {
      name: 'Lisa Thompson',
      position: 'COO, RetailMax',
      company: 'RetailMax',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The RPA solutions implemented by Niorc automated 70% of our manual processes. The ROI was visible within the first quarter of implementation.',
      metrics: { improvement: '70%', category: 'Process Automation' },
      industry: 'Retail'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide('right');
    }, 8000);
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
    <section className="py-24 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQTFBMUEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek02IDVWMEgwdjVoNnpNMCA1aDVhNSA1IDAgMCAwLTUtNXY1em0wIDJWNkgwdjF6bTYgMzFWMjdIMHYxMWg2em0wLTE4VjloLTZWMGgtNnY2YTYgNiAwIDAgMCA2IDZoNnptNi0xM1YxMkgwdjVoMTJ6TTE2IDIwVjBoLTZ2MjNoNnptLTEyIDdIMHY5aDRWMjd6bTQtMjRhNCAxLjk5OSAwIDAgMS01IDJ2LTRINHpNMCA0M2g0djVIMHptNiA1aC01djZhNSA1IDAgMCAwIDUtNXptNC0xNWgtNHYxNWg0VjMzem0yLTE1SDh2MzFoNFYxOHptMiAwaDR2MzFoLTRWMTh6bTE0IDBoLTR2MzFoNFYxOHptMTAgMEgyOHYzMWgxMFYxOHptLTYtMThoLTR2MTNoNFYwem0tNiAwSDEwdjEzaDhWMHptMTYgMGgtNnYxM2g2VjB6TTAgNDloNHY1SDB6bTAgNmg0djVIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/8 to-blue-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Success <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses across industries, delivering measurable results and driving unprecedented growth through innovative digital solutions.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">250+%</div>
              <div className="text-gray-300 text-sm">Average ROI Increase</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Successful Projects</div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Enhanced Main testimonial */}
          <div 
            className="bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl p-8 lg:p-16 shadow-2xl max-w-5xl mx-auto relative overflow-hidden"
            style={{transform: 'perspective(1000px)'}}
          >
            {/* Enhanced decorative elements */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-blue-100 animate-float" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-100/15 to-pink-100/15 rounded-full blur-xl"></div>
            
            {/* Industry Badge */}
            <div className="absolute top-8 left-8">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {testimonials[currentSlide].industry}
              </span>
            </div>
            
            {/* Testimonial content with enhanced animations */}
            <div 
              ref={slidesRef}
              className={`relative z-10 transition-all duration-700 ${
                isAnimating ? (direction === 'right' ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10') : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Enhanced stars */}
              <div className="flex items-center justify-center mb-8 mt-8">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-yellow-400 fill-current animate-fade-in-scale mx-1" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Enhanced quote */}
              <blockquote className="text-2xl lg:text-3xl text-gray-700 text-center mb-10 leading-relaxed font-medium italic">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Metrics highlight */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center space-x-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="text-3xl font-bold text-blue-600">{testimonials[currentSlide].metrics.improvement}</div>
                      <div className="text-gray-600 font-medium">{testimonials[currentSlide].metrics.category}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced author info */}
              <div className="flex items-center justify-center space-x-6">
                <div className="relative">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-xl text-gray-900">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-blue-600 font-semibold text-lg">
                    {testimonials[currentSlide].position}
                  </div>
                  <div className="text-gray-500">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-xl hover:shadow-blue-500/30"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-xl hover:shadow-blue-500/30"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Enhanced dots indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide 
                    ? 'bg-blue-400 w-10 h-4 animate-glow-pulse shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-500 w-4 h-4 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced client showcase */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-10 text-lg font-medium">Trusted by industry leaders across multiple sectors</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="text-white text-lg font-semibold bg-white/8 backdrop-blur-sm p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-white/10 animate-fade-in-scale hover:bg-white/12"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">{testimonial.industry}</div>
                  <div className="font-bold">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-6">Join our growing list of satisfied clients and transform your business today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/case-studies"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold inline-flex items-center justify-center"
              >
                View All Case Studies
              </a>
              <a 
                href="/contact"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
