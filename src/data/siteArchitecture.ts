import heroLaptopStudio from '../assets/images/hero_laptop_studio_1791047715784.jpg';
import heroTechEcosystem from '../assets/images/hero_tech_ecosystem_1791025114783.jpg';
import heroWebDev from '../assets/images/hero_web_dev_1790965182691.jpg';
import heroMonolithGallery from '../assets/images/hero_monolith_gallery_1791028643394.jpg';
import datacenterNetworking from '../assets/images/datacenter_networking_1791025129298.jpg';
import hardwareMonolith from '../assets/images/hardware_monolith_1791028654747.jpg';
import itNetworkLab from '../assets/images/it_network_lab_1790965195551.jpg';
import presenceStudio from '../assets/images/presence_studio_1791025142710.jpg';
import localPresence from '../assets/images/local_presence_1790965209455.jpg';
import aiExecDesk from '../assets/images/ai_exec_desk_1791025154224.jpg';
import aiSmartDesk from '../assets/images/ai_smart_desk_1790965221013.jpg';
import securityCctv from '../assets/images/security_cctv_surveillance_1791049633267.jpg';
import accessControlImg from '../assets/images/access_control_biometrics_1791049652570.jpg';
import remoteMonitoringImg from '../assets/images/remote_security_monitoring_1791049666957.jpg';
import azaKitchensImg from '../assets/images/portfolio_aza_kitchens_1791047730966.jpg';
import ssdnTravelsImg from '../assets/images/portfolio_ssdn_travels_1791047741730.jpg';
import ukArchitexImg from '../assets/images/portfolio_uk_architex_1791047753513.jpg';
import caseStudyArchImg from '../assets/images/case_study_arch_1790965232064.jpg';
import studioCraftTeamImg from '../assets/images/studio_craft_team_1791025165607.jpg';
import aboutTechVisualImg from '../assets/images/about_tech_visual_1791047764362.jpg';

export type DivisionId =
  | 'web-development'
  | 'it-support'
  | 'digital-presence'
  | 'ai-automation'
  | 'security-surveillance';

export interface SubcategoryPageData {
  slug: string;
  path: string;
  divisionId: DivisionId;
  divisionTitle: string;
  divisionPath: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  ctaText: string;
  heroImage: string;
  problemTitle: string;
  problemDescription: string;
  painPoints: string[];
  whatWeProvideTitle: string;
  whatWeProvideDescription: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  features: string[];
  visualType:
    | 'ui-ux-system'
    | 'web-dev-lifecycle'
    | 'ecommerce-arch'
    | 'seo-aeo-care'
    | 'hardware-diagnostics'
    | 'software-stack'
    | 'network-topology'
    | 'cyber-defense'
    | 'brand-identity-kit'
    | 'social-content-grid'
    | 'digital-presence-map'
    | 'growth-funnel'
    | 'voice-call-flow'
    | 'whatsapp-pipeline'
    | 'lead-gen-engine'
    | 'workflow-automation-map'
    | 'cctv-coverage-grid'
    | 'biometric-access-matrix'
    | 'remote-monitoring-hub'
    | 'security-maintenance-plan';
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: {
    metric: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  relatedSlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface DivisionPageData {
  id: DivisionId;
  slug: string;
  path: string;
  number: string;
  title: string;
  shortTitle: string;
  shortSummary: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  heroImage: string;
  lifecycleSteps: string[];
  overviewDescription: string;
  subcategories: {
    slug: string;
    path: string;
    title: string;
    image: string;
    shortDescription: string;
    highlights: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const IMAGES = {
  heroLaptopStudio,
  heroTechEcosystem,
  heroWebDev,
  heroMonolithGallery,
  datacenterNetworking,
  hardwareMonolith,
  itNetworkLab,
  presenceStudio,
  localPresence,
  aiExecDesk,
  aiSmartDesk,
  securityCctv,
  accessControlImg,
  remoteMonitoringImg,
  azaKitchensImg,
  ssdnTravelsImg,
  ukArchitexImg,
  caseStudyArchImg,
  studioCraftTeamImg,
  aboutTechVisualImg,
};

export const DIVISIONS: DivisionPageData[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    path: '/services/web-development',
    number: '01',
    title: 'Web Development',
    shortTitle: 'Web Development',
    shortSummary:
      'Custom web design, responsive engineering, e-commerce applications, and technical SEO/hosting care.',
    metaTitle: 'Web Development, UI/UX, E-Commerce & SEO | BOTLYTICES',
    metaDescription:
      'Websites designed to look exceptional and built to perform. Full lifecycle web design, custom development, e-commerce applications, and SEO/AEO care.',
    heroHeadline: 'Websites Designed to Look Exceptional. Built to Perform.',
    heroSubheadline:
      'We take your digital platform from initial concept to design, custom engineering, search optimization, fast cloud hosting, and ongoing technical care.',
    ctaText: 'Plan My Website',
    heroImage: heroWebDev,
    lifecycleSteps: ['Idea', 'Design', 'Development', 'SEO', 'Hosting', 'Launch', 'Maintenance'],
    overviewDescription:
      'Custom websites, web applications, and e-commerce platforms engineered for sub-second speed, responsive clarity, and measurable conversion.',
    subcategories: [
      {
        slug: 'web-design-ui-ux',
        path: '/services/web-development/web-design-ui-ux',
        title: 'Web Design & UI/UX',
        image: heroMonolithGallery,
        shortDescription:
          'Mobile-first interfaces, interactive Figma prototypes, design systems, and conversion-focused layouts tailored to your brand.',
        highlights: ['UI/UX & Figma Prototypes', 'Mobile-First Responsive Design', 'Conversion-Focused Architecture'],
      },
      {
        slug: 'web-development',
        path: '/services/web-development/web-development',
        title: 'Web Development',
        image: heroWebDev,
        shortDescription:
          'Custom-coded websites in React, Next.js, WordPress, and Shopify with clean APIs, booking flows, and fast performance.',
        highlights: ['React, Next.js & Custom CMS', 'API & Booking System Integration', 'Performance, Security & Accessibility'],
      },
      {
        slug: 'ecommerce-web-applications',
        path: '/services/web-development/ecommerce-web-applications',
        title: 'E-commerce & Web Applications',
        image: azaKitchensImg,
        shortDescription:
          'Online stores, custom product catalogs, payment gateways, customer portals, and business dashboards.',
        highlights: ['Shopify, WooCommerce & Custom Stores', 'Payment, Checkout & Inventory Sync', 'Client Portals & Custom Dashboards'],
      },
      {
        slug: 'seo-hosting-website-care',
        path: '/services/web-development/seo-hosting-website-care',
        title: 'SEO, Hosting & Website Care',
        image: heroLaptopStudio,
        shortDescription:
          'Technical SEO, AI Answer Engine Optimization (AEO/GEO), managed domains, fast SSL hosting, and proactive website maintenance.',
        highlights: ['Technical, Local & On-Page SEO', 'AEO / GEO AI Search Visibility', 'Managed Hosting, Domains & Security Care'],
      },
    ],
    faqs: [
      {
        question: 'How long does it take to design and launch a custom website?',
        answer:
          'Standard corporate and service websites typically launch within 3 to 5 weeks. Larger e-commerce stores or custom web applications with API integrations take 6 to 10 weeks depending on scope.',
      },
      {
        question: 'Can I show you reference websites that I like before we start?',
        answer:
          'Yes. During discovery, you can share examples from any industry—such as Stripe, Apple, Rivian, or Shopify—and our design team will translate the layout discipline and visual feel into an original system built around your brand.',
      },
      {
        question: 'Do you handle domain registration, SSL, business email, and hosting?',
        answer:
          'Yes. We manage the entire technical setup including DNS records, SSL certificates, cloud hosting deployment, business email configuration, and daily automated backups.',
      },
    ],
  },
  {
    id: 'it-support',
    slug: 'it-support',
    path: '/services/it-support',
    number: '02',
    title: 'IT Support & Infrastructure',
    shortTitle: 'IT Support',
    shortSummary:
      'Hardware repair, Microsoft 365 software setup, Cat6 structured office networking, and defensive cybersecurity.',
    metaTitle: 'IT Support, Networking, Hardware & Cybersecurity | BOTLYTICES',
    metaDescription:
      'Reliable business IT support covering workstation hardware, Microsoft 365 software, structured Cat6 networking, commercial Wi-Fi, and defensive cybersecurity.',
    heroHeadline: "Technology Problems Shouldn't Stop Your Business.",
    heroSubheadline:
      'From office workstations and Microsoft 365 administration to structured cabling, commercial Wi-Fi, and endpoint cybersecurity, we keep your operations running smoothly.',
    ctaText: 'Get IT Support',
    heroImage: datacenterNetworking,
    lifecycleSteps: ['Audit', 'Hardware Prep', 'OS & Cloud Setup', 'Network Cabling', 'Security Hardening', 'Monitoring', 'Support'],
    overviewDescription:
      'End-to-end physical and cloud IT infrastructure: workstation hardware repair, software administration, structured office networking, and defensive security.',
    subcategories: [
      {
        slug: 'hardware-device-support',
        path: '/services/it-support/hardware-device-support',
        title: 'Hardware & Device Support',
        image: hardwareMonolith,
        shortDescription:
          'Desktop and laptop setup, RAM/SSD upgrades, printer and scanner configuration, hardware diagnostics, and preventive maintenance.',
        highlights: ['Desktops, Laptops & Monitors', 'RAM / SSD Upgrades & Repairs', 'Printers, Scanners & Preventive Care'],
      },
      {
        slug: 'software-system-support',
        path: '/services/it-support/software-system-support',
        title: 'Software & System Support',
        image: studioCraftTeamImg,
        shortDescription:
          'Windows OS deployment, Microsoft 365 setup, business email migration, user account management, and system optimization.',
        highlights: ['Windows & Microsoft 365 Setup', 'Email Migration & User Accounts', 'Driver Updates & System Optimization'],
      },
      {
        slug: 'networking-wifi',
        path: '/services/it-support/networking-wifi',
        title: 'Networking & Wi-Fi',
        image: datacenterNetworking,
        shortDescription:
          'LAN architecture, commercial Wi-Fi, routers, switches, Cat5e/Cat6/Cat6a structured cabling, and VLAN segmentation.',
        highlights: ['Structured Cabling (Cat5e/Cat6/Cat6a)', 'Managed Switches, Routers & VLANs', 'High-Density Commercial Wi-Fi'],
      },
      {
        slug: 'cybersecurity',
        path: '/services/it-support/cybersecurity',
        title: 'Cybersecurity & IT Security',
        image: itNetworkLab,
        shortDescription:
          'Defensive business security: endpoint protection (EDR), firewall configuration, MFA enforcement, backup security, and device hardening.',
        highlights: ['Antivirus / EDR Endpoint Protection', 'Firewall, MFA & Access Policies', 'Encrypted Backups & Security Audits'],
      },
    ],
    faqs: [
      {
        question: 'Do you provide both remote and on-site IT support?',
        answer:
          'Yes. Software, email, Microsoft 365, and configuration issues are resolved immediately via secure remote support, while hardware installations, structured cabling, and Wi-Fi deployments are completed on-site.',
      },
      {
        question: 'Can you upgrade slow office computers instead of replacing everything?',
        answer:
          'Yes. We evaluate your existing desktops and laptops first. Often, upgrading to enterprise NVMe SSDs, expanding RAM, and performing a clean OS optimization restores full speed at a fraction of replacement cost.',
      },
      {
        question: 'What type of cybersecurity services do you provide?',
        answer:
          'We focus strictly on defensive business security: deploying endpoint detection and response (EDR), configuring hardware firewalls, enforcing multi-factor authentication (MFA), securing offsite backups, and hardening company devices.',
      },
    ],
  },
  {
    id: 'digital-presence',
    slug: 'digital-presence',
    path: '/services/digital-presence',
    number: '03',
    title: 'Digital Presence & Branding',
    shortTitle: 'Digital Presence',
    shortSummary:
      'Logo & brand identity systems, social media management, Google Business Profile, Apple Maps, and local growth.',
    metaTitle: 'Digital Presence, Brand Identity, Google Maps & Social | BOTLYTICES',
    metaDescription:
      'Make your business look professional everywhere customers find you. Brand identity, social media management, Google Business Profile, and local growth.',
    heroHeadline: 'Make Your Business Look Professional Everywhere Customers Find You.',
    heroSubheadline:
      'Ensure your brand looks cohesive and authoritative across your logo, social channels, Google Maps, Apple Business Connect, Bing Places, and local search.',
    ctaText: 'Improve My Online Presence',
    heroImage: presenceStudio,
    lifecycleSteps: ['Brand Audit', 'Identity Design', 'Profile Verification', 'Map Optimization', 'Content Creation', 'Campaigns', 'Reporting'],
    overviewDescription:
      'Cohesive visual branding, verified Google & Apple map profiles, structured social media content, and targeted local search marketing.',
    subcategories: [
      {
        slug: 'brand-identity',
        path: '/services/digital-presence/brand-identity',
        title: 'Brand Identity & Logo Design',
        image: presenceStudio,
        shortDescription:
          'Logo design and redesign, color palettes, typography systems, brand guidelines, business cards, and digital brand kits.',
        highlights: ['Logo Design & Visual Identity', 'Brand Guidelines & Typography', 'Business Cards & Social Brand Kits'],
      },
      {
        slug: 'social-media-content',
        path: '/services/digital-presence/social-media-content',
        title: 'Social Media & Content',
        image: ukArchitexImg,
        shortDescription:
          'Profile setup and optimization across Instagram, Facebook, LinkedIn, and TikTok with branded posts, carousels, reels, and calendars.',
        highlights: ['Facebook, Instagram, LinkedIn & TikTok', 'Branded Posts, Carousels & Reels', 'Content Calendars & Channel Management'],
      },
      {
        slug: 'business-profiles',
        path: '/services/digital-presence/business-profiles',
        title: 'Business Profiles & Local Presence',
        image: localPresence,
        shortDescription:
          'Complete verification and optimization for Google Business Profile, Apple Business Connect, Bing Places, and local directories.',
        highlights: ['Google Business Profile & Maps', 'Apple Business Connect & Bing Places', 'Directory Sync, Reviews & Local SEO'],
      },
      {
        slug: 'digital-marketing',
        path: '/services/digital-presence/digital-marketing',
        title: 'Digital Marketing & Growth',
        image: ssdnTravelsImg,
        shortDescription:
          'Local search visibility, conversion landing pages, paid advertising campaigns, reputation management, and clear analytics reporting.',
        highlights: ['Search & Local Visibility Campaigns', 'High-Converting Landing Pages', 'Reputation Management & Analytics'],
      },
    ],
    faqs: [
      {
        question: 'Why is my business not showing up on Google Maps when customers search nearby?',
        answer:
          'Unverified profiles, incomplete primary/secondary categories, inconsistent Name/Address/Phone (NAP) citations across directories, and lack of structured service listings prevent Google from ranking your profile in the local Map Pack.',
      },
      {
        question: 'If we already have a logo, can you modernize it without losing our identity?',
        answer:
          'Yes. We can refine your existing mark into clean vector files, establish a structured color and typography guide, and create properly sized assets for your website, social profiles, and print materials.',
      },
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    path: '/services/ai-automation',
    number: '04',
    title: 'AI Automation',
    shortTitle: 'AI Automation',
    shortSummary:
      '24/7 AI phone voice assistants, WhatsApp Business automation, automated lead qualification, and CRM workflows.',
    metaTitle: 'AI Automation, Voice Assistants, WhatsApp & Workflows | BOTLYTICES',
    metaDescription:
      'Let technology handle the repetitive work. 24/7 AI phone voice assistants, WhatsApp chat automation, automated lead qualification, and CRM workflows.',
    heroHeadline: 'Let Technology Handle the Repetitive Work.',
    heroSubheadline:
      'Capture inbound leads, respond in seconds across phone and WhatsApp, qualify prospects, book appointments directly into your calendar, and update your CRM automatically.',
    ctaText: 'Automate My Business',
    heroImage: aiExecDesk,
    lifecycleSteps: ['Capture Leads', 'Respond Instantly', 'Qualify Customers', 'Book Appointments', 'Update CRM', 'Follow Up', 'Report Results'],
    overviewDescription:
      'Practical AI voice assistants, WhatsApp business automation, automated lead outreach, and multi-app workflow synchronization using n8n, Make, Zapier, and custom APIs.',
    subcategories: [
      {
        slug: 'voice-assistants',
        path: '/services/ai-automation/voice-assistants',
        title: 'AI Voice Assistants',
        image: aiExecDesk,
        shortDescription:
          '24/7 inbound and outbound AI phone assistants that answer customer questions, qualify leads, route calls, and book appointments.',
        highlights: ['24/7 Inbound & Outbound Phone AI', 'Real-Time Lead Qualification & Routing', 'Direct Calendar Booking & CRM Sync'],
      },
      {
        slug: 'whatsapp-chat',
        path: '/services/ai-automation/whatsapp-chat',
        title: 'WhatsApp & Chat Automation',
        image: aiSmartDesk,
        shortDescription:
          'Instant automated replies on WhatsApp, website chat, Instagram, and Facebook with FAQ handling, lead capture, and human handoff.',
        highlights: ['WhatsApp Business API Automation', 'Website, Instagram & Facebook Chatbots', 'Lead Capture & Seamless Human Handoff'],
      },
      {
        slug: 'lead-generation',
        path: '/services/ai-automation/lead-generation',
        title: 'AI Lead Generation',
        image: heroTechEcosystem,
        shortDescription:
          'Automated prospect discovery, multi-step email follow-ups, lead scoring, CRM entry, and appointment pipeline automation.',
        highlights: ['Lead Discovery & Scoring', 'Automated Email & Multi-Channel Outreach', 'CRM Pipeline & Appointment Booking'],
      },
      {
        slug: 'workflow-automation',
        path: '/services/ai-automation/workflow-automation',
        title: 'Workflow & Business Automation',
        image: aboutTechVisualImg,
        shortDescription:
          'Connect forms, Google Sheets, CRM, email, notifications, and documents using n8n, Make, Zapier, and custom API webhooks.',
        highlights: ['n8n, Make, Zapier & Custom APIs', 'CRM, Google Sheets & Data Sync', 'Automated Document & Notification Flows'],
      },
    ],
    faqs: [
      {
        question: 'What happens if a customer asks the AI assistant a complex question it cannot answer?',
        answer:
          'Every voice and WhatsApp assistant we build includes intelligent human handoff rules. When a conversation requires a specialist or custom quote, the system transfers the call or sends an instant summary alert to your team.',
      },
      {
        question: 'Can the automation connect to our existing CRM, Google Sheets, or calendar?',
        answer:
          'Yes. We integrate directly with HubSpot, Salesforce, Pipedrive, Zoho, Google Calendar, Outlook, Cliniko, and Google Sheets via official APIs, n8n, Make, or Zapier.',
      },
    ],
  },
  {
    id: 'security-surveillance',
    slug: 'security-surveillance',
    path: '/services/security-surveillance',
    number: '05',
    title: 'Security & Surveillance',
    shortTitle: 'Security & CCTV',
    shortSummary:
      '4K IP CCTV surveillance cameras, biometric & RFID door access control, remote mobile monitoring, and maintenance.',
    metaTitle: 'Security & Surveillance: CCTV, Access Control & Monitoring | BOTLYTICES',
    metaDescription:
      'Protect your property, people and business with commercial HD/4K IP CCTV systems, biometric access control, remote mobile monitoring, and ongoing maintenance.',
    heroHeadline: 'Protect Your Property, People & Business.',
    heroSubheadline:
      'Professional installation and configuration of 4K IP camera systems, biometric door access control, centralized remote mobile monitoring, and preventive maintenance.',
    ctaText: 'Request a Security Assessment',
    heroImage: securityCctv,
    lifecycleSteps: ['Site Survey', 'Camera & Door Plan', 'Cabling & Mounting', 'NVR & Access Setup', 'Mobile App Sync', 'Testing', 'Maintenance'],
    overviewDescription:
      'Commercial and residential physical security infrastructure: 4K IP CCTV surveillance, fingerprint/face/RFID door access control, remote mobile viewing, and system upgrades.',
    subcategories: [
      {
        slug: 'cctv',
        path: '/services/security-surveillance/cctv',
        title: 'CCTV & Video Surveillance',
        image: securityCctv,
        shortDescription:
          '4K IP and HD cameras (Dome, Bullet, PTZ) for indoor and outdoor coverage with NVR/DVR recording and smartphone viewing.',
        highlights: ['IP, HD & 4K Dome, Bullet & PTZ Cameras', 'NVR / DVR Recording & Storage Setup', 'Strategic Positioning & Mobile App Viewing'],
      },
      {
        slug: 'access-control',
        path: '/services/security-surveillance/access-control',
        title: 'Access Control & Biometrics',
        image: accessControlImg,
        shortDescription:
          'Fingerprint, facial recognition, RFID keycards, and PIN door access systems with employee attendance and visitor logs.',
        highlights: ['Fingerprint & Facial Recognition Terminals', 'RFID Keycards & PIN Door Locks', 'Employee Attendance & Visitor Management'],
      },
      {
        slug: 'remote-monitoring',
        path: '/services/security-surveillance/remote-monitoring',
        title: 'Remote Monitoring & Security Systems',
        image: remoteMonitoringImg,
        shortDescription:
          'Live mobile and desktop viewing, motion and intrusion alerts, centralized multi-site video management, and smart analytics.',
        highlights: ['Multi-Device Remote CCTV Viewing', 'Instant Motion & Intrusion Alerts', 'Centralized Multi-Site Video Management'],
      },
      {
        slug: 'maintenance',
        path: '/services/security-surveillance/maintenance',
        title: 'Security Maintenance & Upgrades',
        image: caseStudyArchImg,
        shortDescription:
          'Routine CCTV health checks, DVR/NVR hard drive expansion, faulty camera replacement, firmware updates, and support contracts.',
        highlights: ['Camera & NVR/DVR Preventive Maintenance', 'Storage Upgrades & Camera Replacement', 'Network Troubleshooting & Support Contracts'],
      },
    ],
    faqs: [
      {
        question: 'Can I view my business security cameras live from my phone when I am away?',
        answer:
          'Yes. We configure encrypted remote viewing on your iPhone, Android phone, tablet, and laptop so you can watch live feeds, review recorded playback, and receive motion notifications from anywhere.',
      },
      {
        question: 'Can you repair or upgrade an existing CCTV system that has blurry cameras or stopped recording?',
        answer:
          'Yes. We inspect your existing cabling, power supplies, cameras, and DVR/NVR storage. We can replace failed hard drives, swap out dated cameras for crisp 4K units, or expand coverage to blind spots.',
      },
    ],
  },
];

export const WEBSITE_INSPIRATION_REFERENCES = [
  {
    category: 'Technology',
    brandExample: 'Apple / Vercel Aesthetic',
    styleSummary: 'High-contrast product staging, generous negative space, crisp typographic hierarchy, and tactile hardware/software presentation.',
    keyTraits: ['Monumental product framing', 'Zero clutter navigation', 'Smooth specification grids'],
    previewImage: heroMonolithGallery,
  },
  {
    category: 'Automotive',
    brandExample: 'Rivian / Tesla Aesthetic',
    styleSummary: 'Architectural gallery minimalism, full-bleed photography, technical telemetry readouts, and high-impact configuration CTAs.',
    keyTraits: ['Architectural gallery layout', 'Technical spec counters', 'Direct action pathways'],
    previewImage: hardwareMonolith,
  },
  {
    category: 'SaaS',
    brandExample: 'Stripe / Linear Aesthetic',
    styleSummary: 'Precision grid alignment, interactive UI component diagrams, clean code/workflow illustrations, and enterprise trust signals.',
    keyTraits: ['Interactive system diagrams', 'Hairline border cards', 'Clear developer/business copy'],
    previewImage: heroLaptopStudio,
  },
  {
    category: 'E-commerce',
    brandExample: 'Shopify / Amazon Aesthetic',
    styleSummary: 'Frictionless product discovery, instant filtering, high-trust checkout architecture, and mobile-first conversion speed.',
    keyTraits: ['Fast filterable catalogs', 'Clear trust & shipping badges', 'One-page streamlined checkout'],
    previewImage: azaKitchensImg,
  },
  {
    category: 'Luxury',
    brandExample: 'Editorial Showroom Aesthetic',
    styleSummary: 'Refined editorial pacing, curated lookbook photography, bespoke material storytelling, and private consultation booking.',
    keyTraits: ['Editorial lookbook grids', 'Bespoke typography', 'Private showroom booking'],
    previewImage: ukArchitexImg,
  },
  {
    category: 'Corporate',
    brandExample: 'Global Enterprise Aesthetic',
    styleSummary: 'Structured multi-division navigation, clear service matrices, executive credibility, and verifiable case study benchmarks.',
    keyTraits: ['Multi-division taxonomy', 'Quantitative case proof', 'Accessible compliance'],
    previewImage: aboutTechVisualImg,
  },
  {
    category: 'Creative',
    brandExample: 'Design Studio Aesthetic',
    styleSummary: 'Expressive display typography, bold asymmetric bento grids, smooth image transitions, and interactive project showcases.',
    keyTraits: ['Asymmetric bento grids', 'Curated project reels', 'Micro-interaction polish'],
    previewImage: presenceStudio,
  },
  {
    category: 'Portfolio',
    brandExample: 'Architectural Monograph Aesthetic',
    styleSummary: 'Large-format visual previews, structured project metadata (Client, Industry, Deliverables), and deep-dive case narratives.',
    keyTraits: ['Large visual previews', 'Before & After comparisons', 'Direct live project links'],
    previewImage: caseStudyArchImg,
  },
];
