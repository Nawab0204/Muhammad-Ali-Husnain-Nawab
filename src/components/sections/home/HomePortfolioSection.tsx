/**
 * Featured Portfolio & Client Work Showcase.
 * Large rectangular widescreen cards with verified metrics and live URLs.
 */

import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../../data/portfolioAndFaqs';
import { useApp } from '../../../context/AppContext';

interface HomePortfolioSectionProps {
  onNavigate?: (path: string) => void;
}

export const HomePortfolioSection: React.FC<HomePortfolioSectionProps> = ({ onNavigate }) => {
  const { navigate: contextNavigate } = useApp();
  const navigate = onNavigate || contextNavigate;

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold text-[#0052CC] uppercase tracking-wider">
              Proven Client Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] tracking-tight">
              Featured Portfolio &amp; Live Projects
            </h2>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Explore real client platforms, digital showrooms, and enterprise technology systems delivered by BOTLYTICES.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/portfolio')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-white border border-[#0052CC] text-[#0A1020] hover:bg-[#F3F7FC] hover:text-[#0052CC] rounded-full cursor-pointer whitespace-nowrap transition-all"
            >
              View Full Portfolio
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-[#006BFF] hover:bg-[#087CFF] text-white rounded-full cursor-pointer whitespace-nowrap transition-all shadow-sm"
            >
              Read Case Studies
            </button>
          </div>
        </div>

        <div className="space-y-10">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white border border-[#E6EBF2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0052CC]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
            >
              <div
                onClick={() => navigate(`/portfolio/${project.slug}`)}
                className={`lg:col-span-7 relative aspect-video bg-slate-100 overflow-hidden cursor-pointer ${
                  index % 2 === 1
                    ? 'lg:order-2 border-b lg:border-b-0 lg:border-l border-[#E6EBF2]'
                    : 'border-b lg:border-b-0 lg:border-r border-[#E6EBF2]'
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.industry} Case Study by BOTLYTICES`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-md bg-[#07152E]/85 backdrop-blur-xs text-xs font-mono font-bold text-white">
                  0{index + 1} · {project.location}
                </div>
              </div>

              <div
                className={`lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-[#0052CC] uppercase">
                    <span>{project.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.categories.join(' / ')}</span>
                  </div>

                  <h3
                    onClick={() => navigate(`/portfolio/${project.slug}`)}
                    className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] group-hover:text-[#0052CC] transition-colors cursor-pointer"
                  >
                    {project.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
                    <div className="text-xs font-bold text-[#0052CC]">Delivered Outcome:</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0A1020]">
                      {project.shortResult}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {project.results.map((res) => (
                      <div
                        key={res.label}
                        className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]"
                      >
                        <div className="text-sm sm:text-base font-extrabold text-[#006BFF] font-mono truncate">
                          {res.metric}
                        </div>
                        <div className="text-[11px] text-[#5D687A] truncate mt-0.5">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => navigate(`/portfolio/${project.slug}`)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-semibold bg-[#006BFF] hover:bg-[#087CFF] text-white rounded-full inline-flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/case-studies/${project.slug}`)}
                      className="text-xs sm:text-sm font-bold text-[#006BFF] hover:underline cursor-pointer"
                    >
                      Case Study
                    </button>
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#5D687A] hover:text-[#0A1020] inline-flex items-center gap-1"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePortfolioSection;
