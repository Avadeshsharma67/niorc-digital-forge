
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter. We'll be in touch soon!",
      });
    }, 500);
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-gray-900 cursor-text"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-100 text-blue-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
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
                  onClick={() => window.location.href = '/contact'}
                  className="text-white font-semibold hover:text-blue-200 transition-colors cursor-pointer"
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
                  onClick={() => window.location.href = '/contact'}
                  className="text-white font-semibold hover:text-blue-200 transition-colors cursor-pointer"
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
                  onClick={() => window.location.href = '/contact'}
                  className="text-white font-semibold hover:text-blue-200 transition-colors cursor-pointer"
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
