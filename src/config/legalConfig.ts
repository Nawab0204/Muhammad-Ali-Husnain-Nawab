/**
 * Central Legal Metadata & Compliance Configuration for BOTLYTICES
 * Single source of truth for all three legal policies (Terms of Service, Privacy Policy, Refund Policy).
 * Ensures uniform effective dates, version numbers, contact addresses, and verified vs pending status.
 */

export interface LegalEntityConfig {
  brandName: string;
  websiteUrl: string;
  officialEmail: string;
  privacyEmail: string;
  refundEmail: string;
  phone: string;
  whatsapp: string;
  effectiveDate: string;
  lastUpdated: string;
  version: string;
  // Formal entity verification status
  isEntityPendingVerification: boolean;
  registeredEntityName: string;
  registrationNumber: string;
  registeredStatutoryAddress: string;
  operatingHeadquarters: string;
  applicableLawPrimary: string;
  applicableLawFallbackNotice: string;
  dpoStatus: string;
}

export const LEGAL_CONFIG: LegalEntityConfig = {
  brandName: 'BOTLYTICES',
  websiteUrl: 'https://botlytices.com',
  officialEmail: 'botlytices@gmail.com',
  privacyEmail: 'botlytices@gmail.com',
  refundEmail: 'botlytices@gmail.com',
  phone: '+92 340 0320020',
  whatsapp: '+92 355 7181347',
  effectiveDate: 'November 10, 2026',
  lastUpdated: 'November 10, 2026',
  version: '2026.2 (International Edition)',
  
  // Pending verification flags to strictly comply with "Do not invent legal entities or addresses"
  isEntityPendingVerification: true,
  registeredEntityName: '[PENDING VERIFICATION: Botlytices Legal Business Entity Name / Proprietary Limited / Sole Proprietorship]',
  registrationNumber: '[PENDING VERIFICATION: National Tax / Commercial Registry / SECP / Corporate Registration Number]',
  registeredStatutoryAddress: '[PENDING VERIFICATION: Registered Corporate Statutory Address]',
  operatingHeadquarters: 'Gilgit-Baltistan / Islamabad, Pakistan (Serving international clients globally across US, UK, Canada, Australia, New Zealand, Ireland, EU, and UAE)',
  applicableLawPrimary: '[PENDING VERIFICATION: Formal Corporate Jurisdiction / Governing Law Clause subject to legal counsel determination]',
  applicableLawFallbackNotice: 'Contractual disputes are interpreted under commercially standard principles of international commercial contract law, preserving all non-waivable statutory consumer protections in the customer’s country of residence.',
  dpoStatus: 'Designated Data Protection Coordinator via botlytices@gmail.com (Subject: Attention: Privacy Coordinator)',
};

export interface LegalNavSection {
  id: string;
  number: string;
  title: string;
}

export const LEGAL_PAGES_META = {
  terms: {
    path: '/terms-of-service',
    aliasPaths: ['/terms', '/terms-and-conditions'],
    title: 'Terms of Service | Botlytices',
    navLabel: 'Terms of Service',
    description:
      'Official Terms of Service for BOTLYTICES web development, IT support, digital presence, AI automation, and CCTV security installations.',
  },
  privacy: {
    path: '/privacy-policy',
    aliasPaths: ['/privacy'],
    title: 'Privacy Policy | Botlytices',
    navLabel: 'Privacy Policy',
    description:
      'Official Privacy Policy for BOTLYTICES explaining how personal data, technical credentials, and analytics are processed in compliance with GDPR, UK DPA, and international standards.',
  },
  refund: {
    path: '/refund-policy',
    aliasPaths: ['/refunds', '/cancellation-policy'],
    title: 'Refund & Cancellation Policy | Botlytices',
    navLabel: 'Refund & Cancellation Policy',
    description:
      'Official Refund & Cancellation Policy for BOTLYTICES covering milestone payments, custom development, recurring subscriptions, and statutory cooling-off rights.',
  },
};
