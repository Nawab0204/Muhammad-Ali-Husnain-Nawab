export interface MarketRegion {
  id: string;
  name: string;
  country: string;
  flag: string;
  currencyCode: string;
  currencySymbol: string;
  multiplier: number;
}

export const SUPPORTED_MARKETS: MarketRegion[] = [
  {
    id: 'us',
    name: 'United States',
    country: 'United States',
    flag: '🇺🇸',
    currencyCode: 'USD',
    currencySymbol: '$',
    multiplier: 1.0,
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    country: 'United Kingdom',
    flag: '🇬🇧',
    currencyCode: 'GBP',
    currencySymbol: '£',
    multiplier: 0.75,
  },
  {
    id: 'ca',
    name: 'Canada',
    country: 'Canada',
    flag: '🇨🇦',
    currencyCode: 'CAD',
    currencySymbol: 'C$',
    multiplier: 1.33,
  },
  {
    id: 'au',
    name: 'Australia',
    country: 'Australia',
    flag: '🇦🇺',
    currencyCode: 'AUD',
    currencySymbol: 'A$',
    multiplier: 1.5,
  },
  {
    id: 'nz',
    name: 'New Zealand',
    country: 'New Zealand',
    flag: '🇳🇿',
    currencyCode: 'NZD',
    currencySymbol: 'NZ$',
    multiplier: 1.58,
  },
  {
    id: 'ie',
    name: 'Ireland',
    country: 'Ireland',
    flag: '🇮🇪',
    currencyCode: 'EUR',
    currencySymbol: '€',
    multiplier: 0.92,
  },
  {
    id: 'eu',
    name: 'Wider Eurozone',
    country: 'Europe (Eurozone)',
    flag: '🇪🇺',
    currencyCode: 'EUR',
    currencySymbol: '€',
    multiplier: 0.88,
  },
  {
    id: 'ae',
    name: 'United Arab Emirates',
    country: 'UAE',
    flag: '🇦🇪',
    currencyCode: 'AED',
    currencySymbol: 'AED ',
    multiplier: 3.67,
  },
];

// Exact 6 regional pricing anchors mandated by commercial specification
export const PRIMARY_PRICING_ANCHORS: Record<string, Record<string, string>> = {
  'starter-website': {
    // 5-page website
    us: '$1,199',
    uk: '£899',
    ca: 'C$1,599',
    au: 'A$1,799',
    nz: 'NZ$1,899',
    ie: '€1,099',
    eu: '€1,049',
    ae: 'AED 4,499',
  },
  'business-website': {
    // 8-12-page website
    us: '$2,199',
    uk: '£1,599',
    ca: 'C$2,899',
    au: 'A$3,199',
    nz: 'NZ$3,399',
    ie: '€1,999',
    eu: '€1,899',
    ae: 'AED 7,999',
  },
  'business-care': {
    // Business care/month
    us: '$99',
    uk: '£79',
    ca: 'C$129',
    au: 'A$149',
    nz: 'NZ$159',
    ie: '€99',
    eu: '€89',
    ae: 'AED 349',
  },
  'local-seo': {
    // Local SEO/month
    us: '$399',
    uk: '£299',
    ca: 'C$549',
    au: 'A$599',
    nz: 'NZ$649',
    ie: '€349',
    eu: '€329',
    ae: 'AED 1,499',
  },
  'ai-chatbot': {
    // Basic AI chatbot setup
    us: '$499',
    uk: '£399',
    ca: 'C$699',
    au: 'A$749',
    nz: 'NZ$799',
    ie: '€549',
    eu: '€499',
    ae: 'AED 1,999',
  },
  'it-support': {
    // IT support/month
    us: '$199',
    uk: '£149',
    ca: 'C$269',
    au: 'A$279',
    nz: 'NZ$299',
    ie: '€179',
    eu: '€169',
    ae: 'AED 699',
  },
};

/**
 * Format a service price dynamically based on chosen market, using exact anchor override where defined,
 * or calculated commercial multiplier rounding otherwise.
 */
export function getRegionalPrice(
  baseUsd: number | null,
  marketId: string,
  anchorKey?: string,
  suffix?: string
): string {
  // If custom quote required (null baseUsd)
  if (baseUsd === null) {
    return 'Custom Quotation';
  }

  // 1. Check exact anchor override
  if (anchorKey && PRIMARY_PRICING_ANCHORS[anchorKey]?.[marketId]) {
    const formatted = PRIMARY_PRICING_ANCHORS[anchorKey][marketId];
    return suffix ? `${formatted}${suffix}` : formatted;
  }

  const market = SUPPORTED_MARKETS.find((m) => m.id === marketId) || SUPPORTED_MARKETS[0];

  // USD base returns unmodified exact base
  if (market.id === 'us') {
    const formatted = `$${baseUsd.toLocaleString()}`;
    return suffix ? `${formatted}${suffix}` : formatted;
  }

  // Calculate using regional multiplier with commercial rounding
  const rawConverted = baseUsd * market.multiplier;
  let rounded: number;

  if (market.id === 'ae') {
    // AED rounding: nearest 10 or 25 for commercial presentation
    if (rawConverted < 200) {
      rounded = Math.round(rawConverted / 5) * 5;
    } else if (rawConverted < 1000) {
      rounded = Math.round(rawConverted / 25) * 25;
    } else {
      rounded = Math.round(rawConverted / 50) * 50 - 1; // e.g. 1499, 1999
    }
  } else if (market.id === 'uk' || market.id === 'ie' || market.id === 'eu') {
    // EUR and GBP rounding
    if (rawConverted < 100) {
      rounded = Math.round(rawConverted);
    } else if (rawConverted < 500) {
      rounded = Math.round(rawConverted / 5) * 5 - 1; // e.g. 79, 149, 299
    } else {
      rounded = Math.round(rawConverted / 10) * 10 - 1; // e.g. 899, 1599
    }
  } else {
    // CAD, AUD, NZD rounding
    if (rawConverted < 100) {
      rounded = Math.round(rawConverted);
    } else if (rawConverted < 500) {
      rounded = Math.round(rawConverted / 5) * 5 - 1;
    } else {
      rounded = Math.round(rawConverted / 10) * 10 - 1;
    }
  }

  const formatted = `${market.currencySymbol}${rounded.toLocaleString()}`;
  return suffix ? `${formatted}${suffix}` : formatted;
}

export interface PricingSubService {
  name: string;
  baseUsd: number | null; // null represents custom quotation
  anchorKey?: string;
  unitSuffix?: string; // e.g. '/month', '/device', '/hour', '/year plus reg'
  description?: string;
}

export interface PricingServiceCategory {
  categoryTitle: string;
  categoryTag: string;
  description: string;
  services: PricingSubService[];
}

export interface DivisionPricingData {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  iconName: 'Globe' | 'Server' | 'MapPin' | 'Bot' | 'Camera';
  description: string;
  categories: PricingServiceCategory[];
  featuredPackages?: {
    name: string;
    badge?: string;
    priceUsd: number;
    anchorKey?: string;
    billingInterval: string;
    description: string;
    features: string[];
  }[];
  disclaimer?: string;
}

export const DIVISIONS_PRICING: DivisionPricingData[] = [
  // ============================================================================
  // DIVISION 01: WEB DEVELOPMENT
  // ============================================================================
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    shortTitle: 'Web Development',
    iconName: 'Globe',
    description:
      'Design, develop and maintain professional digital experiences. From business websites to sophisticated e-commerce platforms, we build responsive, functional and scalable websites that help businesses establish and grow their online presence.',
    categories: [
      {
        categoryTitle: 'Web Design, UI/UX & Web Development',
        categoryTag: '01.A',
        description:
          'Responsive design, mobile-first layouts, foundational SEO, inquiry forms, and deployment.',
        services: [
          { name: 'Landing page design and development', baseUsd: 549 },
          { name: 'Starter business website (up to 5 pages)', baseUsd: 1199, anchorKey: 'starter-website' },
          { name: 'Business website (8–12 pages)', baseUsd: 2199, anchorKey: 'business-website' },
          { name: 'Professional website redesign', baseUsd: 799 },
          { name: 'Additional website page', baseUsd: 100 },
          { name: 'Custom website development', baseUsd: 3500 },
        ],
      },
      {
        categoryTitle: 'E-commerce & Web Applications',
        categoryTag: '01.B',
        description:
          'Online stores, payment gateway integrations, booking systems, and scalable web apps.',
        services: [
          { name: 'Basic e-commerce website', baseUsd: 2999 },
          { name: 'Advanced e-commerce website', baseUsd: 4999 },
          { name: 'Product catalogue implementation', baseUsd: 199 },
          { name: 'Payment gateway integration', baseUsd: 149 },
          { name: 'Booking system integration', baseUsd: 199 },
          { name: 'Custom web application', baseUsd: 3500 },
          { name: 'API integration', baseUsd: 199 },
        ],
      },
      {
        categoryTitle: 'Website Maintenance & Management',
        categoryTag: '01.C',
        description:
          'Proactive security monitoring, core/plugin patches, offsite cloud backups, and content updates.',
        services: [
          { name: 'Essential Care package', baseUsd: 49, unitSuffix: '/month' },
          { name: 'Business Care package', baseUsd: 99, anchorKey: 'business-care', unitSuffix: '/month' },
          { name: 'Growth Care package', baseUsd: 179, unitSuffix: '/month' },
        ],
      },
      {
        categoryTitle: 'SEO, Hosting & Website Care',
        categoryTag: '01.D',
        description:
          'Technical SEO audits, DNS/hosting care, speed acceleration, and malware recovery.',
        services: [
          { name: 'Technical SEO setup', baseUsd: 299 },
          { name: 'Website hosting management', baseUsd: 15, unitSuffix: '/month' },
          { name: 'Domain management', baseUsd: 20, unitSuffix: '/year + registration cost' },
          { name: 'Website migration', baseUsd: 199 },
          { name: 'Website speed optimisation', baseUsd: 149 },
          { name: 'Malware cleanup', baseUsd: 149 },
          { name: 'Website recovery', baseUsd: 199 },
        ],
      },
    ],
    featuredPackages: [
      {
        name: 'Essential Care',
        priceUsd: 49,
        billingInterval: '/month',
        description: 'For small business & informational websites needing baseline security and reliability.',
        features: [
          'Monthly CMS, theme & plugin updates',
          'Routine automated cloud backups',
          'Basic security & malware scans',
          '24/7 uptime monitoring & alerts',
          'Basic technical email assistance',
        ],
      },
      {
        name: 'Business Care',
        badge: 'Most Popular',
        priceUsd: 99,
        anchorKey: 'business-care',
        billingInterval: '/month',
        description: 'For growing businesses where inquiries and speed are critical to daily operations.',
        features: [
          'Everything in Essential Care',
          'Bi-weekly staging-tested updates',
          'Security monitoring & WAF tuning',
          'Core Web Vitals & speed checks',
          'Minor content updates (text/banners)',
          'Priority email & WhatsApp support',
          'Monthly maintenance summary report',
        ],
      },
      {
        name: 'Growth Care',
        priceUsd: 179,
        billingInterval: '/month',
        description: 'Comprehensive technical management for e-commerce, tourism & real estate platforms.',
        features: [
          'Everything in Business Care',
          'Enhanced performance monitoring',
          'Additional content & catalogue assistance',
          'Booking engine & checkout test checks',
          'Weekly technical inspection',
          'Priority technical support & SLA',
          'Detailed monthly executive reporting',
        ],
      },
    ],
    disclaimer:
      'Complex custom functionality, third-party subscriptions, hosting infrastructure, domain fees, and advanced web applications require individualized quotations.',
  },

  // ============================================================================
  // DIVISION 02: IT SUPPORT & INFRASTRUCTURE
  // ============================================================================
  {
    id: 'it-support',
    number: '02',
    title: 'IT Support & Infrastructure',
    shortTitle: 'IT Support',
    iconName: 'Server',
    description:
      'Reliable technology support, infrastructure management and practical security solutions that help businesses operate efficiently.',
    categories: [
      {
        categoryTitle: 'Hardware & Device Support',
        categoryTag: '02.A',
        description: 'Workstation deployment, computer troubleshooting, and hardware lifecycle setup.',
        services: [
          { name: 'Device setup and configuration', baseUsd: 49, unitSuffix: '/device' },
          { name: 'Computer troubleshooting', baseUsd: 59, unitSuffix: '/hour' },
          { name: 'Hardware assessment', baseUsd: 49 },
          { name: 'New device deployment', baseUsd: 79, unitSuffix: '/device' },
          { name: 'Business workstation setup', baseUsd: 99, unitSuffix: '/device' },
        ],
      },
      {
        categoryTitle: 'Software & System Support',
        categoryTag: '02.B',
        description: 'Operating systems, Microsoft 365 migrations, and email infrastructure.',
        services: [
          { name: 'Software installation and configuration', baseUsd: 49 },
          { name: 'Operating system troubleshooting', baseUsd: 59 },
          { name: 'Microsoft 365 setup', baseUsd: 149 },
          { name: 'Microsoft 365 migration', baseUsd: 299 },
          { name: 'Email configuration', baseUsd: 49 },
          { name: 'Software troubleshooting', baseUsd: 59, unitSuffix: '/hour' },
        ],
      },
      {
        categoryTitle: 'Networking & Wi-Fi',
        categoryTag: '02.C',
        description: 'Commercial routers, network assessments, and business Wi-Fi optimization.',
        services: [
          { name: 'Network assessment', baseUsd: 99 },
          { name: 'Wi-Fi troubleshooting', baseUsd: 79 },
          { name: 'Router configuration', baseUsd: 79 },
          { name: 'Network installation', baseUsd: null },
          { name: 'Business network optimisation', baseUsd: 149 },
        ],
      },
      {
        categoryTitle: 'Cybersecurity & IT Security',
        categoryTag: '02.D',
        description: 'Endpoint hardening, security reviews, malware checks, and risk assessments.',
        services: [
          { name: 'Basic cybersecurity review', baseUsd: 199 },
          { name: 'Security configuration', baseUsd: 149 },
          { name: 'Device security configuration', baseUsd: 49, unitSuffix: '/device' },
          { name: 'Malware assessment', baseUsd: 99 },
          { name: 'Business IT security assessment', baseUsd: 299 },
        ],
      },
    ],
    featuredPackages: [
      {
        name: 'Essential IT Support',
        priceUsd: 199,
        anchorKey: 'it-support',
        billingInterval: '/month',
        description: 'Remote workstation troubleshooting and basic helpdesk for small offices (up to 5 users).',
        features: [
          'Remote helpdesk support allowance',
          'Operating system & driver updates',
          'Antivirus & security patch checks',
          'Microsoft 365 / email support',
          'Business hours response target',
        ],
      },
      {
        name: 'Business IT Support',
        badge: 'Recommended',
        priceUsd: 399,
        billingInterval: '/month',
        description: 'Comprehensive IT management for teams (up to 15 users) with network and cloud care.',
        features: [
          'Priority remote helpdesk & ticketing',
          'Workstation & laptop monitoring',
          'Wi-Fi & network performance tuning',
          'Cloud backup monitoring & verification',
          'Quarterly IT security assessment',
          'Fast 2-hour response target',
        ],
      },
      {
        name: 'Managed IT Support',
        priceUsd: 799,
        billingInterval: '/month',
        description: 'End-to-end IT infrastructure partnership for multi-department organizations (up to 30 users).',
        features: [
          'Comprehensive multi-device management',
          'Proactive endpoint detection & defense',
          'VLAN, switch & router administration',
          'Disaster recovery planning & drills',
          'Dedicated senior technical point-of-contact',
          'Priority 1-hour critical SLA response',
        ],
      },
    ],
    disclaimer:
      'Monthly IT packages include defined user/device limits and remote allowances. Hardware, software licences, onsite cabling, and third-party subscriptions are separately charged.',
  },

  // ============================================================================
  // DIVISION 03: DIGITAL PRESENCE & BRANDING
  // ============================================================================
  {
    id: 'digital-presence',
    number: '03',
    title: 'Digital Presence & Branding',
    shortTitle: 'Digital Presence',
    iconName: 'MapPin',
    description:
      'Build a consistent brand, strengthen your online visibility and attract more relevant customers through effective branding, digital marketing and search optimisation.',
    categories: [
      {
        categoryTitle: 'Brand Identity & Logo Design',
        categoryTag: '03.A',
        description: 'Logo marks, corporate identity systems, brand guidelines, and stationery design.',
        services: [
          { name: 'Basic logo design', baseUsd: 199 },
          { name: 'Logo and brand identity package', baseUsd: 399 },
          { name: 'Complete brand identity system', baseUsd: 699 },
          { name: 'Brand guidelines', baseUsd: 199 },
          { name: 'Business stationery design', baseUsd: 99 },
          { name: 'Social media brand templates', baseUsd: 99 },
        ],
      },
      {
        categoryTitle: 'Social Media & Content',
        categoryTag: '03.B',
        description: 'Branded posts, content calendars, short-form video editing, and copywriting.',
        services: [
          { name: 'Social media account setup', baseUsd: 149 },
          { name: '8-post monthly package', baseUsd: 299, unitSuffix: '/month' },
          { name: '12-post monthly package', baseUsd: 449, unitSuffix: '/month' },
          { name: '20-post monthly package', baseUsd: 699, unitSuffix: '/month' },
          { name: 'Short-form video editing', baseUsd: 35, unitSuffix: '/video' },
          { name: 'Social media graphic design', baseUsd: 25, unitSuffix: '/design' },
          { name: 'Content writing', baseUsd: 50, unitSuffix: '/article' },
        ],
      },
      {
        categoryTitle: 'Business Profiles & Local Presence',
        categoryTag: '03.C',
        description: 'Setup and optimization for Google Business Profile, Apple Maps, and Bing Places.',
        services: [
          { name: 'Google Business Profile setup', baseUsd: 149 },
          { name: 'Google Business Profile optimisation', baseUsd: 199 },
          { name: 'Monthly profile management', baseUsd: 149, unitSuffix: '/month' },
          { name: 'Apple Business Connect setup', baseUsd: 99 },
          { name: 'Bing Places setup', baseUsd: 99 },
          { name: 'Multiple platform profile setup', baseUsd: 249 },
        ],
      },
      {
        categoryTitle: 'Digital Marketing & Growth',
        categoryTag: '03.D',
        description: 'SEO audits, local search rankings, AEO / AI search visibility, and paid ad management.',
        services: [
          { name: 'Comprehensive SEO audit', baseUsd: 149 },
          { name: 'SEO implementation', baseUsd: 299 },
          { name: 'Local SEO management', baseUsd: 399, anchorKey: 'local-seo', unitSuffix: '/month' },
          { name: 'Growth SEO management', baseUsd: 699, unitSuffix: '/month' },
          { name: 'Advanced SEO management', baseUsd: 1199, unitSuffix: '/month' },
          { name: 'AEO implementation', baseUsd: 249 },
          { name: 'AI search optimisation setup', baseUsd: 499 },
          { name: 'Ongoing AEO management', baseUsd: 199, unitSuffix: '/month' },
          { name: 'Google Ads campaign setup', baseUsd: 149 },
          { name: 'Google Ads management', baseUsd: 199, unitSuffix: '/month' },
          { name: 'Meta Ads campaign setup', baseUsd: 149 },
          { name: 'Social advertising management', baseUsd: 199, unitSuffix: '/month' },
        ],
      },
    ],
    disclaimer:
      'Advertising spend, paid influencer fees, photography, and third-party media production are separate from agency management fees. Third-party platform verification (Google/Apple) depends on platform policies.',
  },

  // ============================================================================
  // DIVISION 04: AI AUTOMATION
  // ============================================================================
  {
    id: 'ai-automation',
    number: '04',
    title: 'AI Automation',
    shortTitle: 'AI Automation',
    iconName: 'Bot',
    description:
      'Make your business more efficient through intelligent customer communication, automated workflows, AI-powered lead management and virtual assistants.',
    categories: [
      {
        categoryTitle: 'AI Voice Assistants',
        categoryTag: '04.A',
        description: 'Inbound customer service, booking call agents, and telephony routing.',
        services: [
          { name: 'Basic AI voice assistant', baseUsd: 1499 },
          { name: 'Business voice automation', baseUsd: 1999 },
          { name: 'Advanced voice assistant', baseUsd: 2999 },
          { name: 'Voice workflow integration', baseUsd: 299 },
        ],
      },
      {
        categoryTitle: 'WhatsApp & Chat Automation',
        categoryTag: '04.B',
        description: 'Website FAQ bots, official WhatsApp Business API pipelines, and triage.',
        services: [
          { name: 'Website FAQ chatbot', baseUsd: 499, anchorKey: 'ai-chatbot' },
          { name: 'WhatsApp automation', baseUsd: 899 },
          { name: 'Multichannel chatbot', baseUsd: 999 },
          { name: 'Customer inquiry automation', baseUsd: 399 },
        ],
      },
      {
        categoryTitle: 'AI Lead Generation',
        categoryTag: '04.C',
        description: 'Lead capture forms, automated qualification pipelines, and CRM entry.',
        services: [
          { name: 'Lead capture automation', baseUsd: 299 },
          { name: 'Lead qualification workflow', baseUsd: 499 },
          { name: 'CRM lead automation', baseUsd: 699 },
          { name: 'Automated lead follow-up', baseUsd: 299 },
        ],
      },
      {
        categoryTitle: 'Workflow & Business Automation',
        categoryTag: '04.D',
        description: 'Zapier, Make, and custom API webhooks connecting CRM, billing, and teams.',
        services: [
          { name: 'Basic workflow automation', baseUsd: 299 },
          { name: 'CRM automation', baseUsd: 699 },
          { name: 'Appointment automation', baseUsd: 399 },
          { name: 'Business workflow integration', baseUsd: 799 },
          { name: 'Advanced custom automation', baseUsd: 1499 },
        ],
      },
    ],
    featuredPackages: [
      {
        name: 'AI Smart Desk (Flagship)',
        badge: 'Turnkey Solution',
        priceUsd: 2499,
        billingInterval: 'setup + $349/month',
        description:
          'End-to-end intelligent inbound front desk across website, WhatsApp, and CRM.',
        features: [
          'AI-powered 24/7 customer communication',
          'Website conversational chat integration',
          'WhatsApp Business automation where supported',
          'Lead capture & instant qualification logic',
          'Automated calendar booking & appointment sync',
          'CRM connectivity (HubSpot, Zoho, Sheets)',
          'Automated multi-step follow-ups',
          'Intelligent human handoff escalation',
          'Ongoing technical management & prompt tuning',
        ],
      },
    ],
    disclaimer:
      'AI services may involve separate third-party usage fees for Meta WhatsApp conversation charges, voice telephony minutes (Twilio/Vapi), LLM model token usage, and CRM subscriptions. These are billed directly at cost by the underlying providers.',
  },

  // ============================================================================
  // DIVISION 05: SECURITY & SURVEILLANCE
  // ============================================================================
  {
    id: 'security-surveillance',
    number: '05',
    title: 'Security & Surveillance',
    shortTitle: 'Security & CCTV',
    iconName: 'Camera',
    description:
      'Professional security infrastructure, video surveillance and access management solutions designed to improve visibility, control and operational security.',
    categories: [
      {
        categoryTitle: 'CCTV & Video Surveillance',
        categoryTag: '05.A',
        description: 'Commercial IP cameras, NVR/DVR storage, and multi-camera site plans.',
        services: [
          { name: 'CCTV consultation', baseUsd: 99 },
          { name: 'CCTV site assessment', baseUsd: 149 },
          { name: 'Remote CCTV configuration', baseUsd: 99 },
          { name: 'NVR/DVR configuration', baseUsd: 149 },
          { name: 'CCTV system installation', baseUsd: null },
          { name: 'Multi-camera deployment', baseUsd: null },
        ],
      },
      {
        categoryTitle: 'Access Control & Biometrics',
        categoryTag: '05.B',
        description: 'Keycard entryway access, biometric terminals, and attendance logs.',
        services: [
          { name: 'Access control assessment', baseUsd: 99 },
          { name: 'Basic access control configuration', baseUsd: 249 },
          { name: 'Biometric system configuration', baseUsd: 299 },
          { name: 'Access control deployment', baseUsd: null },
          { name: 'Advanced integration', baseUsd: null },
        ],
      },
      {
        categoryTitle: 'Remote Monitoring & Security Systems',
        categoryTag: '05.C',
        description: 'Secure mobile smartphone streaming, motion alerts, and remote operations.',
        services: [
          { name: 'Remote monitoring configuration', baseUsd: 149 },
          { name: 'CCTV mobile access setup', baseUsd: 99 },
          { name: 'Remote security system configuration', baseUsd: 149 },
          { name: 'Monitoring integration', baseUsd: null },
        ],
      },
      {
        categoryTitle: 'Security Maintenance & Upgrades',
        categoryTag: '05.D',
        description: 'Health audits, camera replacement labor, and routine firmware upkeep.',
        services: [
          { name: 'CCTV system health assessment', baseUsd: 99 },
          { name: 'CCTV maintenance', baseUsd: 149 },
          { name: 'Camera replacement labour', baseUsd: null },
          { name: 'Security system upgrade', baseUsd: 149 },
          { name: 'Security system troubleshooting', baseUsd: 79, unitSuffix: '/hour' },
        ],
      },
    ],
    disclaimer:
      'Physical CCTV equipment, camera units, NVR recorders, hard drives, structured Cat6 cabling, mounting hardware, and onsite physical installation labor are separately quoted following a site survey.',
  },
];

// ============================================================================
// BUNDLED SOLUTIONS
// ============================================================================
export interface SolutionBundle {
  title: string;
  badge?: string;
  basePriceUsd: number;
  priceSuffix: string;
  description: string;
  inclusions: string[];
}

export const SOLUTION_BUNDLES: SolutionBundle[] = [
  {
    title: 'Website Launch Bundle',
    basePriceUsd: 1399,
    priceSuffix: 'one-time',
    description: 'Everything a new business needs to establish an authoritative digital presence.',
    inclusions: [
      'Five-page custom business website',
      'Mobile-first responsive design',
      'Essential contact & inquiry forms',
      'Basic SEO & Schema metadata',
      'Deployment assistance & domain setup',
      'Initial handover & training walkthrough',
    ],
  },
  {
    title: 'Business Growth Bundle',
    badge: 'Popular for Growth',
    basePriceUsd: 1999,
    priceSuffix: 'one-time',
    description: 'Designed for businesses actively seeking inbound client acquisition from search.',
    inclusions: [
      'Custom 8–12 page business website',
      'Technical SEO & Core Web Vitals tuning',
      'Google Business Profile setup where eligible',
      'Business email & DNS configuration',
      'Initial digital presence optimization',
      'WhatsApp quick-inquiry integration',
    ],
  },
  {
    title: 'Website Care Bundle',
    basePriceUsd: 99,
    priceSuffix: '/month',
    description: 'Proactive engineering maintenance to prevent downtime, hacks, and broken forms.',
    inclusions: [
      'Staging-first core & plugin updates',
      'Automated off-site cloud backups',
      '24/7 uptime monitoring & instant alerts',
      'Security firewall & malware defense',
      'Minor monthly content & banner updates',
      'Priority email & WhatsApp technical support',
    ],
  },
  {
    title: 'Business Automation Bundle',
    basePriceUsd: 999,
    priceSuffix: 'setup',
    description: 'Eliminate repetitive inquiry handling and speed up customer response times.',
    inclusions: [
      'Conversational website FAQ chatbot',
      'Automated lead capture & validation',
      'One primary workflow (Form to CRM/Email)',
      'Initial API webhook integration',
      'Multi-device testing and live deployment',
      'Team operational documentation',
    ],
  },
  {
    title: 'Complete AI Smart Desk',
    badge: 'Enterprise Automation',
    basePriceUsd: 2499,
    priceSuffix: 'setup + $349/month',
    description: 'The complete AI customer communication and appointment dispatch pipeline.',
    inclusions: [
      '24/7 AI-powered customer assistance',
      'Website chat & WhatsApp integration',
      'End-to-end AI workflow automation',
      'Deep CRM & Google Calendar connectivity',
      'Automated multi-step follow-ups',
      'Intelligent human handoff alerts',
      'Ongoing technical management & prompt tuning',
    ],
  },
];

// ============================================================================
// FREQUENTLY ASKED QUESTIONS (15 Core Questions)
// ============================================================================
export const PRICING_FAQS = [
  {
    question: 'How do Botlytices pricing packages work?',
    answer:
      'We operate on transparent starting prices based on standard project scopes. For one-time projects (such as website development or AI setup), we provide fixed-price milestones. For continuous services (such as website maintenance, IT support, or SEO), we offer flexible monthly packages with clearly defined inclusions and response targets.',
  },
  {
    question: 'Can I request a custom quotation?',
    answer:
      'Yes. If your requirements involve specific custom integrations, multiple locations, bespoke web applications, or custom hardware setups, you can submit an inquiry through our quote form or chat directly with our engineering team on WhatsApp to receive a detailed, itemized quotation.',
  },
  {
    question: 'Do you work with businesses outside your home country?',
    answer:
      'Yes. Botlytices is an international digital and technology services company. Operating remotely from Pakistan, we serve clients worldwide across the United States, United Kingdom, Canada, Australia, New Zealand, Ireland, Europe, and the United Arab Emirates.',
  },
  {
    question: 'Can I pay in my local currency?',
    answer:
      'Yes. We support invoicing and commercial payments in USD ($), GBP (£), CAD (C$), AUD (A$), NZD (NZ$), EUR (€), and AED, using secure international bank transfers, Stripe, and approved merchant channels.',
  },
  {
    question: 'Are website hosting and domain registration included in website prices?',
    answer:
      'Initial deployment and technical DNS configuration are included in our website packages. However, recurring domain registration fees and hosting server subscriptions are third-party infrastructure expenses paid to your preferred provider or managed through our monthly hosting service ($15/month).',
  },
  {
    question: 'What is the difference between website maintenance and development?',
    answer:
      'Website maintenance covers routine operational health: software updates, security scans, offsite cloud backups, uptime monitoring, and small text/image adjustments. New feature development—such as building new custom booking engines, redesigning whole sections, or coding custom portals—constitutes separate project development work.',
  },
  {
    question: 'Are SEO services billed monthly?',
    answer:
      'Initial technical SEO setup and audits can be performed as one-time project engagements. Ongoing Local SEO, Growth SEO, and AEO (AI Search Visibility) require continuous content optimization, citation management, technical indexing checks, and reporting, which are billed on a flexible monthly retainer.',
  },
  {
    question: 'Do you guarantee Google rankings?',
    answer:
      'No honest technology agency can guarantee a specific #1 rank on Google, because search algorithms and competitor actions are controlled by third-party search engines. We strictly follow Google Search Essentials and white-hat technical SEO practices to maximize organic visibility, technical speed, and indexability.',
  },
  {
    question: 'Are AI voice and WhatsApp usage charges included?',
    answer:
      'Our AI fees cover engineering, prompt programming, custom workflow logic, and platform integration. Third-party usage fees (such as Meta WhatsApp Business conversation fees, telephony voice minutes via Twilio, and LLM token usage) are billed directly at cost by the respective providers based on your actual customer volume.',
  },
  {
    question: 'Can I purchase more than one service or bundle services together?',
    answer:
      'Yes. Many clients combine web development with ongoing website maintenance, or pair digital presence with AI WhatsApp automation. We offer tailored solution bundles that streamline multiple divisions into a single unified engagement with coordinated delivery.',
  },
  {
    question: 'Do you provide ongoing technical support?',
    answer:
      'Yes. All project deliverables include post-launch support and warranty. For continuous assistance, our monthly maintenance and managed IT contracts provide direct access to senior engineers via email and WhatsApp with priority response SLAs.',
  },
  {
    question: 'How are CCTV installations priced?',
    answer:
      'CCTV consultation and remote NVR/DVR configuration have transparent starting rates. Physical hardware installation, structured Cat6 cabling, camera hardware, and mounting require an initial site assessment or architectural floorplan review to provide an accurate physical labor and hardware quote.',
  },
  {
    question: 'Are third-party software subscriptions included?',
    answer:
      'Third-party software licenses (such as Microsoft 365, Shopify platform fees, Google Workspace, paid WordPress plugins, or Zapier/Make subscriptions) are owned and paid directly by the client to maintain full asset ownership and transparency.',
  },
  {
    question: 'Can I upgrade my service package later?',
    answer:
      'Yes. You can upgrade, expand, or adjust your maintenance, IT support, or SEO packages at any time as your business scales, with prorated billing adjustments.',
  },
  {
    question: 'What happens when additional development work is needed?',
    answer:
      'When you need new custom features, pages, or integrations outside your regular monthly maintenance allowance, we provide a clear written scope and fixed-price quotation for your approval before commencing any work.',
  },
];
