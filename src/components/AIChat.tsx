import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, Zap, Users, Award } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm your Niorc AI assistant. I can help you with digital transformation, AI automation, full-stack development, and more. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "🚀 What digital transformation services do you offer?",
    "💰 How much does AI automation cost?",
    "📅 Can I schedule a FREE consultation?",
    "⚡ What's your development process?",
    "📱 Do you build mobile apps?",
    "🤖 Tell me about AI integration services"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you offer') || message.includes('digital transformation')) {
      return "🚀 We're India's #1 digital transformation company! Our services include:\n\n✅ AI Automation & RPA\n✅ Full-Stack Development\n✅ Enterprise Mobility\n✅ Strategic Consulting\n✅ Digital Marketing\n✅ Quality Engineering\n\nWe've completed 500+ projects with 98% client satisfaction. Which service interests you most?";
    }
    
    if (message.includes('cost') || message.includes('price') || message.includes('pricing') || message.includes('much')) {
      return "💰 Our pricing is customized based on your specific needs and project scope. We offer:\n\n📋 FREE consultation & strategy session\n💼 Fixed-price project bundles\n⏰ Flexible hourly rates\n📊 Transparent project tracking\n\nWould you like to schedule a FREE consultation to get a custom quote? We guarantee a response within 24 hours!";
    }
    
    if (message.includes('demo') || message.includes('meeting') || message.includes('consultation') || message.includes('schedule')) {
      return "📅 Absolutely! I'd love to help you schedule a FREE consultation with our digital transformation experts.\n\n🎯 What you'll get:\n✅ 30-minute strategy session\n✅ Custom digital roadmap\n✅ Project estimation\n✅ Technology recommendations\n\nClick 'Get FREE Consultation' button on our website or call us at +91 6367987334. What's the best time to reach you?";
    }
    
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology')) {
      return "⚡ Our proven 5-step process ensures success:\n\n1️⃣ **Discovery & Strategy** - Business analysis & planning\n2️⃣ **Design & Architecture** - UI/UX and technical design\n3️⃣ **Development & Integration** - Agile development with AI\n4️⃣ **Testing & Quality Assurance** - Comprehensive QA\n5️⃣ **Launch & Support** - Deployment & ongoing support\n\n📊 You get real-time project tracking and transparent communication throughout. Would you like to see our project management demo?";
    }

    if (message.includes('mobile') || message.includes('app') || message.includes('android') || message.includes('ios')) {
      return "📱 Yes! We're experts in enterprise mobility solutions:\n\n✅ Native iOS & Android apps\n✅ Cross-platform development\n✅ Enterprise mobility solutions\n✅ API integration & backend\n✅ Cloud synchronization\n\nWe've built 100+ mobile apps for enterprises. Our mobile solutions integrate seamlessly with your existing systems. Want to discuss your mobile app requirements?";
    }

    if (message.includes('ai') || message.includes('automation') || message.includes('rpa') || message.includes('artificial intelligence')) {
      return "🤖 We're AI automation specialists! Our AI services include:\n\n🧠 **AI Integration** - Machine learning models\n⚙️ **RPA Implementation** - Process automation\n📊 **Intelligent Analytics** - Data insights\n🔄 **Workflow Automation** - Business processes\n💡 **Custom AI Solutions** - Tailored to your needs\n\nOur AI solutions have helped clients reduce costs by 60% and increase efficiency by 10x. Ready to automate your business?";
    }

    if (message.includes('team') || message.includes('company') || message.includes('about')) {
      return "🏆 About Niorc Consulting:\n\n✨ #1 Digital Transformation Company in India\n📈 500+ successful projects completed\n😊 98% client satisfaction rate\n🌍 Serving 25+ countries globally\n🏅 ISO 27001 certified\n⚡ 24/7 support & 24hr response guarantee\n\nWe're not just another agency - we're your strategic technology partner focused on delivering real business results!";
    }
    
    return "🤔 That's a great question! I'd recommend speaking with one of our digital transformation specialists who can provide detailed information tailored to your specific needs.\n\n📞 **Quick Options:**\n✅ Schedule FREE consultation\n✅ Call us: +91 6367987334\n✅ Email: hello@niorc.in.net\n\nWould you like me to connect you with our team for a personalized discussion?";
  };

  const handleQuickQuestion = (question) => {
    const newMessage = {
      id: messages.length + 1,
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(question),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Enhanced Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 animate-pulse'
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-7 h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
        )}
      </button>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Niorc AI Assistant</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-blue-100">Online • Instant Response</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Award className="w-4 h-4 text-yellow-300" />
              <span className="text-xs">#1 in India</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  {message.isBot && (
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Bot className="w-3 h-3 mr-1" />
                      <span>AI Assistant</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Enhanced Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center font-medium">💡 Quick questions to get started:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left p-3 text-sm text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-200 transition-all duration-200 hover:shadow-sm hover:border-blue-300"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about our digital transformation services..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
              <Zap className="w-3 h-3 mr-1" />
              <span>Powered by Niorc AI • 24/7 Support</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;