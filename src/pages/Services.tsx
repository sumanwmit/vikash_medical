import React from 'react';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import {
  Pill,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Phone,
  Activity,
  Scissors,
  Baby,
  HeartPulse
} from 'lucide-react';

interface ServicesProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export default function Services({ onOpenOrderModal }: ServicesProps) {
  return (
    <>
      <SEO
        title="Services & Medicine Categories - Vikash Medical Hall"
        description="Explore complete pharmacy services & stock categories at Vikash Medical Hall Jehanabad: Prescription Medicines, OTC, Health Devices, Baby Care, Surgical Items & Home Nursing Care."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white py-16 sm:py-20 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
            <Pill className="w-4 h-4 text-emerald-400" />
            <span>GENUINE MEDICINES & HEALTHCARE PRODUCTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Services & Product Categories
          </h1>
          <p className="text-emerald-200 text-base sm:text-lg max-w-2xl mx-auto">
            Explore 100% genuine pharmaceutical range available at our Kako Road store or delivered via WhatsApp in Jehanabad.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Live Medicine Stock Checker */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker
            onSelectMedicineForOrder={(med) => onOpenOrderModal(med)}
          />
        </div>
      </section>

      {/* Detailed Service Categories */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Complete Category Breakdown
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Every product line is maintained with high quality standards, clear batch tags, and uncompromised storage.
            </p>
          </div>

          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content Column */}
                <div className={`lg:col-span-7 space-y-4 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {service.highlightBadge && (
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      {service.highlightBadge}
                    </span>
                  )}

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                      Key Items & Coverage:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenOrderModal(service.title)}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md inline-flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{service.ctaText}</span>
                    </button>

                    <a
                      href="tel:9931034598"
                      className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs inline-flex items-center space-x-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquire Stock</span>
                    </a>
                  </div>
                </div>

                {/* Image Column */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 group">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Emergency Prescription Consultation Callout */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            Looking for a specific prescription brand not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            We source rare ethical drugs from pharmaceutical distributors within 24 hours. Send us your doctor prescription image directly via WhatsApp.
          </p>
          <button
            onClick={() => onOpenOrderModal()}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg inline-flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Send Prescription via WhatsApp</span>
          </button>
        </div>
      </section>
    </>
  );
}
