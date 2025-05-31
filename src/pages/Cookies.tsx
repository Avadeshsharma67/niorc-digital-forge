import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';

const Cookies = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for basic website functionality",
      icon: <Shield className="w-5 h-5" />,
      required: true,
      enabled: true
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      icon: <BarChart className="w-5 h-5" />,
      required: false,
      enabled: analyticsEnabled
    },
    {
      name: "Marketing Cookies",
      description: "Used to track visitors for advertising purposes",
      icon: <Settings className="w-5 h-5" />,
      required: false,
      enabled: marketingEnabled
    }
  ];

  const handleSavePreferences = () => {
    // In a real implementation, this would save to localStorage or send to backend
    console.log('Cookie preferences saved:', {
      analytics: analyticsEnabled,
      marketing: marketingEnabled
    });
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn about how we use cookies and manage your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What are Cookies */}
          <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">What are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use both session cookies (which expire when you close your browser) and persistent cookies 
              (which remain on your device for a set period or until you delete them).
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-blue-400">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                        {type.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{type.name}</h3>
                        <p className="text-gray-400 text-sm">{type.description}</p>
                      </div>
                    </div>
                    {type.required ? (
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Required</span>
                    ) : (
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            if (type.name.includes('Analytics')) {
                              setAnalyticsEnabled(!analyticsEnabled);
                            } else if (type.name.includes('Marketing')) {
                              setMarketingEnabled(!marketingEnabled);
                            }
                          }}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            type.enabled ? 'bg-blue-600' : 'bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              type.enabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="mb-12 p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Manage Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-6">
              You can control and delete cookies through your browser settings. You can also use the controls above 
              to manage your preferences for this website.
            </p>
            <button
              onClick={handleSavePreferences}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold transform hover:scale-105"
            >
              Save Preferences
            </button>
          </div>

          {/* Browser Settings */}
          <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Browser Cookie Settings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Popular Browsers</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>• Firefox: Options → Privacy & Security → Cookies</li>
                  <li>• Safari: Preferences → Privacy → Cookies</li>
                  <li>• Edge: Settings → Privacy → Cookies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Important Note</h3>
                <p className="text-gray-300 text-sm">
                  Disabling certain cookies may affect the functionality of our website. 
                  Essential cookies cannot be disabled as they are required for basic website operation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies, please contact us at hello@niorc.in.net
            </p>
            <p className="text-sm text-gray-400">
              This cookie policy was last updated on December 15, 2024.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
