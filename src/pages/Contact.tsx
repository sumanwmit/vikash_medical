import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  Send,
  Upload,
  CheckCircle,
  FileText,
  Navigation,
  ShieldCheck,
  Building2,
  AlertCircle
} from 'lucide-react';
import { OrderFormData } from '../types';

export default function Contact() {
  // Embedded WhatsApp Order Form state
  const [orderForm, setOrderForm] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Jehanabad, Bihar',
    medicineName: '',
    hasPrescription: 'Yes',
    prescriptionFile: null,
    preferredDeliveryTime: 'Immediate (Within 1-2 hours)',
    message: ''
  });

  const [fileName, setFileName] = useState('');

  // General Inquiry Form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setOrderForm(prev => ({ ...prev, prescriptionFile: file }));
      setFileName(file.name);
    }
  };

  const handleWhatsAppOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*Hello VIKASH MEDICAL HALL* 🏥
*NEW MEDICINE ORDER REQUEST*

👤 *Customer Name:* ${orderForm.customerName || 'N/A'}
📞 *Phone Number:* ${orderForm.mobileNumber || 'N/A'}
📧 *Email:* ${orderForm.email || 'N/A'}
📍 *Delivery Address:* ${orderForm.address || 'N/A'}

💊 *Medicine Required:* ${orderForm.medicineName || 'Attached in Prescription'}
📑 *Prescription Included:* ${orderForm.hasPrescription} ${fileName ? `(${fileName})` : ''}
⏰ *Preferred Delivery Time:* ${orderForm.preferredDeliveryTime}

💬 *Notes/Message:* ${orderForm.message || 'None'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/919931034598?text=${encodedText}`, '_blank');
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => setInquirySuccess(false), 5000);
    setInquiryName('');
    setInquiryPhone('');
    setInquiryMsg('');
  };

  return (
    <>
      <SEO
        title="Contact Us & WhatsApp Order - Vikash Medical Hall"
        description="Contact Vikash Medical Hall in Jehanabad. Address: Kako Rd, near PNB BANK, Jehanabad, Bihar 804408. Phone/WhatsApp: 9931034598. Google Maps, store hours & online medicine orders."
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white py-16 sm:py-20 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>CENTRAL JEHANABAD LOCATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact VIKASH MEDICAL HALL
          </h1>
          <p className="text-emerald-200 text-base sm:text-lg max-w-2xl mx-auto">
            Get in touch for instant medicine stock inquiries, prescription verification, or quick WhatsApp doorstep orders.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Business Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Address */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Store Address</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Kako Rd, near P N B BANK,<br />
                Jehanabad, Bihar 804408
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold pt-1">
                Landmark: Near Punjab National Bank
              </p>
            </div>

            {/* Phone & WhatsApp */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Phone & WhatsApp</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Call: <a href="tel:9931034598" className="font-bold text-emerald-600 hover:underline">+91 9931034598</a><br />
                WhatsApp: <a href="https://wa.me/919931034598" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">9931034598</a>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                24/7 Emergency Phone Support
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Store Working Hours</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-1">
                <span className="block">Mon - Sat: <strong className="text-slate-800 dark:text-slate-100">7:00 AM - 10:00 PM</strong></span>
                <span className="block">Sunday: <strong className="text-slate-800 dark:text-slate-100">8:00 AM - 9:00 PM</strong></span>
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                Open 365 Days a Year
              </p>
            </div>

          </div>

          {/* WhatsApp Order Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Embedded WhatsApp Order Form */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-xl space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>DIRECT WHATSAPP MEDICINE ORDER</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Place Medicine Order Online
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill the fields below to format your order message and launch directly into WhatsApp with Vikash Medical Hall.
                </p>
              </div>

              <form onSubmit={handleWhatsAppOrderSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={orderForm.customerName}
                      onChange={e => setOrderForm({ ...orderForm, customerName: e.target.value })}
                      placeholder="e.g., Rajesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={orderForm.mobileNumber}
                      onChange={e => setOrderForm({ ...orderForm, mobileNumber: e.target.value })}
                      placeholder="e.g., 9931034598"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={orderForm.email}
                      onChange={e => setOrderForm({ ...orderForm, email: e.target.value })}
                      placeholder="e.g., name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Delivery Time
                    </label>
                    <select
                      value={orderForm.preferredDeliveryTime}
                      onChange={e => setOrderForm({ ...orderForm, preferredDeliveryTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="Immediate (Within 1-2 hours)">Immediate (Within 1-2 hours)</option>
                      <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                      <option value="Tomorrow Morning">Tomorrow Morning</option>
                      <option value="Self Store Pickup">Self Store Pickup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Delivery Address in Jehanabad *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={orderForm.address}
                    onChange={e => setOrderForm({ ...orderForm, address: e.target.value })}
                    placeholder="House/Apartment no, Street, Landmark near Kako Rd..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Medicine Required / Quantity
                  </label>
                  <input
                    type="text"
                    value={orderForm.medicineName}
                    onChange={e => setOrderForm({ ...orderForm, medicineName: e.target.value })}
                    placeholder="e.g., Dolo 650 (2 strips), Telma 40, Accu-Chek Strips"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                {/* Prescription File Attach */}
                <div className="bg-emerald-50/60 dark:bg-slate-900/80 p-4 rounded-2xl border border-dashed border-emerald-300 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-1.5">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span>Attach Doctor Prescription Image</span>
                    </label>
                    <input
                      type="file"
                      id="contact-prescription-file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="contact-prescription-file"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold cursor-pointer hover:bg-emerald-700 transition-colors"
                    >
                      {fileName ? 'Change File' : 'Browse File'}
                    </label>
                  </div>
                  {fileName && (
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-2">
                      ✓ File Attached: {fileName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Special Message / Additional Notes
                  </label>
                  <input
                    type="text"
                    value={orderForm.message}
                    onChange={e => setOrderForm({ ...orderForm, message: e.target.value })}
                    placeholder="e.g., Please call before delivering..."
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>Send Order via WhatsApp</span>
                  </button>

                  <a
                    href="tel:9931034598"
                    className="py-3.5 px-6 rounded-2xl border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Call Store</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Interactive Map & General Quick Inquiry */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Map Embed */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                    <Navigation className="w-4 h-4 text-emerald-600" />
                    <span>Store Location Map</span>
                  </h4>
                  <a
                    href="https://maps.google.com/?q=Kako+Rd,+near+P+N+B+BANK,+Jehanabad,+Bihar+804408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>

                <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <iframe
                    title="Vikash Medical Hall Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.266205739343!2d84.975!3d25.213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzQ2LjgiTiA4NMK1NTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  📍 Kako Rd, near P N B BANK, Jehanabad, Bihar 804408
                </p>
              </div>

              {/* General Quick Inquiry Form */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
                <h4 className="font-extrabold text-lg flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>Quick General Inquiry</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Have a feedback, business inquiry or store question? Send us a quick message below.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={e => setInquiryName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={e => setInquiryPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <textarea
                    rows={3}
                    required
                    value={inquiryMsg}
                    onChange={e => setInquiryMsg(e.target.value)}
                    placeholder="Your message or query..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow"
                  >
                    Submit Quick Inquiry
                  </button>
                  {inquirySuccess && (
                    <p className="text-xs text-emerald-400 font-bold text-center">
                      ✓ Message submitted successfully! We will get back to you shortly.
                    </p>
                  )}
                </form>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
