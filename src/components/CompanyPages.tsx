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
} from 'lucide-react';
import {
  SEVEN_STEP_PROCESS,
  CATEGORIZED_FAQS,
  FaqCategoryName,
} from '../data/portfolioAndFaqs';
import { DIVISIONS } from '../data/siteArchitecture';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';
import tabLogo from '../assets/images/botlytices-tab-logo.png';

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

      {/* 8. FINAL CTA */}
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
                onClick={() => onOpenQuote()}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-colors cursor-pointer"
              >
                Quick Consultation Modal
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
// 9. CONTACT US PAGE (/contact) — HIGH-CONVERTING CONSULTATION EXPERIENCE
// ============================================================================
const SERVICE_CHECKBOX_GROUPS = [
  {
    division: 'Web Development',
    items: [
      'Web Design & UI/UX',
      'Web Development',
      'E-commerce & Web Applications',
      'SEO, Hosting & Website Care',
    ],
  },
  {
    division: 'IT Support & Infrastructure',
    items: [
      'Hardware & Device Support',
      'Software & System Support',
      'Networking & Wi-Fi',
      'Cybersecurity & IT Security',
    ],
  },
  {
    division: 'Digital Presence & Branding',
    items: [
      'Brand Identity & Logo Design',
      'Social Media & Content',
      'Business Profiles & Local Presence',
      'Digital Marketing & Growth',
    ],
  },
  {
    division: 'AI Automation',
    items: [
      'AI Voice Assistants',
      'WhatsApp & Chat Automation',
      'AI Lead Generation',
      'Workflow & Business Automation',
    ],
  },
  {
    division: 'Security & Surveillance',
    items: [
      'CCTV & Video Surveillance',
      'Access Control & Biometrics',
      'Remote Monitoring & Security Systems',
      'Security Maintenance & Upgrades',
    ],
  },
];

export const ContactPage: React.FC<{ onNavigate: (path: string) => void }> = ({
  onNavigate,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);
  const [projectType, setProjectType] = useState('New Project');
  const [budgetRange, setBudgetRange] = useState('Not Sure Yet');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [details, setDetails] = useState('');
  const [contactMethod, setContactMethod] = useState('Email');

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Contact Us — Let’s Talk About Your Project | BOTLYTICES"
        description="Whether you need a website, IT support, stronger digital presence, AI automation or security solutions, tell us what you're looking to achieve."
        path="/contact"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
        onNavigate={onNavigate}
      />

      {/* Contact Hero */}
      <section className="py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              Direct Technology Consultation
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Let’s Talk About Your Project or Business Needs.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Whether you need a website, IT support, stronger digital presence, AI automation or
              security solutions, tell us what you’re looking to achieve and we’ll guide you from
              there.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Experience */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: Direct Contact Channels, Quick Service Selector, What Happens Next */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Contact Channels Card */}
              <div className="p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-5 shadow-xs">
                <div>
                  <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                    Direct Channels
                  </div>
                  <h2 className="text-xl font-bold text-[#0A1020] font-display mt-1">
                    Get in Touch Directly
                  </h2>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:info@botlytices.com"
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F3F7FC] border border-[#E6EBF2] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5D687A]">Email Us</div>
                      <div className="text-sm font-bold text-[#0A1020]">info@botlytices.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5D687A]">Phone &amp; WhatsApp Inquiry</div>
                      <div className="text-sm font-bold text-[#0A1020]">
                        Available for Scheduled Calls &amp; WhatsApp
                      </div>
                      <div className="text-[11px] text-[#5D687A] mt-0.5">
                        Select Phone or WhatsApp in the form for direct callback
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5D687A]">Business Hours &amp; Coverage</div>
                      <div className="text-sm font-bold text-[#0A1020]">
                        Monday – Saturday · 9:00 AM – 6:00 PM
                      </div>
                      <div className="text-[11px] text-[#5D687A] mt-0.5">
                        Remote digital delivery worldwide · On-site IT &amp; CCTV installation
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5D687A]">Service Area</div>
                      <div className="text-sm font-bold text-[#0A1020]">
                        Global Digital Solutions &amp; On-Site Technical Deployment
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens After You Contact Us (4 Steps) */}
              <div className="p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-5 shadow-xs">
                <div>
                  <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                    Clear Next Steps
                  </div>
                  <h2 className="text-xl font-bold text-[#0A1020] font-display mt-1">
                    What Happens After You Contact Us
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'We Review Your Request',
                      desc: 'Our technical team reviews your selected services, goals, and requirements.',
                    },
                    {
                      step: '02',
                      title: 'We Contact You Within 1 Business Day',
                      desc: 'We reach out via your preferred channel (Email, Phone, or WhatsApp).',
                    },
                    {
                      step: '03',
                      title: 'We Discuss Requirements & Options',
                      desc: 'A focused consultation to clarify scope, answer questions, and review options.',
                    },
                    {
                      step: '04',
                      title: 'We Recommend the Right Solution & Next Steps',
                      desc: 'You receive a clear written scope, timeline, and transparent quotation.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-[#F3F7FC] border border-[#E6EBF2] flex items-center justify-center text-xs font-mono-code font-bold text-[#006BFF] shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0A1020]">{item.title}</div>
                        <p className="text-xs text-[#5D687A] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Comprehensive Multi-Service Contact & Project Intake Form */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#E6EBF2] shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1020] font-display">
                      Thank You, {fullName}
                    </h3>
                    <p className="text-sm text-[#5D687A] max-w-md mx-auto leading-relaxed">
                      We have received your inquiry regarding{' '}
                      <strong className="text-[#0A1020]">
                        {selectedServices.length > 0
                          ? selectedServices.join(', ')
                          : 'your project'}
                      </strong>
                      . A specialist will contact you via{' '}
                      <strong className="text-[#0A1020]">{contactMethod}</strong> within 1 business
                      day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs font-semibold text-[#0A1020] cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#E6EBF2] pb-4">
                      <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                        Project &amp; Service Inquiry Form
                      </div>
                      <h2 className="text-2xl font-bold text-[#0A1020] font-display mt-1">
                        Tell Us What You Need Help With
                      </h2>
                    </div>

                    {/* 1. Basic Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Company Name <span className="text-[#5D687A] font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Your business or organization"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 / International number"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                        />
                      </div>
                    </div>

                    {/* 2. Multi-Select Service Needed (Grouped across all 5 Divisions) */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-[#0A1020]">
                          Service(s) Needed <span className="text-[#5D687A] font-normal">(Select one or more)</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => toggleService('Not Sure — Need Advice')}
                          className={`text-xs font-semibold cursor-pointer ${
                            selectedServices.includes('Not Sure — Need Advice')
                              ? 'text-[#006BFF] underline'
                              : 'text-[#5D687A] hover:text-[#006BFF]'
                          }`}
                        >
                          Not Sure — Need Advice?
                        </button>
                      </div>

                      <div className="space-y-3 max-h-72 overflow-y-auto p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2]">
                        {SERVICE_CHECKBOX_GROUPS.map((group) => (
                          <div key={group.division} className="space-y-1.5">
                            <div className="text-[11px] font-mono-code font-bold text-[#006BFF] uppercase">
                              {group.division}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {group.items.map((item) => {
                                const isChecked = selectedServices.includes(item);
                                return (
                                  <button
                                    type="button"
                                    key={item}
                                    onClick={() => toggleService(item)}
                                    className={`px-3 py-2 rounded-lg text-left text-xs font-medium border transition-all flex items-center gap-2 cursor-pointer ${
                                      isChecked
                                        ? 'bg-[#006BFF] text-white border-[#006BFF]'
                                        : 'bg-white text-[#0A1020] border-[#E6EBF2] hover:border-[#006BFF]/50'
                                    }`}
                                  >
                                    <span
                                      className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                                        isChecked
                                          ? 'bg-white text-[#006BFF] border-white'
                                          : 'border-slate-300'
                                      }`}
                                    >
                                      {isChecked && '✓'}
                                    </span>
                                    <span className="truncate">{item}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Project Type, Timeline & Budget Range */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Project Type
                        </label>
                        <select
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs sm:text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                        >
                          <option value="New Project">New Project</option>
                          <option value="Redesign / Upgrade">Redesign / Upgrade</option>
                          <option value="Ongoing Support">Ongoing Support</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Urgent Issue">Urgent Issue</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Timeline
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs sm:text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                        >
                          <option value="Immediate / Urgent">Immediate / Urgent</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="1 – 3 Months">1 – 3 Months</option>
                          <option value="Planning Ahead">Planning Ahead</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                          Estimated Budget <span className="text-[#5D687A] font-normal">(Optional)</span>
                        </label>
                        <select
                          value={budgetRange}
                          onChange={(e) => setBudgetRange(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs sm:text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                        >
                          <option value="Not Sure Yet">Not Sure Yet</option>
                          <option value="Under £1,500 / $2,000">Under £1,500 / $2,000</option>
                          <option value="£1,500 – £5,000 / $2k – $6k">£1,500 – £5,000</option>
                          <option value="£5,000 – £12,000+">£5,000 – £12,000+</option>
                          <option value="Monthly Retainer / Care Plan">Monthly Support Plan</option>
                        </select>
                      </div>
                    </div>

                    {/* 4. Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Email', 'Phone', 'WhatsApp'].map((method) => (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setContactMethod(method)}
                            className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              contactMethod === method
                                ? 'bg-[#006BFF] text-white border-[#006BFF]'
                                : 'bg-[#F8FAFC] text-[#5D687A] border-[#E6EBF2] hover:text-[#0A1020]'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 5. Project Details */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A1020] mb-1.5">
                        Project Details / Goals
                      </label>
                      <textarea
                        rows={4}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Tell us about your current website or systems, what you want to achieve, or any questions you have..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-7 text-sm font-semibold btn-primary-gradient flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Selector Cards */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase mb-2">
              Explore Before You Decide
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
              Not Sure Which Service Fits Your Needs?
            </h2>
            <p className="text-sm text-[#5D687A] mt-1">
              Browse our five service divisions to see detailed deliverables, examples, and common
              problems solved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Need a Website', sub: 'Design, Dev, E-commerce & SEO', path: '/services/web-development' },
              { title: 'Need IT Support', sub: 'Hardware, OS, Networks & Security', path: '/services/it-support' },
              { title: 'Need Digital Presence', sub: 'Branding, Maps & Social Media', path: '/services/digital-presence' },
              { title: 'Need AI Automation', sub: 'Voice, WhatsApp & Lead Flows', path: '/services/ai-automation' },
              { title: 'Need CCTV / Security', sub: 'Cameras, Biometrics & Monitoring', path: '/services/security-surveillance' },
            ].map((card) => (
              <button
                key={card.title}
                onClick={() => onNavigate(card.path)}
                className="p-5 rounded-2xl bg-[#F8FAFC] hover:bg-[#F3F7FC] border border-[#E6EBF2] hover:border-[#006BFF] text-left transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                    {card.title}
                  </div>
                  <p className="text-xs text-[#5D687A] mt-1 leading-relaxed">{card.sub}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs font-bold text-[#006BFF]">
                  <span>View Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQ Strip */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                q: 'How quickly do you respond?',
                a: 'We review and respond to all inquiries within 1 business day.',
              },
              {
                q: 'Do you offer consultations?',
                a: 'Yes, every project starts with a free initial consultation to understand your goals.',
              },
              {
                q: 'Can we start with a small project?',
                a: 'Absolutely. Many clients begin with a single website, fix, or setup and expand later.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we offer flexible hosting, website care, and IT/security maintenance plans.',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-2"
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
