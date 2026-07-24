import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { Pill } from 'lucide-react';

// Lazy loading all 5 required pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
    <div className="w-12 h-12 rounded-2xl bg-emerald-600 p-2 text-white animate-bounce flex items-center justify-center">
      <Pill className="w-7 h-7" />
    </div>
    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
      Loading VIKASH MEDICAL HALL...
    </p>
  </div>
);

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicineName, setSelectedMedicineName] = useState('');

  const handleOpenOrderModal = (medName: string = '') => {
    setSelectedMedicineName(medName);
    setIsOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-emerald-500 selection:text-white">
          
          {/* Header Navigation */}
          <Navbar
            onOpenOrderModal={() => handleOpenOrderModal('')}
            onOpenSearch={() => {
              window.location.href = '/services';
            }}
          />

          {/* Main Content Area with Suspense Lazy Loading */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={<Home onOpenOrderModal={handleOpenOrderModal} />}
                />
                <Route
                  path="/about"
                  element={<About onOpenOrderModal={() => handleOpenOrderModal('')} />}
                />
                <Route
                  path="/services"
                  element={<Services onOpenOrderModal={handleOpenOrderModal} />}
                />
                <Route
                  path="/gallery"
                  element={<Gallery onOpenOrderModal={() => handleOpenOrderModal('')} />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer with Tracking Hook */}
          <Footer />

          {/* Floating Action Buttons */}
          <FloatingButtons onOpenOrderModal={() => handleOpenOrderModal('')} />

          {/* WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            initialMedicineName={selectedMedicineName}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
