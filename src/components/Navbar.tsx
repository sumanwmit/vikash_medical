import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Sun,
  Moon,
  Menu,
  X,
  Pill,
  Search,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Products', path: '/services' },
    { name: 'Store Gallery', path: '/gallery' },
    { name: 'Contact & Map', path: '/contact' }
  ];

  const handleWhatsAppClick = () => {
    if (onOpenOrderModal) {
      onOpenOrderModal();
    } else {
      window.open('https://wa.me/919931034598?text=Hello%20Vikash%20Medical%20Hall,%20I%20want%20to%20order%20medicines.', '_blank');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-200 border-b border-emerald-100 dark:border-slate-800">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white text-xs font-medium py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 flex-wrap">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
              <span className="truncate">Kako Rd, near PNB Bank, Jehanabad, Bihar</span>
            </span>
            <span className="hidden md:inline-flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
              <span>Mon-Sat: 7 AM - 10 PM | Sun: 8 AM - 9 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            <a
              href="tel:9931034598"
              className="inline-flex items-center space-x-1 text-emerald-100 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-semibold">+91 9931034598</span>
            </a>
            <span className="text-emerald-300/40">|</span>
            <span className="inline-flex items-center space-x-1 text-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">100% Genuine Medicines</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar as Bento Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="bento-card px-4 sm:px-6 py-3.5 flex items-center justify-between border border-slate-200/80 dark:border-slate-800">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#0056b3] to-[#0A8F6A] p-2 text-white shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-[#0056b3] dark:text-white flex items-center gap-1.5">
                VIKASH <span className="text-[#0A8F6A]">MEDICAL HALL</span>
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-wider">
                JEHANABAD PHARMACY • SINCE 1998
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/50">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 ${
                    isActive
                      ? 'bg-[#0056b3] text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 hover:text-[#0056b3]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* Quick Search Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Search Medicines Stock"
                aria-label="Search Medicine Stock"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Call Now */}
            <a
              href="tel:9931034598"
              className="hidden md:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl text-xs font-extrabold text-[#0056b3] dark:text-blue-400 bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 hover:bg-blue-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0056b3]" />
              <span>Call Store</span>
            </a>

            {/* WhatsApp Order Button */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-2xl bg-[#0A8F6A] hover:bg-[#087859] text-white font-extrabold text-xs shadow-md shadow-emerald-900/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-base shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href="tel:9931034598"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-base"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>Call Store: +91 9931034598</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
