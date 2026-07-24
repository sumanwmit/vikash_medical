import React from 'react';
import { SEO } from '../components/SEO';
import {
  Building2,
  Award,
  ShieldCheck,
  HeartHandshake,
  Target,
  Eye,
  CheckCircle2,
  Clock,
  MapPin,
  Pill,
  MessageSquare,
  Users
} from 'lucide-react';
import heroBannerImg from '../assets/images/pharmacy_hero_banner_1784874100927.jpg';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export default function About({ onOpenOrderModal }: AboutProps) {
  const timeline = [
    {
      year: '1998',
      title: 'Establishment on Kako Road',
      desc: 'Founded as a small retail medical shop near Punjab National Bank (PNB Bank) in Jehanabad, Bihar with a focus on genuine prescription drugs.'
    },
    {
      year: '2008',
      title: 'Cold Storage Expansion',
      desc: 'Installed dedicated commercial medical refrigerators for insulin, vaccines, and eye drops to ensure strict temperature maintenance.'
    },
    {
      year: '2016',
      title: 'Health Devices & Baby Care Wing',
      desc: 'Expanded counter inventory to stock Omron BP machines, Accu-Chek glucometers, nebulizers, and top infant nutrition brands.'
    },
    {
      year: '2022',
      title: 'Digital & WhatsApp Order Launch',
      desc: 'Introduced quick WhatsApp prescription ordering and doorstep delivery across Jehanabad city and surrounding panchayats.'
    },
    {
      year: 'Present',
      title: 'Premier Trusted Healthcare Hub',
      desc: 'Serving thousands of local families with over 10,000+ authentic SKUs, licensed pharmacist consultation, and 100% genuine quality guarantee.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us - Vikash Medical Hall Jehanabad"
        description="Learn about Vikash Medical Hall, Jehanabad's trusted pharmacy near PNB Bank Kako Road since 1998. Dedicated to 100% genuine medicines, cold chain storage & compassionate patient care."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>OUR HERITAGE & MISSION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About VIKASH MEDICAL HALL
          </h1>
          <p className="text-emerald-200 text-base sm:text-lg max-w-2xl mx-auto">
            Your Trusted Medical Store for Genuine Medicines & Healthcare Needs in Jehanabad, Bihar
          </p>
        </div>
      </section>

      {/* Main Story & Overview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                28+ Years of Unwavering Healthcare Service
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Established with a vision to eliminate counterfeit medicines and provide 100% genuine pharmaceutical drugs, <strong>VIKASH MEDICAL HALL</strong> has grown to become Jehanabad's most trusted pharmacy. Located conveniently on <strong>Kako Road, near PNB Bank, Jehanabad, Bihar 804408</strong>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                We understand that medicine is not just another retail product — it is a lifeline for patients battling diabetes, hypertension, cardiac disorders, and acute illnesses. That is why every strip, bottle, and device in our store is directly procured from authorized super-stockists with verified batch numbers and GST invoices.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-emerald-50 dark:bg-slate-800/80 rounded-2xl border border-emerald-100 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Drug License Verified</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Licensed under Bihar State Pharmacy Council standards.</p>
                </div>
                <div className="p-4 bg-teal-50 dark:bg-slate-800/80 rounded-2xl border border-teal-100 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Cold Chain Integrity</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">2°C–8°C commercial fridge for Insulin & Injections.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                <img
                  src={heroBannerImg}
                  alt="Vikash Medical Hall Interior Store Display"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl hidden sm:block border border-emerald-500/40 max-w-xs">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PHARMACIST ON DUTY</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Expert guidance on prescription dosage, timing, and storage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Mission, Vision & Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Guiding principles that define how we serve every customer who walks through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To ensure 100% availability of genuine, high-quality, and affordable medicines to every family in Jehanabad with zero compromise on drug efficacy or patient safety.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the benchmark for modern retail pharmacy care in Bihar by blending digital WhatsApp convenience with traditional personal trust and professional ethics.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Core Values</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Absolute Genuine Quality Guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Transparent Fair Pricing & Billing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Compassionate Patient Guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business History & Timeline */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Growth Journey Timeline
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Milestones over 28 years serving Jehanabad.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 space-y-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 shadow" />
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner / Pharmacist Message */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-800/90 p-8 sm:p-12 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>FOUNDER & PROPRIETOR MESSAGE</span>
              </div>

              <blockquote className="text-base sm:text-xl font-medium italic text-slate-100 leading-relaxed">
                "When we opened Vikash Medical Hall near PNB Bank Kako Road, our goal was simple: ensure no patient in Jehanabad ever receives a fake or expired medicine. Medicine is a sacred trust. Today, after 28 years, that same principle drives our store every morning. Whether you need a simple headache pill or critical chronic disease refills, we are honored to serve you."
              </blockquote>

              <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-white text-lg">Vikash Medical Hall Team</h4>
                  <p className="text-xs text-emerald-400">Licensed Pharmacist & Staff • Jehanabad, Bihar</p>
                </div>

                <button
                  onClick={onOpenOrderModal}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md inline-flex items-center space-x-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
