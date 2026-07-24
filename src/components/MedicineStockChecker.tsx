import React, { useState, useMemo } from 'react';
import medicineData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Pill,
  ShieldAlert,
  MessageSquare,
  Filter,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medicineName: string) => void;
  maxDisplay?: number;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectMedicineForOrder,
  maxDisplay
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const medicines: MedicineItem[] = medicineData as MedicineItem[];

  const categories = useMemo(() => {
    const cats = Array.from(new Set(medicines.map(m => m.category)));
    return ['All', ...cats];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter(med => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || med.category === selectedCategory;

      const matchesStatus =
        statusFilter === 'All' || med.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchTerm, selectedCategory, statusFilter]);

  const displayedList = maxDisplay
    ? filteredMedicines.slice(0, maxDisplay)
    : filteredMedicines;

  const handleOrder = (medName: string) => {
    if (onSelectMedicineForOrder) {
      onSelectMedicineForOrder(medName);
    } else {
      const text = encodeURIComponent(
        `Hello Vikash Medical Hall,\nI want to check availability & order:\nMedicine Name: ${medName}\nPlease confirm availability and delivery time.`
      );
      window.open(`https://wa.me/919931034598?text=${text}`, '_blank');
    }
  };

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="status-tag available">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Available</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="status-tag limited">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Limited</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="status-tag out-of-stock">
            <XCircle className="w-3.5 h-3.5" />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  return (
    <div className="w-full bento-card p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-2 border border-emerald-200 dark:border-emerald-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT INVENTORY CHECKER</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Medicine & Product Stock Availability
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Search live store inventory for genuine prescription drugs, health devices, and OTC products.
          </p>
        </div>

        <button
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('All');
            setStatusFilter('All');
          }}
          className="self-start md:self-auto inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-3.5">
        {/* Search Input */}
        <div className="relative md:col-span-6">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search medicine name (e.g., Paracetamol, Telma, Omron, Insulin)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium transition-all"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative md:col-span-3">
          <Filter className="w-4 h-4 absolute left-3.5 top-4 text-slate-400" />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="w-full pl-10 pr-8 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                Category: {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Status Dropdown */}
        <div className="relative md:col-span-3">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="All">Stock Status: All</option>
            <option value="Available">Available Only</option>
            <option value="Limited Stock">Limited Stock Only</option>
            <option value="Out of Stock">Out of Stock Only</option>
          </select>
        </div>
      </div>

      {/* Results Count Summary */}
      <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium px-1">
        <span>
          Showing <strong className="text-slate-800 dark:text-slate-200">{displayedList.length}</strong> of {filteredMedicines.length} items
        </span>
        <span className="hidden sm:inline">
          Need a medicine not listed? Order directly via WhatsApp!
        </span>
      </div>

      {/* Medicine Grid Cards */}
      {displayedList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedList.map(med => (
            <div
              key={med.id}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 mt-1">
                  {med.name}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  Brand: <strong className="text-slate-700 dark:text-slate-300">{med.brand}</strong>
                </p>

                {med.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                    {med.description}
                  </p>
                )}

                <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Pack Unit:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{med.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expiry Date:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{med.expiry}</span>
                  </div>
                  {med.prescriptionRequired && (
                    <div className="flex items-center space-x-1 text-amber-600 dark:text-amber-400 font-semibold pt-1">
                      <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                      <span>Doctor Rx Required</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & Order Action */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">MRP Rate</span>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                    ₹{med.mrp}
                  </span>
                </div>

                <button
                  onClick={() => handleOrder(med.name)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center space-x-1.5 transition-all ${
                    med.status === 'Out of Stock'
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{med.status === 'Out of Stock' ? 'Request Restock' : 'Order Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-6">
          <Pill className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            Medicine Not Found in Quick Search
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
            Don't worry! We stock over 10,000+ prescription and generic medicines at Vikash Medical Hall.
          </p>
          <button
            onClick={() => handleOrder(searchTerm || 'Custom Medicine Request')}
            className="mt-4 inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire Medicine on WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
};
