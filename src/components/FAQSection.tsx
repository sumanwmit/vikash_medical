import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQSectionProps {
  limit?: number;
  onOpenOrderModal?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ limit, onOpenOrderModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = limit ? faqData.slice(0, limit) : faqData;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-3 border border-emerald-300 dark:border-emerald-800">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PATIENT & CUSTOMER FAQS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Get quick answers regarding medicine authenticity, WhatsApp orders, store timings, and home delivery in Jehanabad.
          </p>
        </div>

        <div className="space-y-3">
          {displayedFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 text-left font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center justify-between gap-4 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-emerald-50 dark:bg-emerald-950/40 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/80">
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Have a question about a specific medicine brand or dosage?
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Our qualified pharmacist is available to answer your questions directly on WhatsApp or over the phone.
          </p>
          <button
            onClick={() => {
              if (onOpenOrderModal) onOpenOrderModal();
              else window.open('https://wa.me/919931034598?text=Hello%20Vikash%20Medical%20Hall,%20I%20have%20a%20question.', '_blank');
            }}
            className="mt-4 inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Pharmacist on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
