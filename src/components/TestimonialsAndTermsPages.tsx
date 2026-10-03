import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  ExternalLink,
  Scale,
  FileText,
  CreditCard,
  Code2,
  ShieldCheck,
  Server,
  AlertCircle,
  Lock,
  Mail,
} from 'lucide-react';
import { VERIFIED_TESTIMONIALS, TestimonialItem } from '../data/portfolioAndFaqs';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';

interface PageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

const TESTIMONIAL_FILTERS = [
  'All',
  'Web Development',
  'SEO',
  'IT Support',
  'AI Automation',
  'Branding',
] as const;

// ============================================================================
// 5. TESTIMONIALS PAGE (/testimonials)
// ============================================================================
export const TestimonialsPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] =
    useState<(typeof TESTIMONIAL_FILTERS)[number]>('All');

  const featuredTestimonial =
    VERIFIED_TESTIMONIALS.find((t) => t.featured) || VERIFIED_TESTIMONIALS[0];

  const filteredTestimonials: TestimonialItem[] =
    activeFilter === 'All'
      ? VERIFIED_TESTIMONIALS
      : VERIFIED_TESTIMONIALS.filter((t) => t.projectType === activeFilter);

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Client Testimonials & Feedback | BOTLYTICES"
        description="Read what businesses say about working with us across web development, IT support, digital presence, automation and technology projects."
        path="/testimonials"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Testimonials' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Testimonials Hero */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              05 · Verified Client Feedback
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              What Clients Say About Working With Us.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Read what businesses say about working with us across web development, IT support,
              digital presence, automation and technology projects.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-[#E6EBF2]">
            {TESTIMONIAL_FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#006BFF] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-[#5D687A] border border-[#E6EBF2] hover:text-[#0A1020]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Highlight */}
      <section className="py-14 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-[#E6EBF2] p-8 sm:p-12 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                <Quote className="w-5 h-5 text-[#006BFF]" />
                <span>Featured Client Testimonial · {featuredTestimonial.projectType}</span>
              </div>
              {featuredTestimonial.projectUrl && (
                <a
                  href={featuredTestimonial.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1"
                >
                  <span>Visit Live Client Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <blockquote className="text-xl sm:text-3xl font-bold text-[#0A1020] font-display leading-snug max-w-4xl">
              “{featuredTestimonial.quote}”
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <div className="text-sm font-bold text-[#0A1020]">
                  {featuredTestimonial.clientName}
                </div>
                <div className="text-[#5D687A] mt-0.5">
                  {featuredTestimonial.role} ·{' '}
                  <span className="font-semibold text-[#0A1020]">
                    {featuredTestimonial.company}
                  </span>
                </div>
              </div>

              {featuredTestimonial.caseStudySlug && (
                <button
                  onClick={() =>
                    onNavigate(`/case-studies/${featuredTestimonial.caseStudySlug}`)
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F3F7FC] border border-[#E6EBF2] text-xs font-bold text-[#006BFF] inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read Associated Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-white border border-[#E6EBF2] flex flex-col justify-between premium-card"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono-code font-bold text-[#006BFF]">
                      {item.projectType}
                    </span>
                    <Quote className="w-5 h-5 text-[#006BFF]/40" />
                  </div>

                  <blockquote className="text-sm sm:text-base text-[#0A1020] font-medium leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E6EBF2] space-y-3">
                  <div>
                    <div className="text-sm font-bold text-[#0A1020]">{item.clientName}</div>
                    <div className="text-xs text-[#5D687A]">
                      {item.role} · {item.company}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    {item.caseStudySlug && (
                      <button
                        onClick={() => onNavigate(`/case-studies/${item.caseStudySlug}`)}
                        className="font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5D687A] hover:text-[#0A1020] inline-flex items-center gap-1"
                      >
                        <span>Live Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Work With Us Trust Strip */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Clear Scope & Pricing',
                desc: 'Every project begins with a written scope, milestone schedule, and transparent quotation.',
              },
              {
                title: 'Direct Engineering Access',
                desc: 'Communicate directly with the designers and engineers building your systems.',
              },
              {
                title: 'Multi-Disciplinary Delivery',
                desc: 'Websites, SEO, IT support, AI automation, and security coordinated under one roof.',
              },
              {
                title: 'Ongoing Post-Launch Care',
                desc: 'Reliable hosting, backups, updates, and responsive support after deployment.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-2"
              >
                <CheckCircle2 className="w-5 h-5 text-[#006BFF]" />
                <h3 className="text-base font-bold text-[#0A1020] font-display">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5D687A] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="text-xs font-mono-code text-[#00C8FF]">Work With BOTLYTICES</div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                Ready to start your project with a reliable technology partner?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Contact our team to discuss your requirements and receive a clear implementation
                plan.
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
// 8. TERMS & CONDITIONS PAGE (/terms)
// ============================================================================
const TERMS_SECTIONS = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    icon: Scale,
    paragraphs: [
      'These Terms & Conditions govern the provision of web development, UI/UX design, hosting, SEO, digital branding, IT support, network configuration, AI automation, and security/CCTV services provided by BOTLYTICES ("Company", "we", "us", or "our") to any client or organization ("Client", "you", or "your").',
      'By approving a project proposal, signing a statement of work, or using our services, you agree to be bound by these Terms & Conditions alongside any specific project quotation or service agreement.',
    ],
  },
  {
    id: 'services',
    number: '02',
    title: 'Services',
    icon: Server,
    paragraphs: [
      'BOTLYTICES provides technology and digital solutions across five primary divisions: Web Development, IT Support & Infrastructure, Digital Presence & Branding, AI Automation, and Security & Surveillance.',
      'The exact deliverables, technical specifications, and inclusions for each engagement are defined in the written Project Proposal or Statement of Work shared with the Client prior to commencement.',
    ],
  },
  {
    id: 'project-scope-deliverables',
    number: '03',
    title: 'Project Scope & Deliverables',
    icon: FileText,
    paragraphs: [
      'All work is carried out strictly in accordance with the agreed written project scope. Any requests for additional pages, custom features, third-party integrations, or additional hardware installations outside the original scope will be assessed and quoted separately as a change request.',
      'Client delays in providing required text, imagery, brand assets, credentials, or physical site access may adjust estimated delivery timelines accordingly.',
    ],
  },
  {
    id: 'payments-billing',
    number: '04',
    title: 'Payments & Billing',
    icon: CreditCard,
    paragraphs: [
      'Unless otherwise specified in a written proposal, project-based engagements require an initial deposit prior to work commencing, with remaining milestone payments due upon design approval, staging completion, or prior to final live deployment/installation.',
      'Recurring services—such as managed hosting, domain renewals, website care plans, ongoing SEO, or IT maintenance retainers—are billed on a monthly or annual cycle as agreed.',
    ],
  },
  {
    id: 'intellectual-property',
    number: '05',
    title: 'Intellectual Property',
    icon: Code2,
    paragraphs: [
      'Upon receipt of full and final payment for a project, ownership of the final custom website designs, bespoke graphics, and client-specific content created specifically for the Client transfers to the Client.',
      'BOTLYTICES retains ownership of underlying reusable code libraries, internal engineering frameworks, pre-existing tools, and retains the right to display completed public projects in our portfolio and case studies unless a non-disclosure agreement states otherwise.',
    ],
  },
  {
    id: 'client-responsibilities',
    number: '06',
    title: 'Client Responsibilities',
    icon: CheckCircle2,
    paragraphs: [
      'The Client is responsible for ensuring that all text, logos, photography, customer data, and materials supplied to BOTLYTICES are accurate, lawful, and do not infringe any third-party copyright or trademark.',
      'For on-site IT, networking, or CCTV installations, the Client is responsible for providing safe working access to the premises and obtaining any necessary building or landlord permissions.',
    ],
  },
  {
    id: 'third-party-services',
    number: '07',
    title: 'Third-Party Services',
    icon: Server,
    paragraphs: [
      'Projects may integrate with third-party platforms such as cloud hosting providers, domain registrars, Shopify, WooCommerce, Microsoft 365, Google Workspace, WhatsApp Business API, OpenAI, or hardware manufacturers.',
      'While we configure and integrate these tools professionally, BOTLYTICES is not responsible for upstream outages, pricing changes, or policy modifications made by external third-party platforms.',
    ],
  },
  {
    id: 'warranties-liability',
    number: '08',
    title: 'Warranties & Limitation of Liability',
    icon: AlertCircle,
    paragraphs: [
      'We test all websites, automations, IT configurations, and security installations thoroughly prior to handover. However, technology systems operate in dynamic environments; we do not warrant that any website, network, or security system will be immune from all external cyber threats, third-party downtime, or physical tampering.',
      'To the maximum extent permitted by law, BOTLYTICES’s total liability for any claim arising out of a service agreement shall not exceed the total fees paid by the Client for the specific service giving rise to the claim.',
    ],
  },
  {
    id: 'support-maintenance',
    number: '09',
    title: 'Support & Maintenance',
    icon: ShieldCheck,
    paragraphs: [
      'Post-launch bug fixes within the agreed handover window are resolved promptly at no additional cost. Ongoing software updates, security patches, backups, content edits, or hardware servicing after handover are covered under an active Website Care or IT/Security Maintenance plan, or billed at standard support rates.',
    ],
  },
  {
    id: 'privacy-confidentiality',
    number: '10',
    title: 'Privacy & Confidentiality',
    icon: Lock,
    paragraphs: [
      'Both parties agree to keep confidential any non-public business information, system credentials, network diagrams, and customer data shared during the course of an engagement. We implement strict access controls and never sell client data to third parties.',
    ],
  },
  {
    id: 'contact-information',
    number: '11',
    title: 'Contact Information',
    icon: Mail,
    paragraphs: [
      'If you have any questions regarding these Terms & Conditions, project proposals, or service policies, please contact BOTLYTICES directly via our Contact page or email info@botlytices.com.',
    ],
  },
];

export const TermsPage: React.FC<{ onNavigate: (path: string) => void }> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="Terms & Conditions | BOTLYTICES Service Policies"
        description="Company policies, project scope terms, intellectual property, third-party integrations, and support terms for BOTLYTICES services."
        path="/terms"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Terms & Conditions' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Terms Hero */}
      <section className="py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              08 · Service Policies &amp; Legal Terms
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Terms &amp; Conditions.
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Clear, transparent terms governing our web development, IT infrastructure, digital
              presence, AI automation, and security engagements.
            </p>
            <div className="text-xs text-[#5D687A] pt-1">
              Last Updated: October 2026 · Applies to all BOTLYTICES service divisions
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout: Sticky Section Navigation + Readable Clauses */}
      <section className="py-16 lg:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Left Table of Contents */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-4">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Document Sections
              </div>
              <nav className="space-y-2">
                {TERMS_SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg text-xs font-medium text-[#5D687A] hover:text-[#006BFF] hover:bg-white transition-colors"
                  >
                    <span className="font-mono-code font-bold text-[#006BFF]">{sec.number}</span>
                    <span>{sec.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Right Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {TERMS_SECTIONS.map((sec) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.id}
                    id={sec.id}
                    className="scroll-mt-28 p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F3F7FC] border border-[#E6EBF2] flex items-center justify-center text-[#006BFF]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono-code font-bold text-[#006BFF] mr-2">
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
                  </div>
                );
              })}

              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[#0A1020] font-display">
                    Questions about a project agreement or scope?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D687A] mt-1">
                    Reach out to our team for clarification before starting your engagement.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-6 py-3 text-xs font-semibold btn-primary-gradient inline-flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
