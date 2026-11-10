import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Search,
  MessageSquare,
  Compass,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Globe,
  Server,
  Bot,
  Camera,
  Cloud,
  Cpu,
  Clock,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Sparkles,
  Users,
  Check,
} from 'lucide-react';
import {
  SEVEN_STEP_PROCESS,
  CATEGORIZED_FAQS,
  FaqCategoryName,
} from '../data/portfolioAndFaqs';
import { DIVISIONS } from '../data/siteArchitecture';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';
import tabLogo from '../assets/images/botlytices-tab-logo.png';
import { inquiryApi } from '../api/inquiryApi';
import { useApp } from '../context/AppContext';

interface PageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

const STEP_ICONS = [Search, Compass, Layout, Code2, ShieldCheck, Rocket, MessageSquare];

const FAQ_CATEGORIES: ('All' | FaqCategoryName)[] = [
  'All',
  'General',
  'Web Development',
  'IT Support',
  'SEO',
  'AI Automation',
  'Digital Presence',
  'CCTV & Security',
  'Projects & Process',
  'Support & Maintenance',
];

// ============================================================================
// 1. ABOUT US PAGE (/about)
// ============================================================================
export const AboutPage: React.FC<PageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="About BOTLYTICES — Technology, Digital Presence & Automation Partner"
        description="We help businesses build stronger digital experiences, maintain their technology, improve their online presence, automate repetitive work and implement practical technology solutions."
        path="/about"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        onNavigate={onNavigate}
      />

      {/* 1. ABOUT HERO + INTERCONNECTED TECHNOLOGY ECOSYSTEM VISUAL */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                01 · About the Company
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
                Technology, Digital Presence &amp; Automation —{' '}
                <span className="text-gradient-brand">Built Around Your Business.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                We help businesses build stronger digital experiences, maintain their technology,
                improve their online presence, automate repetitive work and implement practical
                technology solutions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/about/process')}
                  className="px-6 py-4 text-sm font-semibold btn-secondary-outline inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Process</span>
                  <ArrowRight className="w-4 h-4 text-[#006BFF]" />
                </button>
              </div>
            </div>

            {/* Interconnected Technology Ecosystem Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-[#E6EBF2] pb-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={tabLogo}
                      alt="BOTLYTICES"
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-xs font-bold text-[#0A1020] uppercase tracking-wider">
                      Connected Technology Ecosystem
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-code font-semibold text-[#006BFF]">
                    7 Connected Areas
                  </span>
                </div>

                {/* Central Hub + 7 Connected Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {[
                    { label: 'Website', sub: 'UI/UX, Web & E-commerce', icon: Globe, path: '/services/web-development' },
                    { label: 'AI', sub: 'Voice & Chat Assistants', icon: Bot, path: '/services/ai-automation' },
                    { label: 'Cloud', sub: 'Hosting, SSL & Domains', icon: Cloud, path: '/services/web-development/seo-hosting-website-care' },
                    { label: 'IT', sub: 'Devices, OS & Networks', icon: Server, path: '/services/it-support' },
                    { label: 'Automation', sub: 'CRM & Lead Workflows', icon: Cpu, path: '/services/ai-automation/workflow-automation' },
                    { label: 'Security', sub: '4K CCTV & Access Control', icon: Camera, path: '/services/security-surveillance' },
                  ].map((node) => {
                    const NodeIcon = node.icon;
                    return (
                      <button
                        key={node.label}
                        onClick={() => onNavigate(node.path)}
                        className="p-4 rounded-2xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] text-left transition-all cursor-pointer group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F3F7FC] group-hover:bg-[#006BFF] border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] group-hover:text-white transition-colors mb-2.5">
                          <NodeIcon className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-extrabold text-[#0A1020] group-hover:text-[#006BFF]">
                          {node.label}
                        </div>
                        <div className="text-[11px] text-[#5D687A] mt-0.5 leading-snug">
                          {node.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* 7th Connected Area: Digital Presence Full-Width Node */}
                <button
                  onClick={() => onNavigate('/services/digital-presence')}
                  className="w-full p-4 rounded-2xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] flex items-center justify-between text-left transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#F3F7FC] group-hover:bg-[#006BFF] border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#0A1020] group-hover:text-[#006BFF]">
                        Digital Presence &amp; Search Visibility
                      </div>
                      <div className="text-[11px] text-[#5D687A]">
                        Branding · SEO / AEO · Google Business Profile · Apple Maps · Social Media
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#006BFF] shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STORY: BUILT TO SOLVE REAL BUSINESS PROBLEMS */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                Company Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight">
                Built to Solve Real Business Problems
              </h2>
              <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                Most businesses are forced to coordinate multiple disconnected vendors: one
                freelancer for a website, another agency for SEO and social media, a separate
                technician when office computers or Wi-Fi fail, and yet another contractor for
                automation or CCTV security.
              </p>
              <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                BOTLYTICES was built to bring together <strong className="text-[#0A1020]">Web Development</strong>,{' '}
                <strong className="text-[#0A1020]">IT Support</strong>,{' '}
                <strong className="text-[#0A1020]">Digital Presence</strong>,{' '}
                <strong className="text-[#0A1020]">AI Automation</strong>, and{' '}
                <strong className="text-[#0A1020]">Security Technology</strong> under one cohesive
                engineering roof.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-2">
                <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                  Our Philosophy
                </div>
                <p className="text-base font-bold text-[#0A1020] font-display leading-snug">
                  “Technology should simplify operations, strengthen visibility and support growth —
                  not create complexity.”
                </p>
              </div>
            </div>

            {/* 3. MISSION & VISION */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-6">
              <div className="p-8 rounded-2xl bg-white border border-[#E6EBF2] space-y-3 shadow-xs">
                <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                  01 · Our Mission
                </div>
                <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                  Make Modern Technology Accessible, Reliable &amp; Practical
                </h3>
                <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                  To help businesses use modern technology, digital platforms and automation in a
                  way that is practical, reliable and accessible.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E6EBF2] space-y-3 shadow-xs">
                <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                  02 · Our Vision
                </div>
                <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                  A Long-Term Technology Partner
                </h3>
                <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                  To become a trusted long-term technology partner for businesses looking to
                  modernize, grow and operate efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO OVERVIEW (5 SERVICE DIVISIONS) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase mb-2">
              Five Connected Divisions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight">
              What We Do Across Your Business
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-2">
              Each division is backed by dedicated sub-services so you can start with a single need
              or connect multiple systems together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="p-7 rounded-2xl bg-white border border-[#E6EBF2] flex flex-col justify-between premium-card"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono-code font-bold text-[#006BFF]">
                    Division {div.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1020] font-display">{div.title}</h3>
                  <p className="text-sm text-[#5D687A] leading-relaxed">{div.shortSummary}</p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E6EBF2]">
                  <button
                    onClick={() => onNavigate(div.path)}
                    className="text-xs font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore {div.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (6 PILLARS) */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase mb-2">
              Core Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight">
              The Principles Behind Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Clarity Over Complexity',
                desc: 'We explain technical options in plain language and recommend straightforward architectures that are easy for your team to use.',
              },
              {
                num: '02',
                title: 'Quality & Reliability',
                desc: 'From clean code and fast servers to tidy Cat6 cabling and weatherproof 4K cameras, we build systems designed to last.',
              },
              {
                num: '03',
                title: 'Practical Innovation',
                desc: 'We deploy AI voice assistants, WhatsApp workflows, and AEO search structures where they save real time and generate measurable inquiries.',
              },
              {
                num: '04',
                title: 'Honest Communication',
                desc: 'Transparent project scopes, realistic timelines, and direct communication without exaggerated agency promises.',
              },
              {
                num: '05',
                title: 'Long-Term Partnership',
                desc: 'We stay available after launch with hosting, backups, maintenance, and responsive IT support as your organization grows.',
              },
              {
                num: '06',
                title: 'Business-First Thinking',
                desc: 'Every design decision, network configuration, or automation flow is measured against how well it supports your daily operations.',
              },
            ].map((val) => (
              <div
                key={val.num}
                className="p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-3"
              >
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">{val.num}</div>
                <h3 className="text-lg font-bold text-[#0A1020] font-display">{val.title}</h3>
                <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US + 7. INDUSTRIES WE WORK WITH */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                Why Choose BOTLYTICES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight">
                Why Businesses Work With Us
              </h2>
              <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                Instead of piecing together disconnected suppliers, our clients rely on a single
                accountable team that understands how web, search, IT, AI, and security fit
                together.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Multi-disciplinary expertise across 5 technology divisions',
                'Modern design & technical capability under one roof',
                'Tailored solutions built around your actual workflow',
                'Clear communication & structured milestone delivery',
                'Scalable systems that grow with your business',
                'Ongoing support, maintenance & system care after launch',
              ].map((point) => (
                <div
                  key={point}
                  className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0A1020] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries We Work With */}
          <div className="pt-12 border-t border-[#E6EBF2]">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase mb-2">
                Industries We Serve
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                Industries We Work With
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                'Service Businesses',
                'Retail & E-commerce',
                'Real Estate & Construction',
                'Hospitality & Travel',
                'Healthcare & Clinics',
                'Education & Training',
                'Local Businesses & Showrooms',
                'Startups & Growing Companies',
              ].map((ind) => (
                <div
                  key={ind}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs sm:text-sm font-bold text-[#0A1020] flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#006BFF] shrink-0" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER & TECHNICAL LEADERSHIP */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                Technical Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight">
                Engineering-First Direction
              </h2>
              <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                BOTLYTICES is led by hands-on engineers who build and supervise real systems, not account managers passing messages. Every project is scoped with data-driven architecture, robust security, and reliable long-term operations.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-husnain-nawab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/923557181347?text=Hello%20Ali,%20I%20would%20like%20to%20discuss%20a%20project%20with%20BOTLYTICES."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E6EBF2] shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6EBF2]">
                  <div>
                    <div className="text-xs font-mono-code text-[#006BFF] font-bold uppercase">
                      Founder &amp; Principal Engineer
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1020] font-display mt-0.5">
                      Muhammad Ali Husnain Nawab
                    </h3>
                    <p className="text-xs text-[#5D687A] mt-1">
                      Based in Pakistan · Serving International Clients Remotely
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/muhammad-ali-husnain-nawab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] text-xs font-semibold text-[#0A1020] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>View Profile →</span>
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#0A1020] uppercase tracking-wider">
                    Core Specializations &amp; Certified Credentials
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
                      <div className="font-bold text-[#0A1020] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Microsoft Fabric &amp; Power BI</span>
                      </div>
                      <p className="text-[11px] text-[#5D687A]">
                        DP-700 Certified · Enterprise data analytics &amp; interactive executive dashboards.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
                      <div className="font-bold text-[#0A1020] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Modern Web Architecture</span>
                      </div>
                      <p className="text-[11px] text-[#5D687A]">
                        React, TypeScript, Next.js, performant UI/UX, and scalable API integrations.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
                      <div className="font-bold text-[#0A1020] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>AI &amp; Workflow Automation</span>
                      </div>
                      <p className="text-[11px] text-[#5D687A]">
                        Python, Apache Spark, SQL, MongoDB, and automated CRM &amp; lead triage pipelines.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
                      <div className="font-bold text-[#0A1020] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Google Professional Credentials</span>
                      </div>
                      <p className="text-[11px] text-[#5D687A]">
                        Google Certified in Data Analytics, IT Support, and Project Management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5D687A] border-t border-[#E6EBF2]">
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+923400320020"
                      className="inline-flex items-center gap-1 text-[#0A1020] font-semibold hover:text-[#006BFF]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#006BFF]" />
                      <span>+92 340 0320020</span>
                    </a>
                    <span>·</span>
                    <a
                      href="https://wa.me/923557181347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-600 font-semibold hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>WhatsApp: +92 355 7181347</span>
                    </a>
                  </div>
                  <span className="text-[11px] text-[#5D687A]">Direct Engineering Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GLOBAL LOCATIONS & REGIONAL HUBS */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                International Service Footprint
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight mt-1">
                Global Locations &amp; Regional Hubs
              </h2>
              <p className="text-sm sm:text-base text-[#5D687A] mt-2 max-w-2xl">
                BOTLYTICES operates an international digital services network organized across 3 primary continental hubs, 11 countries, and 39 metropolitan localities.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/locations')}
              className="px-6 py-3 text-xs sm:text-sm font-semibold btn-secondary-outline inline-flex items-center gap-2 cursor-pointer self-start md:self-auto shrink-0"
            >
              <span>Explore All 39 Locations</span>
              <ArrowRight className="w-4 h-4 text-[#006BFF]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Americas Hub */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-code font-bold text-[#006BFF]">
                    Hub 01
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] font-display group-hover:text-[#006BFF] transition-colors">
                  Americas Hub
                </h3>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  United States and Canada metropolitan services spanning New York, San Francisco, Los Angeles, Chicago, Toronto, and Vancouver.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E6EBF2]">
                <button
                  onClick={() => onNavigate('/locations/americas')}
                  className="text-xs font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Americas Locations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Europe Hub */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-code font-bold text-[#006BFF]">
                    Hub 02
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] font-display group-hover:text-[#006BFF] transition-colors">
                  Europe Hub
                </h3>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  London, Birmingham, Manchester, Dublin, Venice, Rome, Berlin, Paris, Madrid, and Amsterdam across 7 European nations.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E6EBF2]">
                <button
                  onClick={() => onNavigate('/locations/europe')}
                  className="text-xs font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Europe Locations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Oceania Hub */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-code font-bold text-[#006BFF]">
                    Hub 03
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] font-display group-hover:text-[#006BFF] transition-colors">
                  Oceania Hub
                </h3>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Sydney, Melbourne, Brisbane, Perth, Auckland, Wellington, and Christchurch across Australia and New Zealand.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E6EBF2]">
                <button
                  onClick={() => onNavigate('/locations/oceania')}
                  className="text-xs font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Oceania Locations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="text-xs font-mono-code text-[#00C8FF] uppercase">
                Partner With BOTLYTICES
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                Looking for a reliable technology partner?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Tell us about your goals and let’s plan the right solution for your business.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/pricing')}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>View International Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// 2. OUR PROCESS PAGE (/about/process & /process)
// ============================================================================
export const ProcessPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Our Process — Clear, Structured & Built Around Results | BOTLYTICES"
        description="Every project follows a clear 7-step workflow designed to reduce guesswork, keep communication transparent and deliver reliable results."
        path="/about/process"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Our Process' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Process Hero */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              02 · 7-Stage Delivery Methodology
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Our Process — Clear, Structured &amp; Built Around Results.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Every project follows a clear workflow designed to reduce guesswork, keep
              communication transparent and deliver reliable results.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Step Interactive Timeline with Example Outputs */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {SEVEN_STEP_PROCESS.map((step, index) => {
            const Icon = STEP_ICONS[index % STEP_ICONS.length];
            return (
              <div
                key={step.number}
                className="p-7 sm:p-9 rounded-2xl bg-white border border-[#E6EBF2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs"
              >
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F7FC] border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code font-bold text-[#006BFF]">
                      Step {step.number}
                    </div>
                    <h2 className="text-2xl font-bold text-[#0A1020] font-display mt-0.5">
                      {step.title}
                    </h2>
                    <div className="text-xs text-[#5D687A] mt-1">{step.subtitle}</div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-2">
                  <p className="text-sm text-[#5D687A] leading-relaxed">{step.description}</p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono-code font-semibold text-[#006BFF]">
                      Example Output: {step.exampleOutput}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 p-5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                  <div className="text-xs font-bold text-[#0A1020] mb-2.5">Key Deliverables:</div>
                  <ul className="space-y-2">
                    {step.deliverables.map((del) => (
                      <li
                        key={del}
                        className="flex items-center gap-2 text-xs text-[#0A1020] font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Collaboration & What Clients Can Expect */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase mb-2">
              Collaboration Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight">
              What Clients Can Expect During Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                title: 'Clear Milestones',
                desc: 'Defined project phases so you always know what is being built and when.',
              },
              {
                title: 'Regular Updates',
                desc: 'Scheduled progress check-ins and live staging links throughout development.',
              },
              {
                title: 'Feedback Checkpoints',
                desc: 'Dedicated review stages for wireframes, UI designs, and system workflows.',
              },
              {
                title: 'Testing Before Launch',
                desc: 'Thorough speed, mobile, security, and functional verification prior to go-live.',
              },
              {
                title: 'Post-Launch Support',
                desc: 'Handover training, documentation, and ongoing maintenance options.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2"
              >
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">0{i + 1}</div>
                <h3 className="text-base font-bold text-[#0A1020] font-display">{item.title}</h3>
                <p className="text-xs text-[#5D687A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company & Methods: Pricing Bridge Card */}
      <section className="py-14 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                Transparent Pricing Architecture
              </div>
              <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                Explore Starting Rates &amp; International Service Packages
              </h3>
              <p className="text-sm text-[#5D687A] leading-relaxed">
                Every service division has transparent starting rates with regional currency selectors (USD, GBP, CAD, AUD, NZD, EUR, AED). Compare service inclusions or request an itemized quotation.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/pricing')}
              className="px-7 py-3.5 text-sm font-semibold btn-primary-gradient rounded-xl shrink-0 inline-flex items-center gap-2 cursor-pointer shadow-xs hover:shadow-md transition-all"
            >
              <span>View International Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="text-xs font-mono-code text-[#00C8FF]">Step 01 Starts Here</div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                Ready to start with a Discovery consultation?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Share your goals and we will prepare a clear strategy and project roadmap.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// 7. FAQ PAGE (/faq)
// ============================================================================
export const FaqPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | FaqCategoryName>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = CATEGORIZED_FAQS.filter((f) => {
    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Frequently Asked Questions (FAQ) | BOTLYTICES"
        description="Answers to common questions about our services, process, timelines, support and how we work."
        path="/faq"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'FAQ' },
        ]}
        onNavigate={onNavigate}
        faqs={CATEGORIZED_FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              07 · Knowledge Base &amp; AEO Answers
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Frequently Asked Questions.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Answers to common questions about our services, process, timelines, support and how
              we work.
            </p>
          </div>

          {/* Search Input + Category Filter Tabs */}
          <div className="mt-10 pt-6 border-t border-[#E6EBF2] space-y-4">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#5D687A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIdx(0);
                }}
                placeholder="Search questions (e.g., hosting, WhatsApp, CCTV, timeline)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs sm:text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIdx(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#006BFF] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-[#5D687A] border border-[#E6EBF2] hover:text-[#0A1020]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-2xl bg-white border border-[#E6EBF2] text-center space-y-3">
              <div className="text-base font-bold text-[#0A1020]">
                No matching questions found for “{searchQuery}”
              </div>
              <p className="text-xs text-[#5D687A]">
                Try clearing your search filter or contact our team directly with your question.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-lg bg-[#006BFF] text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[11px] font-mono-code font-bold text-[#006BFF] block mb-1">
                        {faq.category}
                      </span>
                      <span className="text-base font-bold text-[#0A1020] font-display">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5D687A] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#006BFF]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-[#5D687A] leading-relaxed border-t border-[#E6EBF2] space-y-3">
                      <p>{faq.answer}</p>
                      {faq.relatedLink && (
                        <div>
                          <button
                            onClick={() => onNavigate(faq.relatedLink!.path)}
                            className="text-xs font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>{faq.relatedLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
            Still have a specific technical question?
          </h2>
          <p className="text-sm text-[#5D687A]">
            Reach out to our team directly and we will give you a clear, honest answer.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// 9. CONTACT US PAGE (/contact) — SIMPLIFIED FORM & CLIENT SUCCESS STORIES
// ============================================================================
interface ClientSuccessStory {
  id: string;
  category: string;
  title: string;
  clientType: string;
  location: string;
  image: string;
  imageAlt: string;
  quote: string;
  deliverables: string[];
  outcome: string;
}

const CLIENT_SUCCESS_STORIES: ClientSuccessStory[] = [
  {
    id: 'dashboard-automation',
    category: 'Data Analytics & Dashboards',
    title: 'Executive Financial & KPI Dashboard',
    clientType: 'International Logistics & Supply Firm',
    location: 'North America / Remote',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Satisfied business partners and founders reviewing real-time data dashboard together',
    quote:
      'Working directly with Ali eliminated all the usual agency runarounds. Our Power BI and Fabric models automated reports that used to take our analysts 15 hours every single week.',
    deliverables: ['Power BI Dashboards', 'Microsoft Fabric Data Pipeline', 'Scheduled Automation'],
    outcome: '15+ Hours Saved Weekly · 100% Automated Refresh',
  },
  {
    id: 'web-platform',
    category: 'Modern Web Architecture',
    title: 'High-Converting Digital Platform Launch',
    clientType: 'Commercial Advisory & Services Group',
    location: 'United Kingdom / Hybrid',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Happy female enterprise client smiling after successful web platform handover',
    quote:
      'The edge-to-edge UI is spotless, lightning fast, and looks incredible on every device. Our mobile engagement and direct contact inquiries doubled within 30 days of launch.',
    deliverables: ['React & TypeScript SPA', 'Tailwind Fluid Design', 'Technical SEO Schema'],
    outcome: '99/100 Mobile Speed · 2.1x Higher Lead Inquiries',
  },
  {
    id: 'ai-lead-automation',
    category: 'AI & Workflow Automation',
    title: '24/7 WhatsApp & Lead Qualification Agent',
    clientType: 'E-commerce & Regional Dealership Network',
    location: 'Middle East & Europe',
    image:
      'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Technology leadership team celebrating automated workflow deployment',
    quote:
      'No customer inquiry goes unanswered anymore. Even during off-hours, incoming leads receive immediate, intelligent responses and are logged directly to our CRM.',
    deliverables: ['WhatsApp Business Bot', 'CRM Automation', 'Instant Triage Webhooks'],
    outcome: 'Zero Lost Leads · 24/7 Response Readiness',
  },
  {
    id: 'infrastructure-support',
    category: 'IT Systems & Security',
    title: 'Zero-Downtime Infrastructure & Remote Care',
    clientType: 'Multi-Location Professional Consultancy',
    location: 'Australia / Remote Operations',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Happy client smiling during remote engineering consultation and check-in',
    quote:
      'BOTLYTICES is like having a full-time senior CTO and systems team on standby. Whenever we have a technical question or need infrastructure upgraded, it is solved immediately.',
    deliverables: ['Proactive Monitoring', 'Secure Cloud Backups', 'Endpoint Security'],
    outcome: '99.98% System Uptime · Rapid SLA Resolution',
  },
];

export const ContactPage: React.FC<{ onNavigate: (path: string) => void }> = ({
  onNavigate,
}) => {
  const { addToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState<string>('');
  const [mailtoFallback, setMailtoFallback] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // 5 simple required fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanSubject = subject.trim();
    const cleanDescription = description.trim();

    if (!cleanName || cleanName.length < 2) {
      setValidationError('Please provide your name.');
      return;
    }

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setValidationError('Please provide a valid email address.');
      return;
    }

    if (!cleanSubject) {
      setValidationError('Please provide a subject for your inquiry.');
      return;
    }

    if (!cleanDescription || cleanDescription.length < 5) {
      setValidationError('Please provide a brief description of your project or requirements.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await inquiryApi.submitContact({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        description: cleanDescription,
      });

      const genTicket = result.data?.ticketId || `BOT-${Date.now().toString().slice(-6)}`;
      const fallbackUrl =
        result.data?.mailtoFallback ||
        `mailto:botlytices@gmail.com?subject=${encodeURIComponent(
          `[${genTicket}] ${cleanSubject}`
        )}&body=${encodeURIComponent(
          `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\n\nDescription:\n${cleanDescription}`
        )}`;

      setTicketId(genTicket);
      setMailtoFallback(fallbackUrl);
      setSubmitted(true);

      addToast({
        type: 'success',
        title: 'Inquiry Dispatched Directly!',
        message: 'Your message has been sent directly to botlytices@gmail.com. We will reply within 2 hours.',
      });
    } catch {
      const genTicket = `BOT-${Date.now().toString().slice(-6)}`;
      setTicketId(genTicket);
      setMailtoFallback(
        `mailto:botlytices@gmail.com?subject=${encodeURIComponent(
          `[${genTicket}] ${cleanSubject}`
        )}&body=${encodeURIComponent(
          `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\n\nDescription:\n${cleanDescription}`
        )}`
      );
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setDescription('');
    setValidationError(null);
  };

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Contact Us — Send Inquiry Directly to Engineering | BOTLYTICES"
        description="Contact BOTLYTICES directly. Submit your project requirements to botlytices@gmail.com or chat on WhatsApp for fast senior engineering guidance."
        path="/contact"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <section className="py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] border border-[#006BFF]/20 text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#006BFF] animate-pulse"></span>
              <span>Direct Engineering Inbox · botlytices@gmail.com</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Let’s Talk About Your Project or Business Needs.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Have a question or looking to build a website, data dashboard, AI automation, or IT solution? Fill out the simple form below. All inquiries go straight to our principal inbox{' '}
              <strong className="text-[#0A1020] font-semibold">botlytices@gmail.com</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: Direct Contact Channels & Communication Promises */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E6EBF2] space-y-5 shadow-xs">
                <div>
                  <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                    Direct Channels
                  </div>
                  <h2 className="text-2xl font-bold text-[#0A1020] font-display mt-1">
                    Get in Touch Directly
                  </h2>
                  <p className="text-xs text-[#5D687A] mt-1">
                    You speak directly with senior software and data engineers.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {/* Primary Email */}
                  <a
                    href="mailto:botlytices@gmail.com"
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#F3F7FC] border border-[#E6EBF2] hover:border-[#006BFF] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-[#5D687A] font-medium">Primary Inquiries Email</div>
                      <div className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors truncate">
                        botlytices@gmail.com
                      </div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                        Monitored 24/7 · Rapid response
                      </div>
                    </div>
                  </a>

                  {/* Direct Phone */}
                  <a
                    href="tel:+923400320020"
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#F3F7FC] border border-[#E6EBF2] hover:border-[#006BFF] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5D687A] font-medium">Direct Phone Line</div>
                      <div className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                        +92 340 0320020
                      </div>
                      <div className="text-[11px] text-[#5D687A] mt-0.5">
                        Monday – Saturday · 9:00 AM – 6:00 PM
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp Quick Chat */}
                  <a
                    href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>WhatsApp Quick Chat</span>
                      </div>
                      <div className="text-sm font-bold text-[#0A1020] group-hover:text-emerald-700 transition-colors">
                        +92 355 7181347
                      </div>
                      <div className="text-[11px] text-[#5D687A] mt-0.5">
                        Instant chat with solution engineers
                      </div>
                    </div>
                  </a>

                  {/* Remote & International Delivery */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5D687A] font-medium">Headquarters &amp; Coverage</div>
                      <div className="text-sm font-bold text-[#0A1020]">
                        Pakistan · Remote Worldwide
                      </div>
                      <div className="text-[11px] text-[#5D687A] mt-0.5">
                        Americas, Europe &amp; Oceania timezones
                      </div>
                    </div>
                  </div>

                  {/* Official Social Media Profiles */}
                  <div className="pt-3 border-t border-[#E6EBF2]">
                    <div className="text-xs font-bold text-[#0A1020] uppercase tracking-wider mb-2.5">
                      Official Social Media Channels
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="https://x.com/botlytices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-black hover:text-white hover:border-black text-[#0A1020] flex items-center justify-center transition-colors"
                        title="Follow on X @botlytices"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>

                      <a
                        href="https://www.linkedin.com/company/botlytices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] text-[#0A1020] flex items-center justify-center transition-colors"
                        title="LinkedIn Company Page"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>

                      <a
                        href="https://www.instagram.com/botlytices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] text-[#0A1020] flex items-center justify-center transition-colors"
                        title="Instagram @botlytices"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>

                      <a
                        href="https://web.facebook.com/people/Botlytices/61588672514929/#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] text-[#0A1020] flex items-center justify-center transition-colors"
                        title="Facebook @Botlytices"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/muhammad-ali-husnain-nawab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] text-xs font-semibold text-[#0A1020] transition-colors ml-auto"
                        title="Founder LinkedIn Profile"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                        <span>Founder LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear 3-Step Process Card */}
              <div className="p-7 rounded-3xl bg-white border border-[#E6EBF2] space-y-4 shadow-xs">
                <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                  Fast &amp; Honest Turnaround
                </div>
                <h3 className="text-lg font-bold text-[#0A1020] font-display">
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#EBF3FF] text-[#006BFF] text-xs font-mono-code font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <p className="text-xs text-[#5D687A] leading-relaxed">
                      <strong className="text-[#0A1020]">Direct Review:</strong> Your inquiry is sent directly to{' '}
                      <span className="font-mono-code text-[#006BFF]">botlytices@gmail.com</span>.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#EBF3FF] text-[#006BFF] text-xs font-mono-code font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <p className="text-xs text-[#5D687A] leading-relaxed">
                      <strong className="text-[#0A1020]">Engineering Feedback:</strong> Muhammad Ali Husnain Nawab evaluates the scope, tools, and technical feasibility.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#EBF3FF] text-[#006BFF] text-xs font-mono-code font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <p className="text-xs text-[#5D687A] leading-relaxed">
                      <strong className="text-[#0A1020]">Personal Reply:</strong> We email you back with clear next steps and transparent timeline recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Streamlined 5-Field Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#E6EBF2] shadow-sm">
                {submitted ? (
                  <div className="py-10 text-center space-y-5">
                    <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
                        Message Dispatched to botlytices@gmail.com
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                        Thank You, {name}!
                      </h2>
                      <p className="text-sm text-[#5D687A] max-w-md mx-auto mt-2 leading-relaxed">
                        Your project inquiry has been received directly in our engineering inbox. We will review your details and email you at <strong className="text-[#0A1020]">{email}</strong> within 2 hours.
                      </p>
                    </div>

                    {ticketId && (
                      <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] max-w-sm mx-auto text-left space-y-1.5">
                        <div className="text-[11px] font-mono-code font-bold text-[#5D687A] uppercase">
                          Reference Ticket ID
                        </div>
                        <div className="text-base font-mono-code font-bold text-[#006BFF]">
                          {ticketId}
                        </div>
                        <div className="text-[11px] text-[#5D687A]">
                          Recipient: <span className="font-medium text-[#0A1020]">botlytices@gmail.com</span>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      {mailtoFallback && (
                        <a
                          href={mailtoFallback}
                          className="px-5 py-3 rounded-xl bg-[#006BFF] hover:bg-[#0055cc] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open in Your Email Client</span>
                        </a>
                      )}
                      <button
                        onClick={handleResetForm}
                        className="px-5 py-3 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-[#E6EBF2] text-xs font-semibold text-[#0A1020] transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#E6EBF2] pb-4">
                      <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                        Simple Contact Form
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display mt-1">
                        Send Your Message Directly
                      </h2>
                      <p className="text-xs sm:text-sm text-[#5D687A] mt-1">
                        Only 5 fields. Straight to <span className="font-semibold text-[#0A1020]">botlytices@gmail.com</span>.
                      </p>
                    </div>

                    {validationError && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-2xl flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                        <span>{validationError}</span>
                      </div>
                    )}

                    <div className="space-y-4">
                      {/* 1. Name Field */}
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] placeholder-[#8A95A5] focus:outline-none focus:border-[#006BFF] focus:bg-white transition-all"
                        />
                      </div>

                      {/* 2. Email Field */}
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] placeholder-[#8A95A5] focus:outline-none focus:border-[#006BFF] focus:bg-white transition-all"
                        />
                      </div>

                      {/* 3. Phone Number Field */}
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Phone Number / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +1 555 123 4567 or +44 7..."
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] placeholder-[#8A95A5] focus:outline-none focus:border-[#006BFF] focus:bg-white transition-all"
                        />
                        <p className="text-[11px] text-[#5D687A] mt-1">
                          Optional. If you want a direct call or WhatsApp reply, please include your country code.
                        </p>
                      </div>

                      {/* 4. Subject Field */}
                      <div>
                        <label htmlFor="contact-subject" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. Power BI Dashboard Development / React Web Build"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] placeholder-[#8A95A5] focus:outline-none focus:border-[#006BFF] focus:bg-white transition-all"
                        />
                      </div>

                      {/* 5. Description Field */}
                      <div>
                        <label htmlFor="contact-description" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Project Description / Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="contact-description"
                          required
                          rows={5}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Please describe what you are looking to build or solve, current pain points, or expected timelines..."
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] placeholder-[#8A95A5] focus:outline-none focus:border-[#006BFF] focus:bg-white transition-all resize-y"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 text-sm font-semibold btn-primary-gradient flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 transition-all shadow-md hover:shadow-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending to botlytices@gmail.com...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Inquiry Directly to botlytices@gmail.com</span>
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-center text-[#5D687A] mt-2.5">
                        By submitting, you acknowledge our{' '}
                        <button
                          type="button"
                          onClick={() => onNavigate('/terms-of-service')}
                          className="text-[#006BFF] underline hover:text-[#0052CC] cursor-pointer"
                        >
                          Terms of Service
                        </button>
                        ,{' '}
                        <button
                          type="button"
                          onClick={() => onNavigate('/privacy-policy')}
                          className="text-[#006BFF] underline hover:text-[#0052CC] cursor-pointer"
                        >
                          Privacy Policy
                        </button>
                        , and{' '}
                        <button
                          type="button"
                          onClick={() => onNavigate('/refund-policy')}
                          className="text-[#006BFF] underline hover:text-[#0052CC] cursor-pointer"
                        >
                          Refund Policy
                        </button>
                        . Delivered directly to botlytices@gmail.com with strict confidentiality.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Client Success Stories & Happy Clients Section */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] border border-[#006BFF]/20 text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Client Success Stories &amp; Delivery Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight leading-tight">
              Happy Clients, Proven Delivery &amp; Real Outcomes.
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
              BOTLYTICES collaborates with international businesses, founders, and operational teams to transform ideas into reliable, high-performance software and automated data infrastructure.
            </p>
          </div>

          {/* 4 Rich Success Story Cards with Real High-Res Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {CLIENT_SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-[11px] font-mono-code font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {story.category}
                      </span>
                      <span className="text-xs font-medium text-slate-200">
                        {story.location}
                      </span>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="p-7 sm:p-8 space-y-4">
                    <div>
                      <div className="text-xs font-mono-code text-[#006BFF] font-semibold">
                        {story.clientType}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A1020] font-display mt-1">
                        {story.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic bg-white p-4 rounded-2xl border border-[#E6EBF2]">
                      “{story.quote}”
                    </p>

                    <div>
                      <div className="text-[11px] font-bold text-[#0A1020] uppercase tracking-wider mb-2">
                        Key Solutions Delivered:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {story.deliverables.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#E6EBF2] text-xs font-medium text-[#0A1020]"
                          >
                            <Check className="w-3 h-3 text-[#006BFF]" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outcome Footer Banner */}
                <div className="px-7 py-4 bg-white border-t border-[#E6EBF2] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="text-xs font-bold text-[#0A1020]">{story.outcome}</span>
                  </div>
                  <span className="text-[11px] text-[#006BFF] font-semibold group-hover:translate-x-1 transition-transform">
                    Verified Outcome →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Client Experience Commitments Grid */}
          <div className="mt-14 pt-14 border-t border-[#E6EBF2]">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Our Guarantee to Every Partner
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                How We Make Every Collaboration Seamless
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] font-bold">
                  01
                </div>
                <h4 className="text-base font-bold text-[#0A1020] font-display">
                  Direct Engineer Access
                </h4>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  You communicate directly with Muhammad Ali Husnain Nawab and senior engineers. No sales middlemen or lost context.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] font-bold">
                  02
                </div>
                <h4 className="text-base font-bold text-[#0A1020] font-display">
                  Clear Milestone Staging
                </h4>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Interactive staging links and weekly reviews let you experience progress first-hand before anything goes live.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] font-bold">
                  03
                </div>
                <h4 className="text-base font-bold text-[#0A1020] font-display">
                  Dedicated Direct Inbox
                </h4>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  All inquiries, tickets, and scope requests route straight to botlytices@gmail.com and WhatsApp for rapid reply.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] font-bold">
                  04
                </div>
                <h4 className="text-base font-bold text-[#0A1020] font-display">
                  Post-Launch Handover
                </h4>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Full codebase ownership, comprehensive documentation, and 30-day warranty support included with every build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Exploration Cards */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase mb-2">
              Explore Our Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
              Looking for a Specific Service Division?
            </h2>
            <p className="text-sm text-[#5D687A] mt-1">
              Browse our service pages to review deliverables, tools, and technical specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Web Development',
                sub: 'UI/UX, Code & Maintenance (from $16/mo, 1/3 rate)',
                path: '/services/web-development',
              },
              {
                title: 'Data & Analytics',
                sub: 'Power BI, Microsoft Fabric & Dashboards',
                path: '/services/data-analytics',
              },
              {
                title: 'AI Automation',
                sub: 'WhatsApp Bots, CRM & Workflow Triage',
                path: '/services/ai-automation',
              },
              {
                title: 'IT Support & Cloud',
                sub: 'Hardware, Networks & System Care',
                path: '/services/it-support',
              },
              {
                title: 'CCTV & Security',
                sub: 'Surveillance, Access Control & Monitoring',
                path: '/services/security-surveillance',
              },
            ].map((card) => (
              <button
                key={card.title}
                onClick={() => onNavigate(card.path)}
                className="p-5 rounded-2xl bg-white hover:bg-[#F3F7FC] border border-[#E6EBF2] hover:border-[#006BFF] text-left transition-all flex flex-col justify-between cursor-pointer group shadow-xs"
              >
                <div>
                  <div className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                    {card.title}
                  </div>
                  <p className="text-xs text-[#5D687A] mt-1 leading-relaxed">{card.sub}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs font-bold text-[#006BFF]">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Honest FAQ Strip */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                q: 'How fast do you respond?',
                a: 'All inquiries sent to botlytices@gmail.com are reviewed by senior engineers within 2 hours during active business hours.',
              },
              {
                q: 'Is the consultation free?',
                a: 'Yes. We provide a completely free initial discovery consultation to evaluate your goals and outline the right technical stack.',
              },
              {
                q: 'Can we start with a small pilot?',
                a: 'Yes! Many clients start with a single dashboard, UI redesign, or automation bot, then expand to comprehensive retainers.',
              },
              {
                q: 'Do you offer ongoing care?',
                a: 'Yes, we provide flexible website maintenance, cloud hosting management, and continuous data pipeline care.',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2"
              >
                <h3 className="text-sm font-bold text-[#0A1020] font-display">{item.q}</h3>
                <p className="text-xs text-[#5D687A] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
