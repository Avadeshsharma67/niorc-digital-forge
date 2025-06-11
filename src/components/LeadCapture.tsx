import React, { useState } from 'react';
import { Mail, ArrowRight, Users, Palette, Trello, Phone, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    
    try {
      console.log('Submitting newsletter signup:', { name, email, phone });
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name,
          email,
          company: '',
          message: `FREE Consultation Request from ${name}. Phone: ${phone || 'Not provided'}. Please schedule a consultation call and add to priority mailing list.`
        }
      });

      if (error) {
        console.error('Newsletter signup error:', error);
        throw error;
      }

      console.log('Newsletter signup successful:', data);
      setIsSubmitted(true);
      toast({
        title: "🚀 Success!",
        description: "Thank you for requesting a FREE consultation! We'll contact you within 24 hours with a custom strategy.",
      });
    } catch (error: any) {
      console.error('Newsletter signup submission error:', error);
      toast({
        title: "Error",
        description: "There was an error with your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceClick = (service: string) => {
    navigate(`/contact?service=${encodeURIComponent(service)}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced trust indicators */}
            <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">#1 in India</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">500+ Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-blue-300" />
                <span className="text-white text-sm font-medium">98% Satisfaction</span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              🚀 Ready for Digital Transformation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ successful companies who chose strategic consulting + full-stack development over design-only services. 
              <strong className="text-white"> Get your FREE consultation and custom strategy today!</strong>
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
                <div className="flex flex-col gap-4 mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name *"
                      className="w-full px-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900 font-medium"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email *"
                      className="w-full pl-10 pr-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900 font-medium"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number (optional)"
                      className="w-full pl-10 pr-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900 font-medium"
                      disabled={isSubmitting}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white hover:bg-gray-100 disabled:bg-gray-300 text-blue-700 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:transform-none shadow-lg disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        🚀 Get FREE Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-blue-200 text-sm">
                  ✅ No spam, unsubscribe anytime ✅ 24-hour response guarantee ✅ FREE strategy session
                </p>
              </form>
            ) : (
              <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">🎉 Consultation Requested!</h3>
                <p className="text-blue-200 mb-4">
                  Thank you! Our digital transformation experts will contact you within 24 hours with a custom strategy for your business.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white text-sm">
                    <strong>What's Next:</strong><br />
                    ✅ Strategy call within 24 hours<br />
                    ✅ Custom digital transformation roadmap<br />
                    ✅ FREE project estimation
                  </p>
                </div>
              </div>
            )}

            {/* Enhanced CTAs with new services */}
            <div className="grid md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Users className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Strategic Consulting</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Business analysis & technology strategy before development
                </p>
                <button 
                  onClick={() => handleServiceClick('Strategic Consulting')}
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  Start Strategy →
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Palette className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Complete Solution</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Design + Development + Deployment in one package
                </p>
                <button 
                  onClick={() => handleServiceClick('Design + Development Bundle')}
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  Get Bundle →
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Trello className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Project Transparency</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Real-time tracking with milestone updates & communication
                </p>
                <button 
                  onClick={() => handleServiceClick('Client Project Board')}
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  See Demo →
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <ArrowRight className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">Custom Quote</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Tailored pricing based on your specific requirements
                </p>
                <button 
                  onClick={() => handleServiceClick('Custom Quote')}
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  Get Quote →
                </button>
              </div>
            </div>

            {/* Additional trust signals */}
            <div className="mt-12 text-center">
              <p className="text-blue-200 mb-4">🏆 Trusted by 500+ companies worldwide</p>
              <div className="flex justify-center items-center space-x-6 text-blue-300 text-sm">
                <span>⚡ 24hr Response</span>
                <span>🌍 Global Delivery</span>
                <span>🔒 ISO Certified</span>
                <span>📞 FREE Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;