import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    iconName: 'Pill',
    description: 'Comprehensive inventory of 100% genuine ethical and branded prescription drugs across all major healthcare specialties including Cardiology, Diabetes, Orthopedics, Gastroenterology, Neurology, and Gynecology.',
    items: [
      'Authentic branded & generic prescription medicines',
      'Direct sourcing from authorized pharma super-stockists',
      'Cold-chain temperature storage for Insulins & Vaccines',
      'Batch tracking & expiry verification guarantee'
    ],
    ctaText: 'Order Prescription Meds',
    highlightBadge: '100% Genuine Guaranteed',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'otc-medicines',
    title: 'OTC & General Healthcare',
    iconName: 'ShieldCheck',
    description: 'Over-the-counter essentials for immediate symptom relief. From pain killers, cough syrups, antacids, and fever reducers to daily multi-vitamins and first-aid kits.',
    items: [
      'Cough, cold, flu & fever medicines',
      'Digestive enzymes, antacids & ORS rehydration',
      'First-aid supplies, antiseptics & band-aids',
      'Skin ointments, anti-fungals & pain gels'
    ],
    ctaText: 'Explore OTC Essentials',
    highlightBadge: 'Instant Counter Availability',
    imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'health-devices',
    title: 'Health Monitors & Equipment',
    iconName: 'Activity',
    description: 'Diagnostic medical devices and healthcare equipment for home monitoring. Certified digital BP machines, glucometers, nebulizers, pulse oximeters, and clinical thermometers.',
    items: [
      'Digital Blood Pressure Monitors with warranty',
      'Blood Glucose Meters & Test Strips',
      'Ultrasonic Nebulizer Machines & Masks',
      'Digital Infrared Thermometers & Oximeters'
    ],
    ctaText: 'Check Devices Stock',
    highlightBadge: 'Brand Warranty Included',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'baby-care',
    title: 'Baby Care & Infant Nutrition',
    iconName: 'Baby',
    description: 'Complete range of gentle baby care products, infant milk formulas, baby food supplements, diapers, wipes, and pediatric health essentials for your little ones.',
    items: [
      'Infant milk formulas (Lactogen, Similac, Nan Pro)',
      'Premium breathable baby diapers & wet wipes',
      'Pediatric drops, gripe water & teething gels',
      'Hypoallergenic baby lotions, oils & soaps'
    ],
    ctaText: 'Order Baby Products',
    highlightBadge: 'Safe & Trusted Brands',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical & Hospital Supplies',
    iconName: 'Scissors',
    description: 'High-grade surgical consumables and hospital supplies for clinics, home care nursing, and wound dressing. Absorbent cotton, sterile bandages, IV sets, and syringes.',
    items: [
      'Sterile gauze, surgical cotton & adhesive tapes',
      'Single-use sterile syringes, needles & IV sets',
      'Disposable surgical gloves, masks & gowns',
      'Catheters, urine bags & wound dressing kits'
    ],
    ctaText: 'Inquire Surgical Items',
    highlightBadge: 'Hospital Grade Standard',
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'supplements-vitamins',
    title: 'Nutritional Supplements & Immunity Boosters',
    iconName: 'Sparkles',
    description: 'Essential vitamins, minerals, protein powders, and herbal health supplements to build strength, boost immunity, and maintain active wellness for all age groups.',
    items: [
      'Multivitamins, Zinc, B-Complex & Vitamin C',
      'Calcium, Vitamin D3 & Bone Density Support',
      'Protein Powders (Ensure, Protinex, Threptin)',
      'Ayurvedic immunity boosters (Chyawanprash, Honey)'
    ],
    ctaText: 'Explore Supplements',
    highlightBadge: 'Authentic Sourcing',
    imageUrl: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=800&auto=format&fit=crop'
  }
];
