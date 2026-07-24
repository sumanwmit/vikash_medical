import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, AlertCircle, X } from 'lucide-react';

interface FloatingButtonsProps {
  onOpenOrderModal: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showEmergencyBar, setShowEmergencyBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Emergency Floating Banner if user wants immediate access */}
      {showEmergencyBar && (
        <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-slate-900/95 text-white p-2.5 backdrop-blur-md border-t border-emerald-600/50 flex items-center justify-between shadow-2xl">
          <div className="flex items-center space-x-2 text-xs">
            <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold text-slate-100">Need Medicine Urgent?</span>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="tel:9931034598"
              className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call Now</span>
            </a>
            <button
              onClick={onOpenOrderModal}
              className="bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => setShowEmergencyBar(false)}
              className="text-slate-400 p-1"
              aria-label="Close emergency bar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Stack (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-slate-800 text-white p-3 shadow-lg hover:bg-slate-700 transition-all transform hover:scale-110 flex items-center justify-center border border-slate-700"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 text-emerald-400" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href="tel:9931034598"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal-600 hover:bg-teal-700 text-white p-3.5 shadow-xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white/20 group"
          title="Direct Call Vikash Medical Hall"
          aria-label="Call Direct"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call Store: 9931034598
          </span>
        </a>

        {/* Floating WhatsApp Order Button */}
        <button
          onClick={onOpenOrderModal}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white p-4 shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white/30 relative group"
          title="Order Medicines via WhatsApp"
          aria-label="Order via WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
          <MessageSquare className="w-7 h-7 fill-current" />
          
          <span className="absolute right-18 bg-slate-900 text-white text-xs font-bold px-3.5 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-emerald-500/30">
            💬 Quick WhatsApp Order
          </span>
        </button>
      </div>
    </>
  );
};
