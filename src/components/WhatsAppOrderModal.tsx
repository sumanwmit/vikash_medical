import React, { useState, useEffect } from 'react';
import {
  X,
  MessageSquare,
  Phone,
  Upload,
  CheckCircle,
  FileText,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { OrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Jehanabad, Bihar',
    medicineName: initialMedicineName,
    hasPrescription: 'Yes',
    prescriptionFile: null,
    preferredDeliveryTime: 'Immediate (Within 1-2 hours)',
    message: ''
  });

  const [fileName, setFileName] = useState<string>('');

  useEffect(() => {
    if (initialMedicineName) {
      setFormData(prev => ({ ...prev, medicineName: initialMedicineName }));
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, prescriptionFile: file, hasPrescription: 'Yes' }));
      setFileName(file.name);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*Hello VIKASH MEDICAL HALL* 🏥
*NEW MEDICINE ORDER REQUEST*

👤 *Customer Name:* ${formData.customerName || 'N/A'}
📞 *Phone Number:* ${formData.mobileNumber || 'N/A'}
📧 *Email:* ${formData.email || 'N/A'}
📍 *Delivery Address:* ${formData.address || 'N/A'}

💊 *Medicine Required:* ${formData.medicineName || 'Attached in Prescription'}
📑 *Prescription Included:* ${formData.hasPrescription} ${fileName ? `(${fileName})` : ''}
⏰ *Preferred Time:* ${formData.preferredDeliveryTime}

💬 *Additional Notes:* ${formData.message || 'None'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919931034598?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-emerald-100 dark:border-slate-800 my-8 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md p-2.5 flex items-center justify-center border border-white/20">
              <MessageSquare className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-200">
                Direct WhatsApp Medicine Ordering
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                VIKASH MEDICAL HALL
              </h3>
            </div>
          </div>
          <p className="text-xs text-emerald-100 mt-2">
            Fill details below or upload prescription. Click "Send via WhatsApp" to instantly share your order with our pharmacist.
          </p>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-4 text-slate-800 dark:text-slate-100">
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Customer Name *
              </label>
              <input
                type="text"
                required
                value={formData.customerName}
                onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="e.g., Rajesh Kumar"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                value={formData.mobileNumber}
                onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                placeholder="e.g., 9876543210"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email & Delivery Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g., rajesh@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Preferred Delivery Time
              </label>
              <select
                value={formData.preferredDeliveryTime}
                onChange={e => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="Immediate (Within 1-2 hours)">Immediate (Within 1-2 hours)</option>
                <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                <option value="Tomorrow Morning">Tomorrow Morning</option>
                <option value="Self Store Pickup at Kako Rd">Self Store Pickup at Kako Rd</option>
              </select>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Full Delivery Address in Jehanabad *
            </label>
            <textarea
              rows={2}
              required
              value={formData.address}
              onChange={e => setFormData({ ...formData, address: e.target.value })}
              placeholder="House/Apartment no, Street, Landmark near Kako Rd, Jehanabad..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Medicine Name Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Medicine Required / Quantity
            </label>
            <input
              type="text"
              value={formData.medicineName}
              onChange={e => setFormData({ ...formData, medicineName: e.target.value })}
              placeholder="e.g., Dolo 650 (2 strips), Telma 40 (1 strip), Omron BP Monitor"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Prescription Upload Simulator */}
          <div className="bg-emerald-50/60 dark:bg-slate-800/80 p-4 rounded-2xl border border-dashed border-emerald-300 dark:border-slate-700">
            <div className="flex items-start justify-between">
              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-1.5">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Upload Doctor Prescription (Optional / Recommended)</span>
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Accepted formats: JPG, PNG, PDF. Our pharmacist will verify dosage.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, hasPrescription: 'Yes' })}
                  className={`px-2.5 py-1 rounded-lg ${
                    formData.hasPrescription === 'Yes'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, hasPrescription: 'No' })}
                  className={`px-2.5 py-1 rounded-lg ${
                    formData.hasPrescription === 'No'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {formData.hasPrescription === 'Yes' && (
              <div className="mt-3">
                <input
                  type="file"
                  id="prescription-file-modal"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="prescription-file-modal"
                  className="flex items-center justify-center space-x-2 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-700 cursor-pointer hover:border-emerald-500 transition-colors"
                >
                  <Upload className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {fileName ? `Attached: ${fileName}` : 'Click to select prescription image/file'}
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Message / Special Instructions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Special Instructions / Notes
            </label>
            <input
              type="text"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g., Please send exact brand or call before dispatching..."
              className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Send via WhatsApp Now</span>
            </button>

            <a
              href="tel:9931034598"
              className="py-3.5 px-5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Store</span>
            </a>
          </div>

          <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Your personal data is handled securely for order processing only.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
