import React from 'react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Lock, Eye, Database, Globe, UserCheck, FileText, Mail } from 'lucide-react';

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
  paragraphs: string[];
}

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'overview-commitment',
    number: '01',
    title: 'Commitment to Privacy & Transparency',
    icon: ShieldCheck,
    paragraphs: [
      'At BOTLYTICES (https://botlytices.com/), we respect the confidentiality and privacy of every client, partner, and website visitor. This Privacy Policy outlines how we collect, process, store, and safeguard your technical and personal information when you use our website, consult with our engineering team, or engage our services.',
      'We never sell, monetize, or broker personal or corporate information. Any information shared with us is used exclusively to evaluate project requirements, execute technical deliverables, and provide ongoing infrastructure care.',
    ],
  },
  {
    id: 'information-collected',
    number: '02',
    title: 'Information We Collect',
    icon: Eye,
    paragraphs: [
      'Direct Inquiries & Project Briefs: When you submit our project inquiry form, contact form, or message us on WhatsApp, we collect your name, email address, phone number, company/organization name, and project description.',
      'Technical Engagement Data: During active engineering contracts, you may provide access credentials, API keys, repository links, DNS settings, or network configuration files necessary for implementation. These are stored in encrypted vaults and deleted upon project handover or contract termination.',
      'Log Data & Anonymous Analytics: When accessing our website, our web server may log standard anonymous request data (IP address, browser type, referring URL, time of request). We do not use intrusive tracking cookies, behavioral ad-trackers, or cross-site fingerprinting.',
    ],
  },
  {
    id: 'use-of-information',
    number: '03',
    title: 'How We Use Your Information',
    icon: FileText,
    paragraphs: [
      'To respond directly to project inquiries, prepare technical quotes, and schedule discovery consultations.',
      'To design, build, test, and deploy agreed web applications, IT networks, digital presence listings, AI automations, and CCTV security installations.',
      'To provide ongoing website care, emergency IT support, software updates, and security patch alerts.',
      'To comply with applicable legal, accounting, and regulatory obligations.',
    ],
  },
  {
    id: 'security-data-storage',
    number: '04',
    title: 'Data Storage, Vaulting & Security Safeguards',
    icon: Lock,
    paragraphs: [
      'All web communications are encrypted in transit using industry-standard TLS 1.3 / SSL encryption with Strict-Transport-Security (HSTS).',
      'Client credentials, server SSH keys, and third-party API tokens are handled strictly through encrypted secret managers and are never hardcoded in public repositories or accessible to unauthorized personnel.',
      'Access to client project data is restricted on a strict need-to-know basis to senior engineers directly assigned to your deliverables.',
    ],
  },
  {
    id: 'third-party-services',
    number: '05',
    title: 'Third-Party Services & Subprocessors',
    icon: Database,
    paragraphs: [
      'In delivering our services, we may interact with industry-standard third-party providers upon your authorization, including cloud hosting platforms (AWS, Vercel, Cloudflare), domain registrars, payment processors (Stripe, PayPal), CRM systems, or WhatsApp Business API.',
      'Each third-party service operates under its respective privacy terms and security certifications. We configure all external integrations using principle-of-least-privilege access tokens.',
    ],
  },
  {
    id: 'international-rights',
    number: '06',
    title: 'International Data Rights & GDPR Compliance',
    icon: Globe,
    paragraphs: [
      'BOTLYTICES works with clients across the United States, United Kingdom, Canada, Australia, New Zealand, Europe, UAE, and internationally. Regardless of your location, we uphold the core principles of the EU/UK General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).',
      'You hold the right to request access to any personal data we hold about you, request rectification of inaccurate records, request deletion of your information ("right to be forgotten"), or restrict processing at any time without penalty.',
    ],
  },
  {
    id: 'data-retention',
    number: '07',
    title: 'Data Retention & Archival Policies',
    icon: UserCheck,
    paragraphs: [
      'Inquiry communications and project briefs are retained for up to 24 months to support ongoing engineering continuity, warranty claims, or future contract extensions.',
      'Staging credentials, temporary database dumps, and testing access tokens are purged within 30 days following project completion and verified client sign-off.',
    ],
  },
  {
    id: 'contact-privacy',
    number: '08',
    title: 'Privacy Inquiries & Data Officer Contact',
    icon: Mail,
    paragraphs: [
      'To exercise any privacy rights, request data deletion, or ask questions regarding this policy, please email our team directly at botlytices@gmail.com with the subject line "Privacy Request".',
      'We review and respond to all verified data requests within 48 business hours.',
    ],
  },
];

export const PrivacyPolicyPage: React.FC<{ onNavigate?: (path: string) => void }> = ({
  onNavigate: propNavigate,
}) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Privacy Policy | BOTLYTICES Data Protection & Security"
        description="Learn how BOTLYTICES protects client data, project credentials, and visitor privacy across our web development, IT, and AI automation services."
        path="/privacy-policy"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Privacy Policy' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Hero */}
      <section className="py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Legal &amp; Compliance · Data Governance
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Privacy Policy.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              How BOTLYTICES handles, safeguards, and respects your business information, technical
              credentials, and personal data across all client engagements.
            </p>
            <div className="text-xs text-[#5D687A] pt-1">
              Effective Date: October 2026 · Compliant with GDPR, CCPA &amp; Global Privacy Standards
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 lg:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Left Navigation */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-4">
              <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                Document Sections
              </div>
              <nav className="space-y-2" aria-label="Privacy sections">
                {PRIVACY_SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg text-xs font-medium text-[#5D687A] hover:text-[#0052CC] hover:bg-white transition-colors"
                  >
                    <span className="font-mono-code font-bold text-[#0052CC]">{sec.number}</span>
                    <span>{sec.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Right Content */}
            <div className="lg:col-span-8 space-y-8">
              {PRIVACY_SECTIONS.map((sec) => {
                const Icon = sec.icon;
                return (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="scroll-mt-28 p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F3F7FC] border border-[#E6EBF2] flex items-center justify-center text-[#0052CC]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono-code font-bold text-[#0052CC] mr-2">
                          Section {sec.number}
                        </span>
                        <h2 className="inline text-lg sm:text-xl font-bold text-[#0A1020] font-display">
                          {sec.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-3 pt-1">
                      {sec.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-sm sm:text-base text-[#5D687A] leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
