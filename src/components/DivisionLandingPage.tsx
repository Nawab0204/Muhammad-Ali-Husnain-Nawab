import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ExternalLink, 
  Layers,
  Server,
  Wifi,
  ShieldCheck,
  Monitor,
  Bot,
  Camera,
  MapPin
} from 'lucide-react';
import { DivisionPageData, WEBSITE_INSPIRATION_REFERENCES } from '../data/siteArchitecture';
import { PORTFOLIO_PROJECTS } from '../data/portfolioAndFaqs';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';

interface DivisionLandingPageProps {
  division: DivisionPageData;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const DivisionLandingPage: React.FC<DivisionLandingPageProps> = ({
  division,
  onNavigate,
  onOpenQuote,
}) => {
  const [activeRefCategory, setActiveRefCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const refCategories = ['All', 'Technology', 'Automotive', 'SaaS', 'E-commerce', 'Luxury', 'Corporate', 'Creative', 'Portfolio'];
  const filteredReferences =
    activeRefCategory === 'All'
      ? WEBSITE_INSPIRATION_REFERENCES
      : WEBSITE_INSPIRATION_REFERENCES.filter((r) => r.category === activeRefCategory);

  const divisionProjects = PORTFOLIO_PROJECTS.filter((p) => p.divisionId === division.id);
  const displayProjects = divisionProjects.length > 0 ? divisionProjects : PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <div className="bg-[#FFFFFF]">
      {/* Breadcrumb & SEO */}
      <SeoAndBreadcrumb
        title={division.metaTitle}
        description={division.metaDescription}
        path={division.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: division.title },
        ]}
        onNavigate={onNavigate}
        faqs={division.faqs}
        serviceType={division.title}
      />

      {/* Division Hero — Full-Width Edge-to-Edge Banner */}
      <section className="relative w-full min-h-[420px] lg:min-h-[500px] flex items-end overflow-hidden bg-[#07152E] border-b border-[#E6EBF2]">
        <img
          src={division.heroImage}
          alt={division.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152E]/95 via-[#07152E]/80 to-[#07152E]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07152E]/90 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-mono-code font-bold text-[#00C8FF] uppercase tracking-wider">
              Service Division {division.number} · {division.title}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08] text-balance">
              {division.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {division.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuote(division.title)}
                className="px-7 py-4 text-sm sm:text-base font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>{division.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('division-subcategories');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 text-sm sm:text-base font-semibold cursor-pointer whitespace-nowrap transition-colors"
              >
                Explore Sub-Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Lifecycle / Flow Bar */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#5D687A] mb-4">
            Complete {division.title} Lifecycle
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {division.lifecycleSteps.map((step, index) => (
              <div
                key={step}
                className="p-4 rounded-xl bg-white border border-[#E6EBF2] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-xs text-[#5D687A] mb-1.5">
                  <span className="font-mono-code font-bold text-[#006BFF]">0{index + 1}</span>
                  {index < division.lifecycleSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                  )}
                </div>
                <div className="text-sm font-bold text-[#0A1020]">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Primary Service Areas (2x2 Rectangular Subcategory Cards) */}
      <section id="division-subcategories" className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-14">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
              Four Specialized Service Areas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight">
              {division.title} Capabilities
            </h2>
            <p className="text-base text-[#5D687A] leading-relaxed">
              Select any specialized service area below to view detailed deliverables, technical architecture, workflows, and FAQs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {division.subcategories.map((sub, idx) => (
              <div
                key={sub.slug}
                onClick={() => onNavigate(sub.path)}
                className="rounded-xl bg-white border border-[#E6EBF2] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#006BFF] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07152E]/85 backdrop-blur-xs text-[11px] font-mono-code font-bold text-[#00C8FF]">
                      {division.number}.0{idx + 1} · Specialized Service
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <h3 className="text-2xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display">
                      {sub.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                      {sub.shortDescription}
                    </p>

                    <ul className="mt-4 pt-4 border-t border-[#E6EBF2] space-y-2">
                      {sub.highlights.map((hl) => (
                        <li key={hl} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A1020] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-7 py-4 bg-[#F8FAFC] border-t border-[#E6EBF2] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#006BFF] group-hover:text-[#087CFF]">
                    <span>Explore {sub.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION FOR WEB DEVELOPMENT: "Start With a Reference" Inspiration Gallery */}
      {division.id === 'web-development' && (
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl space-y-3">
                <div className="text-xs text-[#5D687A]">Website Inspiration · Visual Translation</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight">
                  Start With a Reference
                </h2>
                <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                  Have a website you admire? Share examples from leading modern digital experiences—such as Apple, Stripe, Rivian, Tesla, Shopify, or Amazon—and our team will translate that visual quality and layout discipline into an original website tailored to your brand.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-white border border-[#E6EBF2] rounded-xl overflow-x-auto">
                {refCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveRefCategory(cat)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeRefCategory === cat
                        ? 'bg-[#0A1020] text-white'
                        : 'text-[#5D687A] hover:text-[#0A1020]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredReferences.map((item) => (
                <div
                  key={item.category}
                  className="bg-white border border-[#E6EBF2] rounded-2xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                      <img
                        src={item.previewImage}
                        alt={item.category}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="text-xs text-[#5D687A]">
                        <span className="font-semibold text-[#006BFF]">{item.category}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{item.brandExample}</span>
                      </div>
                      <p className="text-xs text-[#5D687A] leading-relaxed">
                        {item.styleSummary}
                      </p>
                      <ul className="pt-2 space-y-1 border-t border-[#E6EBF2]">
                        {item.keyTraits.map((trait) => (
                          <li key={trait} className="text-[11px] text-[#0A1020] font-medium flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#006BFF]" />
                            <span>{trait}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SPECIAL SECTION FOR IT SUPPORT: Visual IT Infrastructure Diagram */}
      {division.id === 'it-support' && (
        <section className="py-20 bg-[#F3F7FC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-2 mb-10">
              <div className="text-xs text-[#5D687A]">Connected Office Architecture</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                Complete Business IT Infrastructure Diagram
              </h2>
              <p className="text-sm text-[#5D687A]">
                How our four IT pillars work together to keep your staff productive and your data protected:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-3">
                <Monitor className="w-6 h-6 text-[#006BFF]" />
                <div className="text-base font-bold text-[#0A1020]">01. Workstations & Devices</div>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Desktops, laptops, dual monitors, network printers, and scanners upgraded with fast NVMe SSDs and RAM.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-3">
                <Server className="w-6 h-6 text-[#006BFF]" />
                <div className="text-base font-bold text-[#0A1020]">02. OS & Cloud Workspace</div>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Windows 11 Pro, Microsoft 365, Exchange domain email, SharePoint permissions, and user account control.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-3">
                <Wifi className="w-6 h-6 text-[#006BFF]" />
                <div className="text-base font-bold text-[#0A1020]">03. Structured Network & Wi-Fi</div>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Cat6 cabling, managed PoE switches, commercial ceiling Wi-Fi access points, and isolated guest VLANs.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-3">
                <ShieldCheck className="w-6 h-6 text-[#006BFF]" />
                <div className="text-base font-bold text-[#0A1020]">04. Defensive Cybersecurity</div>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  Managed EDR antivirus, hardware firewalls, mandatory MFA, disk encryption, and immutable 3-2-1 backups.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Division Portfolio Showcase */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs text-[#5D687A] mb-1">Client Outcomes</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                Featured Projects & Case Studies
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/portfolio')}
              className="text-xs sm:text-sm font-semibold text-[#006BFF] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="bot-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-[#5D687A]">
                      <span>{project.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1020] font-display">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#5D687A] leading-relaxed">
                      {project.shortResult}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/case-studies/${project.slug}`)}
                    className="text-xs sm:text-sm font-semibold text-[#006BFF] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#5D687A] hover:text-[#0A1020] flex items-center gap-1"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division FAQs */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <div className="text-xs text-[#5D687A]">Answers to Common Questions</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
              {division.title} FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {division.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-[#E6EBF2] bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0A1020]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5D687A] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#006BFF]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#5D687A] leading-relaxed border-t border-[#E6EBF2] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <section className="py-20 bg-[#F3F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight">
            Ready to Discuss {division.title}?
          </h2>
          <p className="text-base text-[#5D687A] max-w-2xl mx-auto leading-relaxed">
            Speak directly with our specialists for a clear, jargon-free consultation and fixed-price project roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote(division.title)}
              className="px-8 py-4 text-sm sm:text-base font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>{division.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-7 py-4 text-sm sm:text-base font-semibold btn-secondary-outline cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
