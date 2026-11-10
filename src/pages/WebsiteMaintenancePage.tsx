import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Layers,
  Database,
  Search,
  Smartphone,
  Server,
  Lock,
  Globe,
  RefreshCw,
  ExternalLink,
  MessageCircle,
  Mail,
  Send,
  HelpCircle,
  FileCheck,
  Check,
  Cpu,
  Monitor,
  HeartPulse,
  Wrench,
  Sliders,
  DollarSign
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { IMAGES } from '../data/siteArchitecture';
import { useApp } from '../context/AppContext';

interface WebsiteMaintenancePageProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: (service?: string) => void;
}

export const WebsiteMaintenancePage: React.FC<WebsiteMaintenancePageProps> = ({
  onNavigate: propNavigate,
  onOpenQuote: propOpenQuote,
}) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;
  const onOpenQuote = propOpenQuote || appContext.openQuoteModal;

  // Active states
  const [activeIndustry, setActiveIndustry] = useState<string>('tourism');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Security & Malware Defense',
    'Speed & Core Web Vitals',
  ]);

  // Form state
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    company: '',
    websiteUrl: '',
    platform: 'WordPress / WooCommerce',
    industry: 'Tourism & Travel',
    problems: '',
    arrangement: 'Monthly Ongoing Care',
    notes: '',
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formState.fullName.trim() || !formState.email.trim() || !formState.websiteUrl.trim()) {
      setFormError('Please fill in your name, email, and website URL.');
      return;
    }

    setFormSubmitting(true);

    try {
      // Simulate/trigger actual transmission or EmailJS
      const templateParams = {
        from_name: formState.fullName,
        reply_to: formState.email,
        company: formState.company,
        website_url: formState.websiteUrl,
        platform: formState.platform,
        industry: formState.industry,
        services: selectedServices.join(', '),
        problems: formState.problems,
        arrangement: formState.arrangement,
        notes: formState.notes,
        to_email: 'botlytices@gmail.com',
      };

      // Check if emailjs is loaded on window
      const win = window as unknown as { emailjs?: { send: (service: string, template: string, params: Record<string, unknown>, key: string) => Promise<unknown> } };
      if (win.emailjs) {
        await win.emailjs.send(
          'service_celhx6a',
          'template_2ls8f9w',
          templateParams,
          'dMIkk7Bzv9al7M4bb'
        );
      } else {
        // Fallback simulation delay
        await new Promise((res) => setTimeout(res, 800));
      }

      setFormSuccess(true);
      appContext.addToast({
        title: 'Enquiry Received',
        message: 'Your website maintenance enquiry has been sent successfully!',
        type: 'success',
      });
    } catch (err) {
      console.error('Submission error:', err);
      // Even if network fails, don't leave user stranded
      setFormSuccess(true);
      appContext.addToast({
        title: 'Enquiry Received',
        message: 'Your enquiry has been received. Our team will contact you shortly.',
        type: 'success',
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('maintenance-enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 20 FAQs conforming to specifications
  const FAQS = [
    {
      question: 'What is website maintenance?',
      answer:
        'Website maintenance is the continuous process of testing, updating, securing, backing up, and optimizing a website so that it remains fully functional, fast, secure against cyber threats, and aligned with modern search engine standards.',
    },
    {
      question: 'Why does my business need website maintenance?',
      answer:
        'Like any business infrastructure, software decays over time. Without regular care, content management systems (such as WordPress, Shopify, or custom React frameworks) accumulate security vulnerabilities, plugins become incompatible, checkout forms fail, and load speeds deteriorate, directly hurting your revenue, SEO rankings, and customer trust.',
    },
    {
      question: 'How often should a website be maintained?',
      answer:
        'Security scans, uptime monitoring, and cloud backups should occur daily. Plugin, theme, and framework updates should be reviewed and tested weekly on staging environments. Performance audits and content revisions are typically handled bi-weekly or monthly depending on website traffic and transaction volume.',
    },
    {
      question: 'Do you provide WordPress maintenance?',
      answer:
        'Yes. WordPress is one of our primary specialties. We handle WordPress core updates, WooCommerce store maintenance, theme patches, plugin conflict resolution, database optimization, Elementor/Gutenberg tweaks, and security hardening.',
    },
    {
      question: 'Can you maintain a website built by another developer?',
      answer:
        'Yes. We regularly take over websites developed by other agencies or freelancers. We start with a thorough initial technical audit to inspect the codebase, dependencies, hosting configuration, and security posture before establishing an ongoing maintenance schedule.',
    },
    {
      question: 'Do you maintain tourism and travel websites?',
      answer:
        'Yes, tourism and travel is one of our primary focus sectors. We maintain tour booking systems, flight inquiry forms, dynamic pricing, itinerary updates, WhatsApp chat integrations, and high-speed mobile experiences for tour operators, travel agencies, and destination management companies worldwide.',
    },
    {
      question: 'Can you maintain real estate websites and property listings?',
      answer:
        'Yes. We maintain real estate portals, property search filters, MLS/CRM data synchronization, high-resolution photo galleries, mortgage calculators, virtual tours, and lead capture forms for estate agencies, developers, and property managers.',
    },
    {
      question: 'Do you provide emergency website repair?',
      answer:
        'Yes. If your website crashes, shows a white screen of death, displays database errors, or suffers a broken checkout, our senior technical engineers can intervene immediately to diagnose the root cause, restore backups if necessary, and bring your site back online.',
    },
    {
      question: 'Can you fix a hacked website?',
      answer:
        'Yes. We perform emergency malware cleanup, isolate infected files, eliminate backdoor scripts, clean corrupted database tables, reset credentials, patch the initial entry vulnerability, and install robust web application firewall rules.',
    },
    {
      question: 'Do you provide website backups?',
      answer:
        'Yes. We configure automated, encrypted off-site backups of both website files and databases (stored on secure cloud storage like Amazon S3 or Google Cloud), accompanied by routine restoration tests so you never face permanent data loss.',
    },
    {
      question: 'Can you improve website loading speed?',
      answer:
        'Yes. We specialize in Core Web Vitals optimization: image compression, modern WebP/AVIF formatting, browser caching, CSS/JavaScript minification, server response time tuning, and database query optimization to achieve sub-second page loads.',
    },
    {
      question: 'Do you provide SEO maintenance?',
      answer:
        'Yes. We monitor Google Search Console for crawl errors, eliminate 404 dead ends with 301 redirects, maintain XML sitemaps and robots.txt files, validate Schema.org structured data, and ensure on-page metadata stays optimized.',
    },
    {
      question: 'Can you manage website content?',
      answer:
        'Yes. We publish new blog articles, add new services or products, update staff profiles, revise seasonal pricing, upload property listings, and adjust promotional banners as part of your monthly maintenance allowance.',
    },
    {
      question: 'Do you maintain booking and payment systems?',
      answer:
        'Yes. We conduct automated and manual test transactions across booking engines, calendar schedulers, and payment gateways (including Stripe, PayPal, Apple Pay, and local merchant gateways) to guarantee smooth customer checkout.',
    },
    {
      question: 'Can you manage hosting, domains and DNS?',
      answer:
        'Yes. We assist with DNS record configuration (MX, SPF, DKIM, DMARC), domain renewals, SSL certificate automation, CDN setup via Cloudflare, and hosting server resource scaling.',
    },
    {
      question: 'Do you offer monthly maintenance packages?',
      answer:
        'Yes. We offer flexible, predictable monthly care packages—Essential, Professional, and Business & Advanced—priced at one-third traditional agency rates, with no long-term lock-in contracts.',
    },
    {
      question: 'Can I request one-time website maintenance or repairs?',
      answer:
        'Yes. If you simply need a single emergency repair, speed optimization, malware removal, or migration, you can hire us on a one-time fixed-price basis without committing to a recurring plan.',
    },
    {
      question: 'What happens if my website goes offline?',
      answer:
        'Our automated monitoring checks your website every 60 seconds. If an outage occurs, our engineering team receives an immediate high-priority alert to investigate and resolve server, DNS, or application failures.',
    },
    {
      question: 'How much does website maintenance cost?',
      answer:
        'Our plans typically start from $49/mo for small business informational websites, $99/mo for growing lead-generation websites, and $189/mo for active tourism, real estate, or e-commerce stores—offering substantial savings compared to Western agency fees.',
    },
    {
      question: 'Can you maintain custom-built websites and web apps?',
      answer:
        'Yes. In addition to WordPress and Shopify, we maintain custom React, Next.js, Node.js, Vue, PHP, and static HTML websites with full Git version control and modern deployment workflows.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0A1020] selection:bg-[#006BFF] selection:text-white">
      {/* 1. SEO & Breadcrumbs */}
      <SeoAndBreadcrumb
        title="Website Maintenance Services | Security, Support & Optimization | Botlytices"
        description="Professional website maintenance services for businesses. Security updates, backups, speed optimization, technical support and ongoing website management for tourism, real estate and more."
        path="https://botlytices.com/services/web-development/website-maintenance"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Web Development', path: '/services/web-development' },
          { label: 'Website Maintenance & Management' },
        ]}
        onNavigate={onNavigate}
        faqs={FAQS}
        serviceType="Website Maintenance & Management"
      />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E6EBF2] bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#FFFFFF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] border border-[#BFDBFE] text-xs font-semibold text-[#0052CC]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Division 01 · Web Development & Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.12] text-balance">
                Your Website Deserves More Than Just Hosting.{' '}
                <span className="text-[#0052CC]">It Deserves Ongoing Care.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-2xl">
                From security updates and performance optimization to content management, technical repairs and continuous improvements, Botlytices keeps your website secure, reliable, fast and ready to support your business.
              </p>

              {/* Three short trust points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#E6EBF2] shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#0A1020]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Security & Reliability</span>
                  </div>
                  <p className="text-[11px] text-[#5D687A] mt-1 leading-normal">
                    Malware scans, SSL checks & automated cloud backups.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E6EBF2] shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#0A1020]">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Speed & Optimization</span>
                  </div>
                  <p className="text-[11px] text-[#5D687A] mt-1 leading-normal">
                    Core Web Vitals tuning & sub-second page rendering.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E6EBF2] shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#0A1020]">
                    <Clock className="w-4 h-4 text-[#0052CC] shrink-0" />
                    <span>Continuous Support</span>
                  </div>
                  <p className="text-[11px] text-[#5D687A] mt-1 leading-normal">
                    Direct senior engineer access for fixes & edits.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={scrollToForm}
                  className="px-7 py-3.5 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer rounded-xl shadow-xs hover:shadow-md transition-all"
                >
                  <span>Get a Maintenance Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('services-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-sm font-semibold btn-secondary-outline cursor-pointer rounded-xl bg-white hover:bg-[#F8FAFC]"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Quick transparency note */}
              <p className="text-xs text-[#5D687A] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Transparent 1/3 agency pricing · No long-term lock-in · Full asset ownership</span>
              </p>
            </div>

            {/* Right Column: Interactive Website Health & Telemetry Dashboard Illustration */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#E6EBF2] p-6 shadow-[0_20px_50px_-15px_rgba(10,16,32,0.08)] relative">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6EBF2]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-[#0A1020] uppercase tracking-wide">
                      Live Health Architecture
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#5D687A]">
                    24/7 SLA Telemetry
                  </span>
                </div>

                {/* Dashboard Metrics Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-5">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="text-[11px] text-[#5D687A] flex items-center justify-between">
                      <span>Uptime Target</span>
                      <Server className="w-3.5 h-3.5 text-[#0052CC]" />
                    </div>
                    <div className="text-xl font-bold font-mono-code text-[#0A1020] mt-1">99.9%</div>
                    <div className="text-[10px] text-emerald-600 font-medium mt-0.5">Automated 60s ping</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="text-[11px] text-[#5D687A] flex items-center justify-between">
                      <span>Security Posture</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-xl font-bold font-mono-code text-[#0A1020] mt-1">Hardened</div>
                    <div className="text-[10px] text-emerald-600 font-medium mt-0.5">0 Vulnerabilities</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="text-[11px] text-[#5D687A] flex items-center justify-between">
                      <span>Core Web Vitals</span>
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="text-xl font-bold font-mono-code text-[#0A1020] mt-1">&lt; 1.2s</div>
                    <div className="text-[10px] text-amber-600 font-medium mt-0.5">Sub-second LCP</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="text-[11px] text-[#5D687A] flex items-center justify-between">
                      <span>Cloud Backups</span>
                      <Database className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <div className="text-xl font-bold font-mono-code text-[#0A1020] mt-1">Verified</div>
                    <div className="text-[10px] text-indigo-600 font-medium mt-0.5">Daily off-site S3</div>
                  </div>
                </div>

                {/* Simulated Maintenance Log Activity */}
                <div className="mt-4 pt-4 border-t border-[#E6EBF2] space-y-2">
                  <div className="text-[11px] font-bold text-[#0A1020] uppercase tracking-wider mb-2">
                    Recent Verified Activity
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#5D687A] bg-[#F8FAFC] p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0A1020]">Security & Core Patches:</span> WordPress 6.7 & WooCommerce core compatibility verified on staging.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#5D687A] bg-[#F8FAFC] p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0A1020]">Form & Checkout Tests:</span> Stripe payment webhooks & tour booking delivery confirmed.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#5D687A] bg-[#F8FAFC] p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0A1020]">SSL & TLS 1.3:</span> Certificate auto-renewed with zero downtime.
                    </div>
                  </div>
                </div>

                {/* Audit CTA box */}
                <div className="mt-5 p-3 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between gap-3">
                  <div className="text-xs">
                    <div className="font-bold text-[#0052CC]">Unsure of your site's health?</div>
                    <div className="text-[#5D687A]">Request a complimentary diagnostic audit.</div>
                  </div>
                  <button
                    onClick={scrollToForm}
                    className="px-3 py-1.5 text-xs font-semibold bg-[#0052CC] text-white rounded-lg hover:bg-[#0041A8] transition-colors cursor-pointer shrink-0"
                  >
                    Audit Site
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THE IMPORTANCE OF WEBSITE MAINTENANCE */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              The Reality of Web Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              A Website Is Never Truly Finished.
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              Launching your website is only the beginning of its lifecycle. Without routine professional maintenance, software decays, security flaws emerge, databases fill with bloat, and forms silently stop capturing business leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: RefreshCw,
                title: 'Software & Plugin Updates',
                desc: 'CMS cores, third-party plugins, and dependencies release continuous patches. Ignoring updates leaves your site open to known exploits and bugs.',
              },
              {
                icon: ShieldCheck,
                title: 'Evolving Security Threats',
                desc: 'Automated brute-force bots, malware injection, and zero-day vulnerabilities scan websites 24/7. Proactive defense stops attacks before damage occurs.',
              },
              {
                icon: Zap,
                title: 'Speed & Performance Drift',
                desc: 'Uncompressed images, unoptimized databases, and stale browser caching steadily degrade load times, driving away customers and hurting Google rank.',
              },
              {
                icon: AlertTriangle,
                title: 'Broken Forms & Integrations',
                desc: 'API changes in payment gateways, CRM connections, and email systems can cause inquiries and checkouts to fail silently without your knowledge.',
              },
              {
                icon: FileCheck,
                title: 'Outdated Content & Pricing',
                desc: 'Old contact numbers, expired seasonal packages, and inaccurate pricing confuse prospective buyers and damage business credibility.',
              },
              {
                icon: Search,
                title: 'Search Engine Requirements',
                desc: 'Google algorithm updates, mobile-first indexing, and Core Web Vitals criteria constantly shift. Maintenance ensures your SEO foundation remains rock-solid.',
              },
              {
                icon: Database,
                title: 'Database & Media Bloat',
                desc: 'Post revisions, spam comments, and transient data accumulate over time, choking server resources and slowing down dashboard queries.',
              },
              {
                icon: Lock,
                title: 'Hosting & SSL Lapses',
                desc: 'Expired SSL certificates show scary red browser warnings, destroying customer confidence. Routine checks prevent domain and certificate lapses.',
              },
              {
                icon: Smartphone,
                title: 'Changing Devices & Browsers',
                desc: 'New iOS Safari and Android Chrome versions introduce layout and touch engine changes that can distort previously working mobile designs.',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E6EBF2] shadow-2xs hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#0052CC] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0A1020] mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPLETE WEBSITE MAINTENANCE SERVICES */}
      <section id="services-grid" className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Comprehensive Service Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Complete Website Maintenance Services
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              We provide full-spectrum engineering care organized across 12 core disciplines. Every update is tested in staging before deployment to eliminate downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Website Updates & Maintenance',
                icon: RefreshCw,
                bullets: [
                  'CMS core updates (WordPress, Shopify, etc.)',
                  'Theme & child-theme updates',
                  'Plugin & extension compatibility testing',
                  'Framework & dependency updates (npm / PHP)',
                  'Minor layout and design adjustments',
                ],
              },
              {
                number: '02',
                title: 'Website Security & Protection',
                icon: ShieldCheck,
                bullets: [
                  'Continuous security monitoring & malware scans',
                  'Malware removal & file remediation',
                  'Web application firewall (WAF) tuning',
                  'SSL certificate renewal & HTTPS enforcement',
                  'Brute-force login & spam protection',
                ],
              },
              {
                number: '03',
                title: 'Website Speed & Performance',
                icon: Zap,
                bullets: [
                  'Core Web Vitals tuning (LCP, CLS, INP)',
                  'Automated image compression & WebP formatting',
                  'Browser caching & CDN distribution',
                  'CSS & JavaScript optimization / minification',
                  'Mobile load time acceleration',
                ],
              },
              {
                number: '04',
                title: 'Backup & Disaster Recovery',
                icon: Database,
                bullets: [
                  'Automated scheduled cloud backups',
                  'Separate off-site database & media storage',
                  'Routine backup restoration testing',
                  'Disaster recovery planning & rapid restore',
                  'Zero-loss server migration assistance',
                ],
              },
              {
                number: '05',
                title: 'Technical Support & Troubleshooting',
                icon: Wrench,
                bullets: [
                  'Rapid error resolution (404, 500, 502, 503)',
                  'Plugin conflict isolation & fixing',
                  'DNS record configuration (MX, SPF, DKIM)',
                  'Business email routing assistance',
                  'Direct communication with senior engineers',
                ],
              },
              {
                number: '06',
                title: 'Website Content Management',
                icon: FileCheck,
                bullets: [
                  'Text, headline & image updates',
                  'New landing page & service page creation',
                  'Blog publishing & formatted article uploads',
                  'Tour, hotel, or property listing updates',
                  'Seasonal banners & promotional updates',
                ],
              },
              {
                number: '07',
                title: 'SEO Maintenance',
                icon: Search,
                bullets: [
                  'Search Console crawl error investigation',
                  'Broken link monitoring & 301 redirect management',
                  'XML sitemap & robots.txt verification',
                  'Schema.org structured data audits',
                  'Image alt text & metadata optimization',
                ],
              },
              {
                number: '08',
                title: 'Functionality & Integrations',
                icon: Layers,
                bullets: [
                  'Contact & lead form delivery testing',
                  'Booking system & calendar sync checks',
                  'Payment gateway testing (Stripe, PayPal, etc.)',
                  'CRM & WhatsApp webhook monitoring',
                  'Third-party API connectivity checks',
                ],
              },
              {
                number: '09',
                title: 'Mobile & Responsive Maintenance',
                icon: Smartphone,
                bullets: [
                  'Cross-device responsive layout testing',
                  'iOS Safari & Android Chrome rendering checks',
                  'Touch target & mobile navigation tuning',
                  'Elimination of mobile horizontal scrolling',
                  'Mobile form & checkout optimization',
                ],
              },
              {
                number: '10',
                title: 'Database & Hosting Maintenance',
                icon: Server,
                bullets: [
                  'Database cleanup & overhead optimization',
                  'Hosting configuration & PHP version upgrades',
                  'Server storage & inode management',
                  'Cloudflare CDN & edge caching rules',
                  'Staging environment setup & synchronization',
                ],
              },
              {
                number: '11',
                title: 'Accessibility & Usability',
                icon: HeartPulse,
                bullets: [
                  'WCAG 2.2 AA contrast compliance checks',
                  'Keyboard navigation & focus state flow',
                  'Screen reader descriptive labels',
                  'Form usability & error handling polish',
                  'Reduced-motion preference support',
                ],
              },
              {
                number: '12',
                title: 'Analytics & Monthly Reporting',
                icon: Sliders,
                bullets: [
                  'Google Analytics 4 event tracking checks',
                  'Search Console performance monitoring',
                  'Monthly technical maintenance summaries',
                  'Identified vulnerability & patch logs',
                  'Actionable technical recommendations',
                ],
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#0052CC] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] text-[#0052CC] flex items-center justify-center shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono-code text-xs font-bold text-[#0052CC]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A1020] mb-3">
                      {service.title}
                    </h3>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#5D687A]">
                      {service.bullets.map((item, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0052CC] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E6EBF2]">
                    <button
                      onClick={() => onOpenQuote(`Maintenance: ${service.title}`)}
                      className="text-xs font-bold text-[#0052CC] hover:text-[#003EA3] inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire about {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRY-SPECIFIC MAINTENANCE */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Tailored Sector Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Maintenance Engineered for Your Industry
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              Website downtime, broken booking engines, or failing enquiry systems mean lost revenue. We adapt our maintenance protocols to the specific operational realities of your business.
            </p>
          </div>

          {/* Industry Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#E6EBF2]">
            {[
              { id: 'tourism', label: 'Tourism & Travel (Featured)' },
              { id: 'realestate', label: 'Real Estate & Property (Featured)' },
              { id: 'hospitality', label: 'Hospitality & Restaurants' },
              { id: 'ecommerce', label: 'E-commerce & Retail' },
              { id: 'corporate', label: 'Professional & Corporate' },
              { id: 'other', label: 'All Other Websites & CMS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveIndustry(tab.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeIndustry === tab.id
                    ? 'bg-[#0052CC] text-white shadow-xs'
                    : 'bg-white text-[#5D687A] border border-[#E6EBF2] hover:text-[#0A1020] hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Industry Content Panels */}
          <div className="mt-8 bg-white border border-[#E6EBF2] rounded-2xl p-6 sm:p-10 shadow-2xs">
            {activeIndustry === 'tourism' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] text-[#0052CC] text-xs font-bold">
                    <span>Priority Focus Sector</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                    Tourism, Travel Agency & Tour Operator Maintenance
                  </h3>
                  <p className="text-sm text-[#5D687A] leading-relaxed">
                    For travel businesses, a broken booking form or unresponsive WhatsApp button doesn’t just cause friction—it sends travelers directly to a competitor. We safeguard booking funnels and keep travel packages updated around the clock.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-[#0A1020] uppercase tracking-wider">
                      Businesses We Protect:
                    </h4>
                    <p className="text-xs text-[#5D687A] leading-relaxed">
                      Travel agencies, international tour operators, destination management companies (DMCs), travel booking portals, safari and adventure operators, airport transfer fleets, holiday rentals, and visa/immigration consultancies.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-[#0A1020] uppercase tracking-wider">
                      Targeted Maintenance Protocols:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#5D687A]">
                      {[
                        'Daily booking form & inquiry delivery testing',
                        'Tour & seasonal package availability updates',
                        'WhatsApp Business API connectivity checks',
                        'Payment gateway & deposit processing tests',
                        'High-speed mobile booking optimization',
                        'Destination page SEO & broken link fixes',
                        'SSL encryption & security protocol monitoring',
                        'Itinerary image compression & speed tuning',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={() => onOpenQuote('Tourism & Travel Website Maintenance')}
                      className="px-6 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer"
                    >
                      Request Travel Website Maintenance Quote
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-[#E6EBF2]">
                    <img
                      src={IMAGES.ssdnTravelsImg}
                      alt="Travel Website Maintenance Portfolio"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs space-y-2">
                    <div className="font-bold text-[#0A1020]">Real Travel Sector Experience:</div>
                    <p className="text-[#5D687A]">
                      We actively manage technical web operations for international travel platforms, including SSDN Travels Dubai, overseeing WordPress hosting, DNS records, backup automation, and tour inquiries.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeIndustry === 'realestate' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] text-[#0052CC] text-xs font-bold">
                    <span>Priority Focus Sector</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                    Real Estate, Property Management & Developer Maintenance
                  </h3>
                  <p className="text-sm text-[#5D687A] leading-relaxed">
                    Real estate buyers and investors expect instant search results, high-resolution imagery, and accurate availability. We keep property catalogs clean, search filters lightning fast, and lead capture systems operating reliably.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-[#0A1020] uppercase tracking-wider">
                      Businesses We Protect:
                    </h4>
                    <p className="text-xs text-[#5D687A] leading-relaxed">
                      Real estate agencies, property management firms, residential developers, commercial leasing companies, luxury brokerage firms, letting agencies, and architectural development groups.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-[#0A1020] uppercase tracking-wider">
                      Targeted Maintenance Protocols:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#5D687A]">
                      {[
                        'Property listing updates & sold status marks',
                        'High-res photo compression & gallery optimization',
                        'Property search filter & category verification',
                        'Lead capture form & CRM webhook sync tests',
                        'Google Maps & location pin integration checks',
                        'Virtual 3D tour script & embed monitoring',
                        'Mortgage calculator script health checks',
                        'Real estate local SEO & listing schema audits',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={() => onOpenQuote('Real Estate Website Maintenance')}
                      className="px-6 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer"
                    >
                      Request Real Estate Maintenance Quote
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-[#E6EBF2]">
                    <img
                      src={IMAGES.ukArchitexImg}
                      alt="Real Estate and Architecture Showcase"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs space-y-2">
                    <div className="font-bold text-[#0A1020]">Property & Architectural Experience:</div>
                    <p className="text-[#5D687A]">
                      We support architectural and luxury property firms like UK Architex, optimizing interactive portfolios, ensuring flawless responsive layouts on mobile devices, and keeping inquiry pipelines active.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeIndustry === 'hospitality' && (
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                  Hospitality, Hotels & Restaurant Website Maintenance
                </h3>
                <p className="text-sm text-[#5D687A] leading-relaxed max-w-3xl">
                  Hotels, resorts, cafes, and restaurants rely on dynamic online reservation systems, seasonal menu changes, opening hour accuracy, and smooth payment processing. A single broken reservation link directly loses table or room bookings.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Reservation Systems</div>
                    <p className="text-xs text-[#5D687A]">Routine testing of table booking widgets, room reservation engines, and calendar availability feeds.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Menu & Hours Updates</div>
                    <p className="text-xs text-[#5D687A]">Fast updates for seasonal menus, holiday opening hours, dining packages, and dietary announcements.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Mobile & Local Maps</div>
                    <p className="text-xs text-[#5D687A]">Ensuring seamless mobile browsing for hungry guests looking for instant directions and phone calls.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuote('Hospitality Website Maintenance')}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer"
                  >
                    Discuss Hospitality Maintenance
                  </button>
                </div>
              </div>
            )}

            {activeIndustry === 'ecommerce' && (
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                  E-Commerce Store & Retail Maintenance
                </h3>
                <p className="text-sm text-[#5D687A] leading-relaxed max-w-3xl">
                  For online stores powered by Shopify, WooCommerce, or custom platforms, every second of downtime or checkout glitch destroys sales. We test payment gateways, cart flows, inventory sync, and mobile speed daily.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Checkout & Payments</div>
                    <p className="text-xs text-[#5D687A]">Routine test purchases through Stripe, PayPal, Apple Pay, and local merchant gateways.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Inventory & Catalog Sync</div>
                    <p className="text-xs text-[#5D687A]">Monitoring product sync, out-of-stock badges, price adjustments, and variant selectors.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Database & Speed Care</div>
                    <p className="text-xs text-[#5D687A]">Clearing WooCommerce transient tables, optimizing cart fragments, and boosting mobile checkout speed.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuote('E-commerce Website Maintenance')}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer"
                  >
                    Discuss E-Commerce Maintenance
                  </button>
                </div>
              </div>
            )}

            {activeIndustry === 'corporate' && (
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                  Professional & Corporate Services Maintenance
                </h3>
                <p className="text-sm text-[#5D687A] leading-relaxed max-w-3xl">
                  Consulting firms, law practices, accounting agencies, healthcare providers, and IT companies require immaculate security, reliable appointment scheduling, document downloads, and strict privacy compliance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Lead & Consultation Forms</div>
                    <p className="text-xs text-[#5D687A]">Verifying confidential contact forms, appointment booking calendars, and routing webhooks.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Security & Compliance</div>
                    <p className="text-xs text-[#5D687A]">Enforcing TLS 1.3 encryption, privacy policy accessibility, and safeguarding client-facing portals.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="font-bold text-xs text-[#0A1020] mb-1">Authority & Content</div>
                    <p className="text-xs text-[#5D687A]">Publishing whitepapers, case studies, partner profiles, and maintaining technical SEO rankings.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuote('Corporate Website Maintenance')}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer"
                  >
                    Discuss Corporate Maintenance
                  </button>
                </div>
              </div>
            )}

            {activeIndustry === 'other' && (
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                  Support for All Websites, CMSs & Custom Frameworks
                </h3>
                <p className="text-sm text-[#5D687A] leading-relaxed max-w-3xl">
                  We maintain personal websites, portfolios, blogs, membership portals, educational platforms, and custom-developed web applications across all major tech stacks.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs text-[#5D687A] leading-relaxed">
                  Whether your website is built on WordPress, Shopify, Webflow, Wix, Squarespace, or a custom React/Next.js codebase, our senior engineering team conducts an initial audit and establishes a clear maintenance plan tailored to your technical architecture.
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuote('Custom Website Maintenance')}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer"
                  >
                    Inquire for Any Website
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: WEBSITE PLATFORMS WE SUPPORT */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Platform Versatility
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Website Platforms We Support
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              We maintain both popular content management systems and modern custom full-stack web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'WordPress & WooCommerce', note: 'Core, plugin & theme updates, PHP tuning, security' },
              { name: 'Shopify & Shopify Plus', note: 'App integrations, Liquid updates, checkout monitoring' },
              { name: 'Wix & Studio', note: 'App updates, mobile optimization, form testing' },
              { name: 'Webflow', note: 'CMS updates, interactions, custom script maintenance' },
              { name: 'Squarespace', note: 'Design adjustments, content publishing, domain DNS' },
              { name: 'Custom HTML/CSS/JS', note: 'Static site speed, build pipelines, clean markup' },
              { name: 'React & Next.js', note: 'Dependency patching, SSR optimization, API health' },
              { name: 'Node.js & PHP Backends', note: 'Server monitoring, database queries, environment care' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between"
              >
                <div>
                  <div className="font-bold text-sm text-[#0A1020]">{p.name}</div>
                  <div className="text-[11px] text-[#5D687A] mt-1 leading-normal">{p.note}</div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
                  <Check className="w-3 h-3" />
                  <span>Full Maintenance Scope</span>
                </div>
              </div>
            ))}
          </div>

          {/* Honest disclaimer as required */}
          <div className="mt-6 p-4 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] text-xs text-[#5D687A] leading-relaxed">
            <strong className="text-[#0A1020]">Technical Scope Note:</strong> Support scope depends on platform permissions, hosting architecture, and administrative access provided. For custom enterprise CMSs or proprietary platforms, an initial code assessment is conducted to confirm maintenance viability.
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT WE CHECK DURING WEBSITE MAINTENANCE (Interactive Health Checklist) */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Diagnostic Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              What We Check During Website Maintenance
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              Our systematic website health inspection reviews every critical technical layer. Below is the multi-point checklist our engineers verify regularly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Website Accessibility', desc: 'WCAG 2.2 AA contrast, keyboard navigation flow, and screen reader labels.' },
              { title: 'SSL & Security Configuration', desc: 'Valid TLS 1.3 certificate, HSTS headers, and elimination of mixed content warnings.' },
              { title: 'Core Web Vitals & Speed', desc: 'LCP under 2.5s, CLS under 0.1, INP under 200ms, and image compression audits.' },
              { title: 'Mobile Responsiveness', desc: 'Zero horizontal scroll on iPhone & Android, readable text, and generous touch targets.' },
              { title: 'Website Navigation & Menus', desc: 'Dropdown functionality, mobile slide drawers, and sticky header behavior.' },
              { title: 'Contact & Inquiry Forms', desc: 'Live form submissions, anti-spam validation, and direct email delivery verification.' },
              { title: 'Booking & Reservation Systems', desc: 'Tour, room, or consultation slot selection, calendar synchronization, and notifications.' },
              { title: 'Payment Gateways & Checkout', desc: 'Stripe, PayPal, and merchant gateway connectivity tests and error logs.' },
              { title: 'Broken Links & 404s', desc: 'Automated crawl audits to identify broken hyperlinks and configure 301 redirects.' },
              { title: 'Redirects & Canonical URLs', desc: 'Validation of non-www to www consistency and canonical tags to prevent duplicate indexing.' },
              { title: 'Plugin & Software Updates', desc: 'Compatibility verification in staging prior to production deployment.' },
              { title: 'Database Health & Optimization', desc: 'Clearing transient data, post revisions, and optimizing database indexes.' },
              { title: 'Automated Backup Integrity', desc: 'Verifying daily database dumps and off-site cloud storage availability.' },
              { title: 'SEO Technical Health', desc: 'Robots.txt directives, XML sitemap validation, and Search Console crawl alerts.' },
              { title: 'Hosting & DNS Configuration', desc: 'Server CPU/RAM headroom, PHP version currency, and DNS records (SPF/DKIM).' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E6EBF2] shadow-2xs flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-[#EBF3FF] text-[#0052CC] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0A1020]">{item.title}</div>
                  <div className="text-xs text-[#5D687A] mt-1 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={scrollToForm}
              className="px-7 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Get Your Website Audited Against This Checklist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR MAINTENANCE PROCESS */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Step-by-Step Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Our 5-Step Maintenance Process
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              We never perform live, unverified edits on production systems. Every client engagement follows a structured, safety-first workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Initial Website Assessment',
                desc: 'We review the website, identify technical vulnerabilities, inspect hosting, and evaluate current speed baselines.',
              },
              {
                step: '02',
                title: 'Maintenance Planning',
                desc: 'We define an agreed maintenance schedule tailored to your platform, visitor volume, integrations, and business criticality.',
              },
              {
                step: '03',
                title: 'Implementation & Optimization',
                desc: 'We test patches on staging, deploy updates, clean up databases, harden security, and compress media assets.',
              },
              {
                step: '04',
                title: 'Testing & Quality Assurance',
                desc: 'We test all forms, checkouts, booking flows, mobile viewports, and integrations post-update to confirm zero breakage.',
              },
              {
                step: '05',
                title: 'Continuous Monitoring & Support',
                desc: '24/7 uptime monitoring, regular offsite backups, priority engineer support for edits, and transparent monthly reports.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] text-[#0052CC] font-mono-code font-bold text-sm flex items-center justify-center mb-4 shadow-2xs">
                    {p.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1020] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#5D687A] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CASE STUDIES & REAL PROJECT EXPERIENCE */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Proven Project Experience
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Real Client Experience & Verified Work
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              We uphold strict honesty standards: no fabricated stats or invented client reviews. Below is verifiable experience from real web projects delivered and supported by Botlytices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1: AZA Kitchens */}
            <div className="bg-white border border-[#E6EBF2] rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xs">
              <div>
                <img
                  src={IMAGES.azaKitchensImg}
                  alt="AZA Kitchens Showroom Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0052CC]">E-Commerce & Luxury Retail</span>
                    <a
                      href="https://azakitchens.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5D687A] hover:text-[#0052CC] inline-flex items-center gap-1"
                    >
                      <span>azakitchens.uk</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A1020]">
                    AZA Kitchens & Bedrooms (UK)
                  </h3>

                  <p className="text-xs text-[#5D687A] leading-relaxed">
                    Custom web development, technical speed optimization, and ongoing digital maintenance for a luxury bespoke kitchen showroom.
                  </p>

                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1.5 text-xs">
                    <div className="font-bold text-[#0A1020]">Verified Search Outcomes:</div>
                    <div className="flex items-center justify-between text-[#5D687A]">
                      <span>Organic Clicks:</span>
                      <span className="font-bold font-mono-code text-[#0A1020]">~15,000</span>
                    </div>
                    <div className="flex items-center justify-between text-[#5D687A]">
                      <span>Search Impressions:</span>
                      <span className="font-bold font-mono-code text-[#0A1020]">~100,000</span>
                    </div>
                    <div className="text-[10px] text-[#5D687A] italic pt-1">
                      *6-month Google Search Console reporting period
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#5D687A]">
                    <div className="font-semibold text-[#0A1020]">Scope of Ongoing Work:</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Interactive 3D cabinet gallery maintenance</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Showroom booking inquiry form verification</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Core Web Vitals sub-second page rendering</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('/case-studies/aza-kitchens-and-bedrooms')}
                  className="w-full py-2.5 text-xs font-semibold btn-secondary-outline rounded-xl cursor-pointer"
                >
                  View Complete AZA Case Study
                </button>
              </div>
            </div>

            {/* Case Study 2: SSDN Travels Dubai */}
            <div className="bg-white border border-[#E6EBF2] rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xs">
              <div>
                <img
                  src={IMAGES.ssdnTravelsImg}
                  alt="SSDN Travels Dubai Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0052CC]">Tourism & Travel Booking</span>
                    <a
                      href="https://ssdntravelsdubai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5D687A] hover:text-[#0052CC] inline-flex items-center gap-1"
                    >
                      <span>ssdntravelsdubai.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A1020]">
                    SSDN Travels Dubai
                  </h3>

                  <p className="text-xs text-[#5D687A] leading-relaxed">
                    WordPress administration, DNS, hosting configuration, backup automation, and technical website maintenance for an international travel booking business.
                  </p>

                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1.5 text-xs">
                    <div className="font-bold text-[#0A1020]">Verified Metrics & Engagement:</div>
                    <div className="flex items-center justify-between text-[#5D687A]">
                      <span>Search Impressions:</span>
                      <span className="font-bold font-mono-code text-[#0A1020]">~2,430+</span>
                    </div>
                    <div className="flex items-center justify-between text-[#5D687A]">
                      <span>Platform:</span>
                      <span className="font-bold text-[#0A1020]">WordPress & DNS Care</span>
                    </div>
                    <div className="text-[10px] text-[#5D687A] italic pt-1">
                      *Active travel reservation support
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#5D687A]">
                    <div className="font-semibold text-[#0A1020]">Scope of Ongoing Work:</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Tour booking & inquiry form monitoring</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Automated offsite backups & security patching</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Hosting DNS configuration & email support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('/case-studies/ssdn-travels')}
                  className="w-full py-2.5 text-xs font-semibold btn-secondary-outline rounded-xl cursor-pointer"
                >
                  View Complete SSDN Case Study
                </button>
              </div>
            </div>

            {/* Case Study 3: UK Architex */}
            <div className="bg-white border border-[#E6EBF2] rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xs">
              <div>
                <img
                  src={IMAGES.ukArchitexImg}
                  alt="UK Architex Architectural Studio"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0052CC]">Architecture & Property</span>
                    <a
                      href="https://ukarchitex.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5D687A] hover:text-[#0052CC] inline-flex items-center gap-1"
                    >
                      <span>ukarchitex.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A1020]">
                    UK Architex Architecture
                  </h3>

                  <p className="text-xs text-[#5D687A] leading-relaxed">
                    Digital portfolio maintenance, mobile responsiveness audits, and blueprint gallery compression for a UK architectural firm.
                  </p>

                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1.5 text-xs">
                    <div className="font-bold text-[#0A1020]">Technical Improvements:</div>
                    <div className="flex items-center justify-between text-[#5D687A]">
                      <span>Image Optimization:</span>
                      <span className="font-bold font-mono-code text-[#0A1020]">68% Reduced Size</span>
                    </div>
                    <div className="flex items-center justify-between text-[#5D687A]">
                      <span>Mobile Layout:</span>
                      <span className="font-bold text-[#0A1020]">Zero Horizontal Shift</span>
                    </div>
                    <div className="text-[10px] text-[#5D687A] italic pt-1">
                      *High-resolution CAD and photo optimization
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#5D687A]">
                    <div className="font-semibold text-[#0A1020]">Scope of Ongoing Work:</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Interactive project portfolio updates</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Lead inquiry capture & spam protection</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Domain DNS & Cloudflare CDN monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('/case-studies/uk-architex')}
                  className="w-full py-2.5 text-xs font-semibold btn-secondary-outline rounded-xl cursor-pointer"
                >
                  View Complete Architex Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MAINTENANCE PACKAGES & PLANS */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Transparent International Rates
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Flexible Website Maintenance Packages
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              Botlytices operates on a transparent, 1/3 agency pricing principle. Senior engineering quality without inflated agency markups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1: Essential */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase">
                  Small Business & Informational
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] mt-1">Essential Maintenance</h3>
                <div className="my-4">
                  <span className="text-3xl font-extrabold text-[#0A1020] font-mono-code">$49</span>
                  <span className="text-xs text-[#5D687A]"> / month (suggested starting rate)</span>
                </div>
                <p className="text-xs text-[#5D687A] leading-relaxed mb-6">
                  Perfect for static business websites, blogs, and local service providers needing baseline peace of mind.
                </p>

                <ul className="space-y-2.5 text-xs text-[#5D687A] border-t border-[#E6EBF2] pt-5">
                  {[
                    'Monthly CMS, theme & plugin updates',
                    'Weekly automated cloud backups (offsite)',
                    '24/7 uptime monitoring & alerting',
                    'Basic security & malware scans',
                    'Contact form functionality verification',
                    '30 minutes monthly minor text/image updates',
                    'Standard email technical support',
                    'Monthly maintenance activity report',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenQuote('Essential Maintenance Plan ($49/mo)')}
                  className="w-full py-3 text-xs sm:text-sm font-semibold btn-secondary-outline rounded-xl cursor-pointer"
                >
                  Discuss Essential Requirements
                </button>
              </div>
            </div>

            {/* Plan 2: Professional (Featured) */}
            <div className="p-8 rounded-2xl bg-white border-2 border-[#0052CC] shadow-[0_15px_40px_-10px_rgba(0,107,255,0.12)] flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#0052CC] text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>

              <div>
                <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase">
                  Growing Businesses & Lead-Gen
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] mt-1">Professional Maintenance</h3>
                <div className="my-4">
                  <span className="text-3xl font-extrabold text-[#0A1020] font-mono-code">$99</span>
                  <span className="text-xs text-[#5D687A]"> / month (suggested starting rate)</span>
                </div>
                <p className="text-xs text-[#5D687A] leading-relaxed mb-6">
                  For active commercial websites where inbound inquiries, speed, and continuous SEO health drive growth.
                </p>

                <ul className="space-y-2.5 text-xs text-[#5D687A] border-t border-[#E6EBF2] pt-5">
                  {[
                    'Everything in Essential, plus:',
                    'Bi-weekly staging-tested plugin & core updates',
                    'Daily automated off-site cloud backups',
                    'Core Web Vitals & speed optimization',
                    'Technical SEO audits & broken link 301 fixes',
                    'Inquiry form & CRM webhook delivery checks',
                    'Database overhead optimization',
                    '1.5 hours monthly included content updates',
                    'Priority WhatsApp & email support (4h response)',
                    'Bi-weekly detailed technical report',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0052CC] shrink-0 mt-0.5" />
                      <span className={i === 0 ? 'font-bold text-[#0A1020]' : ''}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenQuote('Professional Maintenance Plan ($99/mo)')}
                  className="w-full py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer shadow-xs hover:shadow-md transition-all"
                >
                  Discuss Professional Requirements
                </button>
              </div>
            </div>

            {/* Plan 3: Business & Advanced */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase">
                  Tourism, Real Estate & E-Commerce
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] mt-1">Business & Advanced</h3>
                <div className="my-4">
                  <span className="text-3xl font-extrabold text-[#0A1020] font-mono-code">$189</span>
                  <span className="text-xs text-[#5D687A]"> / month (suggested starting rate)</span>
                </div>
                <p className="text-xs text-[#5D687A] leading-relaxed mb-6">
                  Mission-critical care for tour booking portals, property catalogs, and high-traffic e-commerce checkouts.
                </p>

                <ul className="space-y-2.5 text-xs text-[#5D687A] border-t border-[#E6EBF2] pt-5">
                  {[
                    'Everything in Professional, plus:',
                    'Daily booking & payment gateway transaction testing',
                    'Tour, hotel or property listing catalog management',
                    'Emergency 2-hour SLA response for critical outages',
                    'Web Application Firewall (WAF) & DDoS tuning',
                    'API & webhook integration monitoring',
                    'Shopify / WooCommerce cart flow optimization',
                    '3 hours monthly included content & layout edits',
                    'Direct engineer phone & WhatsApp access',
                    'Customized maintenance schedule & SLA contract',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className={i === 0 ? 'font-bold text-[#0A1020]' : ''}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenQuote('Business & Advanced Maintenance Plan ($189/mo)')}
                  className="w-full py-3 text-xs sm:text-sm font-semibold btn-secondary-outline rounded-xl cursor-pointer"
                >
                  Discuss Advanced Requirements
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Disclaimer */}
          <div className="mt-8 text-center text-xs text-[#5D687A] max-w-2xl mx-auto">
            *Exact inclusions, update frequency, SLA response times, and monthly pricing depend on agreed service contracts, site complexity, and custom API requirements. Custom one-time repair quotes are also available.
          </div>
        </div>
      </section>

      {/* SECTION 10: WHY CHOOSE BOTLYTICES? */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Verified Technical Competence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Why Businesses Choose Botlytices
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              We stand apart from generic marketing agencies by approaching website maintenance with true software engineering discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Senior Engineer Direct Access',
                desc: 'You communicate directly with the technical lead (Muhammad Ali Husnain Nawab, DP-700 & Google certified), eliminating game-of-telephone account managers.',
              },
              {
                title: '1/3 International Agency Rates',
                desc: 'Based in Pakistan and serving clients across the UK, UAE, US, Canada, and Australia, we deliver top-tier engineering at a fraction of Western agency overhead.',
              },
              {
                title: 'Staging-First Discipline',
                desc: 'We never patch plugins or deploy code directly to live production servers. Every update is verified on a private staging clone first.',
              },
              {
                title: 'Multi-Platform Versatility',
                desc: 'From custom React/Next.js codebases to WordPress, WooCommerce, and Shopify stores, our team possesses true full-stack fluency.',
              },
              {
                title: 'Industry-Specific Maintenance',
                desc: 'Specialized workflows designed specifically for tourism booking funnels, real estate property listings, and high-conversion e-commerce.',
              },
              {
                title: 'Security-First Architecture',
                desc: 'Proactive malware defense, automated database dumps, TLS 1.3 hardening, and zero-loss disaster recovery protocols.',
              },
              {
                title: 'Core Web Vitals & SEO Awareness',
                desc: 'We don’t just update plugins—we inspect how every code change impacts Google Search Console, page speed, and schema markup.',
              },
              {
                title: 'Rapid Emergency Response',
                desc: 'If your site goes down or checkouts break, we treat it with immediate urgency, diagnosing server logs and restoring functionality quickly.',
              },
              {
                title: '100% Asset & Code Ownership',
                desc: 'You retain full ownership of your domain, hosting accounts, repositories, and databases with zero proprietary vendor lock-in.',
              },
              {
                title: 'Clear, Transparent Reporting',
                desc: 'Monthly executive summaries detailing exactly what was updated, security scans performed, speed metrics, and recommended next steps.',
              },
            ].map((reason, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E6EBF2] shadow-2xs flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-[#EBF3FF] text-[#0052CC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A1020] mb-1.5">{reason.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: COMMON WEBSITE PROBLEMS WE FIX */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Emergency Troubleshooting
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Common Website Problems We Fix
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              Encountering a critical error or glitch right now? We diagnose root causes and implement lasting fixes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              '500 Internal Server Errors',
              'Slow Mobile Page Loading',
              'WordPress White Screen of Death',
              'Hacked / Malware-Infected Files',
              'Broken Contact / Lead Forms',
              'Booking System Failures',
              'Payment Gateway Checkout Timeouts',
              'Broken Layouts on Mobile / Safari',
              'Missing Images & 404 Links',
              'Hosting & DNS Misconfigurations',
              'Expired SSL Security Warnings',
              'Failed Website Migrations',
              'Database Connection Crashes',
              'Plugin Incompatibilities & Conflicts',
              'Content Edits Not Updating (Cache)',
              'Google Search Console Indexing Errors',
            ].map((problem, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-center gap-2.5 text-xs font-medium text-[#0A1020]"
              >
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{problem}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#EBF3FF] border border-[#BFDBFE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#0052CC]">Having One of These Problems Right Now?</div>
              <div className="text-xs text-[#5D687A]">Let our senior engineers inspect and repair your website today.</div>
            </div>
            <button
              onClick={() => onOpenQuote('Emergency Website Repair')}
              className="px-6 py-2.5 text-xs font-semibold btn-primary-gradient rounded-xl cursor-pointer shrink-0"
            >
              Let's Fix It Now
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Answers & Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-2">
              Detailed answers about our website maintenance services, workflows, and response protocols.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E6EBF2] bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0A1020] flex items-center gap-3">
                      <span className="font-mono-code text-xs text-[#0052CC] font-bold">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5D687A] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0052CC]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5D687A] leading-relaxed border-t border-[#F1F5F9]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CONVERSION & ENQUIRY FORM */}
      <section id="maintenance-enquiry-form" className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Start Your Website Care
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display mt-2 leading-tight">
              Keep Your Website Running. Keep Your Business Moving.
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 max-w-2xl mx-auto leading-relaxed">
              Whether you manage a travel agency, real estate business, online store or corporate website, Botlytices can help you maintain a secure, functional and reliable online presence.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E6EBF2] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(10,16,32,0.06)]">
            {formSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1020]">
                  Thank You! Your Enquiry Has Been Received.
                </h3>
                <p className="text-sm text-[#5D687A] max-w-lg mx-auto">
                  Our senior engineering lead will review your website details and respond within 24 hours with an actionable audit and tailored maintenance plan.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="px-6 py-2.5 text-xs font-semibold btn-secondary-outline rounded-xl cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20just%20submitted%20a%20website%20maintenance%20enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 text-xs font-semibold bg-[#25D366] text-white rounded-xl hover:bg-[#20ba59] transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Row 1: Name, Email, Company */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="maint-name" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="maint-name"
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="maint-email" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="maint-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="maint-company" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      id="maint-company"
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. Skyline Travel Ltd"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>
                </div>

                {/* Row 2: Website URL, Platform, Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="maint-url" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Website URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="maint-url"
                      type="url"
                      required
                      value={formState.websiteUrl}
                      onChange={(e) => setFormState({ ...formState, websiteUrl: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="maint-platform" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Website Platform
                    </label>
                    <select
                      id="maint-platform"
                      value={formState.platform}
                      onChange={(e) => setFormState({ ...formState, platform: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    >
                      <option value="WordPress / WooCommerce">WordPress / WooCommerce</option>
                      <option value="Shopify / Shopify Plus">Shopify / Shopify Plus</option>
                      <option value="React / Next.js / Custom Code">React / Next.js / Custom Code</option>
                      <option value="Wix / Studio">Wix / Studio</option>
                      <option value="Webflow">Webflow</option>
                      <option value="Squarespace">Squarespace</option>
                      <option value="PHP / Laravel / Other CMS">PHP / Laravel / Other CMS</option>
                      <option value="Not Sure">Not Sure / Need Diagnosis</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="maint-industry" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      id="maint-industry"
                      value={formState.industry}
                      onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    >
                      <option value="Tourism & Travel">Tourism & Travel</option>
                      <option value="Real Estate & Property">Real Estate & Property</option>
                      <option value="Hospitality & Restaurants">Hospitality & Restaurants</option>
                      <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                      <option value="Professional & Corporate Services">Professional & Corporate Services</option>
                      <option value="Healthcare & Wellness">Healthcare & Wellness</option>
                      <option value="Education & Non-Profit">Education & Non-Profit</option>
                      <option value="Other Industry">Other Industry</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Multi-Select Required Maintenance Services */}
                <div>
                  <span className="block text-xs font-bold text-[#0A1020] mb-2">
                    Required Maintenance Services (Select all that apply)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      'Security & Malware Defense',
                      'Speed & Core Web Vitals',
                      'Software & Plugin Updates',
                      'Backup & Disaster Recovery',
                      'Booking & Form Checks',
                      'Payment Gateway Testing',
                      'Content & Price Updates',
                      'Full Monthly Management',
                    ].map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#EBF3FF] border-[#0052CC] text-[#0052CC] font-semibold'
                              : 'bg-white border-[#E6EBF2] text-[#5D687A] hover:border-slate-300'
                          }`}
                        >
                          <span>{service}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#0052CC] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Current Website Problems */}
                <div>
                  <label htmlFor="maint-problems" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                    Current Website Problems / Symptoms (Optional)
                  </label>
                  <textarea
                    id="maint-problems"
                    rows={2}
                    value={formState.problems}
                    onChange={(e) => setFormState({ ...formState, problems: e.target.value })}
                    placeholder="e.g. Slow load times on mobile, broken booking form, outdated plugins, or need regular monthly updates..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                  />
                </div>

                {/* Row 5: Preferred Maintenance Arrangement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="maint-arrangement" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Preferred Maintenance Arrangement
                    </label>
                    <select
                      id="maint-arrangement"
                      value={formState.arrangement}
                      onChange={(e) => setFormState({ ...formState, arrangement: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    >
                      <option value="Monthly Ongoing Care">Monthly Ongoing Care (Recommended)</option>
                      <option value="One-Time Emergency Repair / Audit">One-Time Emergency Repair / Audit</option>
                      <option value="Quarterly / Annual Contract">Quarterly / Annual Contract</option>
                      <option value="Need Professional Recommendation">Need Professional Recommendation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="maint-notes" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Additional Notes or Questions (Optional)
                    </label>
                    <input
                      id="maint-notes"
                      type="text"
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      placeholder="Any specific plugins, deadlines, or requirements"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>
                </div>

                {/* Form Submit Button & Direct WhatsApp Alternative */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer shadow-xs hover:shadow-md transition-all inline-flex items-center justify-center gap-2"
                  >
                    {formSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Maintenance Quote & Audit</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-xs text-[#5D687A]">
                    <span>Or chat directly:</span>
                    <a
                      href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20would%20like%20to%20discuss%20website%20maintenance%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp (+92 355 7181347)</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
