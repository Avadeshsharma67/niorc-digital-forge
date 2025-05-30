
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    
    try {
      console.log('Submitting newsletter signup:', { name, email });
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name,
          email,
          company: '',
          message: `Newsletter signup from ${name}. Please add to mailing list.`
        }
      });

      if (error) {
        console.error('Newsletter signup error:', error);
        throw error;
      }

      console.log('Newsletter signup successful:', data);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter. We'll be in touch soon!",
      });
    } catch (error: any) {
      console.error('Newsletter signup submission error:', error);
      toast({
        title: "Error",
        description: "There was an error with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  const handleDemoClick = () => {
    navigate('/contact');
  };

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 1000+ companies already leveraging our digital solutions. Get exclusive insights, 
              industry trends, and special offers delivered to your inbox.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col gap-4 mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white hover:bg-gray-100 disabled:bg-gray-300 text-blue-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:transform-none shadow-lg disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin mr-2"></div>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Get Started
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-blue-200 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Welcome aboard!</h3>
                <p className="text-blue-200">
                  Check your email for a welcome message and next steps to get started with Niorc.
                </p>
              </div>
            )}

            {/* Additional CTAs */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Get a 30-minute strategy session with our experts
                </p>
                <button 
                  onClick={handleConsultationClick}
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  Schedule Now →
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Product Demo</h3>
                <p className="text-blue-200 text-sm mb-4">
                  See our solutions in action with a live demo
                </p>
                <button 
                  onClick={handleDemoClick}
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  Watch Demo →
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Custom Quote</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Get pricing tailored to your specific needs
                </p>
                <button 
                  onClick={handleQuoteClick}
                  className="text-white font-semibold hover:text-blue-200 transition-colors"
                >
                  Get Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
