import React from 'react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { useApp } from '../context/AppContext';
import { Cookie, ShieldCheck, CheckCircle2, Sliders, RefreshCw, Mail } from 'lucide-react';

interface CookieSection {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
  paragraphs: string[];
}

const COOKIE_SECTIONS: CookieSection[] = [
  {
    id: 'what-are-cookies',
    number: '01',
    title: 'What Are Cookies?',
    icon: Cookie,
    paragraphs: [
      'Cookies are small text files stored on your computer, smartphone, or tablet when you visit a website. They help websites remember preferences, ensure security during sessions, and understand how the site is accessed.',
      'At BOTLYTICES (https://botlytices.com/), we practice zero-intrusive tracking. We do not use third-party behavioral advertising cookies, cross-device profiling scripts, or data-broker trackers.',
    ],
  },
  {
    id: 'cookies-we-use',
    number: '02',
    title: 'Types of Cookies We Use',
    icon: ShieldCheck,
    paragraphs: [
      '1. Strictly Necessary & Security Cookies: These technical cookies are essential for our website to operate securely. They help authenticate sessions, prevent cross-site request forgery (CSRF), and maintain firewall integrity.',
      '2. Functional & Preference Cookies: These remember user preferences, such as selected currency in our international rate calculator or dark/light contrast settings, ensuring a smooth return experience.',
      '3. Minimal Performance Telemetry: We may utilize anonymous, aggregated server logs to detect server errors, monitor page load speeds, and verify uptime without attaching cookies to individual identities.',
    ],
  },
  {
    id: 'cookie-table',
    number: '03',
    title: 'Cookie Classification & Lifespans',
    icon: CheckCircle2,
    paragraphs: [
      'Session Security Token: Duration: Session only. Purpose: Protects form submissions and API health requests from automated bot attacks.',
      'Regional Preference: Duration: 30 days. Purpose: Remembers your preferred regional currency in rate cards (USD, GBP, CAD, AUD, EUR, AED).',
      'Third-Party Tracking: NONE. We deliberately do not embed Facebook Pixel, TikTok tracking tags, or programmatic advertising cookies on our website.',
    ],
  },
  {
    id: 'managing-cookies',
    number: '04',
    title: 'How You Can Manage or Disable Cookies',
    icon: Sliders,
    paragraphs: [
      'You can control and manage cookies through your browser settings at any time. You can choose to block all cookies, accept only first-party cookies, or clear existing cookies upon closing your browser.',
      'Please note that blocking strictly necessary security cookies may occasionally prevent interactive features—such as real-time quote generation or inquiry submission—from functioning properly.',
    ],
  },
  {
    id: 'policy-updates',
    number: '05',
    title: 'Updates to This Cookie Policy',
    icon: RefreshCw,
    paragraphs: [
      'We may update this Cookie Policy periodically to reflect technological changes, regulatory requirements, or improvements to our platform.',
      'Any changes will be posted immediately with an updated revision date at the top of this document.',
    ],
  },
  {
    id: 'contact-cookies',
    number: '06',
    title: 'Questions Regarding Cookie Policies',
    icon: Mail,
    paragraphs: [
      'If you have any questions or feedback regarding our cookie and tracking practices, please email botlytices@gmail.com.',
    ],
  },
];

export const CookiePolicyPage: React.FC<{ onNavigate?: (path: string) => void }> = ({
  onNavigate: propNavigate,
}) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Cookie Policy | BOTLYTICES Tracking & Cookie Information"
        description="Read the BOTLYTICES Cookie Policy. Learn about our commitment to minimal technical cookies, zero invasive ad-trackers, and user privacy."
        path="/cookie-policy"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Cookie Policy' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Hero */}
      <section className="py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Legal &amp; Compliance · Transparency
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Cookie Policy.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Transparent information on how BOTLYTICES uses strictly necessary cookies, preferences,
              and our strict policy against third-party advertising trackers.
            </p>
            <div className="text-xs text-[#5D687A] pt-1">
              Last Updated: October 2026 · Built with privacy-first web architecture
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
              <nav className="space-y-2" aria-label="Cookie sections">
                {COOKIE_SECTIONS.map((sec) => (
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
              {COOKIE_SECTIONS.map((sec) => {
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
