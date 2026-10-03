import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DIVISIONS } from '../data/siteArchitecture';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="All Technology & Digital Services Directory | BOTLYTICES"
        description="Explore all 5 major divisions and 20 specialized technology services: Web Development, IT Support & Infrastructure, Digital Presence & Branding, AI Automation, and Security & Surveillance."
        path="/services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              Complete Capabilities Architecture · 5 Divisions · 20 Specialized Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              Services &amp; Technical Divisions
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Navigate directly to any of our five primary divisions or select a specialized service page to view deliverables, architecture diagrams, workflows, and FAQs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC] border-b border-[#E6EBF2] space-y-24">
        {DIVISIONS.map((division) => (
          <div key={division.id} className="space-y-10">
            {/* Full-Width Edge-to-Edge Division Banner */}
            <div className="relative w-full min-h-[340px] lg:min-h-[400px] flex items-end overflow-hidden bg-[#07152E] border-y border-[#E6EBF2]">
              <img
                src={division.heroImage}
                alt={division.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07152E]/95 via-[#07152E]/75 to-[#07152E]/30" />
              <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl space-y-3">
                  <div className="text-xs font-mono-code font-bold text-[#00C8FF] uppercase">
                    Division {division.number} · {division.title}
                  </div>
                  <h2
                    onClick={() => onNavigate(division.path)}
                    className="text-3xl sm:text-4xl font-extrabold text-white hover:text-[#00C8FF] transition-colors font-display cursor-pointer"
                  >
                    {division.heroHeadline}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-200 max-w-2xl">
                    {division.overviewDescription}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onNavigate(division.path)}
                      className="px-5 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore {division.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onOpenQuote(division.title)}
                      className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs sm:text-sm font-semibold cursor-pointer"
                    >
                      {division.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2x2 Rectangular Subcategory Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {division.subcategories.map((sub, sIdx) => (
                  <div
                    key={sub.slug}
                    onClick={() => onNavigate(sub.path)}
                    className="rounded-xl bg-white border border-[#E6EBF2] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#006BFF] transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                        <img
                          src={sub.image}
                          alt={sub.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07152E]/85 text-[11px] font-mono-code font-bold text-[#00C8FF]">
                          {division.number}.0{sIdx + 1}
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display">
                          {sub.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
                          {sub.shortDescription}
                        </p>
                        <ul className="pt-3 border-t border-[#E6EBF2] space-y-1.5">
                          {sub.highlights.map((h) => (
                            <li key={h} className="text-xs text-[#0A1020] font-medium flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E6EBF2] text-xs font-bold text-[#006BFF] flex items-center justify-between">
                      <span>View Service Page</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
