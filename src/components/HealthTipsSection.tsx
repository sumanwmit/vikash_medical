import React from 'react';
import { healthTipsData } from '../data/healthTipsData';
import { Clock, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

interface HealthTipsSectionProps {
  limit?: number;
}

export const HealthTipsSection: React.FC<HealthTipsSectionProps> = ({ limit }) => {
  const displayedTips = limit ? healthTipsData.slice(0, limit) : healthTipsData;

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2 border border-emerald-300 dark:border-emerald-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PHARMACIST ADVICE & WELLNESS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Latest Health & Medication Tips
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Practical guides on medicine storage, chronic disease control, and home healthcare.
            </p>
          </div>
        </div>

        {/* Tips Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedTips.map(tip => (
            <article
              key={tip.id}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[11px] font-bold px-3 py-1 rounded-full">
                  {tip.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tip.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{tip.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {tip.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2 line-clamp-3">
                    {tip.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>By {tip.author}</span>
                  <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
