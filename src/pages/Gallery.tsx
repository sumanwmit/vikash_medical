import React, { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { galleryData } from '../data/galleryData';
import { Lightbox } from '../components/Lightbox';
import {
  Image as ImageIcon,
  ZoomIn,
  Filter,
  Building2,
  ShieldCheck,
  Pill,
  MessageSquare
} from 'lucide-react';

interface GalleryProps {
  onOpenOrderModal: () => void;
}

export default function Gallery({ onOpenOrderModal }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { key: 'all', label: 'All Photos' },
    { key: 'store', label: 'Store Front & Interior' },
    { key: 'medicines', label: 'Medicine Shelves' },
    { key: 'devices', label: 'Health Devices' },
    { key: 'baby_care', label: 'Baby Care Range' },
    { key: 'certifications', label: 'Licenses & Registrations' }
  ];

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return galleryData;
    return galleryData.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEO
        title="Store Gallery & License Verification - Vikash Medical Hall"
        description="View photo gallery of Vikash Medical Hall store front on Kako Road Jehanabad, interior medicine shelves, cold storage unit, health devices & official Drug Licenses."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            <span>AUTHENTIC STORE OVERVIEW</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Store Photo Gallery & Facilities
          </h1>
          <p className="text-emerald-200 text-base sm:text-lg max-w-2xl mx-auto">
            Take a virtual tour of our clean counters, organized medicine racks, cold-chain units, and state licenses in Jehanabad.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {filterCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700/80 cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <ZoomIn className="w-6 h-6" />
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                    {img.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Trigger */}
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex ?? 0}
            isOpen={lightboxIndex !== null}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(newIdx) => setLightboxIndex(newIdx)}
          />

          <div className="mt-14 bg-emerald-50 dark:bg-emerald-950/40 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Visit Us Directly at Kako Road, Jehanabad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
              Our store is open 7 days a week. Convenient parking space available near Punjab National Bank (PNB Bank).
            </p>
            <button
              onClick={onOpenOrderModal}
              className="mt-2 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Store via WhatsApp</span>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
