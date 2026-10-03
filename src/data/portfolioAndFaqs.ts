import { IMAGES, DivisionId } from './siteArchitecture';

export type PortfolioFilterTag =
  | 'Web Development'
  | 'UI/UX'
  | 'E-commerce'
  | 'SEO'
  | 'Branding'
  | 'AI Automation'
  | 'IT'
  | 'Security';

export interface PortfolioProject {
  id: string;
  slug: string;
  name: string;
  client: string;
  location: string;
  url?: string;
  industry: string;
  categories: ('Web' | 'Branding' | 'SEO' | 'AI' | 'IT' | 'Security')[];
  filterTags: PortfolioFilterTag[];
  divisionId: DivisionId;
  featuredSpan?: boolean;
  servicesProvided: string[];
  relatedServiceLinks: { label: string; path: string }[];
  shortDescription: string;
  shortResult: string;
  image: string;
  secondaryImage: string;
  mobilePreviewDescription: string;
  challenge: string;
  objective: string;
  strategy: string;
  solution: string;
  designOverview: string;
  developmentOverview: string;
  technology: string[];
  implementation: string[];
  beforeState: string[];
  afterState: string[];
  results: {
    metric: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  ctaText: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aza-kitchens',
    slug: 'aza-kitchens-and-bedrooms',
    name: 'AZA Kitchens & Bedrooms',
    client: 'AZA Kitchens & Bedrooms',
    location: 'United Kingdom',
    url: 'https://azakitchensandbedrooms.co.uk/',
    industry: 'Bespoke Interiors & Showroom Manufacturing',
    categories: ['Web', 'Branding', 'SEO'],
    filterTags: ['Web Development', 'UI/UX', 'SEO', 'Branding'],
    divisionId: 'web-development',
    featuredSpan: true,
    servicesProvided: [
      'Web Design & UI/UX',
      'Web Development',
      'SEO, Hosting & Website Care',
      'Business Profiles & Local Presence',
    ],
    relatedServiceLinks: [
      { label: 'Web Design & UI/UX', path: '/services/web-development/web-design-ui-ux' },
      { label: 'Web Development', path: '/services/web-development/web-development' },
      { label: 'SEO, Hosting & Website Care', path: '/services/web-development/seo-hosting-website-care' },
      { label: 'Business Profiles & Local Presence', path: '/services/digital-presence/business-profiles' },
    ],
    shortDescription:
      'A custom showroom website and local search presence built to showcase fitted kitchens and bedrooms and capture home design consultation requests.',
    shortResult: 'Structured showroom product galleries, mobile-first consultation booking, and verified UK local search presence.',
    image: IMAGES.azaKitchensImg,
    secondaryImage: IMAGES.heroLaptopStudio,
    mobilePreviewDescription:
      'Thumb-friendly mobile gallery navigation with persistent consultation request actions and fast image rendering.',
    challenge:
      'AZA Kitchens & Bedrooms needed a modern digital showroom capable of presenting bespoke kitchen and fitted bedroom collections clearly while making it simple for homeowners to book a design consultation.',
    objective:
      'Create a fast, trustworthy website that highlights craftsmanship, organizes product ranges logically, ranks for local showroom searches, and streamlines consultation inquiries.',
    strategy:
      'Design a visual-first showroom architecture with structured category pages, fast mobile image delivery, LocalBusiness schema markup, and clear consultation request forms.',
    solution:
      'Built a custom responsive website paired with an optimized Google Business Profile, structured on-page SEO, and managed cloud hosting.',
    designOverview:
      'Clean white architectural grid that gives full prominence to kitchen and bedroom photography, supported by clear typography and high-contrast call-to-action buttons.',
    developmentOverview:
      'Engineered with responsive breakpoints, optimized WebP imagery, semantic HTML heading hierarchy, and validated multi-step inquiry capture.',
    technology: ['Modern Responsive Web Stack', 'Figma UI/UX System', 'Schema.org LocalBusiness', 'SSL Cloud Hosting', 'Google Business Profile'],
    implementation: [
      'Information architecture mapping for kitchen and fitted bedroom collections',
      'Responsive desktop and mobile interface design in Figma',
      'Frontend development, gallery optimization, and consultation form integration',
      'On-page SEO, XML sitemap setup, and live cloud deployment',
    ],
    beforeState: [
      'Limited online presentation of bespoke showroom ranges',
      'Unstructured mobile browsing experience for product photography',
      'No dedicated digital flow for booking home measure consultations',
    ],
    afterState: [
      'Clear category browsing across kitchens, bedrooms, and showroom services',
      'Fast mobile and desktop performance with SSL security',
      'Direct online consultation booking and local map visibility',
    ],
    results: [
      { metric: 'Live', label: 'azakitchensandbedrooms.co.uk' },
      { metric: 'Mobile-First', label: 'Responsive Showroom UI' },
      { metric: 'SEO + Maps', label: 'Search Structure Deployed' },
    ],
    testimonial: {
      quote:
        'BOTLYTICES delivered a clean, modern website that presents our kitchens and bedrooms professionally and makes it straightforward for customers to request a design consultation.',
      author: 'Showroom Management',
      role: 'Director',
      company: 'AZA Kitchens & Bedrooms',
    },
    ctaText: 'Discuss Your Project',
  },
  {
    id: 'ssdn-travels',
    slug: 'ssdn-travels-platform',
    name: 'SSDN Travels',
    client: 'SSDN Travels',
    location: 'United Kingdom / International',
    url: 'https://ssdntravels.com/',
    industry: 'Travel & Flight Booking Services',
    categories: ['Web', 'AI', 'SEO'],
    filterTags: ['Web Development', 'UI/UX', 'AI Automation', 'SEO'],
    divisionId: 'web-development',
    featuredSpan: false,
    servicesProvided: [
      'Web Design & UI/UX',
      'Web Development',
      'WhatsApp & Chat Automation',
      'SEO, Hosting & Website Care',
    ],
    relatedServiceLinks: [
      { label: 'Web Development', path: '/services/web-development/web-development' },
      { label: 'WhatsApp & Chat Automation', path: '/services/ai-automation/whatsapp-chat' },
      { label: 'SEO, Hosting & Website Care', path: '/services/web-development/seo-hosting-website-care' },
    ],
    shortDescription:
      'A responsive travel and flight inquiry platform combining structured route discovery with direct WhatsApp lead capture.',
    shortResult: 'Streamlined mobile flight inquiry capture connected directly to travel agents via WhatsApp and web forms.',
    image: IMAGES.ssdnTravelsImg,
    secondaryImage: IMAGES.aiSmartDesk,
    mobilePreviewDescription:
      'Mobile-optimized travel date and passenger selector with one-tap WhatsApp inquiry handoff.',
    challenge:
      'Travel customers searching for flights and holiday packages on mobile devices needed a fast way to submit travel dates, destinations, and passenger counts without complicated forms.',
    objective:
      'Build a clean, trustworthy travel website that captures complete trip details upfront and connects customers immediately with booking agents.',
    strategy:
      'Combine clear destination and flight inquiry layouts with direct WhatsApp and form routing so agents receive structured trip data immediately.',
    solution:
      'Designed and developed a responsive travel platform with structured inquiry forms, WhatsApp integration, technical SEO, and fast cloud hosting.',
    designOverview:
      'Bright, accessible travel interface focused on destination clarity, trust signals, and effortless mobile form completion.',
    developmentOverview:
      'Built for fast mobile loading over cellular connections with structured inquiry payloads and clean URL hierarchy.',
    technology: ['Responsive Web Platform', 'WhatsApp Inquiry Integration', 'Technical SEO', 'Managed Cloud Hosting & SSL'],
    implementation: [
      'Structuring flight inquiry and travel package user journeys',
      'Designing mobile-first inquiry cards and navigation',
      'Integrating direct WhatsApp conversation triggers and email notifications',
      'Deploying on fast SSL-secured cloud hosting',
    ],
    beforeState: [
      'Time-consuming back-and-forth required to collect basic passenger trip dates',
      'Difficult mobile navigation for travellers browsing on smartphones',
      'Inconsistent search metadata across destination pages',
    ],
    afterState: [
      'Structured flight and holiday inquiries with complete trip details',
      'Direct mobile WhatsApp and web inquiry workflow',
      'Clean, search-friendly travel platform architecture',
    ],
    results: [
      { metric: 'Live', label: 'ssdntravels.com' },
      { metric: 'WhatsApp + Web', label: 'Connected Lead Capture' },
      { metric: 'Responsive', label: 'Mobile Booking Experience' },
    ],
    testimonial: {
      quote:
        'Our customers reach out primarily from their phones. The new website and WhatsApp inquiry setup made it much easier for travellers to send us their trip requirements.',
      author: 'Operations Team',
      role: 'Management',
      company: 'SSDN Travels',
    },
    ctaText: 'Discuss Your Project',
  },
  {
    id: 'uk-architex',
    slug: 'uk-architex-architecture',
    name: 'UK Architex',
    client: 'UK Architex',
    location: 'United Kingdom',
    url: 'https://ukarchitex.com/',
    industry: 'Architecture, Planning & Structural Design',
    categories: ['Web', 'Branding', 'SEO'],
    filterTags: ['Web Development', 'UI/UX', 'Branding', 'SEO'],
    divisionId: 'web-development',
    featuredSpan: false,
    servicesProvided: [
      'Web Design & UI/UX',
      'Web Development',
      'Brand Identity Alignment',
      'SEO, Hosting & Website Care',
    ],
    relatedServiceLinks: [
      { label: 'Web Design & UI/UX', path: '/services/web-development/web-design-ui-ux' },
      { label: 'Web Development', path: '/services/web-development/web-development' },
      { label: 'Brand Identity & Logo Design', path: '/services/digital-presence/brand-identity' },
    ],
    shortDescription:
      'An architectural digital platform presenting residential and commercial building design, planning permission, and structural services.',
    shortResult: 'Clear architectural service hierarchy, project showcase galleries, and structured client consultation intake.',
    image: IMAGES.ukArchitexImg,
    secondaryImage: IMAGES.caseStudyArchImg,
    mobilePreviewDescription:
      'Crisp mobile typography and structured service breakdowns for homeowners researching planning and building regulations.',
    challenge:
      'Property owners often find planning permission, architectural drawings, and structural calculations confusing. UK Architex needed a website that explained these stages clearly while showcasing completed work.',
    objective:
      'Present UK Architex as an authoritative architectural practice and guide property owners smoothly from initial feasibility to requesting a project quote.',
    strategy:
      'Use an architectural layout system with clear step-by-step service explanations, high-resolution project galleries, and a structured project brief form.',
    solution:
      'Delivered a custom website featuring dedicated service pages, portfolio showcases, technical SEO/AEO structure, and managed hosting.',
    designOverview:
      'Minimalist editorial layout inspired by architectural monographs, pairing strong heading hierarchy with generous whitespace.',
    developmentOverview:
      'Developed with clean semantic HTML, fast image loading, structured schema metadata, and accessible consultation forms.',
    technology: ['Custom Frontend Architecture', 'Figma Design System', 'Schema.org Structured Data', 'Managed Cloud Hosting'],
    implementation: [
      'Mapping architectural, planning, and structural engineering service pages',
      'Designing clean editorial layouts and project showcase templates',
      'Building responsive pages and consultation intake forms',
      'Configuring technical SEO, Search Console, and secure hosting',
    ],
    beforeState: [
      'Complex planning and building regulation services needed clearer online explanation',
      'Lack of a structured portfolio layout for showcasing architectural drawings and builds',
      'Generic contact inquiries missing project type and property details',
    ],
    afterState: [
      'Clear service pages explaining feasibility, planning, and building control',
      'Structured portfolio presentation that builds immediate homeowner trust',
      'Focused consultation inquiries with relevant project context',
    ],
    results: [
      { metric: 'Live', label: 'ukarchitex.com' },
      { metric: 'Structured', label: 'Service & Planning Architecture' },
      { metric: 'Custom UI/UX', label: 'Architectural Brand Fit' },
    ],
    testimonial: {
      quote:
        'Visual precision and clarity are essential in architecture. BOTLYTICES built a website that explains our services clearly and represents our practice professionally.',
      author: 'Practice Principal',
      role: 'Architectural Lead',
      company: 'UK Architex',
    },
    ctaText: 'Discuss Your Project',
  },
  {
    id: 'meridian-logistics-it',
    slug: 'meridian-commercial-network-and-it',
    name: 'Commercial Office & Warehouse Network Infrastructure',
    client: 'Commercial Distribution Facility',
    location: 'United Kingdom',
    industry: 'Commercial Operations & Logistics',
    categories: ['IT', 'Security'],
    filterTags: ['IT', 'Security'],
    divisionId: 'it-support',
    featuredSpan: true,
    servicesProvided: [
      'Networking & Wi-Fi',
      'Hardware & Device Support',
      'Software & System Support',
      'Cybersecurity & IT Security',
    ],
    relatedServiceLinks: [
      { label: 'Networking & Wi-Fi', path: '/services/it-support/networking-wifi' },
      { label: 'Hardware & Device Support', path: '/services/it-support/hardware-device-support' },
      { label: 'Software & System Support', path: '/services/it-support/software-system-support' },
      { label: 'Cybersecurity & IT Security', path: '/services/it-support/cybersecurity' },
    ],
    shortDescription:
      'Structured Cat6 cabling, managed PoE switching, commercial Wi-Fi roaming, workstation SSD upgrades, and defensive endpoint security.',
    shortResult: 'Reorganized patch rack, segmented VLANs, full-premises commercial Wi-Fi coverage, and standardized Microsoft 365 workstations.',
    image: IMAGES.datacenterNetworking,
    secondaryImage: IMAGES.hardwareMonolith,
    mobilePreviewDescription:
      'Centralized network controller dashboard monitoring switch ports, VLAN traffic, and wireless access points.',
    challenge:
      'Wi-Fi dead zones between the office and warehouse floor, an unlabeled patch cabinet, slow desktop PCs, and unstandardized user accounts were causing daily operational delays.',
    objective:
      'Establish a reliable, neatly documented wired and wireless network alongside fast, secure workstations and Microsoft 365 administration.',
    strategy:
      'Re-terminate and label structured cabling into a clean patch panel, deploy managed PoE switches with ceiling-mounted commercial Wi-Fi access points, upgrade viable PCs with NVMe SSDs, and enforce MFA/EDR security.',
    solution:
      'Delivered a complete physical and cloud IT overhaul covering structured Cat6 cabling, VLAN segmentation (Staff, Guest, VoIP, CCTV), hardware upgrades, and defensive security policies.',
    designOverview:
      'Logical network topology separating corporate workstations, warehouse devices, security cameras, and guest Wi-Fi into isolated VLANs.',
    developmentOverview:
      'Configured hardware firewalls, managed PoE+ switches, roaming wireless controllers, Microsoft 365 tenants, and automated off-site backups.',
    technology: ['Cat6 Structured Cabling', 'Managed PoE+ Switches', 'Commercial Wi-Fi Access Points', 'VLAN Segmentation', 'Microsoft 365', 'Endpoint EDR'],
    implementation: [
      'On-site wireless signal audit and structured cable tracing',
      'Server rack reorganization, patch panel termination, and PoE switch setup',
      'Ceiling access point installation and VLAN security configuration',
      'Workstation SSD/RAM upgrades, printer mapping, and MFA/backup enforcement',
    ],
    beforeState: [
      'Dropped wireless connections in meeting rooms and warehouse aisles',
      'Tangled, unlabeled network rack making troubleshooting difficult',
      'Slow desktop boot times and shared user account credentials',
    ],
    afterState: [
      'Seamless commercial Wi-Fi coverage across office and warehouse zones',
      'Clean, labeled patch rack with isolated staff and guest VLANs',
      'Fast, encrypted workstations with centralized Microsoft 365 accounts',
    ],
    results: [
      { metric: 'Cat6 + PoE', label: 'Structured Rack & Switching' },
      { metric: '4 VLANs', label: 'Segmented Network Security' },
      { metric: 'M365 + EDR', label: 'Protected Workstations' },
    ],
    ctaText: 'Discuss Your Project',
  },
  {
    id: 'premier-dental-ai',
    slug: 'service-business-ai-voice-and-whatsapp-automation',
    name: '24/7 AI Voice Assistant, WhatsApp & CRM Workflow System',
    client: 'Private Service & Consultation Practice',
    location: 'Remote / Cloud Deployment',
    industry: 'Appointment-Based Service Business',
    categories: ['AI', 'Branding'],
    filterTags: ['AI Automation', 'Web Development'],
    divisionId: 'ai-automation',
    featuredSpan: false,
    servicesProvided: [
      'AI Voice Assistants',
      'WhatsApp & Chat Automation',
      'Workflow & Business Automation',
      'AI Lead Generation',
    ],
    relatedServiceLinks: [
      { label: 'AI Voice Assistants', path: '/services/ai-automation/voice-assistants' },
      { label: 'WhatsApp & Chat Automation', path: '/services/ai-automation/whatsapp-chat' },
      { label: 'Workflow & Business Automation', path: '/services/ai-automation/workflow-automation' },
    ],
    shortDescription:
      'An integrated inbound phone voice assistant and WhatsApp Business automation workflow connected to live calendar booking and CRM records.',
    shortResult: 'Instant 24/7 response to phone and WhatsApp inquiries, automated lead qualification, and direct calendar synchronization.',
    image: IMAGES.aiExecDesk,
    secondaryImage: IMAGES.localPresence,
    mobilePreviewDescription:
      'WhatsApp Business automated qualification flow with instant human handoff notifications and CRM contact creation.',
    challenge:
      'Reception and sales staff were missing inbound calls and WhatsApp messages during busy consultations and after business hours, while manually copying inquiry details into spreadsheets.',
    objective:
      'Ensure every phone call and WhatsApp inquiry is answered politely 24/7, common questions are resolved accurately, and qualified leads are booked and logged into the CRM automatically.',
    strategy:
      'Train an AI Voice Assistant and official WhatsApp Business assistant on the company’s approved service guide, connect them to live calendar availability via n8n/API workflows, and configure human handoff rules.',
    solution:
      'Implemented a complete automated intake desk covering overflow/after-hours phone calls, WhatsApp Business replies, website chat, calendar booking, and CRM synchronization.',
    designOverview:
      'Clear conversational flows designed to sound natural and helpful while always offering a direct transfer to a human team member when requested.',
    developmentOverview:
      'Integrated telephony SIP/forwarding, Meta WhatsApp Cloud API, calendar availability webhooks, and n8n multi-step CRM automation.',
    technology: ['AI Voice Assistant', 'WhatsApp Business Cloud API', 'n8n Workflow Automation', 'Google / Outlook Calendar API', 'CRM Webhooks'],
    implementation: [
      'Structuring service FAQs, pricing guidelines, and qualification questions',
      'Configuring conditional call forwarding and WhatsApp Business API webhooks',
      'Building n8n automation pipelines for calendar booking and CRM updates',
      'End-to-end call and chat scenario testing with staff handoff alerts',
    ],
    beforeState: [
      'After-hours and busy-hour calls going to voicemail',
      'Hours of delay replying to repetitive WhatsApp service questions',
      'Manual copy-pasting of lead contact details into calendars and spreadsheets',
    ],
    afterState: [
      'Immediate 24/7 response across phone and WhatsApp channels',
      'Automated collection of customer name, service needed, and preferred time',
      'Automatic CRM logging and instant team notifications for complex inquiries',
    ],
    results: [
      { metric: '24/7', label: 'Phone & WhatsApp Coverage' },
      { metric: 'n8n + API', label: 'Automated CRM & Calendar Sync' },
      { metric: 'Live Handoff', label: 'Human Escalation Ready' },
    ],
    ctaText: 'Discuss Your Project',
  },
  {
    id: 'apex-commercial-security',
    slug: 'commercial-4k-cctv-and-biometric-access',
    name: 'Commercial 4K IP CCTV & Biometric Door Access Deployment',
    client: 'Commercial Premises & Warehouse',
    location: 'On-Site Installation',
    industry: 'Commercial Property & Facilities',
    categories: ['Security', 'IT'],
    filterTags: ['Security', 'IT'],
    divisionId: 'security-surveillance',
    featuredSpan: false,
    servicesProvided: [
      'CCTV & Video Surveillance',
      'Access Control & Biometrics',
      'Remote Monitoring & Security Systems',
      'Security Maintenance & Upgrades',
    ],
    relatedServiceLinks: [
      { label: 'CCTV & Video Surveillance', path: '/services/security-surveillance/cctv' },
      { label: 'Access Control & Biometrics', path: '/services/security-surveillance/access-control' },
      { label: 'Remote Monitoring & Security Systems', path: '/services/security-surveillance/remote-monitoring' },
      { label: 'Security Maintenance & Upgrades', path: '/services/security-surveillance/maintenance' },
    ],
    shortDescription:
      'High-definition 4K PoE IP surveillance cameras, NVR storage, facial/RFID door access control, and encrypted mobile monitoring.',
    shortResult: 'Eliminated perimeter blind spots with 4K day/night cameras, secured entry doors with biometric/RFID readers, and enabled mobile viewing.',
    image: IMAGES.securityCctv,
    secondaryImage: IMAGES.remoteMonitoringImg,
    mobilePreviewDescription:
      'Encrypted smartphone viewing app displaying live multi-camera feeds, playback timelines, and smart after-hours motion alerts.',
    challenge:
      'An aging camera setup had poor night visibility and no smartphone access, while physical keys for staff entrances offered no attendance logs or easy revocation when cards were lost.',
    objective:
      'Deploy a clear 4K indoor and outdoor CCTV system with reliable NVR storage alongside electronic biometric/RFID door access and remote mobile monitoring.',
    strategy:
      'Conduct a full blind-spot site survey, run structured PoE network cabling to Dome and Bullet 4K IP cameras, install facial/RFID access terminals on key doors, and configure encrypted mobile apps.',
    solution:
      'Installed a complete 4K IP surveillance and door access architecture with centralized NVR recording, smart human/vehicle intrusion alerts, and preventive maintenance.',
    designOverview:
      'Strategic camera placement covering entrances, reception, corridors, loading bays, and parking areas without intrusive wiring.',
    developmentOverview:
      'Configured PoE network segmentation, NVR retention schedules, fire-safe door lock relays, staff attendance reporting, and role-based mobile access.',
    technology: ['4K PoE IP Cameras (Dome & Bullet)', 'Enterprise NVR Recorder', 'Biometric Face & RFID Terminals', 'Encrypted Mobile Viewing App', 'Smart Motion Filtering'],
    implementation: [
      'On-site security survey and camera/door positioning blueprint',
      'Structured PoE cabling and weatherproof outdoor camera mounting',
      'NVR storage setup and biometric/RFID door lock installation',
      'Mobile app pairing, intrusion zone calibration, and staff training',
    ],
    beforeState: [
      'Low-resolution footage and uncovered exterior blind spots',
      'Physical door keys with no entry logs or instant revocation',
      'No remote camera visibility when managers were away from the building',
    ],
    afterState: [
      'Clear 4K day and night video across all interior and exterior zones',
      'Touchless facial/RFID door entry with automated staff attendance logs',
      'Live encrypted smartphone and desktop viewing from anywhere',
    ],
    results: [
      { metric: '4K PoE', label: 'Indoor & Outdoor IP Cameras' },
      { metric: 'Biometric', label: 'Face & RFID Door Control' },
      { metric: 'Remote App', label: 'Live Mobile & Desktop Viewing' },
    ],
    ctaText: 'Discuss Your Project',
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  company: string;
  role: string;
  projectType: 'Web Development' | 'SEO' | 'IT Support' | 'AI Automation' | 'Branding' | 'Other';
  projectUrl?: string;
  caseStudySlug?: string;
  featured?: boolean;
}

export const VERIFIED_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-aza',
    quote:
      'BOTLYTICES delivered a clean, modern website that presents our kitchens and bedrooms professionally and makes it straightforward for customers to request a design consultation.',
    clientName: 'Showroom Management',
    company: 'AZA Kitchens & Bedrooms',
    role: 'Director',
    projectType: 'Web Development',
    projectUrl: 'https://azakitchensandbedrooms.co.uk/',
    caseStudySlug: 'aza-kitchens-and-bedrooms',
    featured: true,
  },
  {
    id: 'test-uk-architex',
    quote:
      'Visual precision and clarity are essential in architecture. BOTLYTICES built a website that explains our services clearly and represents our practice professionally.',
    clientName: 'Practice Principal',
    company: 'UK Architex',
    role: 'Architectural Lead',
    projectType: 'Branding',
    projectUrl: 'https://ukarchitex.com/',
    caseStudySlug: 'uk-architex-architecture',
  },
  {
    id: 'test-ssdn',
    quote:
      'Our customers reach out primarily from their phones. The new website and WhatsApp inquiry setup made it much easier for travellers to send us their trip requirements.',
    clientName: 'Operations Team',
    company: 'SSDN Travels',
    role: 'Management',
    projectType: 'AI Automation',
    projectUrl: 'https://ssdntravels.com/',
    caseStudySlug: 'ssdn-travels-platform',
  },
];

export const SEVEN_STEP_PROCESS = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Understand the Business & Requirements',
    description:
      'Understand the business, audience, goals and technical requirements before proposing any solution.',
    deliverables: ['Requirements & goals brief', 'Review of existing systems or website', 'Identification of key bottlenecks'],
    exampleOutput: 'Discovery Summary & Technical Requirements Brief',
  },
  {
    number: '02',
    title: 'Strategy',
    subtitle: 'Define Technology & Implementation Plan',
    description:
      'Define the appropriate technology, structure and implementation plan aligned with your objectives and budget.',
    deliverables: ['Recommended technology stack', 'System or channel strategy', 'Phased implementation roadmap'],
    exampleOutput: 'Solution Architecture & Strategy Blueprint',
  },
  {
    number: '03',
    title: 'Planning',
    subtitle: 'Information Architecture & Project Scope',
    description:
      'Create information architecture, technical requirements and project scope with clear milestones and timelines.',
    deliverables: ['Sitemap or network/system diagram', 'Itemized project scope & milestones', 'Content & integration checklist'],
    exampleOutput: 'Approved Sitemap, Scope & Milestone Schedule',
  },
  {
    number: '04',
    title: 'Design',
    subtitle: 'Visual Direction, UX & Interface',
    description:
      'Develop the visual direction, UX and interface—or physical placement plans—so you can review and approve the experience.',
    deliverables: ['Interactive Figma UI/UX prototypes', 'Mobile & desktop responsive layouts', 'Design system or hardware placement plan'],
    exampleOutput: 'Interactive Figma Prototype & Design System',
  },
  {
    number: '05',
    title: 'Development',
    subtitle: 'Build & Integrate the Solution',
    description:
      'Build and integrate the solution—writing clean code, configuring networks, training AI workflows, or installing hardware.',
    deliverables: ['Frontend & backend engineering', 'API, CRM, or WhatsApp integration', 'On-site IT / CCTV installation & setup'],
    exampleOutput: 'Staging Environment / Configured System Deployment',
  },
  {
    number: '06',
    title: 'Testing',
    subtitle: 'Verify Performance, Security & Usability',
    description:
      'Test responsiveness, functionality, security, performance and usability across devices and real-world scenarios.',
    deliverables: ['Cross-device & browser QA', 'Speed, SEO & security verification', 'End-to-end form, call, or camera testing'],
    exampleOutput: 'Pre-Launch QA, Speed & Security Checklist',
  },
  {
    number: '07',
    title: 'Launch & Support',
    subtitle: 'Smooth Deployment & Ongoing Care',
    description:
      'Deploy the solution smoothly and provide ongoing support, maintenance, backups, and continuous improvements.',
    deliverables: ['Zero-downtime live deployment', 'Team walkthrough & documentation', 'Ongoing hosting, maintenance & support'],
    exampleOutput: 'Live System Handover & Ongoing Care Plan',
  },
];

export type FaqCategoryName =
  | 'General'
  | 'Web Development'
  | 'IT Support'
  | 'SEO'
  | 'AI Automation'
  | 'Digital Presence'
  | 'CCTV & Security'
  | 'Projects & Process'
  | 'Support & Maintenance';

export interface CategorizedFaqItem {
  category: FaqCategoryName;
  question: string;
  answer: string;
  relatedLink?: {
    label: string;
    path: string;
  };
}

export const CATEGORIZED_FAQS: CategorizedFaqItem[] = [
  // General
  {
    category: 'General',
    question: 'What services do you provide?',
    answer:
      'We operate across five connected technology divisions: (1) Web Development & UI/UX, (2) IT Support & Infrastructure, (3) Digital Presence & Branding, (4) AI Automation, and (5) Security & Surveillance (CCTV and access control).',
    relatedLink: { label: 'Explore All 5 Service Divisions', path: '/services' },
  },
  {
    category: 'General',
    question: 'Do you work with businesses remotely?',
    answer:
      'Yes. Web design, web development, e-commerce, SEO/AEO, branding, social media, AI voice/WhatsApp automation, and remote IT software support are delivered globally. Physical structured cabling, office Wi-Fi, and CCTV installations are completed on-site.',
    relatedLink: { label: 'Learn More About Us', path: '/about' },
  },
  {
    category: 'General',
    question: 'How do I start a project?',
    answer:
      'Simply submit your details on our Contact page or click "Start a Project" to tell us what you need. We will review your goals, schedule a consultation, and prepare a clear scope and quotation.',
    relatedLink: { label: 'Go to Contact Page', path: '/contact' },
  },
  {
    category: 'General',
    question: 'Can I request a consultation before committing to a project?',
    answer:
      'Yes. Every project starts with an initial consultation where we discuss your current setup, answer your technical questions, and outline practical options with no obligation.',
    relatedLink: { label: 'Request a Consultation', path: '/contact' },
  },

  // Web Development
  {
    category: 'Web Development',
    question: 'How long does a website take?',
    answer:
      'A typical business or corporate website takes between 2 to 5 weeks depending on page count and content readiness. Larger e-commerce stores or custom web applications take 6 to 10 weeks.',
    relatedLink: { label: 'Explore Web Development', path: '/services/web-development' },
  },
  {
    category: 'Web Development',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. We can modernize your existing website’s design, mobile responsiveness, speed, and structure while keeping your domain name, brand identity, and search rankings intact.',
    relatedLink: { label: 'Explore Web Design & UI/UX', path: '/services/web-development/web-design-ui-ux' },
  },
  {
    category: 'Web Development',
    question: 'Do you provide domain and hosting?',
    answer:
      'Yes. We can set up and manage your domain registration, DNS records, SSL security certificates, business email accounts, and fast cloud hosting.',
    relatedLink: { label: 'Explore SEO, Hosting & Website Care', path: '/services/web-development/seo-hosting-website-care' },
  },
  {
    category: 'Web Development',
    question: 'Can you build an e-commerce website?',
    answer:
      'Yes. We build online stores and custom product catalogs using Shopify, WooCommerce, and custom web architectures with secure payment checkout and inventory management.',
    relatedLink: { label: 'Explore E-commerce & Web Applications', path: '/services/web-development/ecommerce-web-applications' },
  },
  {
    category: 'Web Development',
    question: 'Can you maintain my website after launch?',
    answer:
      'Yes. We provide ongoing website care plans that include software updates, daily off-site backups, security monitoring, and content updates.',
    relatedLink: { label: 'Explore Website Care Services', path: '/services/web-development/seo-hosting-website-care' },
  },

  // SEO
  {
    category: 'SEO',
    question: 'Do you provide SEO after building the website?',
    answer:
      'Yes. Every website we build includes a clean technical SEO foundation, and we offer ongoing SEO and content services to grow your organic search visibility over time.',
    relatedLink: { label: 'Explore SEO, Hosting & Website Care', path: '/services/web-development/seo-hosting-website-care' },
  },
  {
    category: 'SEO',
    question: 'What is local SEO?',
    answer:
      'Local SEO optimizes your website and business profiles (such as Google Business Profile and Apple Maps) so customers searching for your services in your city or service area can find you easily.',
    relatedLink: { label: 'Explore Business Profiles & Local Presence', path: '/services/digital-presence/business-profiles' },
  },
  {
    category: 'SEO',
    question: 'Do you provide AEO or AI-search optimization?',
    answer:
      'Yes. We implement Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)—using structured Schema.org markup and clear entity formatting so AI tools like ChatGPT, Perplexity, and Google AI Overviews can accurately understand and reference your business.',
    relatedLink: { label: 'Explore SEO & AEO Services', path: '/services/web-development/seo-hosting-website-care' },
  },

  // AI Automation
  {
    category: 'AI Automation',
    question: 'Can you automate WhatsApp responses?',
    answer:
      'Yes. Using the official WhatsApp Business API, we build automated assistants that reply to customer inquiries instantly, answer FAQs, capture lead details, and hand off to your human team when needed.',
    relatedLink: { label: 'Explore WhatsApp & Chat Automation', path: '/services/ai-automation/whatsapp-chat' },
  },
  {
    category: 'AI Automation',
    question: 'Can you create AI voice assistants?',
    answer:
      'Yes. We configure inbound and outbound AI phone voice assistants that answer calls 24/7, handle common questions, qualify leads, book calendar appointments, and route calls to staff.',
    relatedLink: { label: 'Explore AI Voice Assistants', path: '/services/ai-automation/voice-assistants' },
  },
  {
    category: 'AI Automation',
    question: 'Can you automate lead generation?',
    answer:
      'Yes. We build lead capture, qualification, scoring, and automated multi-step email/message follow-up sequences that keep your sales pipeline organized.',
    relatedLink: { label: 'Explore AI Lead Generation', path: '/services/ai-automation/lead-generation' },
  },
  {
    category: 'AI Automation',
    question: 'Can AI integrate with existing systems?',
    answer:
      'Yes. We connect AI assistants and forms directly with CRMs (HubSpot, Pipedrive, Zoho), Google Sheets, calendars, email, and internal tools using n8n, Make, Zapier, and custom APIs.',
    relatedLink: { label: 'Explore Workflow & Business Automation', path: '/services/ai-automation/workflow-automation' },
  },

  // IT Support
  {
    category: 'IT Support',
    question: 'Do you provide remote IT support?',
    answer:
      'Yes. Software troubleshooting, Microsoft 365 setup, email issues, user account management, and system optimizations can be handled quickly via secure remote support.',
    relatedLink: { label: 'Explore Software & System Support', path: '/services/it-support/software-system-support' },
  },
  {
    category: 'IT Support',
    question: 'Can you help configure office networks?',
    answer:
      'Yes. We design and install LAN networks, structured cabling (Cat5e/Cat6/Cat6a), routers, managed switches, VLANs, and commercial business Wi-Fi.',
    relatedLink: { label: 'Explore Networking & Wi-Fi', path: '/services/it-support/networking-wifi' },
  },
  {
    category: 'IT Support',
    question: 'Do you support Windows and Microsoft 365?',
    answer:
      'Yes. We configure and support Windows workstations, Microsoft 365 apps, Exchange domain email, SharePoint/OneDrive permissions, and defensive endpoint security.',
    relatedLink: { label: 'Explore IT Support & Infrastructure', path: '/services/it-support' },
  },

  // Digital Presence
  {
    category: 'Digital Presence',
    question: 'Can you help set up Google Business Profile, Apple Maps, and social media?',
    answer:
      'Yes. We verify and optimize your Google Business Profile, Apple Business Connect, Bing Places, and social media channels with consistent branding, descriptions, and graphics.',
    relatedLink: { label: 'Explore Digital Presence & Branding', path: '/services/digital-presence' },
  },

  // CCTV & Security
  {
    category: 'CCTV & Security',
    question: 'Do you install CCTV?',
    answer:
      'Yes. We plan, position, install, and configure indoor and outdoor HD and 4K IP CCTV cameras (Dome, Bullet, PTZ) along with NVR/DVR recording systems.',
    relatedLink: { label: 'Explore CCTV & Video Surveillance', path: '/services/security-surveillance/cctv' },
  },
  {
    category: 'CCTV & Security',
    question: 'Can CCTV be viewed remotely?',
    answer:
      'Yes. We configure secure remote viewing on your smartphone, tablet, and computer so you can monitor live cameras, review recorded footage, and receive motion alerts from anywhere.',
    relatedLink: { label: 'Explore Remote Monitoring & Security Systems', path: '/services/security-surveillance/remote-monitoring' },
  },
  {
    category: 'CCTV & Security',
    question: 'Do you provide maintenance for security systems?',
    answer:
      'Yes. We provide routine CCTV and access control maintenance, hard drive storage upgrades, camera replacements, firmware updates, and troubleshooting.',
    relatedLink: { label: 'Explore Security Maintenance & Upgrades', path: '/services/security-surveillance/maintenance' },
  },

  // Projects & Process
  {
    category: 'Projects & Process',
    question: 'How do you keep clients updated during a project?',
    answer:
      'We follow a structured 7-step process (Discovery, Strategy, Planning, Design, Development, Testing, Launch & Support) with scheduled milestone reviews, prototype previews, and clear approval checkpoints.',
    relatedLink: { label: 'View Our 7-Step Process', path: '/about/process' },
  },

  // Support & Maintenance
  {
    category: 'Support & Maintenance',
    question: 'What happens after my website, automation, or system goes live?',
    answer:
      'You receive full handover documentation and walkthrough training, and we offer flexible ongoing support and maintenance plans for hosting, updates, backups, and technical assistance.',
    relatedLink: { label: 'Contact Us About Support Plans', path: '/contact' },
  },
];
