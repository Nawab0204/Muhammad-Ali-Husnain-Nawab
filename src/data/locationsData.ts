/**
 * Master Location Database for BOTLYTICES Global Service Locations.
 * Organizes 3 Global Hubs (Americas, Europe, Oceania), 11 Countries, 25 Administrative Divisions, and 39 Cities.
 * Counts and metrics are dynamically calculated from this source of truth.
 */

import {
  RegionData,
  CountryData,
  DivisionData,
  CityData,
  RegionStats,
  ConfirmedService,
  GeographicalRegionId,
} from '../types/locationTypes';
import { RouteDefinition } from '../config/routes';

// Standard 4 Core Services Confirmed Across Locations
const getStandardServices = (cityName: string, onSiteLondon = false): ConfirmedService[] => [
  {
    category: 'web-development',
    title: `Web Development in ${cityName}`,
    summary:
      'High-performance custom web applications, responsive business portals, technical SEO foundations, and ongoing maintenance.',
    deliverables: [
      'Tailored business website architecture and responsive design',
      'Modern tech stack (React, Next.js, TypeScript, Tailwind)',
      'Technical SEO, Schema.org JSON-LD, and Core Web Vitals optimization',
      'Secure domain registration, SSL certificates, and cloud hosting',
      'Content management workflows and structured update maintenance',
    ],
  },
  {
    category: 'it-support',
    title: `IT Support & Cloud Infrastructure`,
    summary: onSiteLondon
      ? `Comprehensive IT systems support, commercial CCTV installations, Microsoft 365 administration, and on-site hardware troubleshooting across ${cityName}.`
      : `Remote technical support, workstation configuration, Microsoft 365 management, network security audits, and cloud data protection for ${cityName} businesses.`,
    deliverables: onSiteLondon
      ? [
          'Commercial CCTV installation, 4K camera placement, and remote mobile viewing',
          'Microsoft 365, Google Workspace, and corporate email administration',
          'On-site network cabling, Wi-Fi access points, and router diagnostics',
          'Automated daily cloud backups and cybersecurity endpoint hardening',
          'Dedicated emergency technical support and hardware lifecycle maintenance',
        ]
      : [
          'Remote desktop troubleshooting and operating system maintenance',
          'Microsoft 365, Google Workspace, and corporate email migration',
          'Network security configuration, VPN setup, and Wi-Fi diagnostics',
          'Automated cloud backup strategies and ransomware defense guidance',
          'Hardware specification advice and multi-monitor workstation deployment',
        ],
  },
  {
    category: 'local-presence',
    title: `Local Search & Digital Presence`,
    summary:
      `Empowering ${cityName} companies to rank prominently on Google Search, Google Maps, Apple Maps, and authoritative directories.`,
    deliverables: [
      'Google Business Profile setup, category optimization, and verification support',
      'Apple Business Connect and Bing Places registration',
      'Consistent NAP (Name, Address, Phone) citations across key regional directories',
      'Local search keyword targeting and localized landing page signals',
      'Customer review collection workflows and reputation monitoring',
    ],
  },
  {
    category: 'ai-automation',
    title: `AI Workflows & Process Automation`,
    summary:
      `Deploying intelligent conversational triage, automated lead capture, and streamlined workflow pipelines for ${cityName} operations.`,
    deliverables: [
      '24/7 web inquiry automation and intelligent intent routing',
      'Automated appointment scheduling, calendar sync, and SMS/email reminders',
      'Lead qualification workflows that score and deliver prospects to your CRM',
      'Routine repetitive task automation with Zapier, Make, and custom APIs',
      'Custom AI voice agent and messaging assistant deployment',
    ],
  },
];

// Standard How We Work steps
const getStandardHowWeWork = (cityName: string, onSite = false) => [
  {
    step: '01',
    title: 'Consultation & Technical Scope',
    description: `We begin with an in-depth remote video consultation to analyze your current technology stack, business goals in ${cityName}, and immediate priorities.`,
  },
  {
    step: '02',
    title: 'Architecture & Transparent Quote',
    description:
      'We provide a detailed technical blueprint, itemized milestones, clear deliverables, and upfront fixed pricing with zero hidden surprises.',
  },
  {
    step: '03',
    title: onSite ? 'Hybrid Build & Local Execution' : 'Rapid Agile Engineering',
    description: onSite
      ? `Our engineers develop your digital assets while our field specialists handle physical hardware and cabling on-site in ${cityName}.`
      : `Our team builds, tests, and deploys your custom digital systems with regular asynchronous milestones and live preview environments.`,
  },
  {
    step: '04',
    title: 'Quality Verification & Launch',
    description:
      'Every project undergoes rigorous cross-browser testing, SEO audit verification, security checks, and speed optimization before going live.',
  },
  {
    step: '05',
    title: 'Ongoing SLA Care & Optimization',
    description:
      'Post-launch, we provide dependable maintenance, software updates, security monitoring, and continuous strategic advisory as your business grows.',
  },
];

export const REGIONS_DATA: RegionData[] = [
  // 1. AMERICAS
  {
    id: 'americas',
    name: 'Americas',
    slug: 'americas',
    path: '/locations/americas',
    heroHeadline: 'Digital Engineering & Business Solutions Across the Americas',
    heroDescription:
      'Serving modern businesses throughout the United States and Canada with responsive web development, scalable IT systems, localized search presence, and 24/7 AI workflow automation.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    metaTitle: 'Digital Services Across the Americas | BOTLYTICES',
    metaDescription:
      'Explore Botlytices digital services across the United States and Canada. High-performance web development, IT support, local search optimization, and AI automation.',
    overview:
      'Botlytices operates as a remote-first international digital services provider across North America. We empower ambitious enterprises from Silicon Valley tech hubs to East Coast corporate centers and Canadian commercial capitals with robust technology solutions.',
    faqs: [
      {
        question: 'How does Botlytices work with businesses across different North American time zones?',
        answer:
          'Our engineering and delivery teams accommodate Eastern, Central, Mountain, and Pacific time zones. We conduct consultations via scheduled video sessions and provide asynchronous updates so your team never experiences delays.',
      },
      {
        question: 'Do you offer in-person visits in the United States or Canada?',
        answer:
          'Our North American operations are delivered through a transparent, high-efficiency remote delivery model. This eliminates costly overhead and allows us to deploy top-tier engineering talent rapidly. Physical on-site visits are only scheduled for bespoke enterprise consulting contracts.',
      },
      {
        question: 'Can you assist with local Google Maps and search rankings in US and Canadian cities?',
        answer:
          'Yes. We specialize in local business presence, Google Business Profile optimization, Apple Business Connect, and regional NAP citation building tailored to your target municipality and competitive market.',
      },
      {
        question: 'How do invoicing and payments work for US and Canadian clients?',
        answer:
          'We issue itemized digital invoices in USD or CAD, with secure payments processed via bank wire (ACH/EFT), major credit cards, or international transfer platforms with clear contractual deliverables.',
      },
    ],
    countries: [
      // UNITED STATES
      {
        id: 'united-states',
        name: 'United States',
        slug: 'united-states',
        path: '/locations/americas/united-states',
        regionId: 'americas',
        regionName: 'Americas',
        code: 'US',
        headline: 'Web Development, IT Solutions & AI Automation in the United States',
        intro:
          'Helping American businesses across California, New York, Texas, Florida, Illinois, and Washington build resilient digital infrastructure, attract local customers, and streamline daily operations.',
        heroImage: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services in the United States | BOTLYTICES',
        metaDescription:
          'Partner with Botlytices for custom web development, IT support, local search visibility, and AI automation across major US metropolitan markets.',
        deliveryModel: 'remote-first',
        deliveryNote:
          'Delivered via our high-touch remote engineering framework. Dedicated project channels, scheduled video consultations, and rapid sprint turnarounds.',
        faqs: [
          {
            question: 'What types of American businesses do you support?',
            answer:
              'We partner with professional services (legal, accounting, consultancy), healthcare practices, commercial contractors, hospitality providers, architectural studios, and growing B2B technology companies.',
          },
          {
            question: 'Can you ensure compliance with US data privacy regulations (such as CCPA)?',
            answer:
              'Yes. All web applications and data pipelines we build adhere to strict data privacy principles, secure encryption standards, and cookie compliance frameworks including California Consumer Privacy Act (CCPA) standards.',
          },
          {
            question: 'Do you support multi-location businesses across several US states?',
            answer:
              'Yes. We build centralized web architectures and multi-location Google Business Profile management workflows that allow companies operating across multiple states to scale their search presence efficiently.',
          },
        ],
        divisions: [
          // California
          {
            id: 'california',
            name: 'California',
            slug: 'california',
            path: '/locations/americas/united-states/california',
            type: 'State',
            countryId: 'united-states',
            countryName: 'United States',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Engineering Across California',
            intro:
              'From Los Angeles and Silicon Valley to San Diego, we equip California businesses with cutting-edge web platforms, cloud IT support, and intelligent AI automation.',
            heroImage: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in California | BOTLYTICES',
            metaDescription:
              'Serving California businesses in Los Angeles, San Francisco, San Diego, and San Jose with custom web design, IT infrastructure, and AI workflow automation.',
            faqs: [
              {
                question: 'How do you support fast-paced California enterprises?',
                answer:
                  'We utilize modern continuous deployment pipelines, transparent Slack/Teams coordination, and Pacific Time-aligned sprint reviews to ensure seamless velocity.',
              },
              {
                question: 'Can you optimize our local California search presence?',
                answer:
                  'Yes. We optimize your digital presence for competitive local search queries across major Californian metropolitan areas.',
              },
            ],
            cities: [
              {
                id: 'los-angeles',
                name: 'Los Angeles',
                slug: 'los-angeles',
                path: '/locations/americas/united-states/california/los-angeles',
                divisionId: 'california',
                divisionName: 'California',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Los Angeles',
                heroSupportingCopy:
                  'Practical digital services to help Southern California businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'In a competitive global metropolis like Los Angeles, your digital infrastructure determines how efficiently your business acquires clients and handles operations. Botlytices delivers custom web applications, responsive digital branding, local search visibility, and AI-powered lead management built for high-growth LA enterprises.',
                businessContext:
                  'Serving companies across Downtown LA, Century City, Santa Monica, Pasadena, and the wider Los Angeles metropolitan area with modern digital engineering.',
                heroImage: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development, IT Support & AI in Los Angeles, CA | BOTLYTICES',
                metaDescription:
                  'Botlytices delivers custom websites, IT support, local Google Maps ranking, and AI automation for businesses in Los Angeles, California.',
                onSiteAvailable: false,
                timezone: 'America/Los_Angeles (PST/PDT)',
                confirmedServices: getStandardServices('Los Angeles'),
                howWeWork: getStandardHowWeWork('Los Angeles'),
                faqs: [
                  {
                    question: 'How does Botlytices deliver services remotely to Los Angeles businesses?',
                    answer:
                      'We provide video consultations, screen-share reviews, shared staging URLs, and dedicated Pacific Time communication channels so you receive prompt, hands-on attention without paying for unnecessary local overhead.',
                  },
                  {
                    question: 'Can you help our LA business rank in Google Local 3-Pack?',
                    answer:
                      'Yes. We execute deep Google Business Profile optimization, local schema markup, high-authority regional directory citations, and review generation systems to boost your local visibility in Los Angeles.',
                  },
                  {
                    question: 'What is the typical turnaround time for a custom business website in Los Angeles?',
                    answer:
                      'Standard custom websites are engineered and launched in 2 to 4 weeks, with clear weekly milestones and staging environment sign-offs.',
                  },
                ],
                nearbyCities: [
                  { name: 'San Francisco', path: '/locations/americas/united-states/california/san-francisco', divisionOrCountry: 'California' },
                  { name: 'San Diego', path: '/locations/americas/united-states/california/san-diego', divisionOrCountry: 'California' },
                  { name: 'San Jose', path: '/locations/americas/united-states/california/san-jose', divisionOrCountry: 'California' },
                ],
              },
              {
                id: 'san-francisco',
                name: 'San Francisco',
                slug: 'san-francisco',
                path: '/locations/americas/united-states/california/san-francisco',
                divisionId: 'california',
                divisionName: 'California',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Engineering-Grade Web Platforms & AI Automation in San Francisco',
                heroSupportingCopy:
                  'Robust web engineering, enterprise IT support, and intelligent automated workflows tailored for Bay Area innovators and professional firms.',
                intro:
                  'San Francisco demands technical excellence and zero-friction user experiences. Botlytices brings rigorous frontend engineering, cloud infrastructure support, and practical AI workflow automations to Bay Area companies seeking distinct advantages.',
                businessContext:
                  'Partnering with businesses across the Financial District, SoMa, Mission Bay, and surrounding Silicon Valley corridors.',
                heroImage: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & AI Automation in San Francisco, CA | BOTLYTICES',
                metaDescription:
                  'High-performance web development, IT cloud support, and AI process automation for San Francisco and Bay Area businesses.',
                onSiteAvailable: false,
                timezone: 'America/Los_Angeles (PST/PDT)',
                confirmedServices: getStandardServices('San Francisco'),
                howWeWork: getStandardHowWeWork('San Francisco'),
                faqs: [
                  {
                    question: 'Do you build web applications with modern frontend frameworks?',
                    answer:
                      'Yes. We specialize in React, Next.js, TypeScript, Tailwind CSS, and headless architectures with sub-second page loads and enterprise security.',
                  },
                  {
                    question: 'How do you support remote IT needs for San Francisco distributed teams?',
                    answer:
                      'We provide remote MDM configuration, Microsoft 365 / Google Workspace administration, VPN setups, and identity access management.',
                  },
                ],
                nearbyCities: [
                  { name: 'San Jose', path: '/locations/americas/united-states/california/san-jose', divisionOrCountry: 'California' },
                  { name: 'Los Angeles', path: '/locations/americas/united-states/california/los-angeles', divisionOrCountry: 'California' },
                  { name: 'Seattle', path: '/locations/americas/united-states/washington/seattle', divisionOrCountry: 'Washington' },
                ],
              },
              {
                id: 'san-diego',
                name: 'San Diego',
                slug: 'san-diego',
                path: '/locations/americas/united-states/california/san-diego',
                divisionId: 'california',
                divisionName: 'California',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & Digital Growth Solutions in San Diego',
                heroSupportingCopy:
                  'Helping San Diego businesses modernize customer-facing websites, protect IT assets, and capture local search demand.',
                intro:
                  'From biotech corridors to coastal commercial enterprises, San Diego businesses benefit from Botlytices custom digital solutions, local Google Maps dominance, and practical automation.',
                businessContext:
                  'Supporting commercial operations across Downtown San Diego, La Jolla, Mission Valley, and Carlsbad.',
                heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in San Diego, CA | BOTLYTICES',
                metaDescription:
                  'Custom websites, local SEO, IT support, and automation for San Diego businesses. Reliable remote delivery with high standards.',
                onSiteAvailable: false,
                timezone: 'America/Los_Angeles (PST/PDT)',
                confirmedServices: getStandardServices('San Diego'),
                howWeWork: getStandardHowWeWork('San Diego'),
                faqs: [
                  {
                    question: 'Can you help our San Diego service company receive more qualified inquiries?',
                    answer:
                      'Yes. We combine high-conversion website design with localized search engine optimization and automated inquiry capture to turn visitors into booked clients.',
                  },
                ],
                nearbyCities: [
                  { name: 'Los Angeles', path: '/locations/americas/united-states/california/los-angeles', divisionOrCountry: 'California' },
                  { name: 'San Jose', path: '/locations/americas/united-states/california/san-jose', divisionOrCountry: 'California' },
                ],
              },
              {
                id: 'san-jose',
                name: 'San Jose',
                slug: 'san-jose',
                path: '/locations/americas/united-states/california/san-jose',
                divisionId: 'california',
                divisionName: 'California',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Digital Systems & Web Development in San Jose',
                heroSupportingCopy:
                  'Silicon Valley-grade digital engineering, IT management, and automated operational pipelines.',
                intro:
                  'As the capital of Silicon Valley, San Jose businesses expect speed, reliability, and precision. We engineer clean web platforms and seamless workflow automations.',
                businessContext: 'Serving tech services, professional consultancies, and commercial businesses across Santa Clara County.',
                heroImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & AI Solutions in San Jose, CA | BOTLYTICES',
                metaDescription:
                  'Silicon Valley digital solutions: high-performance websites, IT support, and AI workflow automation in San Jose.',
                onSiteAvailable: false,
                timezone: 'America/Los_Angeles (PST/PDT)',
                confirmedServices: getStandardServices('San Jose'),
                howWeWork: getStandardHowWeWork('San Jose'),
                faqs: [
                  {
                    question: 'Do you offer ongoing website maintenance and security patches?',
                    answer:
                      'Yes. Our monthly care plans include regular security updates, uptime monitoring, automated backups, and prioritized feature requests.',
                  },
                ],
                nearbyCities: [
                  { name: 'San Francisco', path: '/locations/americas/united-states/california/san-francisco', divisionOrCountry: 'California' },
                  { name: 'Los Angeles', path: '/locations/americas/united-states/california/los-angeles', divisionOrCountry: 'California' },
                ],
              },
            ],
          },

          // New York
          {
            id: 'new-york',
            name: 'New York',
            slug: 'new-york',
            path: '/locations/americas/united-states/new-york',
            type: 'State',
            countryId: 'united-states',
            countryName: 'United States',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across New York',
            intro:
              'From Manhattan and Brooklyn to Western New York, we deliver world-class digital platforms, IT infrastructure guidance, and local search visibility.',
            heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in New York | BOTLYTICES',
            metaDescription:
              'Premium web development, IT support, local SEO, and AI automation for businesses across New York State.',
            faqs: [
              {
                question: 'How do you coordinate with New York clients on Eastern Time?',
                answer:
                  'Our East Coast project management handles meetings, sprints, and live communications aligned directly with New York business hours.',
              },
            ],
            cities: [
              {
                id: 'new-york-city',
                name: 'New York City',
                slug: 'new-york-city',
                path: '/locations/americas/united-states/new-york/new-york-city',
                divisionId: 'new-york',
                divisionName: 'New York',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in New York City',
                heroSupportingCopy:
                  'Practical digital services to help New York businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Operating in New York City means standing out in one of the most intense commercial ecosystems on earth. Botlytices builds ultra-fast web architectures, establishes ironclad local search authority across the five boroughs, and automates administrative bottlenecks with AI.',
                businessContext:
                  'Supporting commercial firms across Manhattan (Midtown, Financial District, Flatiron), Brooklyn, Queens, and the Tri-State region.',
                heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in New York City, NY | BOTLYTICES',
                metaDescription:
                  'High-performance web development, IT support, local SEO, and AI automation for NYC businesses across Manhattan, Brooklyn, and Queens.',
                onSiteAvailable: false,
                timezone: 'America/New_York (EST/EDT)',
                confirmedServices: getStandardServices('New York City'),
                howWeWork: getStandardHowWeWork('New York City'),
                faqs: [
                  {
                    question: 'How can Botlytices help our NYC firm outrank local competitors?',
                    answer:
                      'We implement granular hyper-local SEO, schema markup, Google Business Profile enhancements, and high-performance page-load optimizations that search engines reward.',
                  },
                  {
                    question: 'Do you offer custom integrations with proprietary CRMs and booking tools?',
                    answer:
                      'Yes. We integrate custom web portals with tools like Salesforce, HubSpot, Calendly, Stripe, and internal business APIs.',
                  },
                ],
                nearbyCities: [
                  { name: 'Buffalo', path: '/locations/americas/united-states/new-york/buffalo', divisionOrCountry: 'New York' },
                  { name: 'Toronto', path: '/locations/americas/canada/ontario/toronto', divisionOrCountry: 'Ontario, Canada' },
                ],
              },
              {
                id: 'buffalo',
                name: 'Buffalo',
                slug: 'buffalo',
                path: '/locations/americas/united-states/new-york/buffalo',
                divisionId: 'new-york',
                divisionName: 'New York',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & IT Solutions in Buffalo',
                heroSupportingCopy:
                  'Modern web platforms and digital presence services for Western New York enterprises and service contractors.',
                intro:
                  'We assist Buffalo businesses with clean, accessible websites, local search citation cleanup, and reliable remote IT guidance.',
                businessContext: 'Serving commercial, healthcare, and industrial firms across the Buffalo Niagara region.',
                heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Buffalo, NY | BOTLYTICES',
                metaDescription:
                  'Digital solutions for Buffalo businesses: custom web development, local SEO, and IT infrastructure support.',
                onSiteAvailable: false,
                timezone: 'America/New_York (EST/EDT)',
                confirmedServices: getStandardServices('Buffalo'),
                howWeWork: getStandardHowWeWork('Buffalo'),
                faqs: [
                  {
                    question: 'What is included in your local search presence package in Buffalo?',
                    answer:
                      'Complete Google Business Profile optimization, Apple Maps setup, local citation synchronization, and structured review generation.',
                  },
                ],
                nearbyCities: [
                  { name: 'New York City', path: '/locations/americas/united-states/new-york/new-york-city', divisionOrCountry: 'New York' },
                  { name: 'Toronto', path: '/locations/americas/canada/ontario/toronto', divisionOrCountry: 'Ontario, Canada' },
                ],
              },
            ],
          },

          // Texas
          {
            id: 'texas',
            name: 'Texas',
            slug: 'texas',
            path: '/locations/americas/united-states/texas',
            type: 'State',
            countryId: 'united-states',
            countryName: 'United States',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across Texas',
            intro:
              'Empowering businesses in Austin, Dallas, and Houston with high-performance digital platforms, IT systems support, and automated operational pipelines.',
            heroImage: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in Texas | BOTLYTICES',
            metaDescription:
              'Serving Texas enterprises in Austin, Dallas, and Houston with custom web development, IT support, local SEO, and AI automation.',
            faqs: [
              {
                question: 'Can you scale with rapidly growing Texas enterprises?',
                answer:
                  'Yes. We build modular, cloud-native architectures that scale smoothly from single-city businesses to statewide multi-location enterprises.',
              },
            ],
            cities: [
              {
                id: 'austin',
                name: 'Austin',
                slug: 'austin',
                path: '/locations/americas/united-states/texas/austin',
                divisionId: 'texas',
                divisionName: 'Texas',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & AI Automation in Austin',
                heroSupportingCopy:
                  'Innovative web engineering, IT infrastructure support, and automated business workflows for Austin tech firms and commercial studios.',
                intro:
                  'Austin is a magnet for innovation and high expectations. Botlytices delivers sleek, responsive web platforms and automated lead qualification systems designed to convert modern clients.',
                businessContext: 'Serving firms across Downtown Austin, Silicon Hills, The Domain, and East Austin.',
                heroImage: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & AI Automation in Austin, TX | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, local SEO, and AI workflow automation for businesses in Austin, Texas.',
                onSiteAvailable: false,
                timezone: 'America/Chicago (CST/CDT)',
                confirmedServices: getStandardServices('Austin'),
                howWeWork: getStandardHowWeWork('Austin'),
                faqs: [
                  {
                    question: 'Can you automate our customer appointment scheduling in Austin?',
                    answer:
                      'Yes. We implement automated booking workflows that integrate with your calendar, send SMS/email reminders, and qualify prospects upfront.',
                  },
                ],
                nearbyCities: [
                  { name: 'Dallas', path: '/locations/americas/united-states/texas/dallas', divisionOrCountry: 'Texas' },
                  { name: 'Houston', path: '/locations/americas/united-states/texas/houston', divisionOrCountry: 'Texas' },
                ],
              },
              {
                id: 'dallas',
                name: 'Dallas',
                slug: 'dallas',
                path: '/locations/americas/united-states/texas/dallas',
                divisionId: 'texas',
                divisionName: 'Texas',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & IT Support in Dallas',
                heroSupportingCopy:
                  'Enterprise-grade digital platforms and IT network guidance for Dallas–Fort Worth businesses.',
                intro:
                  'We help DFW corporate and commercial businesses modernize their digital footprint, secure their cloud data, and improve local Google Maps presence.',
                businessContext: 'Supporting businesses across Downtown Dallas, Uptown, Plano, and Irving.',
                heroImage: 'https://images.unsplash.com/photo-1545153996-e01b50d6534c?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Dallas, TX | BOTLYTICES',
                metaDescription:
                  'Web development, IT solutions, and local search optimization for Dallas–Fort Worth enterprises.',
                onSiteAvailable: false,
                timezone: 'America/Chicago (CST/CDT)',
                confirmedServices: getStandardServices('Dallas'),
                howWeWork: getStandardHowWeWork('Dallas'),
                faqs: [
                  {
                    question: 'Do you help with corporate email migration to Microsoft 365?',
                    answer:
                      'Yes. We handle seamless tenant-to-tenant or legacy email migrations to Microsoft 365 with zero downtime.',
                  },
                ],
                nearbyCities: [
                  { name: 'Austin', path: '/locations/americas/united-states/texas/austin', divisionOrCountry: 'Texas' },
                  { name: 'Houston', path: '/locations/americas/united-states/texas/houston', divisionOrCountry: 'Texas' },
                ],
              },
              {
                id: 'houston',
                name: 'Houston',
                slug: 'houston',
                path: '/locations/americas/united-states/texas/houston',
                divisionId: 'texas',
                divisionName: 'Texas',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & Digital Solutions in Houston',
                heroSupportingCopy:
                  'Reliable web platforms, cloud IT support, and local presence for Houston enterprises and commercial services.',
                intro:
                  'Houston is a vast commercial powerhouse. Botlytices assists industrial, medical, and professional businesses with robust websites and local search dominance.',
                businessContext: 'Supporting companies in Downtown Houston, Energy Corridor, The Galleria, and The Woodlands.',
                heroImage: 'https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Houston, TX | BOTLYTICES',
                metaDescription:
                  'Houston web development, IT support, local SEO, and business automation by Botlytices.',
                onSiteAvailable: false,
                timezone: 'America/Chicago (CST/CDT)',
                confirmedServices: getStandardServices('Houston'),
                howWeWork: getStandardHowWeWork('Houston'),
                faqs: [
                  {
                    question: 'Can you help our Houston business rank for local service queries?',
                    answer:
                      'Yes. We implement comprehensive local search strategies across the Greater Houston area.',
                  },
                ],
                nearbyCities: [
                  { name: 'Austin', path: '/locations/americas/united-states/texas/austin', divisionOrCountry: 'Texas' },
                  { name: 'Dallas', path: '/locations/americas/united-states/texas/dallas', divisionOrCountry: 'Texas' },
                ],
              },
            ],
          },

          // Florida
          {
            id: 'florida',
            name: 'Florida',
            slug: 'florida',
            path: '/locations/americas/united-states/florida',
            type: 'State',
            countryId: 'united-states',
            countryName: 'United States',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across Florida',
            intro:
              'Serving Miami, Orlando, and Tampa with responsive web development, local Google presence, and AI-driven client communication workflows.',
            heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in Florida | BOTLYTICES',
            metaDescription:
              'Custom web design, IT support, and local search visibility for Florida businesses in Miami, Orlando, and Tampa.',
            faqs: [
              {
                question: 'Do you design bilingual (English/Spanish) websites for Florida businesses?',
                answer:
                  'Yes. We build clean, high-performance multilingual web platforms with dedicated language toggles and localized SEO tags.',
              },
            ],
            cities: [
              {
                id: 'miami',
                name: 'Miami',
                slug: 'miami',
                path: '/locations/americas/united-states/florida/miami',
                divisionId: 'florida',
                divisionName: 'Florida',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Miami',
                heroSupportingCopy:
                  'Modern digital design, local search dominance, and automated customer communication for Miami enterprises.',
                intro:
                  'In Miami’s vibrant international business environment, having a fast, visually commanding digital storefront is critical. Botlytices engineers custom websites, establishes local Google Maps leadership, and automates customer triage.',
                businessContext: 'Serving businesses in Brickell, Downtown Miami, Wynwood, Coral Gables, and Miami Beach.',
                heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Miami, FL | BOTLYTICES',
                metaDescription:
                  'Custom web design, local SEO, and AI automation for Miami businesses. Fast delivery and reliable remote support.',
                onSiteAvailable: false,
                timezone: 'America/New_York (EST/EDT)',
                confirmedServices: getStandardServices('Miami'),
                howWeWork: getStandardHowWeWork('Miami'),
                faqs: [
                  {
                    question: 'Can you help our Miami business capture more local leads?',
                    answer:
                      'Yes. We combine local SEO, Google Business Profile enhancement, and 24/7 web inquiry automation.',
                  },
                ],
                nearbyCities: [
                  { name: 'Orlando', path: '/locations/americas/united-states/florida/orlando', divisionOrCountry: 'Florida' },
                  { name: 'Tampa', path: '/locations/americas/united-states/florida/tampa', divisionOrCountry: 'Florida' },
                ],
              },
              {
                id: 'orlando',
                name: 'Orlando',
                slug: 'orlando',
                path: '/locations/americas/united-states/florida/orlando',
                divisionId: 'florida',
                divisionName: 'Florida',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & Digital Presence in Orlando',
                heroSupportingCopy:
                  'Helping Central Florida businesses streamline operations and attract more local and international customers.',
                intro:
                  'We assist Orlando hospitality, commercial services, and technology providers with robust digital architectures.',
                businessContext: 'Serving commercial firms across Downtown Orlando, Lake Nona, and Winter Park.',
                heroImage: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Orlando, FL | BOTLYTICES',
                metaDescription:
                  'Orlando web development, IT support, and local SEO services for growing Central Florida companies.',
                onSiteAvailable: false,
                timezone: 'America/New_York (EST/EDT)',
                confirmedServices: getStandardServices('Orlando'),
                howWeWork: getStandardHowWeWork('Orlando'),
                faqs: [
                  {
                    question: 'How do we get started on an Orlando project?',
                    answer:
                      'Simply submit an inquiry to schedule an introductory video consultation where we analyze your goals and provide an upfront quote.',
                  },
                ],
                nearbyCities: [
                  { name: 'Tampa', path: '/locations/americas/united-states/florida/tampa', divisionOrCountry: 'Florida' },
                  { name: 'Miami', path: '/locations/americas/united-states/florida/miami', divisionOrCountry: 'Florida' },
                ],
              },
              {
                id: 'tampa',
                name: 'Tampa',
                slug: 'tampa',
                path: '/locations/americas/united-states/florida/tampa',
                divisionId: 'florida',
                divisionName: 'Florida',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & IT Solutions in Tampa',
                heroSupportingCopy:
                  'Custom digital engineering and IT management for Tampa Bay commercial businesses.',
                intro:
                  'We support Tampa Bay companies with fast websites, secure cloud setups, and localized search visibility.',
                businessContext: 'Serving businesses in Downtown Tampa, Ybor City, Westshore, and St. Petersburg.',
                heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Tampa, FL | BOTLYTICES',
                metaDescription:
                  'Reliable web development, IT support, and local SEO for Tampa Bay enterprises.',
                onSiteAvailable: false,
                timezone: 'America/New_York (EST/EDT)',
                confirmedServices: getStandardServices('Tampa'),
                howWeWork: getStandardHowWeWork('Tampa'),
                faqs: [
                  {
                    question: 'Can you improve our existing WordPress or custom website in Tampa?',
                    answer:
                      'Yes. We audit speed, fix layout bugs, optimize code, and enhance security and SEO rankings.',
                  },
                ],
                nearbyCities: [
                  { name: 'Orlando', path: '/locations/americas/united-states/florida/orlando', divisionOrCountry: 'Florida' },
                  { name: 'Miami', path: '/locations/americas/united-states/florida/miami', divisionOrCountry: 'Florida' },
                ],
              },
            ],
          },

          // Illinois
          {
            id: 'illinois',
            name: 'Illinois',
            slug: 'illinois',
            path: '/locations/americas/united-states/illinois',
            type: 'State',
            countryId: 'united-states',
            countryName: 'United States',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across Illinois',
            intro:
              'Providing Chicago and Illinois businesses with high-performance digital platforms, IT systems support, and automated operational pipelines.',
            heroImage: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in Illinois | BOTLYTICES',
            metaDescription:
              'Serving Chicago and Illinois enterprises with custom web development, IT systems support, and local SEO.',
            faqs: [
              {
                question: 'How do you coordinate with Illinois businesses in Central Time?',
                answer:
                  'Our Central Time sprint schedules align directly with standard Midwest commercial business hours.',
              },
            ],
            cities: [
              {
                id: 'chicago',
                name: 'Chicago',
                slug: 'chicago',
                path: '/locations/americas/united-states/illinois/chicago',
                divisionId: 'illinois',
                divisionName: 'Illinois',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Chicago',
                heroSupportingCopy:
                  'Practical digital services to help Chicago businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Chicago is the architectural and commercial anchor of the Midwest. Botlytices engineers robust, ultra-fast web platforms, manages remote IT support, and optimizes Google Maps visibility for Chicago companies.',
                businessContext: 'Supporting commercial enterprises across The Loop, River North, Fulton Market, and Chicagoland suburbs.',
                heroImage: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Chicago, IL | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, local SEO, and AI automation for businesses across Chicago and Illinois.',
                onSiteAvailable: false,
                timezone: 'America/Chicago (CST/CDT)',
                confirmedServices: getStandardServices('Chicago'),
                howWeWork: getStandardHowWeWork('Chicago'),
                faqs: [
                  {
                    question: 'Can you help our Chicago professional services firm stand out online?',
                    answer:
                      'Yes. We build clean, authoritative websites with clear trust signals, case proof, and schema markup that establish market leadership.',
                  },
                ],
                nearbyCities: [
                  { name: 'Toronto', path: '/locations/americas/canada/ontario/toronto', divisionOrCountry: 'Ontario, Canada' },
                  { name: 'New York City', path: '/locations/americas/united-states/new-york/new-york-city', divisionOrCountry: 'New York' },
                ],
              },
            ],
          },

          // Washington
          {
            id: 'washington',
            name: 'Washington',
            slug: 'washington',
            path: '/locations/americas/united-states/washington',
            type: 'State',
            countryId: 'united-states',
            countryName: 'United States',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across Washington',
            intro:
              'Empowering Pacific Northwest enterprises in Seattle and across Washington State with precision web development, cloud IT support, and AI automation.',
            heroImage: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in Washington | BOTLYTICES',
            metaDescription:
              'Serving Seattle and Washington businesses with custom web development, IT support, and local search visibility.',
            faqs: [
              {
                question: 'Do you build cloud-native applications for Pacific Northwest companies?',
                answer:
                  'Yes. We utilize cloud-native serverless backends and modern static/SSR frontend architectures for maximum reliability and speed.',
              },
            ],
            cities: [
              {
                id: 'seattle',
                name: 'Seattle',
                slug: 'seattle',
                path: '/locations/americas/united-states/washington/seattle',
                divisionId: 'washington',
                divisionName: 'Washington',
                countryId: 'united-states',
                countryName: 'United States',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & Cloud IT Solutions in Seattle',
                heroSupportingCopy:
                  'Engineering-driven digital services, cloud IT administration, and automated workflows for Seattle businesses.',
                intro:
                  'In the home of global cloud computing, Seattle businesses expect flawless digital experiences. Botlytices delivers fast, beautifully designed websites and automated workflows that keep you ahead.',
                businessContext: 'Supporting businesses in Downtown Seattle, South Lake Union, Bellevue, and Redmond.',
                heroImage: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Seattle, WA | BOTLYTICES',
                metaDescription:
                  'High-performance web development, IT support, and local SEO for Seattle and Pacific Northwest companies.',
                onSiteAvailable: false,
                timezone: 'America/Los_Angeles (PST/PDT)',
                confirmedServices: getStandardServices('Seattle'),
                howWeWork: getStandardHowWeWork('Seattle'),
                faqs: [
                  {
                    question: 'Can you migrate our legacy website to a modern React/Next.js stack?',
                    answer:
                      'Yes. We seamlessly migrate content, preserve existing SEO rankings with 301 redirects, and boost load speeds dramatically.',
                  },
                ],
                nearbyCities: [
                  { name: 'Vancouver', path: '/locations/americas/canada/british-columbia/vancouver', divisionOrCountry: 'British Columbia, Canada' },
                  { name: 'San Francisco', path: '/locations/americas/united-states/california/san-francisco', divisionOrCountry: 'California' },
                ],
              },
            ],
          },
        ],
      },

      // CANADA
      {
        id: 'canada',
        name: 'Canada',
        slug: 'canada',
        path: '/locations/americas/canada',
        regionId: 'americas',
        regionName: 'Americas',
        code: 'CA',
        headline: 'Web Development, IT Solutions & AI Automation in Canada',
        intro:
          'Supporting Canadian enterprises across Ontario, British Columbia, and Quebec with high-speed web platforms, local search presence, and operational automation.',
        heroImage: 'https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in Canada | BOTLYTICES',
        metaDescription:
          'Botlytices delivers custom web development, IT support, local SEO, and AI workflow automation across major Canadian markets.',
        deliveryModel: 'remote-first',
        deliveryNote:
          'High-touch remote delivery with Canadian currency billing (CAD/USD) and bilingual capabilities where required.',
        faqs: [
          {
            question: 'Do you support Canadian data residency requirements?',
            answer:
              'Yes. Where required, we configure cloud hosting and database instances within Canadian AWS or Google Cloud regions (e.g. ca-central-1 in Montreal or Toronto).',
          },
        ],
        divisions: [
          // Ontario
          {
            id: 'ontario',
            name: 'Ontario',
            slug: 'ontario',
            path: '/locations/americas/canada/ontario',
            type: 'Province',
            countryId: 'canada',
            countryName: 'Canada',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across Ontario',
            intro:
              'Serving Toronto, Ottawa, and the Greater Golden Horseshoe with custom web development, IT management, and digital presence services.',
            heroImage: 'https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in Ontario, Canada | BOTLYTICES',
            metaDescription:
              'Custom web design, IT support, and local SEO for Ontario businesses in Toronto and Ottawa.',
            faqs: [
              {
                question: 'Can you help our Ontario company capture local search traffic in the GTA?',
                answer:
                  'Yes. We implement hyper-targeted local SEO campaigns tailored to Toronto, Mississauga, Markham, and the broader Greater Toronto Area.',
              },
            ],
            cities: [
              {
                id: 'toronto',
                name: 'Toronto',
                slug: 'toronto',
                path: '/locations/americas/canada/ontario/toronto',
                divisionId: 'ontario',
                divisionName: 'Ontario',
                countryId: 'canada',
                countryName: 'Canada',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Toronto',
                heroSupportingCopy:
                  'Practical digital services to help Toronto businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'As Canada’s financial engine and tech hub, Toronto demands high-performance digital systems. Botlytices provides custom web development, Google Maps optimization, and AI automation to help Toronto businesses thrive.',
                businessContext: 'Serving commercial enterprises in the Financial District, Yorkville, Liberty Village, and the GTA.',
                heroImage: 'https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Toronto, ON | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, local SEO, and AI automation for Toronto businesses.',
                onSiteAvailable: false,
                timezone: 'America/Toronto (EST/EDT)',
                confirmedServices: getStandardServices('Toronto'),
                howWeWork: getStandardHowWeWork('Toronto'),
                faqs: [
                  {
                    question: 'How does Botlytices support Toronto businesses remotely?',
                    answer:
                      'We provide video discovery sessions, interactive Figma design prototypes, and live staging URLs aligned with Toronto business hours.',
                  },
                ],
                nearbyCities: [
                  { name: 'Ottawa', path: '/locations/americas/canada/ontario/ottawa', divisionOrCountry: 'Ontario' },
                  { name: 'Montreal', path: '/locations/americas/canada/quebec/montreal', divisionOrCountry: 'Quebec' },
                ],
              },
              {
                id: 'ottawa',
                name: 'Ottawa',
                slug: 'ottawa',
                path: '/locations/americas/canada/ontario/ottawa',
                divisionId: 'ontario',
                divisionName: 'Ontario',
                countryId: 'canada',
                countryName: 'Canada',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & Digital Services in Ottawa',
                heroSupportingCopy:
                  'Reliable web design, IT infrastructure guidance, and local search visibility for businesses in the National Capital Region.',
                intro:
                  'We assist Ottawa professional consultancies, commercial enterprises, and technology companies with modern digital platforms.',
                businessContext: 'Supporting firms in Downtown Ottawa, Kanata, and ByWard Market.',
                heroImage: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Ottawa, ON | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local search optimization for Ottawa businesses.',
                onSiteAvailable: false,
                timezone: 'America/Toronto (EST/EDT)',
                confirmedServices: getStandardServices('Ottawa'),
                howWeWork: getStandardHowWeWork('Ottawa'),
                faqs: [
                  {
                    question: 'Can you provide bilingual (English/French) website solutions in Ottawa?',
                    answer:
                      'Yes. We implement accessible, bilingual website architectures conforming to Canadian standards.',
                  },
                ],
                nearbyCities: [
                  { name: 'Toronto', path: '/locations/americas/canada/ontario/toronto', divisionOrCountry: 'Ontario' },
                  { name: 'Montreal', path: '/locations/americas/canada/quebec/montreal', divisionOrCountry: 'Quebec' },
                ],
              },
            ],
          },

          // British Columbia
          {
            id: 'british-columbia',
            name: 'British Columbia',
            slug: 'british-columbia',
            path: '/locations/americas/canada/british-columbia',
            type: 'Province',
            countryId: 'canada',
            countryName: 'Canada',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across British Columbia',
            intro:
              'Serving Vancouver, Victoria, and Pacific Northwest Canadian businesses with sleek web design, local search presence, and cloud IT support.',
            heroImage: 'https://images.unsplash.com/photo-1559511260-66a65e09b2ee?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in British Columbia | BOTLYTICES',
            metaDescription:
              'Web development, IT solutions, and local search optimization for Vancouver and Victoria businesses.',
            faqs: [
              {
                question: 'How do you coordinate with British Columbia clients on Pacific Time?',
                answer:
                  'Our schedule aligns with Pacific Time for meetings, sprint milestones, and real-time support.',
              },
            ],
            cities: [
              {
                id: 'vancouver',
                name: 'Vancouver',
                slug: 'vancouver',
                path: '/locations/americas/canada/british-columbia/vancouver',
                divisionId: 'british-columbia',
                divisionName: 'British Columbia',
                countryId: 'canada',
                countryName: 'Canada',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & Digital Solutions in Vancouver',
                heroSupportingCopy:
                  'High-performance web applications, IT cloud management, and local search dominance for Vancouver businesses.',
                intro:
                  'Vancouver is an international gateway known for design consciousness and technology. Botlytices delivers modern, fast web platforms and AI automation tailored to local enterprises.',
                businessContext: 'Supporting businesses in Downtown Vancouver, Yaletown, Gastown, and Mount Pleasant.',
                heroImage: 'https://images.unsplash.com/photo-1559511260-66a65e09b2ee?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Vancouver, BC | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, local SEO, and AI automation for Vancouver companies.',
                onSiteAvailable: false,
                timezone: 'America/Vancouver (PST/PDT)',
                confirmedServices: getStandardServices('Vancouver'),
                howWeWork: getStandardHowWeWork('Vancouver'),
                faqs: [
                  {
                    question: 'Can you help our Vancouver company improve Core Web Vitals scores?',
                    answer:
                      'Yes. We optimize assets, streamline code, and leverage edge caching to achieve 95+ Google PageSpeed scores.',
                  },
                ],
                nearbyCities: [
                  { name: 'Victoria', path: '/locations/americas/canada/british-columbia/victoria', divisionOrCountry: 'British Columbia' },
                  { name: 'Seattle', path: '/locations/americas/united-states/washington/seattle', divisionOrCountry: 'Washington, USA' },
                ],
              },
              {
                id: 'victoria',
                name: 'Victoria',
                slug: 'victoria',
                path: '/locations/americas/canada/british-columbia/victoria',
                divisionId: 'british-columbia',
                divisionName: 'British Columbia',
                countryId: 'canada',
                countryName: 'Canada',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & IT Support in Victoria',
                heroSupportingCopy:
                  'Clean digital design, local presence, and IT support for Vancouver Island enterprises.',
                intro:
                  'We assist Victoria businesses and professional studios with reliable web platforms and search optimization.',
                businessContext: 'Serving commercial, government advisory, and hospitality firms in Victoria, BC.',
                heroImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Victoria, BC | BOTLYTICES',
                metaDescription:
                  'Web development and local search optimization for Victoria and Vancouver Island businesses.',
                onSiteAvailable: false,
                timezone: 'America/Vancouver (PST/PDT)',
                confirmedServices: getStandardServices('Victoria'),
                howWeWork: getStandardHowWeWork('Victoria'),
                faqs: [
                  {
                    question: 'Do you offer monthly maintenance plans for Victoria businesses?',
                    answer:
                      'Yes. We manage backups, security monitoring, and regular content adjustments.',
                  },
                ],
                nearbyCities: [
                  { name: 'Vancouver', path: '/locations/americas/canada/british-columbia/vancouver', divisionOrCountry: 'British Columbia' },
                ],
              },
            ],
          },

          // Quebec
          {
            id: 'quebec',
            name: 'Quebec',
            slug: 'quebec',
            path: '/locations/americas/canada/quebec',
            type: 'Province',
            countryId: 'canada',
            countryName: 'Canada',
            regionId: 'americas',
            regionName: 'Americas',
            headline: 'Digital Services & Web Engineering Across Quebec',
            intro:
              'Supporting Montreal and Quebec businesses with high-performance web applications, local presence, and automated operations.',
            heroImage: 'https://images.unsplash.com/photo-1519178173426-b3337f7a75c1?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in Quebec, Canada | BOTLYTICES',
            metaDescription:
              'Custom web design, IT support, and local SEO for Quebec enterprises in Montreal.',
            faqs: [
              {
                question: 'Can you build bilingual French and English websites compliant with Bill 96?',
                answer:
                  'Yes. We design and build robust bilingual websites that fulfill Quebec French-language standards and provide flawless user experiences in both languages.',
              },
            ],
            cities: [
              {
                id: 'montreal',
                name: 'Montreal',
                slug: 'montreal',
                path: '/locations/americas/canada/quebec/montreal',
                divisionId: 'quebec',
                divisionName: 'Quebec',
                countryId: 'canada',
                countryName: 'Canada',
                regionId: 'americas',
                regionName: 'Americas',
                heroHeadline: 'Web Development & Digital Solutions in Montreal',
                heroSupportingCopy:
                  'Creative web engineering, IT support, and automated customer workflows for Montreal businesses.',
                intro:
                  'Montreal is renowned for creativity, AI research, and bilingual commerce. Botlytices creates responsive digital platforms and automated client intake workflows tailored to this dynamic market.',
                businessContext: 'Serving commercial firms in Old Montreal, Downtown, Mile End, and the West Island.',
                heroImage: 'https://images.unsplash.com/photo-1519178173426-b3337f7a75c1?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Montreal, QC | BOTLYTICES',
                metaDescription:
                  'Bilingual web development, IT support, and local SEO for Montreal businesses.',
                onSiteAvailable: false,
                timezone: 'America/Toronto (EST/EDT)',
                confirmedServices: getStandardServices('Montreal'),
                howWeWork: getStandardHowWeWork('Montreal'),
                faqs: [
                  {
                    question: 'How do you handle bilingual content and SEO for Montreal?',
                    answer:
                      'We implement hreflang tags, localized metadata, and dual-language sitemaps for both French and English audiences.',
                  },
                ],
                nearbyCities: [
                  { name: 'Ottawa', path: '/locations/americas/canada/ontario/ottawa', divisionOrCountry: 'Ontario' },
                  { name: 'Toronto', path: '/locations/americas/canada/ontario/toronto', divisionOrCountry: 'Ontario' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 2. EUROPE
  {
    id: 'europe',
    name: 'Europe',
    slug: 'europe',
    path: '/locations/europe',
    heroHeadline: 'Digital Technology & Local Presence Across the United Kingdom & Europe',
    heroDescription:
      'Providing custom web development, IT network systems, verified local business search presence, and AI automation across the UK, Ireland, Italy, Germany, France, Spain, and the Netherlands.',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
    metaTitle: 'Digital Services Across the United Kingdom & Europe | BOTLYTICES',
    metaDescription:
      'Explore Botlytices digital services across the UK and Europe. Custom web development, IT support, local SEO, and AI automation.',
    overview:
      'Europe represents Botlytices core operating network. In London and the United Kingdom, we provide hybrid delivery combining digital engineering with confirmed on-site IT, physical networking, and commercial CCTV installation. Across mainland Europe, our remote-first engineering model delivers precision web platforms and localized search presence.',
    faqs: [
      {
        question: 'In which European locations do you provide on-site services?',
        answer:
          'On-site physical IT support, commercial CCTV installations, and network cabling are currently confirmed and available across Greater London and surrounding English metropolitan hubs. Across mainland European countries, services are delivered through our high-touch remote engineering model.',
      },
      {
        question: 'Are your digital services compliant with European GDPR regulations?',
        answer:
          'Yes. All web applications, forms, cookie consent systems, and data pipelines are built to comply strictly with the General Data Protection Regulation (GDPR) and UK Data Protection Act.',
      },
      {
        question: 'Can you build multilingual European websites?',
        answer:
          'Yes. We build modern internationalized websites with automated currency switching, language toggles, and localized hreflang tags for European target audiences.',
      },
    ],
    countries: [
      // UNITED KINGDOM
      {
        id: 'united-kingdom',
        name: 'United Kingdom',
        slug: 'united-kingdom',
        path: '/locations/europe/united-kingdom',
        regionId: 'europe',
        regionName: 'Europe',
        code: 'GB',
        headline: 'Web Development, IT Support & Digital Solutions in the United Kingdom',
        intro:
          'Our primary operating hub. Delivering full-spectrum digital services across England and Scotland, including custom web development, local Google presence, and physical CCTV/IT installations in London.',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & IT Support in the United Kingdom | BOTLYTICES',
        metaDescription:
          'Comprehensive digital services in the UK: custom websites, IT infrastructure, local Google Maps ranking, and commercial CCTV in London.',
        deliveryModel: 'hybrid',
        deliveryNote:
          'Hybrid delivery: On-site commercial CCTV installation and hardware support available in Greater London; remote-first engineering across England and Scotland.',
        faqs: [
          {
            question: 'Can Botlytices install commercial CCTV and network hardware in the UK?',
            answer:
              'Yes. In London and surrounding areas, our certified field technicians install commercial CCTV cameras, structured Cat6 cabling, access control systems, and network racks.',
          },
          {
            question: 'How do you help UK small businesses get found locally?',
            answer:
              'We optimize your Google Business Profile, register with key UK directories (Yell, Scoot, FreeIndex), build schema markup, and implement targeted local search campaigns.',
          },
        ],
        divisions: [
          // England
          {
            id: 'england',
            name: 'England',
            slug: 'england',
            path: '/locations/europe/united-kingdom/england',
            type: 'Country / Administrative Division',
            countryId: 'united-kingdom',
            countryName: 'United Kingdom',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services & Web Engineering Across England',
            intro:
              'Covering London, Birmingham, Manchester, Leeds, and Bristol with enterprise web development, IT management, and digital presence.',
            heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in England | BOTLYTICES',
            metaDescription:
              'Serving English businesses in London, Birmingham, Manchester, Leeds, and Bristol with custom websites and IT support.',
            faqs: [
              {
                question: 'Do you offer emergency IT support in England?',
                answer:
                  'We provide fast remote troubleshooting across England and scheduled on-site support visits in London.',
              },
            ],
            cities: [
              {
                id: 'london',
                name: 'London',
                slug: 'london',
                path: '/locations/europe/united-kingdom/england/london',
                divisionId: 'england',
                divisionName: 'England',
                countryId: 'united-kingdom',
                countryName: 'United Kingdom',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in London',
                heroSupportingCopy:
                  'Practical digital services to help businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'London is a premier international capital where digital presentation and technological resilience make all the difference. Botlytices provides London companies with custom web development, local Google Maps ranking, AI automation, and confirmed on-site IT support and commercial CCTV installation.',
                businessContext:
                  'Serving clients across the City of London, Canary Wharf, Westminster, Mayfair, Shoreditch, and Greater London boroughs.',
                heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development, IT Support & CCTV in London | BOTLYTICES',
                metaDescription:
                  'London digital agency providing custom websites, IT network support, local Google Maps optimization, and commercial CCTV installation.',
                onSiteAvailable: true,
                onSiteDetails:
                  'Confirmed on-site coverage across Greater London for CCTV installation, network cabling, and hardware setup.',
                timezone: 'Europe/London (GMT/BST)',
                confirmedServices: getStandardServices('London', true),
                howWeWork: getStandardHowWeWork('London', true),
                faqs: [
                  {
                    question: 'Can you install CCTV cameras at our London commercial premises?',
                    answer:
                      'Yes. We install high-definition 4K IP security cameras, NVR recording units, and mobile phone remote viewing for London offices, retail stores, and warehouses.',
                  },
                  {
                    question: 'Can you help our London business rank on Google Maps for local queries?',
                    answer:
                      'Yes. We optimize your Google Business Profile, build localized landing pages, manage local citations, and help you gain reviews from London clients.',
                  },
                  {
                    question: 'What is your typical turnaround time for a London business website?',
                    answer:
                      'Most custom business websites are designed, developed, and deployed within 2 to 4 weeks with full SEO readiness.',
                  },
                ],
                nearbyCities: [
                  { name: 'Birmingham', path: '/locations/europe/united-kingdom/england/birmingham', divisionOrCountry: 'England' },
                  { name: 'Manchester', path: '/locations/europe/united-kingdom/england/manchester', divisionOrCountry: 'England' },
                  { name: 'Bristol', path: '/locations/europe/united-kingdom/england/bristol', divisionOrCountry: 'England' },
                ],
              },
              {
                id: 'birmingham',
                name: 'Birmingham',
                slug: 'birmingham',
                path: '/locations/europe/united-kingdom/england/birmingham',
                divisionId: 'england',
                divisionName: 'England',
                countryId: 'united-kingdom',
                countryName: 'United Kingdom',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Support in Birmingham',
                heroSupportingCopy:
                  'Helping West Midlands enterprises build authoritative digital presences and streamline operational workflows.',
                intro:
                  'As the UK’s second city and a bustling commercial center, Birmingham businesses require reliable, modern technology partners. Botlytices delivers custom websites, local Google Maps ranking, and remote IT care.',
                businessContext: 'Serving enterprises in Birmingham City Centre, Colmore Row, Digbeth, and Solihull.',
                heroImage: 'https://images.unsplash.com/photo-1542314831-c6a4d27f8842?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Birmingham | BOTLYTICES',
                metaDescription:
                  'Birmingham web development, IT support, local SEO, and AI automation for West Midlands businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/London (GMT/BST)',
                confirmedServices: getStandardServices('Birmingham'),
                howWeWork: getStandardHowWeWork('Birmingham'),
                faqs: [
                  {
                    question: 'How do you support Birmingham businesses?',
                    answer:
                      'We deliver web engineering and IT management through scheduled video consultations and rapid turnaround sprints.',
                  },
                ],
                nearbyCities: [
                  { name: 'London', path: '/locations/europe/united-kingdom/england/london', divisionOrCountry: 'England' },
                  { name: 'Manchester', path: '/locations/europe/united-kingdom/england/manchester', divisionOrCountry: 'England' },
                ],
              },
              {
                id: 'manchester',
                name: 'Manchester',
                slug: 'manchester',
                path: '/locations/europe/united-kingdom/england/manchester',
                divisionId: 'england',
                divisionName: 'England',
                countryId: 'united-kingdom',
                countryName: 'United Kingdom',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Solutions & AI in Manchester',
                heroSupportingCopy:
                  'Dynamic web platforms, local search authority, and AI workflows for Manchester businesses.',
                intro:
                  'Manchester is the powerhouse of the Northern digital economy. We provide Manchester commercial firms, media agencies, and service providers with high-performance web engineering and local SEO.',
                businessContext: 'Supporting businesses in Manchester City Centre, MediaCityUK, Spinningfields, and Deansgate.',
                heroImage: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Manchester | BOTLYTICES',
                metaDescription:
                  'Modern web development, IT support, and local search optimization for Manchester companies.',
                onSiteAvailable: false,
                timezone: 'Europe/London (GMT/BST)',
                confirmedServices: getStandardServices('Manchester'),
                howWeWork: getStandardHowWeWork('Manchester'),
                faqs: [
                  {
                    question: 'Can you help our Manchester company rank for Greater Manchester local searches?',
                    answer:
                      'Yes. We optimize your local presence across Manchester, Salford, Stockport, and surrounding boroughs.',
                  },
                ],
                nearbyCities: [
                  { name: 'Leeds', path: '/locations/europe/united-kingdom/england/leeds', divisionOrCountry: 'England' },
                  { name: 'Birmingham', path: '/locations/europe/united-kingdom/england/birmingham', divisionOrCountry: 'England' },
                  { name: 'London', path: '/locations/europe/united-kingdom/england/london', divisionOrCountry: 'England' },
                ],
              },
              {
                id: 'leeds',
                name: 'Leeds',
                slug: 'leeds',
                path: '/locations/europe/united-kingdom/england/leeds',
                divisionId: 'england',
                divisionName: 'England',
                countryId: 'united-kingdom',
                countryName: 'United Kingdom',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Support in Leeds',
                heroSupportingCopy:
                  'Tailored digital platforms and IT network solutions for Yorkshire commercial enterprises.',
                intro:
                  'Leeds is a major UK center for legal, financial, and digital services. We engineer clean web portals and implement local search optimization to keep your firm competitive.',
                businessContext: 'Serving businesses in Leeds City Centre, Wellington Place, and across West Yorkshire.',
                heroImage: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Leeds | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local search visibility for Leeds and Yorkshire businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/London (GMT/BST)',
                confirmedServices: getStandardServices('Leeds'),
                howWeWork: getStandardHowWeWork('Leeds'),
                faqs: [
                  {
                    question: 'Do you help Leeds professional firms with Microsoft 365 migrations?',
                    answer:
                      'Yes. We handle seamless transitions to Microsoft 365, configure security policies, and train staff.',
                  },
                ],
                nearbyCities: [
                  { name: 'Manchester', path: '/locations/europe/united-kingdom/england/manchester', divisionOrCountry: 'England' },
                  { name: 'Edinburgh', path: '/locations/europe/united-kingdom/scotland/edinburgh', divisionOrCountry: 'Scotland' },
                ],
              },
              {
                id: 'bristol',
                name: 'Bristol',
                slug: 'bristol',
                path: '/locations/europe/united-kingdom/england/bristol',
                divisionId: 'england',
                divisionName: 'England',
                countryId: 'united-kingdom',
                countryName: 'United Kingdom',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & Digital Presence in Bristol',
                heroSupportingCopy:
                  'Creative technology, robust web design, and local search dominance in the South West.',
                intro:
                  'Bristol combines creative culture with technical innovation. We deliver fast, engaging web applications and local Google Maps optimization for Bristol enterprises.',
                businessContext: 'Serving firms in Bristol Harbourside, Clifton, Temple Quarter, and surrounding areas.',
                heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Bristol | BOTLYTICES',
                metaDescription:
                  'Web development, IT solutions, and local SEO for Bristol and South West companies.',
                onSiteAvailable: false,
                timezone: 'Europe/London (GMT/BST)',
                confirmedServices: getStandardServices('Bristol'),
                howWeWork: getStandardHowWeWork('Bristol'),
                faqs: [
                  {
                    question: 'Can you optimize our website for speed and mobile performance?',
                    answer:
                      'Yes. We specialize in sub-second load times and mobile-responsive layouts tailored to modern users.',
                  },
                ],
                nearbyCities: [
                  { name: 'London', path: '/locations/europe/united-kingdom/england/london', divisionOrCountry: 'England' },
                  { name: 'Birmingham', path: '/locations/europe/united-kingdom/england/birmingham', divisionOrCountry: 'England' },
                ],
              },
            ],
          },

          // Scotland
          {
            id: 'scotland',
            name: 'Scotland',
            slug: 'scotland',
            path: '/locations/europe/united-kingdom/scotland',
            type: 'Country / Administrative Division',
            countryId: 'united-kingdom',
            countryName: 'United Kingdom',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services & Web Engineering Across Scotland',
            intro:
              'Supporting Edinburgh and Glasgow enterprises with high-performance web development, local search authority, and IT systems guidance.',
            heroImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development & IT Support in Scotland | BOTLYTICES',
            metaDescription:
              'Serving Scottish businesses in Edinburgh and Glasgow with custom web development and IT solutions.',
            faqs: [
              {
                question: 'How do you coordinate with Scottish clients?',
                answer:
                  'We provide direct communication channels on UK time, with screen-shares and staging environments.',
              },
            ],
            cities: [
              {
                id: 'edinburgh',
                name: 'Edinburgh',
                slug: 'edinburgh',
                path: '/locations/europe/united-kingdom/scotland/edinburgh',
                divisionId: 'scotland',
                divisionName: 'Scotland',
                countryId: 'united-kingdom',
                countryName: 'United Kingdom',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Support in Edinburgh',
                heroSupportingCopy:
                  'Authoritative digital platforms and technical guidance for Scottish capital enterprises.',
                intro:
                  'Edinburgh is an international financial and cultural capital. We build fast, elegant web platforms and establish strong local search positioning for Edinburgh firms.',
                businessContext: 'Serving commercial firms in Edinburgh City Centre, George Street, Leith, and Edinburgh Park.',
                heroImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Edinburgh | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local SEO for businesses in Edinburgh, Scotland.',
                onSiteAvailable: false,
                timezone: 'Europe/London (GMT/BST)',
                confirmedServices: getStandardServices('Edinburgh'),
                howWeWork: getStandardHowWeWork('Edinburgh'),
                faqs: [
                  {
                    question: 'Can you help our Edinburgh business rank locally?',
                    answer:
                      'Yes. We optimize your Google Business Profile and local citations to capture Edinburgh searchers.',
                  },
                ],
                nearbyCities: [
                  { name: 'Glasgow', path: '/locations/europe/united-kingdom/scotland/glasgow', divisionOrCountry: 'Scotland' },
                  { name: 'Leeds', path: '/locations/europe/united-kingdom/england/leeds', divisionOrCountry: 'England' },
                ],
              },
              {
                id: 'glasgow',
                name: 'Glasgow',
                slug: 'glasgow',
                path: '/locations/europe/united-kingdom/scotland/glasgow',
                divisionId: 'scotland',
                divisionName: 'Scotland',
                countryId: 'united-kingdom',
                countryName: 'United Kingdom',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & Digital Solutions in Glasgow',
                heroSupportingCopy:
                  'Practical web platforms, IT support, and local SEO for Glasgow commercial businesses.',
                intro:
                  'Glasgow is Scotland’s commercial heart. Botlytices assists Glasgow businesses with high-converting websites and cloud IT support.',
                businessContext: 'Supporting businesses in Glasgow City Centre, Merchant City, and West End.',
                heroImage: 'https://images.unsplash.com/photo-1571492982847-a89b095904ca?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Glasgow | BOTLYTICES',
                metaDescription:
                  'Glasgow web development, IT systems support, and local search optimization by Botlytices.',
                onSiteAvailable: false,
                timezone: 'Europe/London (GMT/BST)',
                confirmedServices: getStandardServices('Glasgow'),
                howWeWork: getStandardHowWeWork('Glasgow'),
                faqs: [
                  {
                    question: 'Do you build e-commerce solutions for Glasgow retailers?',
                    answer:
                      'Yes. We build secure, high-conversion e-commerce stores with automated inventory and payment processing.',
                  },
                ],
                nearbyCities: [
                  { name: 'Edinburgh', path: '/locations/europe/united-kingdom/scotland/edinburgh', divisionOrCountry: 'Scotland' },
                ],
              },
            ],
          },
        ],
      },

      // IRELAND
      {
        id: 'ireland',
        name: 'Ireland',
        slug: 'ireland',
        path: '/locations/europe/ireland',
        regionId: 'europe',
        regionName: 'Europe',
        code: 'IE',
        headline: 'Web Development & IT Solutions in Ireland',
        intro:
          'Supporting Dublin and Cork businesses with modern web engineering, GDPR compliance, and local search authority.',
        heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in Ireland | BOTLYTICES',
        metaDescription:
          'Web development, IT support, and local SEO for Irish enterprises in Dublin and Cork.',
        deliveryModel: 'remote-first',
        deliveryNote: 'Remote-first engineering with Euro billing and EU GDPR compliance.',
        faqs: [
          {
            question: 'How do you coordinate with Irish clients?',
            answer:
              'Our UK & Ireland delivery teams operate on the exact same Irish Standard Time (IST/GMT), ensuring seamless real-time contact.',
          },
        ],
        divisions: [
          // Leinster
          {
            id: 'leinster',
            name: 'Leinster',
            slug: 'leinster',
            path: '/locations/europe/ireland/leinster',
            type: 'Province',
            countryId: 'ireland',
            countryName: 'Ireland',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across Leinster',
            intro: 'Serving Dublin and Eastern Ireland with custom web applications and IT support.',
            heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Leinster & Dublin | BOTLYTICES',
            metaDescription: 'Web design, IT support, and local SEO across Leinster and Dublin.',
            faqs: [
              {
                question: 'Can you help Dublin tech firms with web design?',
                answer: 'Yes. We build responsive, modern React/TypeScript platforms for tech and commercial firms.',
              },
            ],
            cities: [
              {
                id: 'dublin',
                name: 'Dublin',
                slug: 'dublin',
                path: '/locations/europe/ireland/leinster/dublin',
                divisionId: 'leinster',
                divisionName: 'Leinster',
                countryId: 'ireland',
                countryName: 'Ireland',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Dublin',
                heroSupportingCopy:
                  'Practical digital services to help Dublin businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Dublin is Europe’s tech capital and home to international commerce. Botlytices provides Dublin businesses with custom web platforms, Google Maps rankings, and AI-driven automation.',
                businessContext: 'Supporting companies in Silicon Docks, Grand Canal Dock, IFSC, and South Dublin.',
                heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Dublin, Ireland | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, and local SEO for Dublin businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Dublin (IST/GMT)',
                confirmedServices: getStandardServices('Dublin'),
                howWeWork: getStandardHowWeWork('Dublin'),
                faqs: [
                  {
                    question: 'Can you help our Dublin business rank in Google Local 3-Pack?',
                    answer:
                      'Yes. We optimize your Google Business Profile and local citations across the Greater Dublin Area.',
                  },
                ],
                nearbyCities: [
                  { name: 'Cork', path: '/locations/europe/ireland/munster/cork', divisionOrCountry: 'Munster, Ireland' },
                  { name: 'London', path: '/locations/europe/united-kingdom/england/london', divisionOrCountry: 'United Kingdom' },
                ],
              },
            ],
          },

          // Munster
          {
            id: 'munster',
            name: 'Munster',
            slug: 'munster',
            path: '/locations/europe/ireland/munster',
            type: 'Province',
            countryId: 'ireland',
            countryName: 'Ireland',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across Munster',
            intro: 'Serving Cork and South-West Ireland with modern web design and IT systems.',
            heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Munster & Cork | BOTLYTICES',
            metaDescription: 'Custom web development and IT solutions in Cork and Munster.',
            faqs: [
              {
                question: 'Do you support businesses across Munster?',
                answer: 'Yes. We deliver remote web engineering and IT advisory to companies throughout Cork and Munster.',
              },
            ],
            cities: [
              {
                id: 'cork',
                name: 'Cork',
                slug: 'cork',
                path: '/locations/europe/ireland/munster/cork',
                divisionId: 'munster',
                divisionName: 'Munster',
                countryId: 'ireland',
                countryName: 'Ireland',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Support in Cork',
                heroSupportingCopy:
                  'High-performance web applications and digital presence solutions for Cork businesses.',
                intro:
                  'Cork is a booming hub for pharmaceuticals, tech, and enterprise. We assist Cork companies with modern websites and local search rankings.',
                businessContext: 'Serving commercial firms in Cork City Centre and Mahon Point.',
                heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Cork, Ireland | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local SEO for Cork enterprises.',
                onSiteAvailable: false,
                timezone: 'Europe/Dublin (IST/GMT)',
                confirmedServices: getStandardServices('Cork'),
                howWeWork: getStandardHowWeWork('Cork'),
                faqs: [
                  {
                    question: 'Can you help our Cork company redesign our website?',
                    answer:
                      'Yes. We deliver full redesigns with enhanced mobile responsiveness and speed.',
                  },
                ],
                nearbyCities: [
                  { name: 'Dublin', path: '/locations/europe/ireland/leinster/dublin', divisionOrCountry: 'Leinster, Ireland' },
                ],
              },
            ],
          },
        ],
      },

      // ITALY
      {
        id: 'italy',
        name: 'Italy',
        slug: 'italy',
        path: '/locations/europe/italy',
        regionId: 'europe',
        regionName: 'Europe',
        code: 'IT',
        headline: 'Web Development & Digital Solutions in Italy',
        intro:
          'Delivering custom digital platforms, multilingual web design, and local search visibility for Italian enterprises in Venice, Verona, Rome, and Milan.',
        heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Web Development & Digital Services in Italy | BOTLYTICES',
        metaDescription:
          'Botlytices delivers custom web design, IT support, and local SEO for Italian businesses in Venice, Rome, and Milan.',
        deliveryModel: 'remote-first',
        deliveryNote: 'Remote-first engineering with European GDPR compliance and bilingual support.',
        faqs: [
          {
            question: 'Can you build bilingual Italian/English websites for international tourism and luxury brands?',
            answer:
              'Yes. We design high-aesthetic, bilingual web platforms optimized for international visitors and local Italian searchers.',
          },
        ],
        divisions: [
          // Veneto
          {
            id: 'veneto',
            name: 'Veneto',
            slug: 'veneto',
            path: '/locations/europe/italy/veneto',
            type: 'Region',
            countryId: 'italy',
            countryName: 'Italy',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across the Veneto Region',
            intro: 'Serving Venice and Verona with bespoke web platforms and international digital presence.',
            heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Veneto, Italy | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and digital presence in Veneto, Venice, and Verona.',
            faqs: [
              {
                question: 'Do you support hospitality and artisan businesses in Veneto?',
                answer: 'Yes. We build elegant websites with automated booking and multi-language support.',
              },
            ],
            cities: [
              {
                id: 'venice',
                name: 'Venice',
                slug: 'venice',
                path: '/locations/europe/italy/veneto/venice',
                divisionId: 'veneto',
                divisionName: 'Veneto',
                countryId: 'italy',
                countryName: 'Italy',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & Digital Presence in Venice',
                heroSupportingCopy:
                  'Bespoke digital platforms, multilingual websites, and local search visibility for Venetian businesses.',
                intro:
                  'Venice requires digital experiences as captivating as the city itself. We help Venetian boutique hotels, architectural firms, and commercial exporters build captivating web platforms and capture international demand.',
                businessContext: 'Supporting businesses in Venice historic center, Mestre, and the Venetian lagoon.',
                heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & Digital Presence in Venice, Italy | BOTLYTICES',
                metaDescription:
                  'Custom web design, multilingual SEO, and digital solutions for Venice businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Rome (CET/CEST)',
                confirmedServices: getStandardServices('Venice'),
                howWeWork: getStandardHowWeWork('Venice'),
                faqs: [
                  {
                    question: 'Can you build a multi-language booking website for Venice tourism?',
                    answer:
                      'Yes. We build fast, high-converting booking portals supporting English, Italian, German, and French.',
                  },
                ],
                nearbyCities: [
                  { name: 'Verona', path: '/locations/europe/italy/veneto/verona', divisionOrCountry: 'Veneto' },
                  { name: 'Milan', path: '/locations/europe/italy/lombardy/milan', divisionOrCountry: 'Lombardy' },
                ],
              },
              {
                id: 'verona',
                name: 'Verona',
                slug: 'verona',
                path: '/locations/europe/italy/veneto/verona',
                divisionId: 'veneto',
                divisionName: 'Veneto',
                countryId: 'italy',
                countryName: 'Italy',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Solutions in Verona',
                heroSupportingCopy:
                  'Modern web platforms and local search optimization for Verona commercial firms.',
                intro:
                  'We support Verona enterprises with professional web platforms and localized search presence.',
                businessContext: 'Serving commercial and industrial businesses in Verona and surrounding Veneto.',
                heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Verona, Italy | BOTLYTICES',
                metaDescription:
                  'Custom web design and local SEO for Verona companies.',
                onSiteAvailable: false,
                timezone: 'Europe/Rome (CET/CEST)',
                confirmedServices: getStandardServices('Verona'),
                howWeWork: getStandardHowWeWork('Verona'),
                faqs: [
                  {
                    question: 'How do you handle Italian language SEO in Verona?',
                    answer:
                      'We research local Italian search queries and implement schema markup tailored to the Veneto region.',
                  },
                ],
                nearbyCities: [
                  { name: 'Venice', path: '/locations/europe/italy/veneto/venice', divisionOrCountry: 'Veneto' },
                  { name: 'Milan', path: '/locations/europe/italy/lombardy/milan', divisionOrCountry: 'Lombardy' },
                ],
              },
            ],
          },

          // Lazio
          {
            id: 'lazio',
            name: 'Lazio',
            slug: 'lazio',
            path: '/locations/europe/italy/lazio',
            type: 'Region',
            countryId: 'italy',
            countryName: 'Italy',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across Lazio & Rome',
            intro: 'Serving Rome and the Lazio region with enterprise-grade web development and digital visibility.',
            heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Lazio & Rome | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT solutions in Rome and Lazio.',
            faqs: [
              {
                question: 'Can you help Rome businesses attract international clients?',
                answer: 'Yes. We optimize your website for global search engines and local Google 3-Pack.',
              },
            ],
            cities: [
              {
                id: 'rome',
                name: 'Rome',
                slug: 'rome',
                path: '/locations/europe/italy/lazio/rome',
                divisionId: 'lazio',
                divisionName: 'Lazio',
                countryId: 'italy',
                countryName: 'Italy',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Rome',
                heroSupportingCopy:
                  'Practical digital services to help Roman businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Rome combines millennia of heritage with a forward-looking commercial sector. Botlytices delivers responsive web design, local search authority, and AI automation for Roman commercial firms.',
                businessContext: 'Supporting businesses in Centro Storico, EUR business district, Prati, and Greater Rome.',
                heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Rome, Italy | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT solutions, and local search optimization for businesses in Rome.',
                onSiteAvailable: false,
                timezone: 'Europe/Rome (CET/CEST)',
                confirmedServices: getStandardServices('Rome'),
                howWeWork: getStandardHowWeWork('Rome'),
                faqs: [
                  {
                    question: 'Can you optimize our Rome business for Google Maps?',
                    answer:
                      'Yes. We optimize your Google Business Profile and local directory citations across Rome.',
                  },
                ],
                nearbyCities: [
                  { name: 'Milan', path: '/locations/europe/italy/lombardy/milan', divisionOrCountry: 'Lombardy' },
                  { name: 'Venice', path: '/locations/europe/italy/veneto/venice', divisionOrCountry: 'Veneto' },
                ],
              },
            ],
          },

          // Lombardy
          {
            id: 'lombardy',
            name: 'Lombardy',
            slug: 'lombardy',
            path: '/locations/europe/italy/lombardy',
            type: 'Region',
            countryId: 'italy',
            countryName: 'Italy',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across Lombardy & Milan',
            intro: 'Serving Milan and Lombardy with high-end web design, IT cloud infrastructure, and AI automation.',
            heroImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Lombardy & Milan | BOTLYTICES',
            metaDescription: 'Web design, IT support, and local SEO in Milan and Lombardy.',
            faqs: [
              {
                question: 'Do you support Milan fashion and design studios?',
                answer: 'Yes. We engineer editorial, high-aesthetic web platforms with sub-second performance.',
              },
            ],
            cities: [
              {
                id: 'milan',
                name: 'Milan',
                slug: 'milan',
                path: '/locations/europe/italy/lombardy/milan',
                divisionId: 'lombardy',
                divisionName: 'Lombardy',
                countryId: 'italy',
                countryName: 'Italy',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & Digital Solutions in Milan',
                heroSupportingCopy:
                  'Sophisticated web engineering, cloud IT solutions, and automated workflows in Italy’s commercial capital.',
                intro:
                  'Milan is Italy’s financial, fashion, and industrial powerhouse. We engineer precision web platforms and AI automation pipelines that match Milan’s standards.',
                businessContext: 'Supporting firms in Porta Nuova, CityLife, Quadrilatero della Moda, and Greater Milan.',
                heroImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Milan, Italy | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, and local SEO for Milan enterprises.',
                onSiteAvailable: false,
                timezone: 'Europe/Rome (CET/CEST)',
                confirmedServices: getStandardServices('Milan'),
                howWeWork: getStandardHowWeWork('Milan'),
                faqs: [
                  {
                    question: 'Can you handle complex e-commerce for Milan fashion brands?',
                    answer:
                      'Yes. We build high-conversion, multi-currency stores with flawless mobile presentation.',
                  },
                ],
                nearbyCities: [
                  { name: 'Rome', path: '/locations/europe/italy/lazio/rome', divisionOrCountry: 'Lazio' },
                  { name: 'Venice', path: '/locations/europe/italy/veneto/venice', divisionOrCountry: 'Veneto' },
                ],
              },
            ],
          },
        ],
      },

      // GERMANY
      {
        id: 'germany',
        name: 'Germany',
        slug: 'germany',
        path: '/locations/europe/germany',
        regionId: 'europe',
        regionName: 'Europe',
        code: 'DE',
        headline: 'Web Development & IT Solutions in Germany',
        intro:
          'Precision web development, IT systems support, and local search presence for German enterprises in Berlin, Munich, and Frankfurt.',
        heroImage: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in Germany | BOTLYTICES',
        metaDescription:
          'Engineering-grade web development, IT support, and local SEO across Germany.',
        deliveryModel: 'remote-first',
        deliveryNote: 'Remote-first engineering adhering strictly to German DSGVO/GDPR requirements.',
        faqs: [
          {
            question: 'How do you ensure German DSGVO (GDPR) compliance?',
            answer:
              'We configure cookie consent banners, self-hosted font assets, and secure data storage without third-party tracking violations.',
          },
        ],
        divisions: [
          // Berlin
          {
            id: 'berlin',
            name: 'Berlin',
            slug: 'berlin',
            path: '/locations/europe/germany/berlin',
            type: 'State',
            countryId: 'germany',
            countryName: 'Germany',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services in Berlin',
            intro: 'Serving Berlin startups and commercial firms with modern web applications.',
            heroImage: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Berlin, Germany | BOTLYTICES',
            metaDescription: 'Web design, IT support, and local SEO in Berlin.',
            faqs: [
              {
                question: 'Do you build web apps for Berlin startups?',
                answer: 'Yes. We build responsive React and Next.js applications tailored for rapid growth.',
              },
            ],
            cities: [
              {
                id: 'berlin',
                name: 'Berlin',
                slug: 'berlin',
                path: '/locations/europe/germany/berlin/berlin',
                divisionId: 'berlin',
                divisionName: 'Berlin',
                countryId: 'germany',
                countryName: 'Germany',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Solutions & AI in Berlin',
                heroSupportingCopy:
                  'Modern web engineering, cloud IT support, and automated workflows for Berlin businesses.',
                intro:
                  'Berlin is Europe’s creative and startup hub. We build fast, secure web platforms and automated client intake pipelines for Berlin businesses.',
                businessContext: 'Serving companies in Mitte, Kreuzberg, Charlottenburg, and Prenzlauer Berg.',
                heroImage: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Berlin | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local SEO for Berlin companies.',
                onSiteAvailable: false,
                timezone: 'Europe/Berlin (CET/CEST)',
                confirmedServices: getStandardServices('Berlin'),
                howWeWork: getStandardHowWeWork('Berlin'),
                faqs: [
                  {
                    question: 'Can you help our Berlin business rank on Google Maps?',
                    answer: 'Yes. We optimize your Google Business Profile and local German directory citations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Munich', path: '/locations/europe/germany/bavaria/munich', divisionOrCountry: 'Bavaria' },
                  { name: 'Frankfurt', path: '/locations/europe/germany/hesse/frankfurt', divisionOrCountry: 'Hesse' },
                ],
              },
            ],
          },

          // Bavaria
          {
            id: 'bavaria',
            name: 'Bavaria',
            slug: 'bavaria',
            path: '/locations/europe/germany/bavaria',
            type: 'State',
            countryId: 'germany',
            countryName: 'Germany',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across Bavaria & Munich',
            intro: 'Serving Munich and Bavarian industrial and commercial leaders with enterprise web systems.',
            heroImage: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Bavaria & Munich | BOTLYTICES',
            metaDescription: 'Web design, IT support, and local SEO in Munich and Bavaria.',
            faqs: [
              {
                question: 'Do you support Munich engineering and corporate firms?',
                answer: 'Yes. We build high-reliability portals with robust data security.',
              },
            ],
            cities: [
              {
                id: 'munich',
                name: 'Munich',
                slug: 'munich',
                path: '/locations/europe/germany/bavaria/munich',
                divisionId: 'bavaria',
                divisionName: 'Bavaria',
                countryId: 'germany',
                countryName: 'Germany',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Support in Munich',
                heroSupportingCopy:
                  'Precision digital engineering and local search visibility for Bavarian enterprises.',
                intro:
                  'Munich represents German engineering excellence. Botlytices delivers robust web platforms and cloud IT support tailored to Munich standards.',
                businessContext: 'Serving commercial enterprises in Maxvorstadt, Bogenhausen, and Greater Munich.',
                heroImage: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Munich, Germany | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, and local SEO for Munich businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Berlin (CET/CEST)',
                confirmedServices: getStandardServices('Munich'),
                howWeWork: getStandardHowWeWork('Munich'),
                faqs: [
                  {
                    question: 'Can you optimize our German Core Web Vitals performance?',
                    answer: 'Yes. We deliver sub-second loading speeds and top performance metrics.',
                  },
                ],
                nearbyCities: [
                  { name: 'Frankfurt', path: '/locations/europe/germany/hesse/frankfurt', divisionOrCountry: 'Hesse' },
                  { name: 'Berlin', path: '/locations/europe/germany/berlin/berlin', divisionOrCountry: 'Berlin' },
                ],
              },
            ],
          },

          // Hesse
          {
            id: 'hesse',
            name: 'Hesse',
            slug: 'hesse',
            path: '/locations/europe/germany/hesse',
            type: 'State',
            countryId: 'germany',
            countryName: 'Germany',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across Hesse & Frankfurt',
            intro: 'Serving Frankfurt financial and commercial hubs with secure web applications.',
            heroImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Hesse & Frankfurt | BOTLYTICES',
            metaDescription: 'Web design and IT support for Frankfurt and Hesse.',
            faqs: [
              {
                question: 'Can you handle enterprise security requirements for Frankfurt clients?',
                answer: 'Yes. We follow strict OWASP security guidelines and secure authentication protocols.',
              },
            ],
            cities: [
              {
                id: 'frankfurt',
                name: 'Frankfurt',
                slug: 'frankfurt',
                path: '/locations/europe/germany/hesse/frankfurt',
                divisionId: 'hesse',
                divisionName: 'Hesse',
                countryId: 'germany',
                countryName: 'Germany',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & Digital Infrastructure in Frankfurt',
                heroSupportingCopy:
                  'Secure web architectures, cloud IT management, and automated workflows in Germany’s financial capital.',
                intro:
                  'Frankfurt is the financial heart of continental Europe. We provide Frankfurt companies with secure, fast digital platforms and local search visibility.',
                businessContext: 'Supporting financial, legal, and commercial firms in Bankenviertel and Westend.',
                heroImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Frankfurt, Germany | BOTLYTICES',
                metaDescription:
                  'Enterprise web development, IT support, and local SEO in Frankfurt.',
                onSiteAvailable: false,
                timezone: 'Europe/Berlin (CET/CEST)',
                confirmedServices: getStandardServices('Frankfurt'),
                howWeWork: getStandardHowWeWork('Frankfurt'),
                faqs: [
                  {
                    question: 'Can you integrate custom CRM APIs for our Frankfurt firm?',
                    answer: 'Yes. We build secure REST and GraphQL API integrations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Munich', path: '/locations/europe/germany/bavaria/munich', divisionOrCountry: 'Bavaria' },
                  { name: 'Berlin', path: '/locations/europe/germany/berlin/berlin', divisionOrCountry: 'Berlin' },
                ],
              },
            ],
          },
        ],
      },

      // FRANCE
      {
        id: 'france',
        name: 'France',
        slug: 'france',
        path: '/locations/europe/france',
        regionId: 'europe',
        regionName: 'Europe',
        code: 'FR',
        headline: 'Web Development & Digital Services in France',
        intro:
          'Bespoke digital platforms, French-language SEO, and IT systems support for enterprises in Paris and Lyon.',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in France | BOTLYTICES',
        metaDescription:
          'Custom web design, IT support, and local SEO for French businesses in Paris and Lyon.',
        deliveryModel: 'remote-first',
        deliveryNote: 'Remote-first engineering with European GDPR compliance and bilingual French/English support.',
        faqs: [
          {
            question: 'Can you build bilingual French and English platforms?',
            answer: 'Yes. We design high-performance bilingual websites with clean language routing.',
          },
        ],
        divisions: [
          // Île-de-France
          {
            id: 'ile-de-france',
            name: 'Île-de-France',
            slug: 'ile-de-france',
            path: '/locations/europe/france/ile-de-france',
            type: 'Region',
            countryId: 'france',
            countryName: 'France',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services in Île-de-France & Paris',
            intro: 'Serving Paris and the Île-de-France region with custom web platforms and local visibility.',
            heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Paris & Île-de-France | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Paris.',
            faqs: [
              {
                question: 'Can you help our Paris studio rank on Google.fr?',
                answer: 'Yes. We implement targeted French keyword optimization and schema markup.',
              },
            ],
            cities: [
              {
                id: 'paris',
                name: 'Paris',
                slug: 'paris',
                path: '/locations/europe/france/ile-de-france/paris',
                divisionId: 'ile-de-france',
                divisionName: 'Île-de-France',
                countryId: 'france',
                countryName: 'France',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Paris',
                heroSupportingCopy:
                  'Practical digital services to help Parisian businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Paris represents global luxury, gastronomy, and commerce. Botlytices delivers elegant, responsive web engineering and local Google Maps optimization for Parisian firms.',
                businessContext: 'Supporting businesses in La Défense, 8th arrondissement, Le Marais, and Greater Paris.',
                heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Paris, France | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, and local SEO for Paris businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Paris (CET/CEST)',
                confirmedServices: getStandardServices('Paris'),
                howWeWork: getStandardHowWeWork('Paris'),
                faqs: [
                  {
                    question: 'Can you optimize our Parisian boutique website for international visitors?',
                    answer: 'Yes. We configure multi-currency checkout, fast edge caching, and multi-language routing.',
                  },
                ],
                nearbyCities: [
                  { name: 'Lyon', path: '/locations/europe/france/auvergne-rhone-alpes/lyon', divisionOrCountry: 'Auvergne-Rhône-Alpes' },
                  { name: 'London', path: '/locations/europe/united-kingdom/england/london', divisionOrCountry: 'United Kingdom' },
                ],
              },
            ],
          },

          // Auvergne-Rhône-Alpes
          {
            id: 'auvergne-rhone-alpes',
            name: 'Auvergne-Rhône-Alpes',
            slug: 'auvergne-rhone-alpes',
            path: '/locations/europe/france/auvergne-rhone-alpes',
            type: 'Region',
            countryId: 'france',
            countryName: 'France',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services in Auvergne-Rhône-Alpes & Lyon',
            intro: 'Serving Lyon commercial and industrial enterprises with modern web systems.',
            heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Lyon & Auvergne-Rhône-Alpes | BOTLYTICES',
            metaDescription: 'Web design and IT solutions in Lyon and Auvergne-Rhône-Alpes.',
            faqs: [
              {
                question: 'Do you support Lyon commercial enterprises?',
                answer: 'Yes. We deliver remote web engineering and IT management across the region.',
              },
            ],
            cities: [
              {
                id: 'lyon',
                name: 'Lyon',
                slug: 'lyon',
                path: '/locations/europe/france/auvergne-rhone-alpes/lyon',
                divisionId: 'auvergne-rhone-alpes',
                divisionName: 'Auvergne-Rhône-Alpes',
                countryId: 'france',
                countryName: 'France',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Support in Lyon',
                heroSupportingCopy:
                  'High-performance web applications and local digital presence for Lyon businesses.',
                intro:
                  'Lyon is France’s culinary and industrial heart. We build robust web portals and local search systems for Lyon companies.',
                businessContext: 'Serving businesses in Presqu’île, Part-Dieu, and Confluence.',
                heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Lyon, France | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local SEO for Lyon companies.',
                onSiteAvailable: false,
                timezone: 'Europe/Paris (CET/CEST)',
                confirmedServices: getStandardServices('Lyon'),
                howWeWork: getStandardHowWeWork('Lyon'),
                faqs: [
                  {
                    question: 'Can you help our Lyon business rank locally on Google Maps?',
                    answer: 'Yes. We optimize your Google Business Profile and local French citations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Paris', path: '/locations/europe/france/ile-de-france/paris', divisionOrCountry: 'Île-de-France' },
                ],
              },
            ],
          },
        ],
      },

      // SPAIN
      {
        id: 'spain',
        name: 'Spain',
        slug: 'spain',
        path: '/locations/europe/spain',
        regionId: 'europe',
        regionName: 'Europe',
        code: 'ES',
        headline: 'Web Development & Digital Solutions in Spain',
        intro:
          'Supporting Spanish businesses in Madrid and Barcelona with modern web engineering, Spanish-language SEO, and cloud IT systems.',
        heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in Spain | BOTLYTICES',
        metaDescription:
          'Web development, IT support, and local SEO for Spanish businesses in Madrid and Barcelona.',
        deliveryModel: 'remote-first',
        deliveryNote: 'Remote-first engineering adhering strictly to European GDPR standards.',
        faqs: [
          {
            question: 'Can you build bilingual Spanish and English platforms for Spain?',
            answer: 'Yes. We build responsive bilingual web platforms optimized for local and international markets.',
          },
        ],
        divisions: [
          // Madrid
          {
            id: 'madrid',
            name: 'Community of Madrid',
            slug: 'madrid',
            path: '/locations/europe/spain/madrid',
            type: 'Autonomous Community',
            countryId: 'spain',
            countryName: 'Spain',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services in Madrid',
            intro: 'Serving Spain’s capital with custom web development and digital visibility.',
            heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Madrid, Spain | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Madrid.',
            faqs: [
              {
                question: 'Can you help our Madrid business rank locally on Google.es?',
                answer: 'Yes. We optimize your local Google presence across the Madrid metropolitan area.',
              },
            ],
            cities: [
              {
                id: 'madrid',
                name: 'Madrid',
                slug: 'madrid',
                path: '/locations/europe/spain/madrid/madrid',
                divisionId: 'madrid',
                divisionName: 'Community of Madrid',
                countryId: 'spain',
                countryName: 'Spain',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Madrid',
                heroSupportingCopy:
                  'Modern web platforms, local search authority, and AI workflows for Madrid commercial enterprises.',
                intro:
                  'Madrid is the political and corporate center of Spain. Botlytices delivers responsive websites, local search visibility, and AI automation to help Madrid businesses lead their markets.',
                businessContext: 'Supporting businesses in Salamanca, Chamartín, AZCA, and Greater Madrid.',
                heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Madrid, Spain | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT solutions, and local SEO for Madrid businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Madrid (CET/CEST)',
                confirmedServices: getStandardServices('Madrid'),
                howWeWork: getStandardHowWeWork('Madrid'),
                faqs: [
                  {
                    question: 'Can you optimize our Madrid firm for Google 3-Pack?',
                    answer: 'Yes. We manage your Google Business Profile and local citation signals.',
                  },
                ],
                nearbyCities: [
                  { name: 'Barcelona', path: '/locations/europe/spain/catalonia/barcelona', divisionOrCountry: 'Catalonia' },
                ],
              },
            ],
          },

          // Catalonia
          {
            id: 'catalonia',
            name: 'Catalonia',
            slug: 'catalonia',
            path: '/locations/europe/spain/catalonia',
            type: 'Autonomous Community',
            countryId: 'spain',
            countryName: 'Spain',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services Across Catalonia & Barcelona',
            intro: 'Serving Barcelona’s tech and design leaders with custom web engineering.',
            heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Catalonia & Barcelona | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Barcelona and Catalonia.',
            faqs: [
              {
                question: 'Do you support multi-language websites in Catalan, Spanish, and English?',
                answer: 'Yes. We build accessible, multilingual architectures supporting all three languages cleanly.',
              },
            ],
            cities: [
              {
                id: 'barcelona',
                name: 'Barcelona',
                slug: 'barcelona',
                path: '/locations/europe/spain/catalonia/barcelona',
                divisionId: 'catalonia',
                divisionName: 'Catalonia',
                countryId: 'spain',
                countryName: 'Spain',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & AI Solutions in Barcelona',
                heroSupportingCopy:
                  'Creative digital engineering, local search optimization, and AI automation for Barcelona companies.',
                intro:
                  'Barcelona is a world capital of architecture, innovation, and tech startups. We build fast, high-aesthetic web platforms and automated client intake workflows tailored to Barcelona enterprises.',
                businessContext: 'Supporting businesses in 22@ innovation district, Eixample, and Ciutat Vella.',
                heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Barcelona, Spain | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT solutions, and local SEO for Barcelona businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Madrid (CET/CEST)',
                confirmedServices: getStandardServices('Barcelona'),
                howWeWork: getStandardHowWeWork('Barcelona'),
                faqs: [
                  {
                    question: 'Can you build high-converting e-commerce for Barcelona brands?',
                    answer: 'Yes. We deliver sleek, responsive stores with international payment gateways.',
                  },
                ],
                nearbyCities: [
                  { name: 'Madrid', path: '/locations/europe/spain/madrid/madrid', divisionOrCountry: 'Community of Madrid' },
                ],
              },
            ],
          },
        ],
      },

      // NETHERLANDS
      {
        id: 'netherlands',
        name: 'Netherlands',
        slug: 'netherlands',
        path: '/locations/europe/netherlands',
        regionId: 'europe',
        regionName: 'Europe',
        code: 'NL',
        headline: 'Web Development & Digital Solutions in the Netherlands',
        intro:
          'Supporting Dutch enterprises across Amsterdam and Rotterdam with modern web platforms, local search presence, and cloud IT support.',
        heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in the Netherlands | BOTLYTICES',
        metaDescription:
          'Web development, IT support, and local SEO for Dutch businesses in Amsterdam and Rotterdam.',
        deliveryModel: 'remote-first',
        deliveryNote: 'Remote-first engineering adhering strictly to EU GDPR standards.',
        faqs: [
          {
            question: 'How do you coordinate with Dutch businesses?',
            answer: 'We coordinate seamlessly in Central European Time with English-speaking project delivery.',
          },
        ],
        divisions: [
          // North Holland
          {
            id: 'north-holland',
            name: 'North Holland',
            slug: 'north-holland',
            path: '/locations/europe/netherlands/north-holland',
            type: 'Province',
            countryId: 'netherlands',
            countryName: 'Netherlands',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services in North Holland & Amsterdam',
            intro: 'Serving Amsterdam and North Holland with cutting-edge web design and IT systems.',
            heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in North Holland & Amsterdam | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Amsterdam.',
            faqs: [
              {
                question: 'Can you help our Amsterdam business attract international clients?',
                answer: 'Yes. We engineer multilingual web platforms with sub-second speeds.',
              },
            ],
            cities: [
              {
                id: 'amsterdam',
                name: 'Amsterdam',
                slug: 'amsterdam',
                path: '/locations/europe/netherlands/north-holland/amsterdam',
                divisionId: 'north-holland',
                divisionName: 'North Holland',
                countryId: 'netherlands',
                countryName: 'Netherlands',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Amsterdam',
                heroSupportingCopy:
                  'Practical digital services to help Amsterdam businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Amsterdam is a vibrant global tech and commercial crossroads. We provide Amsterdam enterprises with ultra-fast web development, Google Maps optimization, and AI automation.',
                businessContext: 'Supporting businesses in Zuidas financial district, Canal Ring, and Amsterdam-Noord.',
                heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Amsterdam | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local SEO for Amsterdam businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Amsterdam (CET/CEST)',
                confirmedServices: getStandardServices('Amsterdam'),
                howWeWork: getStandardHowWeWork('Amsterdam'),
                faqs: [
                  {
                    question: 'Can you optimize our Amsterdam business for local Dutch search queries?',
                    answer: 'Yes. We optimize your Google Business Profile and local Dutch directory citations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Rotterdam', path: '/locations/europe/netherlands/south-holland/rotterdam', divisionOrCountry: 'South Holland' },
                  { name: 'London', path: '/locations/europe/united-kingdom/england/london', divisionOrCountry: 'United Kingdom' },
                ],
              },
            ],
          },

          // South Holland
          {
            id: 'south-holland',
            name: 'South Holland',
            slug: 'south-holland',
            path: '/locations/europe/netherlands/south-holland',
            type: 'Province',
            countryId: 'netherlands',
            countryName: 'Netherlands',
            regionId: 'europe',
            regionName: 'Europe',
            headline: 'Digital Services in South Holland & Rotterdam',
            intro: 'Serving Rotterdam maritime, logistics, and commercial leaders with robust web platforms.',
            heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in South Holland & Rotterdam | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT solutions in Rotterdam.',
            faqs: [
              {
                question: 'Do you build custom portals for logistics and commercial firms in Rotterdam?',
                answer: 'Yes. We build secure portals with custom user permissions and API integrations.',
              },
            ],
            cities: [
              {
                id: 'rotterdam',
                name: 'Rotterdam',
                slug: 'rotterdam',
                path: '/locations/europe/netherlands/south-holland/rotterdam',
                divisionId: 'south-holland',
                divisionName: 'South Holland',
                countryId: 'netherlands',
                countryName: 'Netherlands',
                regionId: 'europe',
                regionName: 'Europe',
                heroHeadline: 'Web Development & IT Support in Rotterdam',
                heroSupportingCopy:
                  'Modern web platforms and digital infrastructure for Rotterdam commercial and logistics businesses.',
                intro:
                  'Rotterdam is Europe’s largest seaport and an architectural trailblazer. Botlytices assists Rotterdam companies with high-performance web systems and local search dominance.',
                businessContext: 'Serving commercial firms in Kop van Zuid, City Centre, and the Port of Rotterdam corridor.',
                heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Rotterdam | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local SEO for Rotterdam businesses.',
                onSiteAvailable: false,
                timezone: 'Europe/Amsterdam (CET/CEST)',
                confirmedServices: getStandardServices('Rotterdam'),
                howWeWork: getStandardHowWeWork('Rotterdam'),
                faqs: [
                  {
                    question: 'Can you help our Rotterdam company modernize our legacy website?',
                    answer: 'Yes. We re-engineer old websites into fast, modern React applications.',
                  },
                ],
                nearbyCities: [
                  { name: 'Amsterdam', path: '/locations/europe/netherlands/north-holland/amsterdam', divisionOrCountry: 'North Holland' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 3. OCEANIA
  {
    id: 'oceania',
    name: 'Oceania',
    slug: 'oceania',
    path: '/locations/oceania',
    heroHeadline: 'Modern Web, IT & Cloud Solutions Across Australia & New Zealand',
    heroDescription:
      'Empowering enterprises across Australia and New Zealand with high-availability web engineering, local Google search visibility, and practical automation.',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
    metaTitle: 'Digital Services Across Australia & New Zealand | Oceania | BOTLYTICES',
    metaDescription:
      'Explore Botlytices digital services across Australia and New Zealand. Custom web development, IT support, local SEO, and AI automation.',
    overview:
      'Botlytices delivers remote digital engineering and business services across Australia and New Zealand. We help companies in Sydney, Melbourne, Brisbane, Perth, Auckland, and Wellington build fast, secure digital platforms and dominate local search rankings.',
    faqs: [
      {
        question: 'How do you coordinate with businesses in Australia and New Zealand?',
        answer:
          'Our international engineering framework provides overlap with Australian Eastern Standard Time (AEST/AEDT) and New Zealand Time (NZST/NZDT). We schedule video meetings during your morning hours and deliver continuous progress updates.',
      },
      {
        question: 'Do you bill in Australian Dollars (AUD) and New Zealand Dollars (NZD)?',
        answer:
          'Yes. We issue clear invoices in AUD or NZD with convenient electronic payment methods.',
      },
      {
        question: 'Can you help our Australian or Kiwi business rank locally on Google Maps?',
        answer:
          'Yes. We optimize your Google Business Profile, Apple Maps, and local citations across Australian and New Zealand directories.',
      },
    ],
    countries: [
      // AUSTRALIA
      {
        id: 'australia',
        name: 'Australia',
        slug: 'australia',
        path: '/locations/oceania/australia',
        regionId: 'oceania',
        regionName: 'Oceania',
        code: 'AU',
        headline: 'Web Development, IT Solutions & AI Automation in Australia',
        intro:
          'Serving businesses across New South Wales, Victoria, Queensland, and Western Australia with high-speed digital platforms and local search authority.',
        heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in Australia | BOTLYTICES',
        metaDescription:
          'Custom web design, IT support, and local SEO for Australian businesses in Sydney, Melbourne, Brisbane, and Perth.',
        deliveryModel: 'remote-first',
        deliveryNote:
          'Delivered via our high-efficiency remote engineering model with AUD invoicing and AEST time zone alignment.',
        faqs: [
          {
            question: 'What types of Australian businesses do you partner with?',
            answer:
              'We work with professional consultancies, commercial builders, medical clinics, boutique retailers, and growing technology companies across Australia.',
          },
        ],
        divisions: [
          // New South Wales
          {
            id: 'new-south-wales',
            name: 'New South Wales',
            slug: 'new-south-wales',
            path: '/locations/oceania/australia/new-south-wales',
            type: 'State',
            countryId: 'australia',
            countryName: 'Australia',
            regionId: 'oceania',
            regionName: 'Oceania',
            headline: 'Digital Services Across New South Wales',
            intro: 'Serving Sydney and Newcastle with high-performance web development and digital presence.',
            heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in New South Wales & Sydney | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Sydney and NSW.',
            faqs: [
              {
                question: 'Can you help our NSW business capture local search inquiries?',
                answer: 'Yes. We optimize your local Google presence and build local authority citations.',
              },
            ],
            cities: [
              {
                id: 'sydney',
                name: 'Sydney',
                slug: 'sydney',
                path: '/locations/oceania/australia/new-south-wales/sydney',
                divisionId: 'new-south-wales',
                divisionName: 'New South Wales',
                countryId: 'australia',
                countryName: 'Australia',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Sydney',
                heroSupportingCopy:
                  'Practical digital services to help Sydney businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Sydney is Australia’s commercial gateway. Botlytices delivers responsive web design, local Google Maps ranking, and AI automation to help Sydney businesses outperform their competitors.',
                businessContext: 'Supporting businesses in Sydney CBD, Barangaroo, North Sydney, and Eastern Suburbs.',
                heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Sydney, Australia | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, local SEO, and AI automation for Sydney businesses.',
                onSiteAvailable: false,
                timezone: 'Australia/Sydney (AEST/AEDT)',
                confirmedServices: getStandardServices('Sydney'),
                howWeWork: getStandardHowWeWork('Sydney'),
                faqs: [
                  {
                    question: 'How do you coordinate with Sydney businesses remotely?',
                    answer:
                      'We hold discovery video sessions, deliver regular weekly milestones, and provide interactive staging sites.',
                  },
                  {
                    question: 'Can you help our Sydney business rank in Google Local 3-Pack?',
                    answer:
                      'Yes. We optimize your Google Business Profile and Australian directory listings.',
                  },
                ],
                nearbyCities: [
                  { name: 'Newcastle', path: '/locations/oceania/australia/new-south-wales/newcastle', divisionOrCountry: 'New South Wales' },
                  { name: 'Melbourne', path: '/locations/oceania/australia/victoria/melbourne', divisionOrCountry: 'Victoria' },
                  { name: 'Brisbane', path: '/locations/oceania/australia/queensland/brisbane', divisionOrCountry: 'Queensland' },
                ],
              },
              {
                id: 'newcastle',
                name: 'Newcastle',
                slug: 'newcastle',
                path: '/locations/oceania/australia/new-south-wales/newcastle',
                divisionId: 'new-south-wales',
                divisionName: 'New South Wales',
                countryId: 'australia',
                countryName: 'Australia',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development & IT Support in Newcastle',
                heroSupportingCopy:
                  'Clean digital design, local presence, and IT support for Hunter Region enterprises.',
                intro:
                  'We assist Newcastle commercial, industrial, and maritime businesses with modern websites and local search rankings.',
                businessContext: 'Serving businesses in Newcastle CBD, Honeysuckle, and the Hunter Valley.',
                heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Newcastle, NSW | BOTLYTICES',
                metaDescription:
                  'Web development, IT solutions, and local search optimization for Newcastle businesses.',
                onSiteAvailable: false,
                timezone: 'Australia/Sydney (AEST/AEDT)',
                confirmedServices: getStandardServices('Newcastle'),
                howWeWork: getStandardHowWeWork('Newcastle'),
                faqs: [
                  {
                    question: 'Can you improve our existing website in Newcastle?',
                    answer: 'Yes. We audit speed, optimize mobile design, and fix SEO errors.',
                  },
                ],
                nearbyCities: [
                  { name: 'Sydney', path: '/locations/oceania/australia/new-south-wales/sydney', divisionOrCountry: 'New South Wales' },
                ],
              },
            ],
          },

          // Victoria
          {
            id: 'victoria',
            name: 'Victoria',
            slug: 'victoria',
            path: '/locations/oceania/australia/victoria',
            type: 'State',
            countryId: 'australia',
            countryName: 'Australia',
            regionId: 'oceania',
            regionName: 'Oceania',
            headline: 'Digital Services Across Victoria & Melbourne',
            intro: 'Serving Melbourne and Geelong with design-forward web platforms and cloud IT systems.',
            heroImage: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Victoria & Melbourne | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Melbourne and Victoria.',
            faqs: [
              {
                question: 'Do you build bespoke websites for Melbourne creative agencies?',
                answer: 'Yes. We deliver sleek, responsive web platforms with custom animations and clean typography.',
              },
            ],
            cities: [
              {
                id: 'melbourne',
                name: 'Melbourne',
                slug: 'melbourne',
                path: '/locations/oceania/australia/victoria/melbourne',
                divisionId: 'victoria',
                divisionName: 'Victoria',
                countryId: 'australia',
                countryName: 'Australia',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development, IT Solutions & AI in Melbourne',
                heroSupportingCopy:
                  'Design-focused web engineering, local search authority, and AI workflows for Melbourne enterprises.',
                intro:
                  'Melbourne is Australia’s cultural and creative capital. Botlytices delivers visually refined, technically robust web platforms and local search optimization for Melbourne businesses.',
                businessContext: 'Supporting companies in Melbourne CBD, Southbank, Docklands, and Richmond.',
                heroImage: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Melbourne, Australia | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, local SEO, and AI automation for Melbourne businesses.',
                onSiteAvailable: false,
                timezone: 'Australia/Melbourne (AEST/AEDT)',
                confirmedServices: getStandardServices('Melbourne'),
                howWeWork: getStandardHowWeWork('Melbourne'),
                faqs: [
                  {
                    question: 'Can you help our Melbourne business rank on Google Maps?',
                    answer: 'Yes. We optimize your local profile and build targeted Victorian citations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Geelong', path: '/locations/oceania/australia/victoria/geelong', divisionOrCountry: 'Victoria' },
                  { name: 'Sydney', path: '/locations/oceania/australia/new-south-wales/sydney', divisionOrCountry: 'New South Wales' },
                ],
              },
              {
                id: 'geelong',
                name: 'Geelong',
                slug: 'geelong',
                path: '/locations/oceania/australia/victoria/geelong',
                divisionId: 'victoria',
                divisionName: 'Victoria',
                countryId: 'australia',
                countryName: 'Australia',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development & IT Support in Geelong',
                heroSupportingCopy:
                  'Modern web platforms and local digital presence for Greater Geelong businesses.',
                intro:
                  'We support Geelong businesses with clean websites, Google Maps ranking, and remote IT care.',
                businessContext: 'Serving commercial firms in Geelong CBD and the Bellarine Peninsula.',
                heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Geelong, VIC | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT solutions, and local SEO for Geelong businesses.',
                onSiteAvailable: false,
                timezone: 'Australia/Melbourne (AEST/AEDT)',
                confirmedServices: getStandardServices('Geelong'),
                howWeWork: getStandardHowWeWork('Geelong'),
                faqs: [
                  {
                    question: 'How fast can we launch a business website in Geelong?',
                    answer: 'Most standard projects are designed and launched within 2 to 4 weeks.',
                  },
                ],
                nearbyCities: [
                  { name: 'Melbourne', path: '/locations/oceania/australia/victoria/melbourne', divisionOrCountry: 'Victoria' },
                ],
              },
            ],
          },

          // Queensland
          {
            id: 'queensland',
            name: 'Queensland',
            slug: 'queensland',
            path: '/locations/oceania/australia/queensland',
            type: 'State',
            countryId: 'australia',
            countryName: 'Australia',
            regionId: 'oceania',
            regionName: 'Oceania',
            headline: 'Digital Services Across Queensland',
            intro: 'Serving Brisbane and the Gold Coast with responsive web engineering and local search dominance.',
            heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Queensland | Brisbane & Gold Coast | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Brisbane and the Gold Coast.',
            faqs: [
              {
                question: 'Do you support Queensland businesses without local offices?',
                answer: 'Yes. Our high-efficiency remote delivery delivers direct access to senior engineers.',
              },
            ],
            cities: [
              {
                id: 'brisbane',
                name: 'Brisbane',
                slug: 'brisbane',
                path: '/locations/oceania/australia/queensland/brisbane',
                divisionId: 'queensland',
                divisionName: 'Queensland',
                countryId: 'australia',
                countryName: 'Australia',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development & IT Support in Brisbane',
                heroSupportingCopy:
                  'Modern web platforms, local search authority, and AI workflows for Brisbane commercial enterprises.',
                intro:
                  'Brisbane is experiencing rapid growth ahead of global sporting and commercial events. Botlytices helps Brisbane businesses modernize their digital platforms and capture local search demand.',
                businessContext: 'Supporting companies in Brisbane CBD, Fortitude Valley, and South Bank.',
                heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Brisbane, Australia | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, local SEO, and AI automation for Brisbane businesses.',
                onSiteAvailable: false,
                timezone: 'Australia/Brisbane (AEST)',
                confirmedServices: getStandardServices('Brisbane'),
                howWeWork: getStandardHowWeWork('Brisbane'),
                faqs: [
                  {
                    question: 'Can you help our Brisbane company rank on Google Maps?',
                    answer: 'Yes. We optimize your Google Business Profile and local Queensland directory citations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Gold Coast', path: '/locations/oceania/australia/queensland/gold-coast', divisionOrCountry: 'Queensland' },
                  { name: 'Sydney', path: '/locations/oceania/australia/new-south-wales/sydney', divisionOrCountry: 'New South Wales' },
                ],
              },
              {
                id: 'gold-coast',
                name: 'Gold Coast',
                slug: 'gold-coast',
                path: '/locations/oceania/australia/queensland/gold-coast',
                divisionId: 'queensland',
                divisionName: 'Queensland',
                countryId: 'australia',
                countryName: 'Australia',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development & Digital Solutions on the Gold Coast',
                heroSupportingCopy:
                  'Engaging digital design, local search presence, and automated booking workflows for Gold Coast businesses.',
                intro:
                  'We assist Gold Coast tourism, hospitality, and professional service companies with high-converting websites and Google Maps dominance.',
                businessContext: 'Serving commercial firms in Surfers Paradise, Southport, and Broadbeach.',
                heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support on the Gold Coast, QLD | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT solutions, and local SEO for Gold Coast businesses.',
                onSiteAvailable: false,
                timezone: 'Australia/Brisbane (AEST)',
                confirmedServices: getStandardServices('Gold Coast'),
                howWeWork: getStandardHowWeWork('Gold Coast'),
                faqs: [
                  {
                    question: 'Can you automate customer inquiries on our Gold Coast website?',
                    answer: 'Yes. We deploy automated lead qualification and booking workflows.',
                  },
                ],
                nearbyCities: [
                  { name: 'Brisbane', path: '/locations/oceania/australia/queensland/brisbane', divisionOrCountry: 'Queensland' },
                ],
              },
            ],
          },

          // Western Australia
          {
            id: 'western-australia',
            name: 'Western Australia',
            slug: 'western-australia',
            path: '/locations/oceania/australia/western-australia',
            type: 'State',
            countryId: 'australia',
            countryName: 'Australia',
            regionId: 'oceania',
            regionName: 'Oceania',
            headline: 'Digital Services Across Western Australia & Perth',
            intro: 'Serving Perth mining, commercial, and professional enterprises with high-availability web systems.',
            heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Western Australia & Perth | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Perth and Western Australia.',
            faqs: [
              {
                question: 'How do you coordinate with Western Australia on AWST?',
                answer: 'We coordinate meetings and deliverables aligned directly with Perth business hours.',
              },
            ],
            cities: [
              {
                id: 'perth',
                name: 'Perth',
                slug: 'perth',
                path: '/locations/oceania/australia/western-australia/perth',
                divisionId: 'western-australia',
                divisionName: 'Western Australia',
                countryId: 'australia',
                countryName: 'Australia',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development & IT Support in Perth',
                heroSupportingCopy:
                  'Robust digital platforms, cloud IT support, and local search authority for Perth commercial businesses.',
                intro:
                  'Perth is a major global resources and commercial hub. Botlytices assists Perth enterprises with secure web architectures, cloud IT management, and local search visibility.',
                businessContext: 'Supporting businesses in Perth CBD, West Perth, and Fremantle.',
                heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Perth, Australia | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, and local SEO for Perth businesses.',
                onSiteAvailable: false,
                timezone: 'Australia/Perth (AWST)',
                confirmedServices: getStandardServices('Perth'),
                howWeWork: getStandardHowWeWork('Perth'),
                faqs: [
                  {
                    question: 'Can you help our Perth business rank in Google Local Pack?',
                    answer: 'Yes. We optimize your Google Business Profile and Western Australian directory citations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Sydney', path: '/locations/oceania/australia/new-south-wales/sydney', divisionOrCountry: 'New South Wales' },
                  { name: 'Melbourne', path: '/locations/oceania/australia/victoria/melbourne', divisionOrCountry: 'Victoria' },
                ],
              },
            ],
          },
        ],
      },

      // NEW ZEALAND
      {
        id: 'new-zealand',
        name: 'New Zealand',
        slug: 'new-zealand',
        path: '/locations/oceania/new-zealand',
        regionId: 'oceania',
        regionName: 'Oceania',
        code: 'NZ',
        headline: 'Web Development, IT Solutions & AI Automation in New Zealand',
        intro:
          'Supporting Kiwi businesses across Auckland, Wellington, and Canterbury with fast web platforms, local search presence, and operational automation.',
        heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1600&q=80',
        metaTitle: 'Digital Services & Web Development in New Zealand | BOTLYTICES',
        metaDescription:
          'Custom web design, IT support, and local SEO for New Zealand businesses in Auckland, Wellington, and Christchurch.',
        deliveryModel: 'remote-first',
        deliveryNote:
          'High-touch remote delivery with NZD invoicing and New Zealand time zone alignment.',
        faqs: [
          {
            question: 'How do you coordinate with New Zealand companies?',
            answer:
              'We schedule video consultations during your morning or afternoon hours and provide asynchronous staging site reviews.',
          },
        ],
        divisions: [
          // Auckland Region
          {
            id: 'auckland-region',
            name: 'Auckland Region',
            slug: 'auckland-region',
            path: '/locations/oceania/new-zealand/auckland-region',
            type: 'Region',
            countryId: 'new-zealand',
            countryName: 'New Zealand',
            regionId: 'oceania',
            regionName: 'Oceania',
            headline: 'Digital Services Across the Auckland Region',
            intro: 'Serving New Zealand’s largest commercial metropolis with custom web platforms.',
            heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Auckland Region, NZ | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Auckland.',
            faqs: [
              {
                question: 'Can you help our Auckland business rank on Google.co.nz?',
                answer: 'Yes. We optimize your local presence for New Zealand search queries and Google Maps.',
              },
            ],
            cities: [
              {
                id: 'auckland',
                name: 'Auckland',
                slug: 'auckland',
                path: '/locations/oceania/new-zealand/auckland-region/auckland',
                divisionId: 'auckland-region',
                divisionName: 'Auckland Region',
                countryId: 'new-zealand',
                countryName: 'New Zealand',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development, IT Support & Digital Solutions in Auckland',
                heroSupportingCopy:
                  'Practical digital services to help Auckland businesses build their online presence, improve their technology, and streamline everyday operations.',
                intro:
                  'Auckland is New Zealand’s economic powerhouse. Botlytices delivers responsive web design, local search authority, and AI automation to help Auckland companies lead their sectors.',
                businessContext: 'Supporting businesses in Auckland CBD, Wynyard Quarter, Ponsonby, and North Shore.',
                heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Auckland, New Zealand | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, local SEO, and AI automation for Auckland businesses.',
                onSiteAvailable: false,
                timezone: 'Pacific/Auckland (NZST/NZDT)',
                confirmedServices: getStandardServices('Auckland'),
                howWeWork: getStandardHowWeWork('Auckland'),
                faqs: [
                  {
                    question: 'Can you help our Auckland business rank in Google Local Pack?',
                    answer: 'Yes. We optimize your Google Business Profile and New Zealand directory citations.',
                  },
                ],
                nearbyCities: [
                  { name: 'Wellington', path: '/locations/oceania/new-zealand/wellington-region/wellington', divisionOrCountry: 'Wellington Region' },
                  { name: 'Christchurch', path: '/locations/oceania/new-zealand/canterbury/christchurch', divisionOrCountry: 'Canterbury' },
                  { name: 'Sydney', path: '/locations/oceania/australia/new-south-wales/sydney', divisionOrCountry: 'Australia' },
                ],
              },
            ],
          },

          // Wellington Region
          {
            id: 'wellington-region',
            name: 'Wellington Region',
            slug: 'wellington-region',
            path: '/locations/oceania/new-zealand/wellington-region',
            type: 'Region',
            countryId: 'new-zealand',
            countryName: 'New Zealand',
            regionId: 'oceania',
            regionName: 'Oceania',
            headline: 'Digital Services Across the Wellington Region',
            intro: 'Serving New Zealand’s capital with clean web engineering and cloud IT support.',
            heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Wellington Region, NZ | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Wellington.',
            faqs: [
              {
                question: 'Do you support public sector and commercial advisory firms in Wellington?',
                answer: 'Yes. We build accessible, compliant web architectures conforming to international standards.',
              },
            ],
            cities: [
              {
                id: 'wellington',
                name: 'Wellington',
                slug: 'wellington',
                path: '/locations/oceania/new-zealand/wellington-region/wellington',
                divisionId: 'wellington-region',
                divisionName: 'Wellington Region',
                countryId: 'new-zealand',
                countryName: 'New Zealand',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development & Digital Solutions in Wellington',
                heroSupportingCopy:
                  'High-performance web applications and digital presence for New Zealand’s capital city enterprises.',
                intro:
                  'Wellington is known for creativity, government, and technology innovation. We build fast, reliable websites and automated workflows for Wellington firms.',
                businessContext: 'Serving commercial firms in Wellington Central, Te Aro, and Lambton Quay.',
                heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Wellington, NZ | BOTLYTICES',
                metaDescription:
                  'Custom web design, IT support, and local SEO for Wellington businesses.',
                onSiteAvailable: false,
                timezone: 'Pacific/Auckland (NZST/NZDT)',
                confirmedServices: getStandardServices('Wellington'),
                howWeWork: getStandardHowWeWork('Wellington'),
                faqs: [
                  {
                    question: 'Can you help our Wellington business modernize our website?',
                    answer: 'Yes. We re-engineer websites into sub-second React platforms.',
                  },
                ],
                nearbyCities: [
                  { name: 'Auckland', path: '/locations/oceania/new-zealand/auckland-region/auckland', divisionOrCountry: 'Auckland Region' },
                  { name: 'Christchurch', path: '/locations/oceania/new-zealand/canterbury/christchurch', divisionOrCountry: 'Canterbury' },
                ],
              },
            ],
          },

          // Canterbury
          {
            id: 'canterbury',
            name: 'Canterbury',
            slug: 'canterbury',
            path: '/locations/oceania/new-zealand/canterbury',
            type: 'Region',
            countryId: 'new-zealand',
            countryName: 'New Zealand',
            regionId: 'oceania',
            regionName: 'Oceania',
            headline: 'Digital Services Across Canterbury & Christchurch',
            intro: 'Serving the South Island’s largest commercial hub with modern web systems.',
            heroImage: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1600&q=80',
            metaTitle: 'Web Development in Canterbury & Christchurch | BOTLYTICES',
            metaDescription: 'Web design, local SEO, and IT support in Christchurch and Canterbury.',
            faqs: [
              {
                question: 'Can you help South Island businesses attract clients nationwide?',
                answer: 'Yes. We build nationwide and localized SEO campaigns tailored to your target audience.',
              },
            ],
            cities: [
              {
                id: 'christchurch',
                name: 'Christchurch',
                slug: 'christchurch',
                path: '/locations/oceania/new-zealand/canterbury/christchurch',
                divisionId: 'canterbury',
                divisionName: 'Canterbury',
                countryId: 'new-zealand',
                countryName: 'New Zealand',
                regionId: 'oceania',
                regionName: 'Oceania',
                heroHeadline: 'Web Development & IT Support in Christchurch',
                heroSupportingCopy:
                  'Clean digital design, local presence, and IT management for South Island enterprises.',
                intro:
                  'Christchurch is a resilient hub for engineering, agriculture technology, and commercial innovation. We deliver fast websites and local search rankings for Christchurch companies.',
                businessContext: 'Supporting businesses in Christchurch Central City and Riccarton.',
                heroImage: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1600&q=80',
                metaTitle: 'Web Development & IT Support in Christchurch, NZ | BOTLYTICES',
                metaDescription:
                  'Custom web development, IT support, and local SEO for Christchurch businesses.',
                onSiteAvailable: false,
                timezone: 'Pacific/Auckland (NZST/NZDT)',
                confirmedServices: getStandardServices('Christchurch'),
                howWeWork: getStandardHowWeWork('Christchurch'),
                faqs: [
                  {
                    question: 'Can you optimize our Christchurch Google Business Profile?',
                    answer: 'Yes. We configure complete business listings with localized keywords.',
                  },
                ],
                nearbyCities: [
                  { name: 'Wellington', path: '/locations/oceania/new-zealand/wellington-region/wellington', divisionOrCountry: 'Wellington Region' },
                  { name: 'Auckland', path: '/locations/oceania/new-zealand/auckland-region/auckland', divisionOrCountry: 'Auckland Region' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Helper Functions
export const getAllRegions = (): RegionData[] => REGIONS_DATA;

export const getRegionBySlug = (slug: string): RegionData | undefined =>
  REGIONS_DATA.find((r) => r.slug === slug || r.id === slug);

export const getCountryBySlug = (
  regionSlug: string,
  countrySlug: string
): CountryData | undefined => {
  const region = getRegionBySlug(regionSlug);
  if (!region) return undefined;
  return region.countries.find((c) => c.slug === countrySlug || c.id === countrySlug);
};

export const getDivisionBySlug = (
  regionSlug: string,
  countrySlug: string,
  divisionSlug: string
): DivisionData | undefined => {
  const country = getCountryBySlug(regionSlug, countrySlug);
  if (!country) return undefined;
  return country.divisions.find((d) => d.slug === divisionSlug || d.id === divisionSlug);
};

export const getCityBySlug = (
  regionSlug: string,
  countrySlug: string,
  divisionSlug: string,
  citySlug: string
): CityData | undefined => {
  const division = getDivisionBySlug(regionSlug, countrySlug, divisionSlug);
  if (!division) return undefined;
  return division.cities.find((c) => c.slug === citySlug || c.id === citySlug);
};

export const getCityInCountryBySlug = (
  regionSlug: string,
  countrySlug: string,
  citySlug: string
): CityData | undefined => {
  const country = getCountryBySlug(regionSlug, countrySlug);
  if (!country) return undefined;
  for (const div of country.divisions) {
    const city = div.cities.find((c) => c.slug === citySlug || c.id === citySlug);
    if (city) return city;
  }
  return undefined;
};

// Compute Dynamic Region Statistics (Never hardcoded)
export const getRegionStats = (regionId: GeographicalRegionId): RegionStats => {
  const region = REGIONS_DATA.find((r) => r.id === regionId);
  if (!region) return { countriesCount: 0, divisionsCount: 0, citiesCount: 0 };

  const countriesCount = region.countries.length;
  let divisionsCount = 0;
  let citiesCount = 0;

  for (const country of region.countries) {
    divisionsCount += country.divisions.length;
    for (const division of country.divisions) {
      citiesCount += division.cities.length;
    }
  }

  return { countriesCount, divisionsCount, citiesCount };
};

// Global totals
export const getGlobalLocationStats = () => {
  let totalRegions = REGIONS_DATA.length;
  let totalCountries = 0;
  let totalDivisions = 0;
  let totalCities = 0;

  for (const region of REGIONS_DATA) {
    totalCountries += region.countries.length;
    for (const country of region.countries) {
      totalDivisions += country.divisions.length;
      for (const division of country.divisions) {
        totalCities += division.cities.length;
      }
    }
  }

  return { totalRegions, totalCountries, totalDivisions, totalCities };
};

// Get all verified cities
export const getAllCities = (): CityData[] => {
  const cities: CityData[] = [];
  for (const region of REGIONS_DATA) {
    for (const country of region.countries) {
      for (const division of country.divisions) {
        cities.push(...division.cities);
      }
    }
  }
  return cities;
};

// Featured locations requested in master prompt:
// London, Birmingham, Manchester, Dublin, Venice, Rome, Auckland, Wellington, Sydney, Melbourne, New York, Toronto
export const getFeaturedCities = (): CityData[] => {
  const targetSlugs = [
    'london',
    'birmingham',
    'manchester',
    'dublin',
    'venice',
    'rome',
    'auckland',
    'wellington',
    'sydney',
    'melbourne',
    'new-york-city',
    'toronto',
  ];

  const all = getAllCities();
  return targetSlugs
    .map((slug) => all.find((c) => c.slug === slug))
    .filter((c): c is CityData => Boolean(c));
};

// Build all location routes for app router & XML sitemap
export const getAllLocationRoutes = (): RouteDefinition[] => {
  const routes: RouteDefinition[] = [];

  // Main /locations directory
  routes.push({
    path: '/locations',
    title: 'Global Service Locations & International Directory | BOTLYTICES',
    description:
      'Explore Botlytices digital services across our international network: Americas, Europe, and Oceania. Custom web development, IT systems, local search, and AI automation.',
    category: 'location',
    priority: 0.9,
    changefreq: 'weekly',
    breadcrumbLabel: 'Locations',
  });

  // Regions
  for (const region of REGIONS_DATA) {
    routes.push({
      path: region.path,
      title: region.metaTitle,
      description: region.metaDescription,
      category: 'location',
      priority: 0.85,
      changefreq: 'weekly',
      parentPath: '/locations',
      breadcrumbLabel: region.name,
    });

    // Countries
    for (const country of region.countries) {
      routes.push({
        path: country.path,
        title: country.metaTitle,
        description: country.metaDescription,
        category: 'location',
        priority: 0.8,
        changefreq: 'weekly',
        parentPath: region.path,
        breadcrumbLabel: country.name,
      });

      // Divisions
      for (const division of country.divisions) {
        routes.push({
          path: division.path,
          title: division.metaTitle,
          description: division.metaDescription,
          category: 'location',
          priority: 0.75,
          changefreq: 'weekly',
          parentPath: country.path,
          breadcrumbLabel: division.name,
        });

        // Cities
        for (const city of division.cities) {
          routes.push({
            path: city.path,
            title: city.metaTitle,
            description: city.metaDescription,
            category: 'location',
            priority: 0.7,
            changefreq: 'weekly',
            parentPath: division.path,
            breadcrumbLabel: city.name,
          });
        }
      }
    }
  }

  return routes;
};
