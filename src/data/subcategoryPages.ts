import { SubcategoryPageData, IMAGES } from './siteArchitecture';

export const SUBCATEGORY_PAGES: Record<string, SubcategoryPageData> = {
  // ============================================================================
  // 1. WEB DEVELOPMENT SUBCATEGORIES
  // ============================================================================
  'web-design-ui-ux': {
    slug: 'web-design-ui-ux',
    path: '/services/web-development/web-design-ui-ux',
    divisionId: 'web-development',
    divisionTitle: 'Web Development',
    divisionPath: '/services/web-development',
    title: 'Web Design & UI/UX',
    metaTitle: 'Web Design & UI/UX Services | Figma Prototypes & Responsive Layouts | BOTLYTICES',
    metaDescription:
      'Custom UI/UX design, mobile-first responsive layouts, Figma prototypes, design systems, and conversion-focused websites built around your brand.',
    heroEyebrow: 'Web Development · 01',
    heroHeadline: 'Interfaces Designed for Clarity, Trust & Conversion.',
    heroDescription:
      'We design responsive, mobile-first websites and interactive Figma prototypes that make your business look credible and guide visitors effortlessly toward taking action.',
    ctaText: 'Plan My Website',
    heroImage: IMAGES.heroLaptopStudio,
    problemTitle: 'Why Most Business Websites Fail to Convert Visitors',
    problemDescription:
      'Visitors judge your company within seconds. Cluttered layouts, confusing navigation, slow mobile screens, and generic templates cause potential customers to leave before reading your offer.',
    painPoints: [
      'Outdated visual design that makes an established business look untrustworthy',
      'Poor mobile responsiveness where buttons and text break on smartphones',
      'Confusing navigation with no clear path to request a quote or book a call',
      'Inconsistent fonts, colors, and spacing pieced together without a design system',
    ],
    whatWeProvideTitle: 'What We Design & Deliver',
    whatWeProvideDescription:
      'Every project begins with structured wireframes and interactive Figma prototypes before a single line of code is written—so you see and approve the exact look and feel upfront.',
    deliverables: [
      {
        title: 'UI/UX & Conversion Architecture',
        description: 'User journeys mapped deliberately to answer customer questions and drive enquiries.',
      },
      {
        title: 'Mobile-First Responsive Layouts',
        description: 'Dedicated desktop, tablet, and mobile breakpoint layouts tested for thumb-friendly navigation.',
      },
      {
        title: 'Interactive Figma Prototypes',
        description: 'Clickable high-fidelity prototypes showing hover states, menus, and page transitions.',
      },
      {
        title: 'Complete Design Systems',
        description: 'Reusable component libraries, typography scales, color tokens, and button standards.',
      },
      {
        title: 'Landing Pages & Corporate Sites',
        description: 'High-converting campaign landing pages, multi-page corporate websites, and portfolios.',
      },
      {
        title: 'Full Website Redesigns',
        description: 'Modernizing legacy websites while preserving your brand equity and search rankings.',
      },
    ],
    features: [
      'UI/UX Design',
      'Responsive Design',
      'Mobile-First Design',
      'Figma Prototypes',
      'Landing Pages',
      'Corporate Websites',
      'Portfolio Websites',
      'Website Redesign',
      'Design Systems',
      'Conversion-Focused Layouts',
    ],
    visualType: 'ui-ux-system',
    howItWorks: [
      {
        step: '01',
        title: 'Reference & Brand Discovery',
        description: 'We review websites you admire, analyze your competitors, and define your visual direction.',
      },
      {
        step: '02',
        title: 'Wireframing & Information Architecture',
        description: 'We map out every page, section hierarchy, headline, and call-to-action placement.',
      },
      {
        step: '03',
        title: 'High-Fidelity Figma Design',
        description: 'We craft custom desktop and mobile screens using a cohesive design system.',
      },
      {
        step: '04',
        title: 'Interactive Prototype & Handover',
        description: 'You test the clickable prototype, request refinements, and approve for development.',
      },
    ],
    benefits: [
      {
        metric: '100%',
        title: 'Custom Brand Fit',
        description: 'Designed around your logo, industry, and customers—never a recycled boilerplate.',
      },
      {
        metric: '3 Breakpoints',
        title: 'Desktop, Tablet & Mobile Precision',
        description: 'Every layout is engineered to look sharp on 1440px monitors down to 375px phones.',
      },
      {
        metric: '2x Faster',
        title: 'Design-to-Code Approval',
        description: 'Interactive Figma prototypes eliminate guesswork before development starts.',
      },
    ],
    technologies: ['Figma', 'Design Tokens', 'Auto-Layout Systems', 'WCAG AA Accessibility', 'Responsive Grid Systems', 'Interactive Prototyping'],
    relatedSlugs: ['web-development', 'ecommerce-web-applications', 'brand-identity'],
    faqs: [
      {
        question: 'Will I be able to see how my website looks before you build it?',
        answer:
          'Yes. We create a complete interactive prototype in Figma for both desktop and mobile views. You can click through pages and request changes before development begins.',
      },
      {
        question: 'Can you redesign our existing website without changing our logo?',
        answer:
          'Yes. We build the entire color, typography, and component system around your existing logo so your brand stays recognizable while looking modern and trustworthy.',
      },
    ],
  },

  'web-development': {
    slug: 'web-development',
    path: '/services/web-development/web-development',
    divisionId: 'web-development',
    divisionTitle: 'Web Development',
    divisionPath: '/services/web-development',
    title: 'Web Development',
    metaTitle: 'Custom Web Development | React, Next.js, WordPress & Shopify | BOTLYTICES',
    metaDescription:
      'High-performance web development using React, Next.js, WordPress, and Shopify. Custom forms, booking systems, API integrations, and sub-second speeds.',
    heroEyebrow: 'Web Development · 02',
    heroHeadline: 'Clean, Fast & Secure Code Built for Long-Term Growth.',
    heroDescription:
      'We engineer custom websites, CMS platforms, booking engines, and API integrations that load in under a second, pass Core Web Vitals, and remain easy for your team to manage.',
    ctaText: 'Plan My Website',
    heroImage: IMAGES.heroWebDev,
    problemTitle: 'Bloated Templates & Fragile Plugins Slow Down Your Business',
    problemDescription:
      'Many websites are weighed down by puluhan of conflicting plugins, unoptimized scripts, and fragile page builders that break during updates and frustrate mobile visitors.',
    painPoints: [
      'Slow page load times that hurt Google rankings and increase bounce rates',
      'Broken contact forms, booking calendars, or third-party CRM integrations',
      'Security vulnerabilities caused by outdated themes and unmaintained plugins',
      'Hard-to-edit pages that require a developer for simple text or photo changes',
    ],
    whatWeProvideTitle: 'Full-Stack Web Engineering Capabilities',
    whatWeProvideDescription:
      'Whether your project calls for a custom React/Next.js application, a tailored WordPress CMS, or a high-converting Shopify build, we select the right stack for your goals.',
    deliverables: [
      {
        title: 'Custom React & Next.js Websites',
        description: 'Ultra-fast modern web applications with server-side rendering and instant page transitions.',
      },
      {
        title: 'Tailored WordPress & Headless CMS',
        description: 'Easy-to-manage content management systems without plugin bloat or security holes.',
      },
      {
        title: 'Forms, Booking & Scheduling Systems',
        description: 'Multi-step quote calculators, appointment booking flows, and automated notifications.',
      },
      {
        title: 'API & CRM Integrations',
        description: 'Connecting your website directly to HubSpot, Salesforce, Stripe, WhatsApp, or internal tools.',
      },
      {
        title: 'Authentication & Client Dashboards',
        description: 'Secure member logins, role-based portals, and interactive data dashboards.',
      },
      {
        title: 'Performance, Accessibility & Security',
        description: 'Core Web Vitals optimization, WCAG accessibility compliance, and SSL/firewall hardening.',
      },
    ],
    features: [
      'Custom Websites',
      'WordPress',
      'Shopify',
      'React',
      'Next.js',
      'CMS',
      'API Integration',
      'Forms',
      'Booking Systems',
      'Authentication',
      'Dashboards',
      'Performance',
      'Accessibility',
      'Security',
    ],
    visualType: 'web-dev-lifecycle',
    howItWorks: [
      {
        step: '01',
        title: 'Design Approval',
        description: 'Finalizing responsive UI specs, component states, and data requirements.',
      },
      {
        step: '02',
        title: 'Clean Development',
        description: 'Writing modular frontend and backend code, CMS schemas, and API endpoints.',
      },
      {
        step: '03',
        title: 'Rigorous Testing',
        description: 'Cross-browser QA, mobile device testing, speed benchmarking, and security checks.',
      },
      {
        step: '04',
        title: 'Smooth Launch',
        description: 'Zero-downtime DNS deployment, SSL activation, and analytics verification.',
      },
    ],
    benefits: [
      {
        metric: '< 1.0s',
        title: 'First Contentful Paint',
        description: 'Engineered for instant visual loading on both Wi-Fi and mobile 4G/5G connections.',
      },
      {
        metric: '99.9%',
        title: 'Uptime Reliability',
        description: 'Deployed on modern cloud infrastructure with automated backups and SSL security.',
      },
      {
        metric: '100%',
        title: 'Code & Asset Ownership',
        description: 'You own your domain, source code, content, and accounts with zero vendor lock-in.',
      },
    ],
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Shopify', 'Node.js', 'REST & GraphQL APIs', 'Cloudflare'],
    relatedSlugs: ['web-design-ui-ux', 'ecommerce-web-applications', 'seo-hosting-website-care'],
    faqs: [
      {
        question: 'Should we build our website in React/Next.js or WordPress?',
        answer:
          'We recommend React or Next.js when maximum speed, custom interactive tools, or web applications are needed. We recommend a clean custom WordPress or headless CMS setup when your marketing team wants a familiar visual editor for frequent blog and page updates.',
      },
      {
        question: 'Can you integrate our website with our booking system or CRM?',
        answer:
          'Yes. We integrate custom forms and booking flows directly with calendars, Stripe, WhatsApp, HubSpot, Pipedrive, Zoho, and custom REST APIs.',
      },
    ],
  },

  'ecommerce-web-applications': {
    slug: 'ecommerce-web-applications',
    path: '/services/web-development/ecommerce-web-applications',
    divisionId: 'web-development',
    divisionTitle: 'Web Development',
    divisionPath: '/services/web-development',
    title: 'E-commerce & Web Applications',
    metaTitle: 'E-Commerce Stores & Custom Web Applications | Shopify, Portals & Dashboards | BOTLYTICES',
    metaDescription:
      'Build high-converting online stores, product catalogs, booking platforms, customer portals, and custom web applications with secure payment integration.',
    heroEyebrow: 'Web Development · 03',
    heroHeadline: 'Online Stores & Custom Web Applications Built for Scale.',
    heroDescription:
      'From high-converting Shopify and WooCommerce stores to custom booking systems, client portals, and internal dashboards, we build digital platforms that power your daily operations.',
    ctaText: 'Plan My Website',
    heroImage: IMAGES.azaKitchensImg,
    problemTitle: 'Clunky Checkouts & Disconnected Inventory Cost You Sales',
    problemDescription:
      'Customers abandon carts when product pages load slowly, filters fail on mobile, or checkout feels complicated. Meanwhile, manual order handling creates back-office bottlenecks.',
    painPoints: [
      'High cart abandonment caused by slow product catalogs and multi-step checkouts',
      'Manual inventory updates that lead to overselling or out-of-stock frustration',
      'Lack of a secure client portal where customers can track orders, bookings, or documents',
      'Off-the-shelf software that does not match your company’s specific pricing or booking rules',
    ],
    whatWeProvideTitle: 'E-Commerce & Custom Application Solutions',
    whatWeProvideDescription:
      'We architect complete commercial platforms combining intuitive customer storefronts with automated payment, inventory, and back-office management.',
    deliverables: [
      {
        title: 'Shopify & WooCommerce Stores',
        description: 'Custom-designed online storefronts engineered for product discovery and conversion.',
      },
      {
        title: 'Dynamic Product Catalogs',
        description: 'Fast search, multi-attribute filtering, custom configurators, and bulk quote carts.',
      },
      {
        title: 'Payment & Checkout Integration',
        description: 'Stripe, PayPal, Apple Pay, Google Pay, and regional payment gateways.',
      },
      {
        title: 'Inventory & Order Synchronization',
        description: 'Real-time stock tracking, automated order confirmations, and shipping label workflows.',
      },
      {
        title: 'Booking & Reservation Systems',
        description: 'Real-time availability calendars, deposit payments, and automated reminders.',
      },
      {
        title: 'Customer Portals & Custom Dashboards',
        description: 'Secure account areas for order history, invoices, service requests, and analytics.',
      },
    ],
    features: [
      'Shopify',
      'WooCommerce',
      'Online Stores',
      'Product Catalogs',
      'Payment Integration',
      'Checkout Optimization',
      'Inventory Management',
      'Booking Systems',
      'Customer Portals',
      'Dashboards',
      'Custom Web Applications',
      'API Integrations',
    ],
    visualType: 'ecommerce-arch',
    howItWorks: [
      {
        step: '01',
        title: 'Catalog & Workflow Mapping',
        description: 'Defining product structures, pricing rules, user roles, and payment gateways.',
      },
      {
        step: '02',
        title: 'Storefront & Portal UI Design',
        description: 'Designing frictionless product browsing, cart drawers, and account dashboards.',
      },
      {
        step: '03',
        title: 'Payment, Inventory & API Integration',
        description: 'Connecting payment processors, shipping rules, ERP/CRM sync, and notifications.',
      },
      {
        step: '04',
        title: 'Transaction Testing & Launch',
        description: 'End-to-end checkout verification, security compliance checks, and live deployment.',
      },
    ],
    benefits: [
      {
        metric: '1-Click',
        title: 'Express Checkout Ready',
        description: 'Support for Apple Pay, Google Pay, and Stripe Link to reduce mobile cart abandonment.',
      },
      {
        metric: 'Real-Time',
        title: 'Inventory & Booking Sync',
        description: 'Eliminate double-bookings and manual spreadsheet updates across channels.',
      },
      {
        metric: 'Custom',
        title: 'Tailored Business Logic',
        description: 'Built around your exact quote, deposit, subscription, or wholesale rules.',
      },
    ],
    technologies: ['Shopify Plus', 'WooCommerce', 'Stripe API', 'React / Next.js', 'PostgreSQL', 'REST Webhooks', 'Customer Portals'],
    relatedSlugs: ['web-development', 'seo-hosting-website-care', 'workflow-automation'],
    faqs: [
      {
        question: 'Can you build a product catalog where customers request a quote instead of paying online?',
        answer:
          'Yes. For B2B, manufacturing, and bespoke showroom businesses (such as kitchen or architectural suppliers), we build catalog systems where customers select items or specifications and submit a structured quote request.',
      },
      {
        question: 'Which payment gateways can you integrate?',
        answer:
          'We integrate Stripe, PayPal, Apple Pay, Google Pay, Klarna, Square, and local banking gateways with full PCI-compliant security.',
      },
    ],
  },

  'seo-hosting-website-care': {
    slug: 'seo-hosting-website-care',
    path: '/services/web-development/seo-hosting-website-care',
    divisionId: 'web-development',
    divisionTitle: 'Web Development',
    divisionPath: '/services/web-development',
    title: 'SEO, Hosting & Website Care',
    metaTitle: 'SEO, AEO/GEO AI Visibility, Managed Hosting & Website Care | BOTLYTICES',
    metaDescription:
      'Complete search optimization across Google and AI Answer Engines (ChatGPT, Perplexity), domain & SSL setup, fast cloud hosting, and ongoing website care.',
    heroEyebrow: 'Web Development · 04',
    heroHeadline: 'Get Found on Google & AI Search. Stay Fast, Secure & Online.',
    heroDescription:
      'Launching a website is only the beginning. We optimize your pages for Google and AI Answer Engines (ChatGPT, Perplexity), manage your domain and fast hosting, and protect your site with ongoing technical care.',
    ctaText: 'Plan My Website',
    heroImage: IMAGES.heroTechEcosystem,
    problemTitle: 'An Unoptimized, Unmaintained Website Loses Visibility & Trust',
    problemDescription:
      'Even a good-looking website will fail to generate leads if search engines cannot index its structure, if AI assistants cannot read its entities, or if expired SSL certificates and slow hosting drive visitors away.',
    painPoints: [
      'Invisible on Google search and absent from AI answers in ChatGPT and Perplexity',
      'Missing schema markup, broken sitemaps, and unindexed pages in Google Search Console',
      'Complicated domain, DNS, SSL, and business email configurations that break',
      'Outdated plugins, unmonitored security risks, and no reliable backup recovery plan',
    ],
    whatWeProvideTitle: 'Four-Pillar Search, Hosting & Maintenance System',
    whatWeProvideDescription:
      'We combine Technical SEO, AI Answer Engine Optimization (AEO/GEO), managed cloud infrastructure, and proactive website care under one roof.',
    deliverables: [
      {
        title: '1. SEO (Technical, On-Page & Local)',
        description: 'Search Console setup, XML sitemaps, JSON-LD schema, internal linking, and Core Web Vitals speed optimization.',
      },
      {
        title: '2. AEO / GEO (AI Search Visibility)',
        description: 'Answer Engine & Generative Engine Optimization so ChatGPT, Perplexity, and Google AI Overviews recommend your business.',
      },
      {
        title: '3. Domain, DNS, SSL & Fast Hosting',
        description: 'Domain registration, Cloudflare DNS, SSL encryption, business email setup, and seamless website migration.',
      },
      {
        title: '4. Ongoing Website Care & Backups',
        description: 'Routine software updates, daily off-site backups, malware monitoring, uptime checks, and content updates.',
      },
    ],
    features: [
      'Technical SEO',
      'On-Page SEO',
      'Local SEO',
      'Search Console',
      'Schema Markup',
      'XML Sitemap',
      'Internal Linking',
      'Answer Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'Domain & DNS Setup',
      'SSL & Business Email',
      'Fast Cloud Hosting',
      'Automated Backups',
      'Malware Monitoring & Care',
    ],
    visualType: 'seo-aeo-care',
    howItWorks: [
      {
        step: '01',
        title: 'Technical SEO & AEO Audit',
        description: 'Inspecting indexation, page speed, heading hierarchy, and structured schema.',
      },
      {
        step: '02',
        title: 'On-Page & Schema Implementation',
        description: 'Deploying Organization, LocalBusiness, Service, and FAQ JSON-LD structured data.',
      },
      {
        step: '03',
        title: 'Hosting & DNS Hardening',
        description: 'Migrating to fast cloud servers with CDN caching, SSL, and authenticated email (SPF/DKIM/DMARC).',
      },
      {
        step: '04',
        title: 'Continuous Monitoring & Care',
        description: 'Daily backups, security patching, Search Console tracking, and content updates.',
      },
    ],
    benefits: [
      {
        metric: 'Google + AI',
        title: 'Dual Search Visibility',
        description: 'Structured for both traditional Google search rankings and AI answer engines.',
      },
      {
        metric: 'Daily',
        title: 'Automated Off-Site Backups',
        description: 'Instant one-click restore point protection before any update is applied.',
      },
      {
        metric: 'Zero',
        title: 'Infrastructure Headaches',
        description: 'We manage domain renewals, DNS records, SSL certificates, and server health for you.',
      },
    ],
    technologies: ['Google Search Console', 'Schema.org JSON-LD', 'Cloudflare CDN', 'AEO / GEO Entity Structuring', 'Automated Daily Backups', 'SPF / DKIM / DMARC'],
    relatedSlugs: ['web-development', 'business-profiles', 'digital-marketing'],
    faqs: [
      {
        question: 'What is the difference between SEO and AEO / GEO?',
        answer:
          'Traditional SEO helps your pages rank in Google search results. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) structure your website content and schema markup so AI platforms like ChatGPT, Perplexity, and Google AI Overviews cite and recommend your business when users ask questions.',
      },
      {
        question: 'Can you migrate our website from our current slow host without downtime?',
        answer:
          'Yes. We stage and test a complete copy of your website on our fast cloud infrastructure first, then update DNS records for a seamless, zero-downtime switchover.',
      },
    ],
  },

  // ============================================================================
  // 2. IT SUPPORT & INFRASTRUCTURE SUBCATEGORIES
  // ============================================================================
  'hardware-device-support': {
    slug: 'hardware-device-support',
    path: '/services/it-support/hardware-device-support',
    divisionId: 'it-support',
    divisionTitle: 'IT Support & Infrastructure',
    divisionPath: '/services/it-support',
    title: 'Hardware & Device Support',
    metaTitle: 'Hardware & Device Support | Desktops, Laptops, Printers & Upgrades | BOTLYTICES',
    metaDescription:
      'Professional business hardware support for desktops, laptops, monitors, printers, and scanners. RAM/SSD upgrades, troubleshooting, and preventive maintenance.',
    heroEyebrow: 'IT Support & Infrastructure · 01',
    heroHeadline: 'Reliable Workstations, Upgrades & Device Support for Your Team.',
    heroDescription:
      'We set up, upgrade, troubleshoot, and maintain the physical computers, laptops, monitors, printers, and peripherals your team relies on every day.',
    ctaText: 'Get IT Support',
    heroImage: IMAGES.hardwareMonolith,
    problemTitle: 'Slow Computers & Faulty Office Equipment Drain Productivity',
    problemDescription:
      'When laptops freeze during client calls, printers disconnect from the office network, or new employees wait days for a configured workstation, your entire team loses valuable billable hours.',
    painPoints: [
      'Sluggish desktops and laptops taking minutes to boot or open large files',
      'Network printers and scanners frequently going offline or failing to scan to email',
      'New staff workstations set up inconsistently without proper security or peripherals',
      'Unexpected hardware failures due to dust buildup, overheating, and aging drives',
    ],
    whatWeProvideTitle: 'Complete Workstation & Peripheral Hardware Services',
    whatWeProvideDescription:
      'We provide both on-site hardware installation and rapid diagnostics to keep every workstation and office device performing at peak reliability.',
    deliverables: [
      {
        title: 'Desktop & Laptop Support',
        description: 'Diagnostics, component repairs, power supply replacement, and thermal servicing.',
      },
      {
        title: 'RAM & NVMe SSD Upgrades',
        description: 'Extending the lifespan and speed of existing computers with high-speed memory and solid-state drives.',
      },
      {
        title: 'Printers, Scanners & Multi-Function Devices',
        description: 'Network printer mapping, scan-to-folder/email setup, and driver standardization.',
      },
      {
        title: 'Multi-Monitor & Desk Setup',
        description: 'Ergonomic dual/ultrawide monitor installations, docking stations, and clean cable management.',
      },
      {
        title: 'New Device Procurement & Configuration',
        description: 'Unboxed, pre-configured workstations ready for new employees on day one.',
      },
      {
        title: 'Preventive Maintenance & Remote Support',
        description: 'Scheduled hardware health checks, disk diagnostics, and instant remote troubleshooting.',
      },
    ],
    features: [
      'Desktop Support',
      'Laptop Support',
      'Printers',
      'Scanners',
      'Monitors',
      'Hardware Installation',
      'RAM Upgrades',
      'SSD Upgrades',
      'Troubleshooting',
      'Device Configuration',
      'Preventive Maintenance',
      'Remote Support',
    ],
    visualType: 'hardware-diagnostics',
    howItWorks: [
      {
        step: '01',
        title: 'Hardware Assessment',
        description: 'We inspect device specifications, drive health, memory usage, and peripheral connectivity.',
      },
      {
        step: '02',
        title: 'Repair, Upgrade or Replace',
        description: 'We install SSD/RAM upgrades, replace faulty components, or prepare new workstations.',
      },
      {
        step: '03',
        title: 'Peripheral & Network Sync',
        description: 'We connect monitors, docks, network printers, and shared scanners across your office.',
      },
      {
        step: '04',
        title: 'Preventive Care',
        description: 'Ongoing health monitoring and rapid remote or on-site assistance whenever needed.',
      },
    ],
    benefits: [
      {
        metric: 'Up to 5x',
        title: 'Faster Workstation Boot & Load',
        description: 'NVMe SSD and RAM upgrades revitalize slow office desktops and laptops.',
      },
      {
        metric: 'Day-1',
        title: 'Ready-to-Work Employee Setups',
        description: 'New team members receive fully configured hardware without IT delays.',
      },
      {
        metric: 'Zero',
        title: 'Printer & Scanner Frustration',
        description: 'Static IP printer mapping and reliable scan-to-email workflows for the whole office.',
      },
    ],
    technologies: ['Dell / HP / Lenovo Commercial', 'Apple Mac Workstations', 'NVMe M.2 SSDs', 'DDR4 / DDR5 Memory', 'Network MFP Printers', 'USB-C / Thunderbolt Docks'],
    relatedSlugs: ['software-system-support', 'networking-wifi', 'cybersecurity'],
    faqs: [
      {
        question: 'Is it worth upgrading our existing office computers with SSDs and RAM?',
        answer:
          'In most cases, yes. If a computer has a modern processor but uses an older mechanical hard drive or 8GB of RAM, upgrading to a solid-state drive (SSD) and 16GB–32GB RAM makes it run like new for a fraction of the cost of a new PC.',
      },
      {
        question: 'Can you set up shared office printers so everyone can scan directly to their email or shared folders?',
        answer:
          'Yes. We assign static network IPs to your printers, install reliable drivers across all Windows and Mac workstations, and configure secure scan-to-email and scan-to-network-folder shortcuts.',
      },
    ],
  },

  'software-system-support': {
    slug: 'software-system-support',
    path: '/services/it-support/software-system-support',
    divisionId: 'it-support',
    divisionTitle: 'IT Support & Infrastructure',
    divisionPath: '/services/it-support',
    title: 'Software & System Support',
    metaTitle: 'Software & System Support | Windows, Microsoft 365 & Email Setup | BOTLYTICES',
    metaDescription:
      'Business software and system support including Windows OS, Microsoft 365, business email setup, data migration, user accounts, and system optimization.',
    heroEyebrow: 'IT Support & Infrastructure · 02',
    heroHeadline: 'Smooth Operating Systems, Microsoft 365 & Business Software.',
    heroDescription:
      'We handle Windows and Mac operating systems, Microsoft 365 administration, professional email migrations, software licensing, and user account management.',
    ctaText: 'Get IT Support',
    heroImage: IMAGES.itNetworkLab,
    problemTitle: 'Software Glitches & Email Misconfigurations Disrupt Daily Work',
    problemDescription:
      'Broken Outlook profiles, unorganized shared drives, failed Windows updates, and missing drivers create constant interruptions and put company data at risk.',
    painPoints: [
      'Business emails landing in spam or failing to sync across phones and laptops',
      'Windows update errors, blue-screen crashes, and incompatible device drivers',
      'Disorganized file sharing without structured Microsoft 365 / SharePoint permissions',
      'Risk of losing critical files when transferring data to a new computer',
    ],
    whatWeProvideTitle: 'Operating System & Cloud Workspace Administration',
    whatWeProvideDescription:
      'We configure, standardize, and support the core software environment your staff uses every day.',
    deliverables: [
      {
        title: 'Windows & OS Deployment',
        description: 'Clean operating system installation, version upgrades, and system stability tuning.',
      },
      {
        title: 'Microsoft 365 & Office Suite',
        description: 'Setup and administration for Outlook, Word, Excel, Teams, OneDrive, and SharePoint.',
      },
      {
        title: 'Business Email Setup & Migration',
        description: 'Custom domain email setup, mailbox migrations, and SPF/DKIM/DMARC deliverability.',
      },
      {
        title: 'Data Migration & Automated Backups',
        description: 'Seamless file transfer between old and new machines plus continuous cloud backup.',
      },
      {
        title: 'Software & Driver Installation',
        description: 'Installing accounting, CAD, industry software, and verified hardware drivers.',
      },
      {
        title: 'User Accounts & Permission Control',
        description: 'Onboarding and offboarding staff accounts with proper role-based file access.',
      },
    ],
    features: [
      'Windows Support',
      'Microsoft 365',
      'Office Applications',
      'Software Installation',
      'Driver Installation',
      'System Updates',
      'System Optimization',
      'Business Email Setup',
      'Data Migration',
      'Backup Configuration',
      'User Accounts',
      'Remote Troubleshooting',
    ],
    visualType: 'software-stack',
    howItWorks: [
      {
        step: '01',
        title: 'System & Account Audit',
        description: 'Reviewing current OS versions, email domains, software licenses, and backup status.',
      },
      {
        step: '02',
        title: 'Standardized Configuration',
        description: 'Setting up Microsoft 365 tenants, domain email, user permissions, and core apps.',
      },
      {
        step: '03',
        title: 'Zero-Loss Data Migration',
        description: 'Moving emails, contacts, calendars, and company documents without downtime.',
      },
      {
        step: '04',
        title: 'Updates & Helpdesk Support',
        description: 'Managing patches, driver updates, and fast remote support for your staff.',
      },
    ],
    benefits: [
      {
        metric: 'Zero',
        title: 'Email Downtime During Migration',
        description: 'We migrate mailboxes cleanly so you never miss a customer message.',
      },
      {
        metric: 'Centralized',
        title: 'User & License Control',
        description: 'Easily add new employees or revoke access when staff members leave.',
      },
      {
        metric: 'Optimized',
        title: 'Clean OS Performance',
        description: 'Removal of bloatware, startup bottlenecks, and conflicting drivers.',
      },
    ],
    technologies: ['Windows 11 Pro', 'Microsoft 365 Business', 'Exchange Online', 'SharePoint & OneDrive', 'Google Workspace', 'Acronis / Cloud Backups'],
    relatedSlugs: ['hardware-device-support', 'cybersecurity', 'networking-wifi'],
    faqs: [
      {
        question: 'Can you move our business emails from an old hosting provider to Microsoft 365?',
        answer:
          'Yes. We handle complete mailbox migrations—including all historical emails, folders, contacts, and calendars—into Microsoft 365 or Google Workspace with zero lost messages.',
      },
      {
        question: 'How quickly can you help if an employee has a software error?',
        answer:
          'With our remote support tools, we can connect securely to your employee’s screen within minutes to resolve software, Outlook, driver, or operating system issues.',
      },
    ],
  },

  'networking-wifi': {
    slug: 'networking-wifi',
    path: '/services/it-support/networking-wifi',
    divisionId: 'it-support',
    divisionTitle: 'IT Support & Infrastructure',
    divisionPath: '/services/it-support',
    title: 'Networking & Wi-Fi',
    metaTitle: 'Business Networking, Structured Cabling & Commercial Wi-Fi | BOTLYTICES',
    metaDescription:
      'Design and installation of business LAN networks, commercial Wi-Fi, routers, switches, Cat5e/Cat6/Cat6a structured cabling, and VLAN segmentation.',
    heroEyebrow: 'IT Support & Infrastructure · 03',
    heroHeadline: 'Fast, Stable Office Networks & Dead-Zone-Free Business Wi-Fi.',
    heroDescription:
      'We design, cable, and configure commercial LAN networks, managed switches, routers, and multi-access-point Wi-Fi systems that deliver fast, uninterrupted connectivity across your entire premises.',
    ctaText: 'Get IT Support',
    heroImage: IMAGES.datacenterNetworking,
    problemTitle: 'Weak Wi-Fi & Messy Cabling Bottleneck Your Entire Office',
    problemDescription:
      'Consumer-grade routers cannot handle dozens of business laptops, VoIP phones, POS terminals, and security cameras—resulting in dropped video calls, dead zones, and network outages.',
    painPoints: [
      'Wi-Fi dead zones in meeting rooms, warehouses, or upper floors',
      'Dropped Zoom/Teams calls and slow file transfers during busy office hours',
      'Unlabeled, tangled patch panels and loose cables that are impossible to troubleshoot',
      'Guest devices sharing the same insecure network as company servers and accounting PCs',
    ],
    whatWeProvideTitle: 'Commercial Network Architecture & Structured Cabling',
    whatWeProvideDescription:
      'From running neat Cat6 data cables to configuring managed PoE switches and ceiling-mounted Wi-Fi access points, we build clean, commercial-grade networks.',
    deliverables: [
      {
        title: 'Structured Data Cabling (Cat5e / Cat6 / Cat6a)',
        description: 'Clean wall data points, patch panel termination, rack organization, and cable certification.',
      },
      {
        title: 'Commercial Business Wi-Fi',
        description: 'Ceiling-mounted wireless access points with seamless roaming across floors and rooms.',
      },
      {
        title: 'Routers & Managed PoE Switches',
        description: 'Enterprise routing, Power-over-Ethernet switches for VoIP/CCTV, and failover internet.',
      },
      {
        title: 'VLAN Segmentation & Guest Wi-Fi',
        description: 'Isolating staff workstations, guest Wi-Fi, IoT devices, and security cameras onto separate VLANs.',
      },
      {
        title: 'Network Troubleshooting & Expansion',
        description: 'Locating packet loss, fixing IP conflicts, and expanding network ports for growing teams.',
      },
      {
        title: '24/7 Network Health Monitoring',
        description: 'Proactive visibility into router uptime, bandwidth usage, and access point status.',
      },
    ],
    features: [
      'LAN Architecture',
      'Commercial Wi-Fi',
      'Routers',
      'Managed Switches',
      'Network Troubleshooting',
      'Structured Cabling',
      'Cat5e / Cat6 / Cat6a',
      'VLAN Segmentation',
      'Business Wi-Fi Roaming',
      'Network Expansion',
      'Network Monitoring',
    ],
    visualType: 'network-topology',
    howItWorks: [
      {
        step: '01',
        title: 'Site Survey & Signal Mapping',
        description: 'Evaluating floorplans, wall materials, cable pathways, and bandwidth needs.',
      },
      {
        step: '02',
        title: 'Cabling & Rack Installation',
        description: 'Running Cat6/Cat6a lines, terminating patch panels, and mounting switches.',
      },
      {
        step: '03',
        title: 'Router, VLAN & Wi-Fi Configuration',
        description: 'Configuring firewall rules, separate staff/guest VLANs, and roaming Wi-Fi.',
      },
      {
        step: '04',
        title: 'Speed Testing & Monitoring',
        description: 'Verifying throughput in every room and enabling continuous uptime monitoring.',
      },
    ],
    benefits: [
      {
        metric: '100%',
        title: 'Full-Premises Wi-Fi Coverage',
        description: 'Seamless roaming from office desks to boardrooms and warehouse floors.',
      },
      {
        metric: 'Isolated',
        title: 'VLAN Network Security',
        description: 'Visitors get fast guest Wi-Fi without ever touching your internal company network.',
      },
      {
        metric: '1Gbps–10Gbps',
        title: 'Certified Structured Cabling',
        description: 'Neatly labeled patch racks and wall ports built to support years of growth.',
      },
    ],
    technologies: ['Ubiquiti UniFi', 'Cisco / Meraki', 'TP-Link Omada', 'Cat6 / Cat6a Cabling', 'PoE+ Managed Switches', '802.1Q VLANs', 'Dual-WAN Failover'],
    relatedSlugs: ['hardware-device-support', 'cybersecurity', 'cctv'],
    faqs: [
      {
        question: 'Why do we need commercial Wi-Fi access points instead of regular Wi-Fi extenders?',
        answer:
          'Plug-in consumer extenders cut bandwidth in half and force devices to manually disconnect and reconnect as you walk around. Hardwired PoE commercial access points share a unified controller, giving you full speed and seamless roaming throughout your building.',
      },
      {
        question: 'Can you clean up and reorganize our existing messy server rack?',
        answer:
          'Yes. We trace, test, re-terminate, and label existing data cables, install proper patch panels and cable management bars, and organize your router, switch, and NVR hardware cleanly.',
      },
    ],
  },

  'cybersecurity': {
    slug: 'cybersecurity',
    path: '/services/it-support/cybersecurity',
    divisionId: 'it-support',
    divisionTitle: 'IT Support & Infrastructure',
    divisionPath: '/services/it-support',
    title: 'Cybersecurity & IT Security',
    metaTitle: 'Business Cybersecurity & Defensive IT Security | EDR, Firewall & MFA | BOTLYTICES',
    metaDescription:
      'Defensive cybersecurity for businesses: endpoint protection (EDR), firewall configuration, multi-factor authentication (MFA), backup security, and device hardening.',
    heroEyebrow: 'IT Support & Infrastructure · 04',
    heroHeadline: 'Practical Defensive Cybersecurity That Protects Your Business Data.',
    heroDescription:
      'We protect your company workstations, accounts, networks, and backups against ransomware, phishing, and unauthorized access through multi-layered defensive security.',
    ctaText: 'Get IT Support',
    heroImage: IMAGES.itNetworkLab,
    problemTitle: 'One Compromised Password or Unprotected Laptop Can Halt Operations',
    problemDescription:
      'Small and mid-sized businesses are frequent targets for automated phishing emails, invoice fraud, and ransomware because basic protections like MFA, endpoint EDR, and immutable backups are often left unconfigured.',
    painPoints: [
      'Employee email or cloud accounts lacking Multi-Factor Authentication (MFA)',
      'Consumer antivirus software that misses modern ransomware and credential theft',
      'Shared passwords and former employees still retaining access to company files',
      'Backups stored on the same network drive where ransomware can encrypt them',
    ],
    whatWeProvideTitle: 'Multi-Layered Defensive Security Architecture',
    whatWeProvideDescription:
      'We focus strictly on practical, defensive business security—hardening your devices, locking down accounts, securing your network perimeter, and guaranteeing recoverable backups.',
    deliverables: [
      {
        title: 'Endpoint Protection (Antivirus / EDR)',
        description: 'Managed endpoint detection and response across all Windows and Mac company computers.',
      },
      {
        title: 'MFA & Account Security Policies',
        description: 'Enforcing Multi-Factor Authentication, conditional access, and password policies across Microsoft 365 / Google.',
      },
      {
        title: 'Firewall & Network Security',
        description: 'Hardware firewall configuration, VPN access for remote staff, and port lockdowns.',
      },
      {
        title: 'Encrypted & Immutable Backup Security',
        description: '3-2-1 backup architecture with off-site cloud copies that ransomware cannot alter.',
      },
      {
        title: 'Device Hardening & Malware Remediation',
        description: 'BitLocker/FileVault disk encryption, removal of local admin risks, and rapid malware cleanup.',
      },
      {
        title: 'Security Audits & Access Management',
        description: 'Reviewing user permissions, email security (SPF/DKIM/DMARC), and staff phishing awareness.',
      },
    ],
    features: [
      'Endpoint Protection',
      'Antivirus / EDR',
      'Firewall Configuration',
      'Multi-Factor Authentication (MFA)',
      'Account Security',
      'Password Policies',
      'Network Security',
      'Backup Security',
      'Device Hardening',
      'Malware Remediation',
      'Phishing Awareness',
      'Security Audits',
      'Access Management',
    ],
    visualType: 'cyber-defense',
    howItWorks: [
      {
        step: '01',
        title: 'Defensive Security Audit',
        description: 'Checking accounts, MFA status, firewall rules, endpoint health, and backup integrity.',
      },
      {
        step: '02',
        title: 'Identity & Access Lockdown',
        description: 'Enforcing MFA, password managers, least-privilege permissions, and email authentication.',
      },
      {
        step: '03',
        title: 'Endpoint & Firewall Hardening',
        description: 'Deploying managed EDR antivirus, full-disk encryption, and hardware firewall rules.',
      },
      {
        step: '04',
        title: 'Immutable Backups & Monitoring',
        description: 'Configuring automated encrypted backups and continuous threat alerts.',
      },
    ],
    benefits: [
      {
        metric: '100%',
        title: 'MFA & Disk Encryption',
        description: 'Protects company accounts and lost/stolen laptops from unauthorized access.',
      },
      {
        metric: '3-2-1',
        title: 'Ransomware-Proof Backups',
        description: 'Verified off-site backups ensure your business can recover from any incident.',
      },
      {
        metric: '24/7',
        title: 'Managed Endpoint Defense',
        description: 'Real-time blocking of malware, suspicious scripts, and phishing payloads.',
      },
    ],
    technologies: ['Microsoft Defender for Business', 'Bitdefender / CrowdStrike EDR', 'Hardware Firewalls', 'BitLocker & FileVault', 'Zero-Trust MFA', 'Immutable Cloud Backups'],
    relatedSlugs: ['software-system-support', 'networking-wifi', 'hardware-device-support'],
    faqs: [
      {
        question: 'If a laptop is stolen or lost, can someone access our company files?',
        answer:
          'When we harden your devices, we enable full-disk encryption (BitLocker on Windows, FileVault on Mac) and remote wipe capability. Without the cryptographic key, the hard drive cannot be read even if removed from the laptop.',
      },
      {
        question: 'What is the single most effective security upgrade for a business?',
        answer:
          'Enforcing Multi-Factor Authentication (MFA) on all email and cloud accounts, paired with managed Endpoint Detection (EDR) and daily off-site backups, eliminates the vast majority of common business cyber risks.',
      },
    ],
  },

  // ============================================================================
  // 3. DIGITAL PRESENCE & BRANDING SUBCATEGORIES
  // ============================================================================
  'brand-identity': {
    slug: 'brand-identity',
    path: '/services/digital-presence/brand-identity',
    divisionId: 'digital-presence',
    divisionTitle: 'Digital Presence & Branding',
    divisionPath: '/services/digital-presence',
    title: 'Brand Identity & Logo Design',
    metaTitle: 'Brand Identity & Logo Design | Guidelines, Kits & Graphics | BOTLYTICES',
    metaDescription:
      'Professional logo design, logo redesign, brand color palettes, typography systems, business cards, social media graphics, and complete digital brand kits.',
    heroEyebrow: 'Digital Presence & Branding · 01',
    heroHeadline: 'A Cohesive, Recognizable Brand Identity Across Every Touchpoint.',
    heroDescription:
      'We design sharp logos, structured color palettes, typography guides, business cards, and social media brand kits so your business looks established and trustworthy everywhere.',
    ctaText: 'Improve My Online Presence',
    heroImage: IMAGES.presenceStudio,
    problemTitle: 'Inconsistent Visuals Make Great Businesses Look Amateur',
    problemDescription:
      'When your website uses one color scheme, your social media uses pixelated logos, and your business cards look unrelated, customers subconsciously question your professionalism.',
    painPoints: [
      'Low-resolution or outdated logo files that look blurry on modern screens and signage',
      'No defined brand colors or fonts, leading to mismatched graphics across platforms',
      'Social media profiles with unaligned profile pictures and generic cover banners',
      'Lack of ready-to-use templates for proposals, business cards, and digital posts',
    ],
    whatWeProvideTitle: 'Complete Visual Identity & Digital Brand Kits',
    whatWeProvideDescription:
      'Whether creating a new brand from scratch or modernizing an existing logo, we supply every file format and guideline your business needs.',
    deliverables: [
      {
        title: 'Logo Design & Logo Redesign',
        description: 'Primary wordmarks, icon marks, and monochrome variants delivered in vector (SVG, EPS, PDF) and PNG.',
      },
      {
        title: 'Color Palette & Typography System',
        description: 'Defined HEX/RGB/CMYK color codes and paired heading/body fonts for web and print.',
      },
      {
        title: 'Brand Guidelines Document',
        description: 'Clear rules on logo spacing, dark/light background usage, and visual tone.',
      },
      {
        title: 'Business Cards & Stationery',
        description: 'Print-ready business card layouts, email signatures, and letterhead templates.',
      },
      {
        title: 'Social Media Profile & Cover Graphics',
        description: 'Perfectly sized profile avatars and cover banners for LinkedIn, Instagram, Facebook, and YouTube.',
      },
      {
        title: 'Digital Brand Kit',
        description: 'Organized cloud folder containing all logos, icons, fonts, and social post templates.',
      },
    ],
    features: [
      'Logo Design',
      'Logo Redesign',
      'Brand Colors',
      'Typography Systems',
      'Brand Guidelines',
      'Business Cards',
      'Social Media Graphics',
      'Profile Images',
      'Cover Images',
      'Digital Brand Kits',
    ],
    visualType: 'brand-identity-kit',
    howItWorks: [
      {
        step: '01',
        title: 'Brand Discovery & Direction',
        description: 'Understanding your industry positioning, target clients, and aesthetic preferences.',
      },
      {
        step: '02',
        title: 'Logo & Visual Exploration',
        description: 'Crafting clean logo concepts, icon marks, color systems, and typographic pairings.',
      },
      {
        step: '03',
        title: 'Refinement & Collateral Design',
        description: 'Applying the approved identity to business cards, social headers, and brand guidelines.',
      },
      {
        step: '04',
        title: 'Master Brand Kit Delivery',
        description: 'Delivering all vector master files, web assets, and style documentation.',
      },
    ],
    benefits: [
      {
        metric: 'Vector',
        title: 'Infinite Scalability',
        description: 'Crisp SVG, EPS, and PDF master files ready for everything from favicons to vehicle wraps.',
      },
      {
        metric: 'Unified',
        title: 'Cross-Platform Consistency',
        description: 'Your website, Google profile, social channels, and print materials match seamlessly.',
      },
      {
        metric: 'Ready',
        title: 'Complete Asset Handoff',
        description: 'Organized digital brand kit so your team never hunts for the right logo file again.',
      },
    ],
    technologies: ['Adobe Illustrator', 'Figma Design Systems', 'SVG / Vector Mastering', 'CMYK & RGB Color Profiles', 'Brand Style Guides'],
    relatedSlugs: ['web-design-ui-ux', 'social-media-content', 'business-profiles'],
    faqs: [
      {
        question: 'What file formats will I receive with my logo and brand kit?',
        answer:
          'You receive full vector master files (SVG, AI, EPS, PDF) along with high-resolution transparent PNGs, favicons, dark/light variations, and pre-sized profile images for all major social networks.',
      },
      {
        question: 'Can you clean up and vectorize our existing logo if we lost the original files?',
        answer:
          'Yes. We can recreate and refine your existing logo into crisp vector geometry and build a complete brand kit around it.',
      },
    ],
  },

  'social-media-content': {
    slug: 'social-media-content',
    path: '/services/digital-presence/social-media-content',
    divisionId: 'digital-presence',
    divisionTitle: 'Digital Presence & Branding',
    divisionPath: '/services/digital-presence',
    title: 'Social Media & Content',
    metaTitle: 'Social Media Setup, Content Design & Management | BOTLYTICES',
    metaDescription:
      'Professional social media profile setup, optimization, post design, carousels, reels, captions, and content calendars for Instagram, LinkedIn, Facebook & TikTok.',
    heroEyebrow: 'Digital Presence & Branding · 02',
    heroHeadline: 'Consistent, On-Brand Social Media Content That Builds Trust.',
    heroDescription:
      'We set up, optimize, and design structured content for your Facebook, Instagram, LinkedIn, and TikTok channels—so your business stays active and credible.',
    ctaText: 'Improve My Online Presence',
    heroImage: IMAGES.localPresence,
    problemTitle: 'Inactive or Unpolished Social Channels Turn Prospects Away',
    problemDescription:
      'Before contacting a business, customers often check Instagram, LinkedIn, or Facebook to verify you are active. Empty profiles or last-minute unbranded posts send the wrong signal.',
    painPoints: [
      'Incomplete social profiles with missing bios, contact buttons, and website links',
      'No time to design graphics, write captions, or plan a monthly content calendar',
      'Inconsistent visual style across posts, carousels, and short-form video reels',
      'Disconnected messaging that does not highlight your core services or client results',
    ],
    whatWeProvideTitle: 'Social Profile Optimization & Visual Content Production',
    whatWeProvideDescription:
      'We turn your social channels into a clean digital storefront that reinforces your expertise and supports your sales pipeline.',
    deliverables: [
      {
        title: 'Social Profile Setup & Optimization',
        description: 'Complete bio copywriting, action buttons, highlights covers, and brand alignment.',
      },
      {
        title: 'Branded Post & Graphic Design',
        description: 'Custom-designed single posts, promotional graphics, and service spotlights.',
      },
      {
        title: 'Educational Carousels & Reels',
        description: 'Multi-slide carousel graphics and edited short-form vertical video reels.',
      },
      {
        title: 'Captions & Hashtag Strategy',
        description: 'Clear, engaging copywriting tailored to LinkedIn, Instagram, Facebook, and TikTok.',
      },
      {
        title: 'Structured Content Calendars',
        description: 'Planned monthly publishing schedules so you can review and approve posts ahead of time.',
      },
      {
        title: 'Ongoing Social Media Management',
        description: 'Scheduled publishing, profile maintenance, and monthly performance summaries.',
      },
    ],
    features: [
      'Facebook',
      'Instagram',
      'LinkedIn',
      'TikTok',
      'Social Profile Setup',
      'Profile Optimization',
      'Post Design',
      'Carousels',
      'Reels',
      'Captions',
      'Content Calendars',
      'Promotional Graphics',
      'Social Media Management',
    ],
    visualType: 'social-content-grid',
    howItWorks: [
      {
        step: '01',
        title: 'Channel Audit & Setup',
        description: 'Optimizing bios, profile/cover graphics, links, and highlight categories.',
      },
      {
        step: '02',
        title: 'Content Pillar Planning',
        description: 'Building a monthly calendar covering services, projects, FAQs, and client proof.',
      },
      {
        step: '03',
        title: 'Design & Copy Production',
        description: 'Creating branded posts, carousels, reels, and captions for your approval.',
      },
      {
        step: '04',
        title: 'Scheduled Publishing',
        description: 'Consistent posting across your channels with clear performance tracking.',
      },
    ],
    benefits: [
      {
        metric: '4 Channels',
        title: 'Instagram, LinkedIn, FB & TikTok',
        description: 'Tailored formats for both B2B decision-makers and local consumers.',
      },
      {
        metric: '100%',
        title: 'Brand-Aligned Visuals',
        description: 'Every post follows your exact typography and color identity.',
      },
      {
        metric: 'Zero',
        title: 'Weekly Content Stress',
        description: 'Approve a full batch of scheduled content in one simple review.',
      },
    ],
    technologies: ['Instagram Business', 'LinkedIn Company Pages', 'Meta Business Suite', 'TikTok Business', 'Figma Content Systems'],
    relatedSlugs: ['brand-identity', 'business-profiles', 'digital-marketing'],
    faqs: [
      {
        question: 'Do we get to approve social media posts before they go live?',
        answer:
          'Yes. We share your content calendar—including all graphics, carousels, reels, and captions—for your review and approval before anything is scheduled.',
      },
      {
        question: 'Can you just set up and optimize our profiles and give us templates?',
        answer:
          'Yes. We offer both one-time profile setup and template kits as well as ongoing monthly content creation and management.',
      },
    ],
  },

  'business-profiles': {
    slug: 'business-profiles',
    path: '/services/digital-presence/business-profiles',
    divisionId: 'digital-presence',
    divisionTitle: 'Digital Presence & Branding',
    divisionPath: '/services/digital-presence',
    title: 'Business Profiles & Local Presence',
    metaTitle: 'Google Business Profile, Apple Maps & Local Presence | BOTLYTICES',
    metaDescription:
      'Be easy to find wherever customers search. Complete optimization for Google Business Profile, Apple Business Connect, Bing Places, and local directories.',
    heroEyebrow: 'Digital Presence & Branding · 03',
    heroHeadline: 'Be Easy to Find Wherever Customers Search.',
    heroDescription:
      'We verify, optimize, and synchronize your business presence across Google Business Profile, Google Maps, Apple Business Connect, Bing Places, and essential industry directories.',
    ctaText: 'Improve My Online Presence',
    heroImage: IMAGES.localPresence,
    problemTitle: 'Unclaimed or Incomplete Map Profiles Hand Local Customers to Competitors',
    problemDescription:
      'When someone searches for your service nearby on Google Maps or asks Siri on an iPhone, search engines prioritize verified profiles with accurate categories, service menus, photos, and consistent directory data.',
    painPoints: [
      'Not appearing in the top 3 Google Maps results for local service searches',
      'Missing or unverified listings on Apple Maps (Apple Business Connect) and Bing Places',
      'Incorrect opening hours, old phone numbers, or misplaced map pins frustrating customers',
      'Incomplete service lists and lack of structured review generation workflows',
    ],
    whatWeProvideTitle: 'Complete Map & Directory Authority Setup',
    whatWeProvideDescription:
      'We connect every major map, search engine, directory, and social profile back to your website with 100% consistent business data.',
    deliverables: [
      {
        title: 'Google Business Profile Optimization',
        description: 'Verification, primary/secondary category selection, service catalog, Q&A, and photo geotagging.',
      },
      {
        title: 'Apple Business Connect & Apple Maps',
        description: 'Claiming and customizing your Apple Maps place card for iPhone, iPad, CarPlay, and Siri searches.',
      },
      {
        title: 'Bing Places for Business',
        description: 'Synchronizing verified business profiles across Microsoft Bing search and maps.',
      },
      {
        title: 'Business Directories & Citation Sync',
        description: 'Ensuring identical Name, Address, Phone (NAP), and website URLs across trusted directories.',
      },
      {
        title: 'Descriptions, Services & Photo Curation',
        description: 'Keyword-structured business descriptions, itemized services, and branded exterior/interior photos.',
      },
      {
        title: 'Review Strategy & Local SEO Integration',
        description: 'Direct review request links, QR codes, response templates, and website LocalBusiness schema.',
      },
    ],
    features: [
      'Google Business Profile',
      'Apple Business Presence / Maps',
      'Bing Places',
      'Business Directories',
      'Profile Optimization',
      'Business Categories',
      'Services Catalog',
      'Business Descriptions',
      'Branded Photos',
      'Location Information',
      'Reviews Management',
      'Local SEO',
    ],
    visualType: 'digital-presence-map',
    howItWorks: [
      {
        step: '01',
        title: 'Presence & Citation Audit',
        description: 'Checking how your business currently appears across Google, Apple, Bing, and directories.',
      },
      {
        step: '02',
        title: 'Verification & Pin Accuracy',
        description: 'Completing platform ownership verifications and locking accurate map coordinates.',
      },
      {
        step: '03',
        title: 'Full Profile Enrichment',
        description: 'Populating categories, itemized services, descriptions, hours, and high-res photos.',
      },
      {
        step: '04',
        title: 'Website Schema & Review Sync',
        description: 'Linking profiles to your website via LocalBusiness JSON-LD and setting up review links.',
      },
    ],
    benefits: [
      {
        metric: '3 Major Maps',
        title: 'Google, Apple & Bing Coverage',
        description: 'Capture customers searching on Android, iPhone/Siri, and desktop browsers.',
      },
      {
        metric: '100%',
        title: 'NAP Data Consistency',
        description: 'Unified business name, address, phone, and hours across the web.',
      },
      {
        metric: 'Direct',
        title: 'Call, Direction & Website Clicks',
        description: 'Turn high-intent local map searches directly into phone calls and enquiries.',
      },
    ],
    technologies: ['Google Business Profile', 'Apple Business Connect', 'Bing Places', 'LocalBusiness Schema.org', 'Citation Directories'],
    relatedSlugs: ['seo-hosting-website-care', 'digital-marketing', 'brand-identity'],
    faqs: [
      {
        question: 'Why does Apple Business Connect matter if we already have Google Maps?',
        answer:
          'Millions of customers use Apple Maps, Siri, and Apple Wallet on iPhones by default. Claiming and optimizing Apple Business Connect ensures your logo, photos, hours, and call button appear properly on iOS devices.',
      },
      {
        question: 'Can you help if we serve customers at their locations rather than having a retail shopfront?',
        answer:
          'Yes. We configure Service Area Business (SAB) profiles properly so your residential address stays hidden while your business ranks across the cities and postcodes you serve.',
      },
    ],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    path: '/services/digital-presence/digital-marketing',
    divisionId: 'digital-presence',
    divisionTitle: 'Digital Presence & Branding',
    divisionPath: '/services/digital-presence',
    title: 'Digital Marketing & Growth',
    metaTitle: 'Digital Marketing, Local SEO, Landing Pages & Analytics | BOTLYTICES',
    metaDescription:
      'Measurable digital growth through local SEO, search visibility, paid advertising, conversion landing pages, reputation management, and clear reporting.',
    heroEyebrow: 'Digital Presence & Branding · 04',
    heroHeadline: 'Targeted Search Visibility & Conversion Campaigns That Generate Leads.',
    heroDescription:
      'We combine local search optimization, high-converting landing pages, targeted paid campaigns, and transparent analytics to bring qualified customers to your business.',
    ctaText: 'Improve My Online Presence',
    heroImage: IMAGES.presenceStudio,
    problemTitle: 'Traffic Without Conversion Architecture Wastes Your Marketing Budget',
    problemDescription:
      'Running ads or publishing content that sends visitors to a slow, generic homepage results in wasted spend and no clear visibility into which channels actually produce paying clients.',
    painPoints: [
      'Ad spend wasted sending clicks to pages that are not built to convert',
      'Competitors outranking your business for high-value local service keywords',
      'No clear analytics tracking phone calls, form submissions, or WhatsApp enquiries',
      'Unanswered customer reviews hurting conversion rates on search and maps',
    ],
    whatWeProvideTitle: 'Practical Digital Growth & Conversion Systems',
    whatWeProvideDescription:
      'Every campaign is paired with dedicated landing pages, conversion tracking, and straightforward reporting.',
    deliverables: [
      {
        title: 'Local SEO & Search Visibility',
        description: 'Location and service page optimization to capture high-intent search queries.',
      },
      {
        title: 'Dedicated Conversion Landing Pages',
        description: 'Focused campaign pages designed specifically to turn ad and search traffic into leads.',
      },
      {
        title: 'Paid Search & Social Advertising',
        description: 'Targeted Google Ads and Meta (Instagram/Facebook) lead generation campaigns.',
      },
      {
        title: 'Content Marketing & Authority Guides',
        description: 'Service articles and case studies that answer customer questions and build search authority.',
      },
      {
        title: 'Reputation & Review Management',
        description: 'Systems to consistently request 5-star reviews from happy clients and respond professionally.',
      },
      {
        title: 'Analytics & Conversion Reporting',
        description: 'GA4, Tag Manager, and call/form tracking dashboards showing real enquiries generated.',
      },
    ],
    features: [
      'Local SEO',
      'Search Visibility',
      'Content Marketing',
      'Social Marketing',
      'Paid Advertising',
      'Landing Pages',
      'Conversion Optimization',
      'Reputation Management',
      'Analytics Setup',
      'Performance Reporting',
    ],
    visualType: 'growth-funnel',
    howItWorks: [
      {
        step: '01',
        title: 'Keyword & Audience Research',
        description: 'Identifying the exact search terms and local areas with the highest commercial intent.',
      },
      {
        step: '02',
        title: 'Landing Page & Tracking Setup',
        description: 'Building conversion-focused pages and configuring call, form, and WhatsApp event tracking.',
      },
      {
        step: '03',
        title: 'Search & Campaign Execution',
        description: 'Launching local SEO improvements, content assets, and targeted ad campaigns.',
      },
      {
        step: '04',
        title: 'Optimization & Clear Reporting',
        description: 'Refining conversion rates and delivering plain-English monthly lead reports.',
      },
    ],
    benefits: [
      {
        metric: 'Tracked',
        title: 'Every Call & Form Measured',
        description: 'Know exactly which search term or campaign generated each customer enquiry.',
      },
      {
        metric: 'High-Intent',
        title: 'Focused on Buyers',
        description: 'Targeting customers actively searching for your specific services right now.',
      },
      {
        metric: 'Higher ROI',
        title: 'Landing Page Alignment',
        description: 'Dedicated landing pages convert significantly more visitors than generic homepages.',
      },
    ],
    technologies: ['Google Analytics 4 (GA4)', 'Google Tag Manager', 'Google Ads', 'Meta Ads Manager', 'Search Console', 'Conversion Rate Optimization (CRO)'],
    relatedSlugs: ['business-profiles', 'seo-hosting-website-care', 'lead-generation'],
    faqs: [
      {
        question: 'Should we focus on Local SEO or Paid Advertising first?',
        answer:
          'Local SEO and Google Business Profile optimization build long-term organic enquiries without paying per click. Paid advertising (Google Ads) delivers immediate top-of-page visibility while your organic rankings grow. Many clients combine both.',
      },
      {
        question: 'How do you measure results?',
        answer:
          'We focus on real business outcomes—phone calls, quote form submissions, booked appointments, and WhatsApp enquiries—rather than vanity impressions.',
      },
    ],
  },

  // ============================================================================
  // 4. AI AUTOMATION SUBCATEGORIES
  // ============================================================================
  'voice-assistants': {
    slug: 'voice-assistants',
    path: '/services/ai-automation/voice-assistants',
    divisionId: 'ai-automation',
    divisionTitle: 'AI Automation',
    divisionPath: '/services/ai-automation',
    title: 'AI Voice Assistants',
    metaTitle: 'AI Voice Assistants | 24/7 Phone Receptionist & Call Booking | BOTLYTICES',
    metaDescription:
      '24/7 AI phone voice assistants for inbound and outbound calls. Answer customer questions, qualify leads, book appointments, route calls, and sync with your CRM.',
    heroEyebrow: 'AI Automation · 01',
    heroHeadline: 'Never Miss a Customer Call Again—24/7 AI Voice Assistants.',
    heroDescription:
      'We build natural-sounding AI phone and website voice assistants that answer calls instantly, handle common questions, qualify leads, book appointments into your calendar, and log everything into your CRM.',
    ctaText: 'Automate My Business',
    heroImage: IMAGES.aiExecDesk,
    problemTitle: 'Missed Calls & Voicemail Mean Lost Business to the Next Competitor',
    problemDescription:
      'When your team is on-site, in meetings, or closed for the evening, callers rarely leave voicemails—they simply call the next business on Google.',
    painPoints: [
      'Missed inbound customer calls during busy hours, evenings, and weekends',
      'Staff constantly interrupted by repetitive pricing, location, and availability questions',
      'Slow manual follow-up on website form submissions',
      'Call notes and appointment requests forgotten instead of logged into your CRM',
    ],
    whatWeProvideTitle: 'Custom-Trained Phone & Website Voice Assistants',
    whatWeProvideDescription:
      'Trained specifically on your business services, pricing rules, and calendar availability, your voice assistant operates 24/7 alongside your human team.',
    deliverables: [
      {
        title: '24/7 Inbound Phone Receptionist',
        description: 'Answers calls immediately, greets callers professionally, and answers service FAQs.',
      },
      {
        title: 'Automated Outbound Speed-to-Lead Calls',
        description: 'Calls new web form leads within 60 seconds to qualify requirements and schedule consultations.',
      },
      {
        title: 'Lead Qualification & Smart Call Routing',
        description: 'Asks qualifying questions and transfers urgent or high-value callers directly to your staff.',
      },
      {
        title: 'Real-Time Calendar Appointment Booking',
        description: 'Checks live availability on Google/Outlook Calendar and books confirmed slots during the call.',
      },
      {
        title: 'CRM Integration & Call Transcripts',
        description: 'Automatically logs caller details, call summaries, and recordings into your CRM.',
      },
      {
        title: 'Website Voice Assistant Widget',
        description: 'Allows website visitors to speak directly with your AI assistant in their browser.',
      },
    ],
    features: [
      'Inbound Calls',
      'Outbound Calls',
      'AI Phone Assistants',
      'Customer Questions',
      'Lead Qualification',
      'Appointment Booking',
      'Call Routing',
      'Automated Follow-Ups',
      'CRM Integration',
      'Website Voice Assistants',
    ],
    visualType: 'voice-call-flow',
    howItWorks: [
      {
        step: '01',
        title: 'Knowledge Base & Script Design',
        description: 'Training the assistant on your services, FAQs, qualification questions, and tone of voice.',
      },
      {
        step: '02',
        title: 'Phone Number & Calendar Integration',
        description: 'Connecting your business phone lines (or overflow forwarding) and live booking calendars.',
      },
      {
        step: '03',
        title: 'Routing & CRM Sync',
        description: 'Setting up live call transfer rules and automatic CRM/WhatsApp summary alerts.',
      },
      {
        step: '04',
        title: 'Testing & Continuous Refinement',
        description: 'Testing call scenarios and refining responses based on real customer conversations.',
      },
    ],
    benefits: [
      {
        metric: '0 Missed',
        title: 'Every Inbound Call Answered',
        description: 'Capture enquiries 24 hours a day, 365 days a year—including weekends and holidays.',
      },
      {
        metric: '< 1 Sec',
        title: 'Instant Pickup & Response',
        description: 'No hold music or voicemail menus; callers get immediate, helpful answers.',
      },
      {
        metric: '100%',
        title: 'Logged in Your CRM & Calendar',
        description: 'Every call produces a structured summary, contact record, and booked appointment.',
      },
    ],
    technologies: ['Low-Latency Voice AI', 'Twilio / SIP Trunking', 'Google & Outlook Calendar API', 'HubSpot / Pipedrive / CRM Webhooks', 'Instant SMS & WhatsApp Summaries'],
    relatedSlugs: ['whatsapp-chat', 'lead-generation', 'workflow-automation'],
    faqs: [
      {
        question: 'Can we keep our existing business phone number?',
        answer:
          'Yes. You do not need to change your number. We can configure conditional call forwarding so the AI assistant only answers when your team is busy or after hours—or it can answer first and transfer qualified callers to you.',
      },
      {
        question: 'What if a caller wants to speak to a real person immediately?',
        answer:
          'At any point in the conversation, if a caller asks for a team member or has a complex request, the assistant performs a live warm transfer to your designated mobile or office line.',
      },
    ],
  },

  'whatsapp-chat': {
    slug: 'whatsapp-chat',
    path: '/services/ai-automation/whatsapp-chat',
    divisionId: 'ai-automation',
    divisionTitle: 'AI Automation',
    divisionPath: '/services/ai-automation',
    title: 'WhatsApp & Chat Automation',
    metaTitle: 'WhatsApp Business Automation & AI Chatbots | BOTLYTICES',
    metaDescription:
      'Automate customer replies, lead capture, appointment booking, and support across WhatsApp Business, website chat, Instagram, and Facebook.',
    heroEyebrow: 'AI Automation · 02',
    heroHeadline: 'Instant WhatsApp & Chat Responses That Capture Leads 24/7.',
    heroDescription:
      'Meet your customers on the messaging apps they use most. We build intelligent WhatsApp, website, Instagram, and Facebook chat automation that answers questions, captures lead details, books appointments, and hands off to your team.',
    ctaText: 'Automate My Business',
    heroImage: IMAGES.aiSmartDesk,
    problemTitle: 'Slow Replies on WhatsApp & Web Chat Lose Ready-to-Buy Customers',
    problemDescription:
      'Modern customers prefer messaging over filling out long forms. When a WhatsApp or website message sits unanswered for hours, buyer momentum disappears.',
    painPoints: [
      'Hours-long delays replying to WhatsApp, Instagram, and website chat enquiries',
      'Team members typing the same answers about pricing, hours, and services dozens of times a day',
      'Chat enquiries getting buried in personal phone threads instead of entering your CRM',
      'Basic rule-based chatbots that frustrate users with rigid button menus',
    ],
    whatWeProvideTitle: 'Multi-Channel Conversational Messaging Systems',
    whatWeProvideDescription:
      'We connect the official WhatsApp Business API, website chat, and social DMs to an intelligent assistant trained on your exact business knowledge.',
    deliverables: [
      {
        title: 'WhatsApp Business AI Assistants',
        description: 'Instant 24/7 conversational responses on your official business WhatsApp number.',
      },
      {
        title: 'FAQ & Service Information Automation',
        description: 'Accurate answers to customer questions using your approved pricing and service docs.',
      },
      {
        title: 'Conversational Lead Capture & Qualification',
        description: 'Collects customer name, service needed, postcode, and budget naturally inside the chat.',
      },
      {
        title: 'In-Chat Appointment Booking & Order Updates',
        description: 'Shares available calendar slots, confirms bookings, and sends automated status reminders.',
      },
      {
        title: 'Website, Instagram & Facebook Chatbots',
        description: 'Unified chat automation across your website widget, Instagram DMs, and Facebook Messenger.',
      },
      {
        title: 'Seamless Human Handoff & CRM Sync',
        description: 'Notifies your staff to step into the chat anytime while syncing all lead data to your CRM.',
      },
    ],
    features: [
      'WhatsApp Business Automation',
      'AI WhatsApp Assistants',
      'Automatic Replies',
      'FAQ Automation',
      'Lead Capture',
      'Appointment Booking',
      'Order Updates',
      'Customer Support',
      'Human Handoff',
      'Website Chatbots',
      'Instagram / Facebook Automation',
    ],
    visualType: 'whatsapp-pipeline',
    howItWorks: [
      {
        step: '01',
        title: 'Customer Message',
        description: 'A prospect messages your business on WhatsApp, website chat, or Instagram.',
      },
      {
        step: '02',
        title: 'AI Understands & Responds',
        description: 'The assistant understands intent and replies in seconds with helpful, accurate info.',
      },
      {
        step: '03',
        title: 'Lead Captured & CRM Updated',
        description: 'Contact details, requirements, and appointment times are saved directly to your CRM.',
      },
      {
        step: '04',
        title: 'Human Handoff if Required',
        description: 'Your team receives an instant alert with full context to take over whenever needed.',
      },
    ],
    benefits: [
      {
        metric: '< 3 Sec',
        title: 'Average Response Time',
        description: 'Engage every prospect at the exact moment they reach out.',
      },
      {
        metric: '4 Channels',
        title: 'WhatsApp, Web, IG & FB',
        description: 'One unified brain handling customer conversations across every platform.',
      },
      {
        metric: 'Seamless',
        title: 'Human Team Takeover',
        description: 'Jump into any conversation from your phone or desktop with one click.',
      },
    ],
    technologies: ['WhatsApp Business Cloud API', 'Website Live Chat Widget', 'Meta Messenger & Instagram API', 'CRM Webhooks', 'Calendar Sync'],
    relatedSlugs: ['voice-assistants', 'lead-generation', 'workflow-automation'],
    faqs: [
      {
        question: 'Can my team still reply manually in WhatsApp when the automation is active?',
        answer:
          'Yes. Whenever a human team member replies in the thread or clicks takeover, the AI pauses automatically for that conversation so you can chat personally with the client.',
      },
      {
        question: 'Does this use the official WhatsApp Business API?',
        answer:
          'Yes. We build on the official Meta WhatsApp Business Platform so your business number remains compliant, reliable, and verified.',
      },
    ],
  },

  'lead-generation': {
    slug: 'lead-generation',
    path: '/services/ai-automation/lead-generation',
    divisionId: 'ai-automation',
    divisionTitle: 'AI Automation',
    divisionPath: '/services/ai-automation',
    title: 'AI Lead Generation',
    metaTitle: 'AI Lead Generation, Qualification & Sales Pipeline Automation | BOTLYTICES',
    metaDescription:
      'Automate lead discovery, lead qualification, personalized outreach, email follow-ups, lead scoring, CRM entry, and appointment booking.',
    heroEyebrow: 'AI Automation · 03',
    heroHeadline: 'Consistent Lead Qualification, Follow-Ups & Pipeline Automation.',
    heroDescription:
      'Stop letting promising enquiries go cold in spreadsheets. We build automated lead generation, scoring, and multi-step follow-up systems that turn prospects into booked consultations.',
    ctaText: 'Automate My Business',
    heroImage: IMAGES.aiExecDesk,
    problemTitle: 'Leads Go Cold When Follow-Up Is Manual & Inconsistent',
    problemDescription:
      'Most sales pipelines leak revenue not from a lack of leads, but because busy teams forget to follow up after the first quote or spend hours manually researching and entering prospect details.',
    painPoints: [
      'New website and ad leads waiting hours or days for a first response',
      'Sent quotes and proposals never followed up systematically',
      'Sales staff spending hours manually copying data into CRM fields',
      'No lead scoring to separate serious commercial buyers from low-priority enquiries',
    ],
    whatWeProvideTitle: 'Automated Lead Capture, Outreach & Pipeline Systems',
    whatWeProvideDescription:
      'We engineer structured pipelines that capture, enrich, qualify, score, and follow up with prospects automatically.',
    deliverables: [
      {
        title: 'Automated Lead Discovery & Enrichment',
        description: 'Gathering verified business contact details and company context for B2B outreach.',
      },
      {
        title: 'Instant Lead Qualification & Scoring',
        description: 'Evaluating budget, timeline, and service fit automatically to prioritize hot leads.',
      },
      {
        title: 'Multi-Step Email & SMS Follow-Up Sequences',
        description: 'Polite, personalized follow-up sequences for new enquiries and pending quotes.',
      },
      {
        title: 'Automatic CRM Entry & Deal Creation',
        description: 'Zero manual data entry—every lead is created, tagged, and assigned in your CRM.',
      },
      {
        title: 'Direct Appointment Booking Flows',
        description: 'Guiding qualified prospects straight to a confirmed discovery call on your calendar.',
      },
      {
        title: 'Sales Pipeline & Conversion Tracking',
        description: 'Clear visibility into lead sources, response rates, and booked consultations.',
      },
    ],
    features: [
      'Lead Discovery',
      'Lead Qualification',
      'Automated Outreach',
      'Email Automation',
      'Multi-Step Follow-Ups',
      'CRM Entry',
      'Appointment Booking',
      'Lead Scoring',
      'Sales Pipeline Automation',
    ],
    visualType: 'lead-gen-engine',
    howItWorks: [
      {
        step: '01',
        title: 'Lead Capture & Enrichment',
        description: 'Ingesting enquiries from forms, ads, chat, or B2B prospect lists.',
      },
      {
        step: '02',
        title: 'Qualification & Scoring',
        description: 'Categorizing prospects by service type, urgency, and estimated project value.',
      },
      {
        step: '03',
        title: 'Automated Outreach & Follow-Up',
        description: 'Triggering instant responses and timed follow-up emails/messages until they reply.',
      },
      {
        step: '04',
        title: 'Calendar Booking & CRM Handoff',
        description: 'Booking the consultation and alerting your sales team with a complete brief.',
      },
    ],
    benefits: [
      {
        metric: 'Under 60s',
        title: 'Speed-to-Lead Response',
        description: 'Every new enquiry receives an immediate, tailored response.',
      },
      {
        metric: 'Zero',
        title: 'Forgotten Quote Follow-Ups',
        description: 'Automated sequences follow up politely until the client books or decides.',
      },
      {
        metric: '100%',
        title: 'Clean CRM Pipeline Hygiene',
        description: 'Every contact, note, and stage update is recorded automatically.',
      },
    ],
    technologies: ['HubSpot / Pipedrive / Close CRM', 'Automated Email Deliverability', 'n8n / Make Workflows', 'Lead Scoring Models', 'Calendar Booking APIs'],
    relatedSlugs: ['voice-assistants', 'whatsapp-chat', 'workflow-automation'],
    faqs: [
      {
        question: 'Will automated follow-up emails look robotic or spammy?',
        answer:
          'No. We write natural, plain-text emails personalized with the client’s name, business, and specific service enquiry—sent directly from your business domain so they read just like a personal check-in.',
      },
      {
        question: 'Does the automation stop as soon as a client replies or books a call?',
        answer:
          'Yes. The moment a prospect replies to an email, messages on WhatsApp, or books an appointment, the follow-up sequence stops immediately and updates their CRM stage.',
      },
    ],
  },

  'workflow-automation': {
    slug: 'workflow-automation',
    path: '/services/ai-automation/workflow-automation',
    divisionId: 'ai-automation',
    divisionTitle: 'AI Automation',
    divisionPath: '/services/ai-automation',
    title: 'Workflow & Business Automation',
    metaTitle: 'Workflow & Business Automation | n8n, Make, Zapier & APIs | BOTLYTICES',
    metaDescription:
      'Connect your CRM, email, forms, Google Sheets, calendars, and documents automatically using n8n, Make, Zapier, and custom API integrations.',
    heroEyebrow: 'AI Automation · 04',
    heroHeadline: 'Connect Your Software Tools & Eliminate Manual Copy-Pasting.',
    heroDescription:
      'We connect your website forms, CRM, Google Sheets, email, calendars, accounting software, and internal notifications using n8n, Make, Zapier, and custom APIs.',
    ctaText: 'Automate My Business',
    heroImage: IMAGES.aiSmartDesk,
    problemTitle: 'Manual Admin Between Disconnected Apps Wastes Hours Every Week',
    problemDescription:
      'When your website forms don’t talk to your CRM, your CRM doesn’t update your Google Sheets, and your team manually creates folders and emails for every new client, human errors and delays multiply.',
    painPoints: [
      'Staff copying and pasting customer data between forms, emails, and spreadsheets',
      'Missed internal team notifications when a new order, booking, or support ticket arrives',
      'Repetitive creation of onboarding emails, invoices, contracts, and cloud folders',
      'Disconnected software subscriptions that do not share real-time data',
    ],
    whatWeProvideTitle: 'Custom End-to-End Business Workflow Engineering',
    whatWeProvideDescription:
      'We map your repetitive administrative processes and replace manual steps with reliable, monitored software workflows.',
    deliverables: [
      {
        title: 'n8n, Make & Zapier Architecture',
        description: 'Building multi-step conditional workflows with error handling and execution logs.',
      },
      {
        title: 'CRM, Forms & Google Sheets Sync',
        description: 'Two-way data synchronization between web forms, spreadsheets, Airtable, and CRMs.',
      },
      {
        title: 'Automated Team Notifications',
        description: 'Instant structured alerts in Slack, Microsoft Teams, WhatsApp, or email when key events occur.',
      },
      {
        title: 'Appointment & Onboarding Workflows',
        description: 'Automated calendar invites, intake forms, Drive folder creation, and welcome emails.',
      },
      {
        title: 'AI Document & Email Processing',
        description: 'Extracting structured data from incoming PDFs, invoices, and emails automatically.',
      },
      {
        title: 'Custom REST API & Webhook Integrations',
        description: 'Connecting industry-specific software via custom webhooks and API scripts.',
      },
    ],
    features: [
      'CRM Automation',
      'Email Automation',
      'Smart Forms',
      'Google Sheets Sync',
      'Data Synchronization',
      'Team Notifications',
      'Appointment Workflows',
      'Document Processing',
      'Internal AI Assistants',
      'n8n Workflows',
      'Make (Integromat)',
      'Zapier',
      'Custom APIs',
    ],
    visualType: 'workflow-automation-map',
    howItWorks: [
      {
        step: '01',
        title: 'Process Audit & Bottleneck Mapping',
        description: 'Identifying the repetitive admin tasks costing your team the most hours.',
      },
      {
        step: '02',
        title: 'Workflow Architecture Design',
        description: 'Designing triggers, data transformations, conditional logic, and fallback rules.',
      },
      {
        step: '03',
        title: 'API Integration & Testing',
        description: 'Connecting your apps via n8n, Make, Zapier, or custom code and testing edge cases.',
      },
      {
        step: '04',
        title: 'Deployment & Error Monitoring',
        description: 'Activating live workflows with automated alerts if any external API changes.',
      },
    ],
    benefits: [
      {
        metric: '10–25 hrs',
        title: 'Saved Per Week on Admin',
        description: 'Free your team from repetitive data entry, file creation, and status emails.',
      },
      {
        metric: '0%',
        title: 'Copy-Paste Human Error',
        description: 'Customer names, numbers, and figures transfer accurately across every system.',
      },
      {
        metric: 'Instant',
        title: 'Cross-App Synchronization',
        description: 'Forms, CRM, Sheets, Slack, and calendars update in real time.',
      },
    ],
    technologies: ['n8n', 'Make', 'Zapier', 'REST APIs & Webhooks', 'Google Workspace APIs', 'Microsoft Graph API', 'Airtable & Notion API'],
    relatedSlugs: ['whatsapp-chat', 'lead-generation', 'voice-assistants'],
    faqs: [
      {
        question: 'What is the difference between n8n, Make, and Zapier?',
        answer:
          'Zapier is great for simple 2-step app connections. Make and n8n allow complex multi-branch workflows, custom API calls, data transformations, and significantly lower per-execution costs at high volume. We help you choose and configure the best fit.',
      },
      {
        question: 'Can you connect bespoke industry software if it is not on Zapier?',
        answer:
          'Yes. As long as your software has an API, webhook support, or email/CSV export capability, we can build a custom integration to connect it with the rest of your tools.',
      },
    ],
  },

  // ============================================================================
  // 5. SECURITY & SURVEILLANCE SUBCATEGORIES
  // ============================================================================
  'cctv': {
    slug: 'cctv',
    path: '/services/security-surveillance/cctv',
    divisionId: 'security-surveillance',
    divisionTitle: 'Security & Surveillance',
    divisionPath: '/services/security-surveillance',
    title: 'CCTV & Video Surveillance',
    metaTitle: 'Commercial & Residential CCTV Installation | 4K IP Cameras & NVR | BOTLYTICES',
    metaDescription:
      'Professional CCTV installation and configuration. IP, HD, and 4K Dome, Bullet, and PTZ cameras with NVR/DVR recording and smartphone remote viewing.',
    heroEyebrow: 'Security & Surveillance · 01',
    heroHeadline: 'Crystal-Clear 4K CCTV Surveillance for Complete Property Visibility.',
    heroDescription:
      'We design, position, install, and configure high-definition IP and 4K camera systems for offices, retail stores, warehouses, and residential properties—complete with NVR recording and mobile viewing.',
    ctaText: 'Request a Security Assessment',
    heroImage: IMAGES.securityCctv,
    problemTitle: 'Blind Spots & Blurry Footage Leave Your Property Vulnerable',
    problemDescription:
      'Poorly positioned cameras, low-resolution analog feeds that cannot read faces or license plates, and recorders with insufficient storage fail when you actually need evidence.',
    painPoints: [
      'Blurry daytime or washed-out nighttime footage that cannot identify intruders',
      'Uncovered blind spots around entrances, loading bays, stockrooms, or perimeters',
      'Exposed, messy cabling that is unsightly or easy for vandals to tamper with',
      'Complicated DVR boxes that cannot be viewed easily from your smartphone',
    ],
    whatWeProvideTitle: 'End-to-End CCTV Design, Installation & Configuration',
    whatWeProvideDescription:
      'We select the right camera optics and mounting hardware for every indoor and outdoor zone of your premises.',
    deliverables: [
      {
        title: 'IP, HD & 4K Ultra-HD Cameras',
        description: 'High-resolution sensors with ColorVu / Starlight night vision and clear digital zoom.',
      },
      {
        title: 'Dome, Bullet & PTZ Camera Selection',
        description: 'Discreet indoor domes, weatherproof outdoor bullets, and Pan-Tilt-Zoom (PTZ) coverage.',
      },
      {
        title: 'NVR & DVR Recording Systems',
        description: 'Dedicated Network Video Recorders with surveillance-grade hard drives for weeks of continuous or motion recording.',
      },
      {
        title: 'Strategic Camera Positioning & Cabling',
        description: 'Eliminating blind spots at entry doors, tills, parking areas, and corridors with neat concealed cabling.',
      },
      {
        title: 'Smartphone & Computer Viewing Setup',
        description: 'Encrypted live viewing and timeline playback configured on your phone, tablet, and PC.',
      },
      {
        title: 'Full Handover & User Training',
        description: 'Showing you how to view cameras, export video clips, and manage alerts effortlessly.',
      },
    ],
    features: [
      'IP Cameras',
      'Analog HD Upgrades',
      'HD & 4K Cameras',
      'Dome Cameras',
      'Bullet Cameras',
      'PTZ Cameras',
      'Indoor Cameras',
      'Outdoor Weatherproof Cameras',
      'DVR & NVR Recorders',
      'Strategic Camera Positioning',
      'Professional Installation',
      'Mobile Viewing Configuration',
    ],
    visualType: 'cctv-coverage-grid',
    howItWorks: [
      {
        step: '01',
        title: 'On-Site Security Survey',
        description: 'Inspecting entry points, lighting conditions, blind spots, and cable routes.',
      },
      {
        step: '02',
        title: 'System Specification',
        description: 'Selecting Dome, Bullet, or PTZ 4K cameras and calculating NVR storage retention.',
      },
      {
        step: '03',
        title: 'Clean Installation & Mounting',
        description: 'Running structured PoE cabling, mounting cameras securely, and installing the NVR.',
      },
      {
        step: '04',
        title: 'Angle Calibration & Mobile Sync',
        description: 'Fine-tuning camera fields of view, setting motion zones, and pairing your mobile app.',
      },
    ],
    benefits: [
      {
        metric: '4K Ultra-HD',
        title: 'Sharp Day & Night Clarity',
        description: 'Capture clear facial details and vehicle plates even in low light.',
      },
      {
        metric: 'Zero',
        title: 'Perimeter Blind Spots',
        description: 'Camera lenses and mounting heights planned for complete entrance and floor coverage.',
      },
      {
        metric: '24/7',
        title: 'Local NVR + Mobile Access',
        description: 'Continuous local recording paired with instant live viewing on your smartphone.',
      },
    ],
    technologies: ['Hikvision / Dahua / UniFi Protect', '4K PoE IP Cameras', 'Color Night Vision', 'Surveillance NVR Storage', 'iOS & Android Viewing Apps'],
    relatedSlugs: ['access-control', 'remote-monitoring', 'maintenance'],
    faqs: [
      {
        question: 'How many days or weeks of video footage will the system store?',
        answer:
          'We size your NVR surveillance hard drives (typically 4TB to 16TB+) based on your camera count and resolution so you retain 14, 30, or 60+ days of continuous or smart-motion history.',
      },
      {
        question: 'Do IP cameras require power outlets next to every camera?',
        answer:
          'No. Modern IP cameras use Power over Ethernet (PoE), meaning a single neat network cable carries both power and 4K video back to the central NVR switch.',
      },
    ],
  },

  'access-control': {
    slug: 'access-control',
    path: '/services/security-surveillance/access-control',
    divisionId: 'security-surveillance',
    divisionTitle: 'Security & Surveillance',
    divisionPath: '/services/security-surveillance',
    title: 'Access Control & Biometrics',
    metaTitle: 'Access Control & Biometric Door Systems | Fingerprint, Face & RFID | BOTLYTICES',
    metaDescription:
      'Secure door access control and time-attendance systems: fingerprint scanners, facial recognition, RFID cards, PIN keypads, and visitor management.',
    heroEyebrow: 'Security & Surveillance · 02',
    heroHeadline: 'Smart Biometric & Keycard Door Access Control for Your Premises.',
    heroDescription:
      'Control who enters your building, offices, server rooms, and stock areas with fingerprint terminals, facial recognition, RFID keycards, PIN pads, and automated attendance logs.',
    ctaText: 'Request a Security Assessment',
    heroImage: IMAGES.accessControlImg,
    problemTitle: 'Physical Keys Cannot Be Tracked, Scheduled or Revoked Remotely',
    problemDescription:
      'When physical keys are lost, copied, or not returned by former staff or contractors, your building security is compromised until locks are physically replaced.',
    painPoints: [
      'No record of who entered restricted rooms or what time staff arrived and left',
      'Security risk and locksmith expense whenever a physical key is lost',
      'Unauthorized visitors walking through unlocked reception or stockroom doors',
      'Manual paper timesheets that are inaccurate and time-consuming for payroll',
    ],
    whatWeProvideTitle: 'Biometric, RFID & Door Access Solutions',
    whatWeProvideDescription:
      'We install reliable electronic door locks, biometric readers, and management software tailored to single doors or multi-zone commercial facilities.',
    deliverables: [
      {
        title: 'Fingerprint & Facial Recognition Terminals',
        description: 'Fast touchless face recognition and biometric fingerprint readers for staff entry.',
      },
      {
        title: 'RFID Keycards, Fobs & PIN Keypads',
        description: 'Durable smart cards, keyfobs, and multi-credential PIN + card door controllers.',
      },
      {
        title: 'Magnetic & Electric Strike Door Locks',
        description: 'Heavy-duty maglocks, electric strikes, exit buttons, and emergency break-glass releases.',
      },
      {
        title: 'Employee Time & Attendance Systems',
        description: 'Automated clock-in/clock-out logs with exportable reports for HR and payroll.',
      },
      {
        title: 'Role-Based Zone & Schedule Permissions',
        description: 'Restricting specific doors (e.g., server rooms or warehouses) by role and time of day.',
      },
      {
        title: 'Visitor & Intercom Management',
        description: 'Video door intercoms allowing reception or mobile users to verify and buzz in visitors.',
      },
    ],
    features: [
      'Fingerprint Access',
      'Face Recognition',
      'RFID Cards & Fobs',
      'PIN Keypad Systems',
      'Door Access Locks',
      'Time & Attendance Systems',
      'Employee Access Schedules',
      'Visitor Management',
      'Video Door Intercoms',
    ],
    visualType: 'biometric-access-matrix',
    howItWorks: [
      {
        step: '01',
        title: 'Door & Workflow Assessment',
        description: 'Inspecting door frames (glass, timber, aluminum), fire safety rules, and user flows.',
      },
      {
        step: '02',
        title: 'Lock & Reader Installation',
        description: 'Installing maglocks/electric strikes, biometric/RFID readers, and battery backup power.',
      },
      {
        step: '03',
        title: 'User Enrollment & Schedules',
        description: 'Registering employee faces, fingerprints, or cards and setting time-of-day access rules.',
      },
      {
        step: '04',
        title: 'Attendance & Admin Training',
        description: 'Configuring attendance reports and showing your admin how to add or revoke users in seconds.',
      },
    ],
    benefits: [
      {
        metric: '1-Click',
        title: 'Instant Credential Revocation',
        description: 'Deactivate a lost RFID card or former employee’s access immediately from your computer.',
      },
      {
        metric: 'Automated',
        title: 'Staff Time & Attendance Logs',
        description: 'Accurate arrival and departure timestamps ready for payroll export.',
      },
      {
        metric: 'Fail-Safe',
        title: 'Emergency & Battery Backup',
        description: 'Engineered with fire-safe release rules and backup battery continuity.',
      },
    ],
    technologies: ['ZKTeco / Hikvision / Paxton Access', 'Touchless Facial Biometrics', 'MIFARE RFID Encryption', 'Fail-Safe Maglocks', 'Attendance Management Software'],
    relatedSlugs: ['cctv', 'remote-monitoring', 'maintenance'],
    faqs: [
      {
        question: 'What happens to electronic door locks if there is a power cut or fire alarm?',
        answer:
          'We install battery backup power supplies (UPS) so doors continue operating during brief power outages, along with emergency break-glass units and fire-alarm relays that unlock exit doors immediately for safety.',
      },
      {
        question: 'Can one terminal handle both door unlocking and staff attendance tracking?',
        answer:
          'Yes. Biometric face and fingerprint terminals unlock the door while simultaneously logging the employee’s clock-in time.',
      },
    ],
  },

  'remote-monitoring': {
    slug: 'remote-monitoring',
    path: '/services/security-surveillance/remote-monitoring',
    divisionId: 'security-surveillance',
    divisionTitle: 'Security & Surveillance',
    divisionPath: '/services/security-surveillance',
    title: 'Remote Monitoring & Security Systems',
    metaTitle: 'Remote CCTV Monitoring, Intrusion Alerts & Video Management | BOTLYTICES',
    metaDescription:
      'Centralized remote CCTV viewing, mobile monitoring, motion and intrusion alerts, multi-site video management, and AI human/vehicle detection.',
    heroEyebrow: 'Security & Surveillance · 03',
    heroHeadline: 'Real-Time Mobile Viewing, Smart Intrusion Alerts & Multi-Site Control.',
    heroDescription:
      'Monitor your business from anywhere. We configure centralized video management, mobile push notifications, perimeter intrusion alerts, and AI human/vehicle filtering across single or multiple locations.',
    ctaText: 'Request a Security Assessment',
    heroImage: IMAGES.remoteMonitoringImg,
    problemTitle: 'Passive Recording Only Shows You What Happened After the Fact',
    problemDescription:
      'Traditional CCTV systems only record onto a box in a back room. Without smart alerts and reliable remote viewing, you have no awareness of after-hours intrusions while they are happening.',
    painPoints: [
      'Unable to check live cameras from home or while traveling due to network/port issues',
      'Constant false motion alerts triggered by wind, rain, or passing headlights',
      'Managing multiple store or office locations across separate, disconnected apps',
      'No instant notification if an NVR hard drive fails or a camera goes offline',
    ],
    whatWeProvideTitle: 'Active Remote Monitoring & Smart Detection Architecture',
    whatWeProvideDescription:
      'We turn passive cameras into an intelligent, connected security system accessible from your smartphone and desktop.',
    deliverables: [
      {
        title: 'Remote Mobile & Desktop CCTV Viewing',
        description: 'Secure encrypted apps configured on iOS, Android, Windows, and Mac for live and recorded playback.',
      },
      {
        title: 'AI Human & Vehicle Motion Filtering',
        description: 'Eliminating false alarms from trees or rain by alerting only on verified human or vehicle entry.',
      },
      {
        title: 'After-Hours Line-Crossing & Intrusion Alerts',
        description: 'Scheduled virtual tripwires around perimeters, yards, and entrances that send instant push alerts with video clips.',
      },
      {
        title: 'Centralized Multi-Site Video Management (VMS)',
        description: 'View cameras from multiple branches, warehouses, or offices on a single unified dashboard.',
      },
      {
        title: 'System Health & Offline Notifications',
        description: 'Automated alerts if a camera is obstructed, disconnected, or if storage requires attention.',
      },
    ],
    features: [
      'Remote CCTV Viewing',
      'Mobile Monitoring',
      'Instant Push Alerts',
      'Video Management Systems (VMS)',
      'Smart Motion Detection',
      'Intrusion Detection',
      'Centralized Multi-Site Monitoring',
      'Security Notifications',
      'AI Video Analytics (Human/Vehicle)',
    ],
    visualType: 'remote-monitoring-hub',
    howItWorks: [
      {
        step: '01',
        title: 'Network & Recorder Integration',
        description: 'Connecting your NVR/cameras to encrypted cloud relay or VPN channels.',
      },
      {
        step: '02',
        title: 'Detection Zone & Schedule Setup',
        description: 'Drawing intrusion zones and setting after-hours alert schedules.',
      },
      {
        step: '03',
        title: 'Mobile & Desktop App Pairing',
        description: 'Setting up owner and manager devices with role-based camera permissions.',
      },
      {
        step: '04',
        title: 'Live Alert Verification',
        description: 'Testing push notifications, playback scrubbing, and multi-site views.',
      },
    ],
    benefits: [
      {
        metric: '95% Less',
        title: 'False Alarm Noise',
        description: 'AI human and vehicle filtering ignores weather, shadows, and foliage.',
      },
      {
        metric: 'Instant',
        title: 'Push Alerts with Video Clips',
        description: 'See a 10-second video clip on your phone the moment after-hours perimeter entry occurs.',
      },
      {
        metric: 'Unified',
        title: 'All Locations in One App',
        description: 'Switch between your office, warehouse, and retail branches in one tap.',
      },
    ],
    technologies: ['Encrypted P2P / Cloud VMS', 'Smart Intrusion Line-Crossing', 'Human/Vehicle AI Classification', 'Multi-Monitor Security Wall', 'iOS / Android Push Alerts'],
    relatedSlugs: ['cctv', 'access-control', 'maintenance'],
    faqs: [
      {
        question: 'Can I give my store manager access to view live cameras without allowing them to delete recordings?',
        answer:
          'Yes. We configure role-based user accounts so managers or staff only see the specific cameras and permissions you authorize.',
      },
      {
        question: 'Can you set up a dedicated TV or monitor in our reception or manager’s office showing all cameras?',
        answer:
          'Yes. We install dedicated HDMI/network viewing monitors displaying custom 4, 8, or 16-camera live grids.',
      },
    ],
  },

  'maintenance': {
    slug: 'maintenance',
    path: '/services/security-surveillance/maintenance',
    divisionId: 'security-surveillance',
    divisionTitle: 'Security & Surveillance',
    divisionPath: '/services/security-surveillance',
    title: 'Security Maintenance & Upgrades',
    metaTitle: 'CCTV & Security System Maintenance, Repairs & Upgrades | BOTLYTICES',
    metaDescription:
      'Keep your security systems working reliably. CCTV maintenance, DVR/NVR hard drive upgrades, camera replacement, firmware updates, and support contracts.',
    heroEyebrow: 'Security & Surveillance · 04',
    heroHeadline: 'Keep Your Cameras, Recorders & Access Systems Working When Needed Most.',
    heroDescription:
      'Security systems degrade silently over time if left unchecked. We provide CCTV troubleshooting, DVR/NVR storage upgrades, faulty camera replacement, lens cleaning, firmware updates, and preventive maintenance contracts.',
    ctaText: 'Request a Security Assessment',
    heroImage: IMAGES.securityCctv,
    problemTitle: 'Discovering a Failed Recorder After an Incident Is Too Late',
    problemDescription:
      'Many businesses assume their CCTV is recording until an incident happens—only to discover the hard drive failed months ago, spiderwebs blocked night vision, or power supplies died.',
    painPoints: [
      'DVR/NVR hard drives failing silently and stopping all video recording',
      'Outdoor camera lenses clouded by dirt, moisture, or cobwebs ruining night vision',
      'Blacked-out camera channels caused by corroded connectors or faulty PoE switches',
      'Outdated recorder firmware and unpatched network settings',
    ],
    whatWeProvideTitle: 'Diagnostic Repairs, System Upgrades & Preventive Care',
    whatWeProvideDescription:
      'Even if we did not install your original CCTV or access control system, our technicians can inspect, repair, upgrade, and maintain it.',
    deliverables: [
      {
        title: 'CCTV & Recorder Health Inspections',
        description: 'Testing every camera feed, night-vision IR sensor, power supply, and recording log.',
      },
      {
        title: 'DVR / NVR Storage Upgrades & Replacement',
        description: 'Replacing worn hard drives with enterprise surveillance drives (WD Purple / Seagate SkyHawk).',
      },
      {
        title: 'Camera Replacement & Repositioning',
        description: 'Swapping broken or blurry cameras for 4K models and adjusting angles after layout changes.',
      },
      {
        title: 'Firmware Updates & Network Troubleshooting',
        description: 'Patching recorder firmware, fixing offline mobile viewing apps, and resolving IP conflicts.',
      },
      {
        title: 'System Expansion (Adding New Cameras/Doors)',
        description: 'Extending your existing security system to cover new rooms, yards, or entrances.',
      },
      {
        title: 'Preventive Maintenance Contracts',
        description: 'Scheduled quarterly or bi-annual on-site servicing and priority technical callouts.',
      },
    ],
    features: [
      'CCTV Maintenance',
      'DVR / NVR Maintenance',
      'Storage Upgrades',
      'Camera Replacement',
      'Firmware Updates',
      'Network Troubleshooting',
      'Camera Repositioning',
      'System Expansion',
      'Preventive Maintenance',
      'Technical Support',
      'Maintenance Contracts',
    ],
    visualType: 'security-maintenance-plan',
    howItWorks: [
      {
        step: '01',
        title: 'Full System Diagnostic',
        description: 'Inspecting all cameras, cabling, power supplies, NVR disk health, and remote access.',
      },
      {
        step: '02',
        title: 'On-Site Servicing & Repairs',
        description: 'Cleaning optics, weather-sealing junctions, replacing failed drives/cameras, and updating firmware.',
      },
      {
        step: '03',
        title: 'Playback & App Verification',
        description: 'Confirming 24/7 recording retention and restoring mobile viewing on your devices.',
      },
      {
        step: '04',
        title: 'Scheduled Preventive Care',
        description: 'Routine checkups to ensure your security system never fails unnoticed.',
      },
    ],
    benefits: [
      {
        metric: '100%',
        title: 'Verified Recording Continuity',
        description: 'Peace of mind knowing your NVR is actively saving footage every day.',
      },
      {
        metric: 'Cost-Effective',
        title: 'Upgrade Without Full Rip-and-Replace',
        description: 'We reuse healthy cabling and infrastructure wherever possible.',
      },
      {
        metric: 'Priority',
        title: 'Fast Technician Response',
        description: 'Maintenance contract clients receive priority remote and on-site support.',
      },
    ],
    technologies: ['WD Purple / SkyHawk Surveillance Drives', 'PoE Cable Testers', 'IP & Coax Diagnostics', 'Firmware Security Patching', 'Weatherproof IP67 Junctions'],
    relatedSlugs: ['cctv', 'remote-monitoring', 'networking-wifi'],
    faqs: [
      {
        question: 'Can you fix or maintain a CCTV system that was installed by another company?',
        answer:
          'Yes. We regularly take over maintenance, password recovery, mobile app reconnection, and hardware repairs for existing Hikvision, Dahua, Uniview, Swann, and generic IP/coax systems.',
      },
      {
        question: 'How often should a business CCTV system be serviced?',
        answer:
          'We recommend a physical lens cleaning, weather-seal check, and NVR hard-drive health audit every 6 months to prevent silent recording failures.',
      },
    ],
  },
};
