import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ExternalLink, 
  AlertCircle 
} from 'lucide-react';
import { SubcategoryPageData, WEBSITE_INSPIRATION_REFERENCES } from '../data/siteArchitecture';
import { SUBCATEGORY_PAGES } from '../data/subcategoryPages';
import { PORTFOLIO_PROJECTS } from '../data/portfolioAndFaqs';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';
import { ServiceVisualDiagram } from './ServiceVisualDiagram';

interface SubcategoryPageTemplateProps {
  page: SubcategoryPageData;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const SubcategoryPageTemplate: React.FC<SubcategoryPageTemplateProps> = ({
  page,
  onNavigate,
  onOpenQuote,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeRefCategory, setActiveRefCategory] = useState<string>('All');

  const relatedProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.divisionId === page.divisionId
  ).slice(0, 2);

  const displayProjects =
    relatedProjects.length > 0 ? relatedProjects : PORTFOLIO_PROJECTS.slice(0, 2);

  const relatedServices = page.relatedSlugs
    .map((slug) => SUBCATEGORY_PAGES[slug])
    .filter(Boolean);

  const refCategories = ['All', 'Technology', 'Automotive', 'SaaS', 'E-commerce', 'Luxury', 'Corporate', 'Creative', 'Portfolio'];
  const filteredReferences =
    activeRefCategory === 'All'
      ? WEBSITE_INSPIRATION_REFERENCES
      : WEBSITE_INSPIRATION_REFERENCES.filter((r) => r.category === activeRefCategory);

  return (
    <div className="bg-[#FFFFFF]">
      {/* 1. Breadcrumb & SEO Schema */}
      <SeoAndBreadcrumb
        title={page.metaTitle}
        description={page.metaDescription}
        path={page.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: page.divisionTitle, path: page.divisionPath },
          { label: page.title },
        ]}
        onNavigate={onNavigate}
        faqs={page.faqs}
        serviceType={page.title}
      />

      {/* 2. Hero Section */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#5D687A]">
                <span className="font-semibold text-[#006BFF]">{page.divisionTitle}</span>
                <span aria-hidden="true">·</span>
                <span>{page.title}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08] text-balance">
                {page.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                {page.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenQuote(page.title)}
                  className="px-7 py-3.5 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>{page.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate(page.divisionPath)}
                  className="px-6 py-3.5 text-sm font-semibold btn-secondary-outline cursor-pointer whitespace-nowrap"
                >
                  All {page.divisionTitle} Services
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] p-3 shadow-[0_20px_50px_-15px_rgba(10,16,32,0.07)]">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={page.heroImage}
                    alt={page.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem Statement Section (Why Do I Need It?) */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs text-[#5D687A]">The Business Challenge</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display leading-tight text-balance">
                {page.problemTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                {page.problemDescription}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.painPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E6EBF2] flex items-start gap-3"
                >
                  <AlertCircle className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#0A1020] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Provide (Deliverables) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <div className="text-xs text-[#5D687A]">What Exactly We Provide</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0A1020] font-display tracking-tight">
              {page.whatWeProvideTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
              {page.whatWeProvideDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.deliverables.map((del, idx) => (
              <div
                key={del.title}
                className="p-6 rounded-2xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono-code font-semibold text-[#006BFF] mb-2">
                    0{idx + 1}. Deliverable
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1020] font-display">
                    {del.title}
                  </h3>
                  <p className="text-sm text-[#5D687A] mt-2 leading-relaxed">
                    {del.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Features Matrix */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-xs text-[#5D687A] mb-1">Complete Scope of Capabilities</div>
            <h2 className="text-2xl font-bold text-[#0A1020] font-display">
              Included {page.title} Features & Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {page.features.map((feat) => (
              <div
                key={feat}
                className="p-4 rounded-xl bg-white border border-[#E6EBF2] flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A1020]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Visual Explanation / Interactive Architecture Diagram */}
      <section className="py-20 bg-[#F3F7FC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceVisualDiagram visualType={page.visualType} onNavigate={onNavigate} />
        </div>
      </section>

      {/* Special Reference Gallery for Web Design & UI/UX Page */}
      {page.slug === 'web-design-ui-ux' && (
        <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl space-y-2">
                <div className="text-xs text-[#5D687A]">Reference Gallery · Visual Direction</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                  Start With a Reference You Admire
                </h2>
                <p className="text-sm text-[#5D687A] leading-relaxed">
                  Show us examples of digital experiences you like—whether inspired by Apple, Stripe, Rivian, Tesla, or Shopify—and we translate that layout clarity into a unique website for your brand.
                </p>
              </div>

              <div className="flex items-center gap-1 p-1 bg-[#F8FAFC] border border-[#E6EBF2] rounded-lg overflow-x-auto">
                {refCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveRefCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
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
              {filteredReferences.map((ref) => (
                <div
                  key={ref.category}
                  className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                      <img
                        src={ref.previewImage}
                        alt={ref.category}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="text-xs text-[#5D687A]">
                        <span>{ref.category}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{ref.brandExample}</span>
                      </div>
                      <p className="text-xs text-[#5D687A] leading-relaxed">
                        {ref.styleSummary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. How It Works (Step-by-Step Process) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-12">
            <div className="text-xs text-[#5D687A]">Step-by-Step Execution</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0A1020] font-display">
              How {page.title} Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.howItWorks.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono-code font-bold text-[#006BFF] mb-3">
                    Step {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1020] font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D687A] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Benefits & Quantitative Outcomes + 9. Technology Stack */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Benefits (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs text-[#5D687A] mb-1">Measurable Business Value</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                  Key Benefits & Outcomes
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {page.benefits.map((ben) => (
                  <div
                    key={ben.title}
                    className="p-5 rounded-2xl bg-white border border-[#E6EBF2]"
                  >
                    <div className="text-2xl font-extrabold text-[#006BFF] font-mono-code">
                      {ben.metric}
                    </div>
                    <div className="text-sm font-bold text-[#0A1020] mt-2">
                      {ben.title}
                    </div>
                    <p className="text-xs text-[#5D687A] mt-1.5 leading-relaxed">
                      {ben.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs text-[#5D687A] mb-1">Platforms & Standards</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                  Technology & Tools Used
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E6EBF2] space-y-3">
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  We work with industry-standard platforms, hardware, and protocols so your systems remain reliable and maintainable:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {page.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="text-xs font-medium text-[#0A1020] flex items-center gap-2 py-1 border-b border-[#E6EBF2] last:border-b-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006BFF]" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Portfolio & Case Study Examples */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs text-[#5D687A] mb-1">Proven Results</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                Related Client Projects & Case Studies
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/portfolio')}
              className="text-xs sm:text-sm font-semibold text-[#006BFF] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayProjects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-16/10 bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-[#5D687A]">
                      <span>{proj.industry}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{proj.categories.join(' / ')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1020] font-display">
                      {proj.name}
                    </h3>
                    <p className="text-sm text-[#5D687A]">{proj.shortResult}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onNavigate(`/case-studies/${proj.slug}`)}
                    className="text-xs sm:text-sm font-semibold text-[#006BFF] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#5D687A] hover:text-[#0A1020] flex items-center gap-1"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Internal Linking */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="text-xs text-[#5D687A] mb-1">Connected Capabilities</div>
              <h2 className="text-2xl font-bold text-[#0A1020] font-display">
                Related Services You May Need
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onNavigate(rel.path)}
                  className="p-6 rounded-2xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-xs text-[#5D687A] mb-1">{rel.divisionTitle}</div>
                    <h3 className="text-lg font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#5D687A] mt-2 leading-relaxed line-clamp-2">
                      {rel.heroDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E6EBF2] text-xs font-semibold text-[#006BFF] flex items-center gap-1.5">
                    <span>Explore {rel.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. Frequently Asked Questions */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <div className="text-xs text-[#5D687A]">Common Questions</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
              {page.title} — Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {page.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-[#E6EBF2] bg-[#F8FAFC] overflow-hidden"
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
                    <div className="px-6 pb-5 text-sm text-[#5D687A] leading-relaxed border-t border-[#E6EBF2] pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Contextual Call to Action */}
      <section className="py-20 bg-[#F3F7FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight text-balance">
            Ready to Get Started With {page.title}?
          </h2>
          <p className="text-base text-[#5D687A] max-w-2xl mx-auto leading-relaxed">
            Tell us what you need and our team will prepare a clear recommendation, timeline, and transparent quote for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote(page.title)}
              className="px-8 py-4 text-sm sm:text-base font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>{page.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-7 py-4 text-sm sm:text-base font-semibold btn-secondary-outline cursor-pointer whitespace-nowrap"
            >
              Go to Contact Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
