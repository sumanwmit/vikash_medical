import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  ExternalLink,
  ShieldCheck,
  Pill,
  HeartHandshake
} from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;

    let visitorId =
      localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId =
      sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: 'application/json'
        });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Identity & Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 p-2 text-white flex items-center justify-center">
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">VIKASH MEDICAL HALL</h3>
                <p className="text-xs text-emerald-400 font-medium">Jehanabad, Bihar</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for 100% genuine prescription medicines, OTC products, health monitors, surgical items, and baby care essentials.
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>Kako Rd, near P N B BANK, Jehanabad, Bihar 804408</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9931034598" className="hover:text-emerald-400 transition-colors font-medium">
                  +91 9931034598
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/919931034598" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Support: 9931034598
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-emerald-500">›</span>
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-emerald-500">›</span>
                  <span>About Our Store</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-emerald-500">›</span>
                  <span>Services & Medicine Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-emerald-500">›</span>
                  <span>Store Gallery & Licenses</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-emerald-500">›</span>
                  <span>Contact & Store Map</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Trust Badges */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Store Working Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Monday - Saturday:</span>
                <span className="font-semibold text-emerald-400">7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Sunday:</span>
                <span className="font-semibold text-emerald-400">8:00 AM - 9:00 PM</span>
              </div>
              <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Emergency Phone & WhatsApp Support Available</span>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
              <div className="flex items-center space-x-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Drug License Verified</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1 text-emerald-400">
                <HeartHandshake className="w-4 h-4" />
                <span>Registered Pharmacist</span>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Preview */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Location Map
            </h4>
            <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-800 bg-slate-800 relative group">
              <iframe
                title="Vikash Medical Hall Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.266205739343!2d84.975!3d25.213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzQ2LjgiTiA4NMK1NTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
              <a
                href="https://maps.google.com/?q=Kako+Rd,+near+P+N+B+BANK,+Jehanabad,+Bihar+804408"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-end p-2"
              >
                <span className="bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-md font-semibold flex items-center space-x-1 shadow">
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Landmark: Near Punjab National Bank (PNB Bank), Kako Road, Jehanabad.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Developer Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            <p>&copy; {new Date().getFullYear()} VIKASH MEDICAL HALL. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4 flex-wrap justify-center">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Medical Disclaimer</span>
          </div>

          <div className="flex items-center space-x-1">
            <span></span>
          <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>

          </div>
        </div>
      </div>
    </footer>
  );
}
