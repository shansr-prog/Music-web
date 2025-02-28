import React, { useState } from 'react';
import { X, Mail, Check } from 'lucide-react';

interface NewsletterModalProps {
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setError('');
    }, 500);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-[#181818] rounded-xl max-w-md w-full relative overflow-hidden"
        style={{ 
          boxShadow: '0 0 40px rgba(29, 185, 84, 0.3)',
          animation: 'modalFadeIn 300ms ease-out forwards'
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X size={20} />
        </button>
        
        <div className="p-6">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1DB954]/20 mb-4">
                  <Mail size={28} className="text-[#1DB954]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400 text-sm">
                  Get weekly updates on new releases, exclusive content, and personalized recommendations.
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-[#2A2A2A] text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all duration-300"
                  />
                  {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 rounded border-gray-600 text-[#1DB954] focus:ring-[#1DB954]"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-400">
                    I agree to receive marketing emails and can unsubscribe anytime.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#1DB954] hover:bg-[#1DB954]/80 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1DB954]/20 mb-4">
                <Check size={28} className="text-[#1DB954]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-400 text-sm mb-6">
                You're now on the list. We've sent a confirmation email to your inbox.
              </p>
              <button
                onClick={onClose}
                className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NewsletterModal;