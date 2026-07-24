import React from 'react';
import { Star, ShieldCheck, MapPin, ExternalLink, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-3 border border-emerald-300 dark:border-emerald-800">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>COMMUNITY TRUST & REVIEWS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Local Patients & Families Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Serving families in Jehanabad and surrounding rural areas with transparent pricing, authentic drugs, and friendly counter service.
          </p>
        </div>

        {/* Verified Community Feedback Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              "Genuine prescription medicines for my elderly parents' diabetes and blood pressure are always in stock here. Located right near PNB Bank Kako Road."
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-slate-200">Local Patient</span>
              <span className="text-emerald-600 font-semibold">Verified Visitor</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              "Ordered insulin penfills via WhatsApp. They checked the cold pack and delivered to my doorstep within an hour in Jehanabad. Highly recommended medical store."
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-slate-200">Local Resident</span>
              <span className="text-emerald-600 font-semibold">WhatsApp Order</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              "Helpful staff who explain dosage clearly. They also have good digital BP monitors and baby formula products at fair MRP discounts."
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-slate-200">Jehanabad Resident</span>
              <span className="text-emerald-600 font-semibold">Counter Customer</span>
            </div>
          </div>

        </div>

        {/* Google Business Profile Review Callout */}
        <div className="mt-10 bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Visited Vikash Medical Hall recently?</h4>
            <p className="text-xs sm:text-sm text-emerald-200">
              Help fellow citizens in Jehanabad find genuine medicines by sharing your experience on Google Maps!
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Kako+Rd,+near+P+N+B+BANK,+Jehanabad,+Bihar+804408"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition-colors shrink-0 flex items-center space-x-2 shadow-lg"
          >
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Write a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
          </a>
        </div>

      </div>
    </section>
  );
};
