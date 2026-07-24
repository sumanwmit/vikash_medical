import React from 'react';
import {
  Phone,
  MessageSquare,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  Upload,
  MapPin,
  HeartPulse
} from 'lucide-react';
import heroBannerImg from '../assets/images/pharmacy_hero_banner_1784874100927.jpg';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        
        {/* Main Hero Bento Card (Span 7) */}
        <div className="lg:col-span-7 bento-card relative overflow-hidden p-6 sm:p-10 flex flex-col justify-between min-h-[460px] bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white border-none shadow-2xl">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBannerImg}
              alt="Vikash Medical Hall Pharmacy Interior"
              className="w-full h-full object-cover opacity-20 filter brightness-90 contrast-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>ESTABLISHED IN 1998 • JEHANABAD, BIHAR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              VIKASH <span className="text-emerald-400">MEDICAL HALL</span>
            </h1>

            <p className="text-base sm:text-xl font-bold text-emerald-100/90 leading-snug">
              Your Trusted Partner in Genuine Medicines & Family Healthcare
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Serving Jehanabad near PNB Bank, Kako Road. 100% genuine prescription drugs, baby care, surgical supplies, and temperature-controlled cold storage.
            </p>
          </div>

          <div className="relative z-10 pt-6 space-y-4">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenOrderModal}
                className="px-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-900/30 flex items-center space-x-2 transition-all transform hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href="tel:9931034598"
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-extrabold text-xs sm:text-sm flex items-center space-x-2 backdrop-blur-md transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call +91 9931034598</span>
              </a>

              <a
                href="https://maps.google.com/?q=Kako+Rd,+near+P+N+B+BANK,+Jehanabad,+Bihar+804408"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-2xl bg-teal-900/40 hover:bg-teal-800/60 text-teal-200 border border-teal-500/30 font-bold text-xs sm:text-sm flex items-center space-x-1.5 transition-colors"
              >
                <Navigation className="w-4 h-4 text-teal-300" />
                <span>Map Location</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-200 pt-1">
              <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 inline-flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Genuine Meds</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 inline-flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Cold Chain Storage</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 inline-flex items-center space-x-1">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Licensed Pharmacist</span>
              </span>
            </div>
          </div>
        </div>

        {/* Emergency Info Bento Card (Span 5) */}
        <div className="lg:col-span-5 bento-card-blue p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full text-emerald-200 border border-white/20">
                EMERGENCY CONTACT & TIMINGS
              </span>
              <HeartPulse className="w-6 h-6 text-emerald-300 animate-pulse" />
            </div>

            <div>
              <p className="text-xs text-blue-100 uppercase tracking-wider font-semibold">Store Phone Line</p>
              <a href="tel:9931034598" className="text-2xl sm:text-3xl font-black text-white hover:underline block mt-0.5">
                +91 99310 34598
              </a>
            </div>

            <div className="h-px bg-white/20 my-3" />

            <div className="space-y-2 text-xs text-blue-100">
              <div className="flex justify-between items-center">
                <span>Mon - Sat:</span>
                <span className="font-extrabold text-white">07:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday:</span>
                <span className="font-extrabold text-white">08:00 AM - 09:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-emerald-300 font-bold pt-1">
                <span>Status:</span>
                <span className="inline-flex items-center space-x-1 bg-emerald-500/20 px-2.5 py-0.5 rounded-full text-emerald-300 border border-emerald-400/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open 365 Days</span>
                </span>
              </div>
            </div>
          </div>

          {/* Upload Prescription Callout Inside Bento */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center space-x-2">
              <Upload className="w-4 h-4 text-emerald-300" />
              <span>Send Prescription Image</span>
            </h4>
            <p className="text-xs text-blue-100 leading-relaxed">
              Have a doctor's rx sheet? Send photo via WhatsApp for fast home delivery across Jehanabad.
            </p>
            <button
              onClick={onOpenOrderModal}
              className="w-full py-2.5 rounded-xl bg-white text-[#0056b3] hover:bg-blue-50 font-black text-xs shadow transition-all"
            >
              Upload Sheet on WhatsApp →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

