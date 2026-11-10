/**
 * Five Major Service Divisions Section.
 * Full-width edge-to-edge banners with 2x2 rectangular subcategory showcase cards.
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Globe, Server, MapPin, Bot, Camera } from 'lucide-react';
import { DIVISIONS } from '../../../data/siteArchitecture';
import { useApp } from '../../../context/AppContext';

const DIVISION_ICONS = {
  'web-development': Globe,
  'it-support': Server,
  'digital-presence': MapPin,
  'ai-automation': Bot,
  'security-surveillance': Camera,
};

interface DivisionBannersProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: (service?: string) => void;
}

export const DivisionBanners: React.FC<DivisionBannersProps> = ({ onNavigate, onOpenQuote }) => {
  const { navigate: contextNavigate, openQuoteModal } = useApp();
  const navigate = onNavigate || contextNavigate;
  const handleOpenQuote = onOpenQuote || openQuoteModal;

  return (
    <section id="divisions-overview" className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-[#0052CC] uppercase tracking-wider">
              Our Five Major Service Divisions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] tracking-tight leading-[1.1]">
              Complete Technology &amp; Digital Solutions Under One Roof.
            </h2>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Explore each major service division below along with its 2×2 specialized service areas. Click any division or subcategory to view its dedicated landing page.
            </p>
          </div>

          <button
            onClick={() => navigate('/services')}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-white text-[#0A1020] border border-[#006BFF] hover:bg-[#F3F7FC] hover:text-[#006BFF] rounded-full self-start md:self-auto flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all shadow-xs"
          >
            <span>View Full Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Loop through all 5 Divisions */}
      <div className="space-y-24">
        {DIVISIONS.map((division) => {
          const Icon = DIVISION_ICONS[division.id];
          return (
            <div key={division.id} className="space-y-10">
              {/* Full-Width Edge-to-Edge Banner Image for the Division */}
              <div className="relative w-full min-h-[380px] lg:min-h-[440px] flex items-end overflow-hidden bg-[#07152E] border-y border-[#E6EBF2]">
                <img
                  src={division.heroImage}
                  alt={division.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07152E]/95 via-[#07152E]/75 to-[#07152E]/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152E]/90 via-transparent to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                  <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-[#00C8FF] uppercase tracking-wider">
                      <div className="w-7 h-7 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>Division {division.number} · {division.title}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                      {division.heroHeadline}
                    </h3>

                    <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl">
                      {division.overviewDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => navigate(division.path)}
                        className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-[#006BFF] hover:bg-[#087CFF] text-white rounded-full inline-flex items-center gap-2 cursor-pointer shadow-md transition-all"
                      >
                        <span>Explore {division.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOpenQuote(division.title)}
                        className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        {division.ctaText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2x2 Rectangular Subcategory Cards Grid */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {division.subcategories.map((sub, subIdx) => (
                    <div
                      key={sub.slug}
                      onClick={() => navigate(sub.path)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigate(sub.path);
                        }
                      }}
                      role="link"
                      tabIndex={0}
                      aria-label={`Explore ${sub.title} under ${division.title}`}
                      className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0052CC] focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:ring-offset-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                    >
                      <div>
                        {/* Rectangular 16:9 Subcategory Image */}
                        <div className="relative aspect-video w-full bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                          <img
                            src={sub.image}
                            alt={`${sub.title} - ${division.title} service`}
                            width={640}
                            height={360}
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07152E]/85 backdrop-blur-xs text-[11px] font-mono font-bold text-[#00C8FF]">
                            {division.number}.0{subIdx + 1}
                          </div>
                        </div>

                        <div className="p-6 sm:p-7 space-y-3">
                          <h4 className="text-xl sm:text-2xl font-bold text-[#0A1020] group-hover:text-[#0052CC] transition-colors">
                            {sub.title}
                          </h4>
                          <p className="text-sm text-[#5D687A] leading-relaxed">
                            {sub.shortDescription}
                          </p>

                          <ul className="pt-3 space-y-1.5 border-t border-[#E6EBF2]">
                            {sub.highlights.map((hl) => (
                              <li
                                key={hl}
                                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0A1020]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="px-6 sm:px-7 py-4 bg-[#F8FAFC] border-t border-[#E6EBF2] flex items-center justify-between text-xs sm:text-sm font-bold text-[#0052CC] group-hover:text-[#003E99]">
                        <span>Explore {sub.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DivisionBanners;
