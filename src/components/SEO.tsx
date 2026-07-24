import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  schemaType?: 'Pharmacy' | 'LocalBusiness' | 'FAQPage' | 'WebPage';
  schemaData?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = window.location.href,
  keywords = 'Pharmacy in Jehanabad, Vikash Medical Hall, Medicine Store Kako Road, Buy Medicine Online Jehanabad, WhatsApp Medicine Order, Genuine Medicines Bihar, PNB Bank Jehanabad Pharmacy',
  schemaType = 'Pharmacy',
  schemaData
}) => {
  useEffect(() => {
    document.title = `${title} | Vikash Medical Hall Jehanabad`;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // OpenGraph Tags
    const ogTags: Record<string, string> = {
      'og:title': `${title} | Vikash Medical Hall`,
      'og:description': description,
      'og:type': 'website',
      'og:url': canonicalUrl,
      'og:site_name': 'Vikash Medical Hall',
      'twitter:card': 'summary_large_image',
      'twitter:title': `${title} | Vikash Medical Hall`,
      'twitter:description': description
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        if (property.startsWith('og:')) {
          tag.setAttribute('property', property);
        } else {
          tag.setAttribute('name', property);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD Schema
    const localPharmacySchema = {
      '@context': 'https://schema.org',
      '@type': ['Pharmacy', 'MedicalBusiness', 'LocalBusiness'],
      'name': 'VIKASH MEDICAL HALL',
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop',
      '@id': 'https://vikashmedicalhall.com',
      'url': window.location.origin,
      'telephone': '+919931034598',
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Kako Rd, near P N B BANK',
        'addressLocality': 'Jehanabad',
        'addressRegion': 'Bihar',
        'postalCode': '804408',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2132,
        'longitude': 84.9871
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '07:00',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '08:00',
          'closes': '21:00'
        }
      ],
      'sameAs': [
        'https://wa.me/919931034598'
      ]
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData || localPharmacySchema);

  }, [title, description, canonicalUrl, keywords, schemaType, schemaData]);

  return null;
};
