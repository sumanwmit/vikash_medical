import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { HeroSection } from '../components/HeroSection';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { servicesData } from '../data/servicesData';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { HealthTipsSection } from '../components/HealthTipsSection';
import {
  ShieldCheck,
  Clock,
  Award,
  Truck,
  HeartPulse,
  Pill,
  ChevronRight,
  MessageSquare,
  Phone,
  CheckCircle2,
  Mail,
  Send,
  Sparkles,
  MapPin,
  Building2
} from 'lucide-react';

interface HomeProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export default function Home({ onOpenOrderModal }: HomeProps) {
  const [emailSub, setEmailSub] = React.useState('');
  const [subSuccess, setSubSuccess] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub) {
      setSubSuccess(true);
      setTimeout(() => setSubSuccess(false), 4000);
      setEmailSub('');
    }
  };

  return (
    <>
      <SEO
        title="Home - Trusted Pharmacy in Jehanabad"
        description="Vikash Medical Hall is Jehanabad's leading pharmacy near PNB Bank, Kako Road. Offering 100% genuine medicines, medical equipment, baby care & quick WhatsApp orders."
      />

      {/* 1. Hero Section */}
      <HeroSection onOpenOrderModal={() => onOpenOrderModal()} />

      {/* 2. Short About Preview Bento Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#0056b3] dark:text-blue-300 text-xs font-black border border-blue-200 dark:border-blue-800">
                <Building2 className="w-3.5 h-3.5" />
                <span>ABOUT VIKASH MEDICAL HALL</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Serving Jehanabad with Pure Integrity & Genuine Healthcare Since 1998
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Located centrally on Kako Road near Punjab National Bank (PNB Bank), Vikash Medical Hall has been a cornerstone of trust for thousands of families across Jehanabad and surrounding districts in Bihar.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                We stock over 10,000+ authentic prescription drugs, specialized insulin cold storage, and home diagnostic monitors directly sourced from verified super-stockists.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-2xl bg-[#0056b3] hover:bg-blue-700 text-white font-extrabold text-xs transition-colors shadow-md"
              >
                <span>Read Business Story & Journey</span>
                <ChevronRight className="w-4 h-4 text-blue-200" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bento-card p-5 text-center flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#0056b3] dark:text-blue-400">28+</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Years Serving</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Trusted in Jehanabad</p>
            </div>

            <div className="bento-card p-5 text-center flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#0A8F6A] dark:text-emerald-400">100%</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Genuine Meds</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Direct Super-Stockist</p>
            </div>

            <div className="bento-card p-5 text-center flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-slate-100">10k+</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">In-Stock SKUs</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Rx & OTC Inventory</p>
            </div>

            <div className="bento-card-green p-5 text-center flex flex-col justify-center items-center space-y-1">
              <Clock className="w-7 h-7 text-white" />
              <p className="text-xs font-black">Fast WhatsApp</p>
              <p className="text-[10px] text-emerald-100">Doorstep Delivery</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Featured Services Preview Bento Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 text-xs font-extrabold mb-3 border border-emerald-200 dark:border-emerald-800">
            <Pill className="w-3.5 h-3.5" />
            <span>CATEGORIES & SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Comprehensive Healthcare Categories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
            Explore genuine prescription drugs, baby care, surgical supplies, and diagnostic health devices in stock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.slice(0, 6).map(service => (
            <div
              key={service.id}
              className="bento-card p-5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {service.highlightBadge && (
                    <span className="absolute top-2.5 right-2.5 bg-[#0A8F6A] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                      {service.highlightBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0056b3] dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  {service.items.length} Product Items
                </span>
                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="inline-flex items-center space-x-1 text-xs font-black text-[#0A8F6A] dark:text-emerald-400 hover:underline"
                >
                  <span>Order Now</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-[#0056b3] hover:bg-blue-700 text-white font-extrabold text-xs shadow-md"
          >
            <span>Explore All Categories & Full Service Details</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Why Choose Us Bento Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Why Jehanabad Trusts Vikash Medical Hall
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
            Uncompromising commitment to quality, fair pricing, and professional pharmacist care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bento-card p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-[#0056b3] dark:text-blue-300 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">100% Genuine Meds</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sourced directly from authorized super-stockists with GST invoice and batch records.
            </p>
          </div>

          <div className="bento-card p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-[#0A8F6A] dark:text-emerald-300 flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Cold Chain Fridge</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dedicated commercial refrigeration for Insulin, Eye Drops & Vaccines kept at 2°C–8°C.
            </p>
          </div>

          <div className="bento-card p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 flex items-center justify-center mx-auto">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">WhatsApp Delivery</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Send prescription sheet on WhatsApp for fast doorstep dispatch in Jehanabad.
            </p>
          </div>

          <div className="bento-card p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Licensed Pharmacist</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Professional consultation on drug dosage timing, food interactions, and safe storage.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Medicine Stock Checker Section (Interactive Feature) */}
      <section className="py-16 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker
            onSelectMedicineForOrder={(med) => onOpenOrderModal(med)}
            maxDisplay={6}
          />
        </div>
      </section>

      {/* 6. Customer Reviews Preview */}
      <ReviewsSection />

      {/* 7. FAQ Preview */}
      <FAQSection limit={4} onOpenOrderModal={() => onOpenOrderModal()} />

      {/* 8. Health Tips Preview */}
      <HealthTipsSection limit={3} />

      {/* 9. Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold border border-white/20">
            <Mail className="w-3.5 h-3.5" />
            <span>HEALTHCARE ALERTS & STOCK NOTIFICATIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Subscribe for Monthly Medicine Refill Reminders
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
            Never run out of chronic care medicines like Diabetes, BP, or Thyroid tablets. Receive timely refill reminders directly.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              required
              value={emailSub}
              onChange={e => setEmailSub(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-emerald-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition-colors shadow-lg flex items-center space-x-1.5"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4 text-emerald-800" />
            </button>
          </form>

          {subSuccess && (
            <p className="text-xs text-emerald-300 font-bold animate-pulse">
              ✓ Thank you! You have successfully subscribed to Vikash Medical Hall healthcare alerts.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
