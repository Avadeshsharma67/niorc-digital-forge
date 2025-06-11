import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2, Award, TrendingUp, MapPin, Calendar } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  const slidesRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CTO, TechCorp Solutions',
      company: 'TechCorp Solutions',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Niorc Consulting transformed our entire digital infrastructure with their AI automation solutions. The RPA implementation reduced our processing time by 80% and significantly improved operational efficiency. Their strategic consulting approach helped us identify bottlenecks we never knew existed.',
      metrics: { improvement: '80%', category: 'Process Efficiency', timeline: '6 months' },
      industry: 'Technology',
      projectType: 'AI Automation & Digital Transformation',
      featured: true
    },
    {
      name: 'Priya Sharma',
      position: 'CEO, InnovateLabs',
      company: 'InnovateLabs',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The mobile app development team at Niorc exceeded our expectations. They delivered a scalable, user-friendly enterprise mobility solution that became the backbone of our operations. The project management transparency was exceptional with real-time updates.',
      metrics: { improvement: '300%', category: 'User Engagement', timeline: '4 months' },
      industry: 'Software',
      projectType: 'Enterprise Mobility Solutions',
      featured: true
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo International',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Their digital marketing strategies drove a 300% increase in qualified leads within 3 months. The combination of SEO optimization, paid advertising, and marketing automation delivered exceptional ROI. The team\'s analytical approach and trend insights are unmatched.',
      metrics: { improvement: '300%', category: 'Lead Generation', timeline: '3 months' },
      industry: 'Marketing',
      projectType: 'Digital Marketing & Growth',
      featured: false
    },
    {
      name: 'David Park',
      position: 'VP Engineering, DataFlow Systems',
      company: 'DataFlow Systems',
      location: 'Seoul, South Korea',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Niorc\'s full-stack development and cloud integration services helped us scale from startup to enterprise level. Their technical expertise in API development, database optimization, and cloud architecture is truly world-class. The quality engineering was impeccable.',
      metrics: { improvement: '500%', category: 'Scalability', timeline: '8 months' },
      industry: 'Data & Analytics',
      projectType: 'Full-Stack Product Engineering',
      featured: false
    },
    {
      name: 'Sarah Johnson',
      position: 'COO, RetailMax',
      company: 'RetailMax Corporation',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The RPA and business process automation solutions implemented by Niorc automated 70% of our manual processes. The ROI was visible within the first quarter. Their strategic consulting helped us identify automation opportunities across all departments.',
      metrics: { improvement: '70%', category: 'Process Automation', timeline: '5 months' },
      industry: 'Retail',
      projectType: 'Business Process Automation',
      featured: false
    },
    {
      name: 'Ahmed Al-Rashid',
      position: 'Digital Director, Emirates Tech',
      company: 'Emirates Tech Solutions',
      location: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding digital transformation project! Niorc delivered a complete enterprise solution with AI integration, mobile apps, and cloud infrastructure. Their project management approach with transparent tracking made the entire process smooth and predictable.',
      metrics: { improvement: '250%', category: 'Digital Efficiency', timeline: '10 months' },
      industry: 'Enterprise',
      projectType: 'Complete Digital Transformation',
      featured: true
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
            Client <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed 500+ businesses across industries, delivering measurable results 
            and driving unprecedented growth through innovative digital solutions and strategic consulting.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Successful Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300 text-sm">Countries Served</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">250%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Enhanced Main testimonial */}
          <div 
            className="bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl p-8 lg:p-16 shadow-2xl max-w-6xl mx-auto relative overflow-hidden"
            style={{transform: 'perspective(1000px)'}}
          >
            {/* Enhanced decorative elements */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-blue-100 animate-float" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-100/15 to-pink-100/15 rounded-full blur-xl"></div>
            
            {/* Industry & Project Type Badge */}
            <div className="absolute top-8 left-8 flex gap-3">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                {testimonials[currentSlide].industry}
              </span>
              {testimonials[currentSlide].featured && (
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </span>
              )}
            </div>
            
            {/* Testimonial content with enhanced animations */}
            <div 
              ref={slidesRef}
              className={`relative z-10 transition-all duration-700 ${
                isAnimating ? (direction === 'right' ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10') : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Enhanced stars */}
              <div className="flex items-center justify-center mb-8 mt-12">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-yellow-400 fill-current animate-fade-in-scale mx-1" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Project Type */}
              <div className="text-center mb-6">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentSlide].projectType}
                </span>
              </div>

              {/* Enhanced quote */}
              <blockquote className="text-2xl lg:text-3xl text-gray-700 text-center mb-10 leading-relaxed font-medium italic">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Metrics highlight */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-blue-600">{testimonials[currentSlide].metrics.improvement}</div>
                      <div className="text-gray-600 font-medium text-sm">{testimonials[currentSlide].metrics.category}</div>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">{testimonials[currentSlide].metrics.timeline}</div>
                      <div className="text-gray-600 font-medium text-sm">Timeline</div>
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
                  <div className="text-gray-700 font-medium">
                    {testimonials[currentSlide].company}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start mt-1">
                    <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-gray-500 text-sm">{testimonials[currentSlide].location}</span>
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
          <p className="text-gray-400 mb-10 text-lg font-medium">Trusted by industry leaders across multiple sectors globally</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="text-white text-sm font-semibold bg-white/8 backdrop-blur-sm p-4 rounded-xl transform hover:scale-105 transition-all duration-300 border border-white/10 animate-fade-in-scale hover:bg-white/12"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">{testimonial.industry}</div>
                  <div className="font-bold text-xs">{testimonial.company}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join our growing list of 500+ satisfied clients and transform your business with proven digital solutions. 
              Get a FREE consultation and see how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold inline-flex items-center justify-center"
              >
                🚀 Get FREE Consultation
              </a>
              <a 
                href="/case-studies"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold"
              >
                📊 View All Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;