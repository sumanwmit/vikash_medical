import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          <img
            src={current.imageUrl}
            alt={current.title}
            className="max-h-[70vh] w-auto object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mt-4 text-center max-w-xl text-white">
          <h3 className="text-xl font-bold">{current.title}</h3>
          <p className="text-xs text-slate-300 mt-1">{current.description}</p>
          <span className="text-[11px] text-emerald-400 font-semibold mt-2 block">
            Image {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};
