export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  prescriptionRequired: boolean;
  unit: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  items: string[];
  ctaText: string;
  highlightBadge?: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'devices' | 'baby_care' | 'certifications';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  icon: string;
  imageUrl: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: 'Yes' | 'No';
  prescriptionFile?: File | null;
  preferredDeliveryTime: string;
  message: string;
}
