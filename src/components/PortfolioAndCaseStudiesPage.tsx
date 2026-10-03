import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Quote,
  Monitor,
  Smartphone,
  Layers,
  Code2,
} from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  PortfolioProject,
  PortfolioFilterTag,
} from '../data/portfolioAndFaqs';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';

interface PortfolioPageProps {
  mode: 'portfolio' | 'case-studies';
  selectedSlug?: string;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

const FILTER_CATEGORIES: ('All' | PortfolioFilterTag)[] = [
  'All',
  'Web Development',
  'UI/UX',
  'E-commerce',
  'SEO',
  'Branding',
  'AI Automation',
  'IT',
  'Security',
];

export const PortfolioAndCaseStudiesPage: React.FC<PortfolioPageProps> = ({
  mode,
  selectedSlug,
  onNavigate,
  onOpenQuote,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | PortfolioFilterTag>('All');

  // ============================================================================
  // DETAIL PAGE 1: INDIVIDUAL PORTFOLIO PROJECT PAGE (/portfolio/[project])
  // ============================================================================
  if (mode === 'portfolio' && selectedSlug) {
    const project: PortfolioProject =
      PORTFOLIO_PROJECTS.find((p) => p.slug === selectedSlug) || PORTFOLIO_PROJECTS[0];

    return (
      <div className="bg-[#FFFFFF]">
        <SeoAndBreadcrumb
          title={`${project.name} — Portfolio Project | BOTLYTICES`}
          description={project.shortDescription}
          path={`/portfolio/${project.slug}`}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: project.name },
          ]}
          onNavigate={onNavigate}
        />

        {/* 1. Project Hero */}
        <section className="py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('/portfolio')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5D687A] hover:text-[#006BFF] mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="text-xs text-[#5D687A]">
                  <span className="font-semibold text-[#006BFF]">{project.industry}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{project.location}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
                  {project.name}
                </h1>

                <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
                  <div className="text-xs font-semibold text-[#006BFF] mb-1">Key Outcome</div>
                  <div className="text-sm font-medium text-[#0A1020]">{project.shortResult}</div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenQuote(project.name)}
                    className="px-7 py-3.5 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Start a Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate(`/case-studies/${project.slug}`)}
                    className="px-6 py-3.5 text-sm font-semibold btn-secondary-outline inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 text-sm font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] p-3 shadow-sm">
                  <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Client / Industry / Location / Services Provided */}
        <section className="py-10 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div>
              <div className="text-[#5D687A] mb-1">Client</div>
              <div className="font-bold text-[#0A1020] text-sm">{project.client}</div>
            </div>
            <div>
              <div className="text-[#5D687A] mb-1">Industry &amp; Location</div>
              <div className="font-bold text-[#0A1020] text-sm">
                {project.industry} ({project.location})
              </div>
            </div>
            <div>
              <div className="text-[#5D687A] mb-1">Services Provided</div>
              <div className="font-semibold text-[#0A1020]">
                {project.servicesProvided.join(' · ')}
              </div>
            </div>
            <div>
              <div className="text-[#5D687A] mb-1">Technologies Used</div>
              <div className="font-semibold text-[#006BFF]">
                {project.technology.join(' · ')}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Challenge & Objective + Design & Development Overview */}
        <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">
                  01 · Challenge
                </div>
                <h2 className="text-xl font-bold text-[#0A1020] font-display">
                  The Business Challenge
                </h2>
                <p className="text-sm text-[#5D687A] leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">
                  02 · Objective
                </div>
                <h2 className="text-xl font-bold text-[#0A1020] font-display">
                  Project Objective
                </h2>
                <p className="text-sm text-[#5D687A] leading-relaxed">{project.objective}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#006BFF]">
                  <Layers className="w-4 h-4" />
                  <span>Design Overview</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] font-display">
                  Visual Direction &amp; UX Structure
                </h3>
                <p className="text-sm text-[#5D687A] leading-relaxed">
                  {project.designOverview}
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#006BFF]">
                  <Code2 className="w-4 h-4" />
                  <span>Development &amp; Engineering Overview</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A1020] font-display">
                  Technical Implementation
                </h3>
                <p className="text-sm text-[#5D687A] leading-relaxed">
                  {project.developmentOverview}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Visual Showcase & Mobile Preview */}
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <div className="text-xs text-[#5D687A] mb-2">Visual Showcase</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display">
                Desktop &amp; Mobile Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6EBF2] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-[#5D687A] mb-3 px-1">
                  <span className="font-semibold text-[#0A1020] flex items-center gap-1.5">
                    <Monitor className="w-4 h-4 text-[#006BFF]" />
                    Desktop System View
                  </span>
                  <span>{project.name}</span>
                </div>
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={`${project.name} desktop interface`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6EBF2] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#5D687A] mb-3">
                    <span className="font-semibold text-[#0A1020] flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-[#006BFF]" />
                      Mobile &amp; Responsive View
                    </span>
                    <span className="text-[#006BFF] font-mono-code">Responsive</span>
                  </div>
                  <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src={project.secondaryImage}
                      alt={`${project.name} secondary preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
                    {project.mobilePreviewDescription}
                  </p>
                </div>

                {/* Connected Service Links */}
                <div className="pt-5 mt-5 border-t border-[#E6EBF2]">
                  <div className="text-xs font-bold text-[#0A1020] mb-2">
                    Connected BOTLYTICES Services Used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.relatedServiceLinks.map((srv) => (
                      <button
                        key={srv.path}
                        onClick={() => onNavigate(srv.path)}
                        className="text-xs font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer mr-3"
                      >
                        <span>{srv.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Results & CTA */}
        <section className="py-20 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <div className="text-xs font-mono-code text-[#00C8FF] uppercase tracking-wider">
                  Start a Similar Project
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                  Looking for a solution like {project.name}?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Speak with our team to scope your website, IT infrastructure, local presence, AI
                  automation, or security project.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start a Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/portfolio')}
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-colors cursor-pointer"
                >
                  Explore More Projects
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ============================================================================
  // DETAIL PAGE 2: INDIVIDUAL CASE STUDY PAGE (/case-studies/[case-study])
  // ============================================================================
  if (mode === 'case-studies' && selectedSlug) {
    const study: PortfolioProject =
      PORTFOLIO_PROJECTS.find((p) => p.slug === selectedSlug) || PORTFOLIO_PROJECTS[0];

    return (
      <div className="bg-[#FFFFFF]">
        <SeoAndBreadcrumb
          title={`${study.name} — Case Study | BOTLYTICES`}
          description={study.shortResult}
          path={`/case-studies/${study.slug}`}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: study.name },
          ]}
          onNavigate={onNavigate}
        />

        {/* Case Study Hero */}
        <section className="py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('/case-studies')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5D687A] hover:text-[#006BFF] mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Case Studies</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="text-xs text-[#5D687A]">
                  <span className="font-semibold text-[#006BFF]">{study.client}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{study.industry}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
                  {study.name}
                </h1>

                <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                  {study.shortResult}
                </p>

                {/* Results Metrics Strip */}
                <div className="grid grid-cols-3 gap-4 pt-3">
                  {study.results.map((res) => (
                    <div
                      key={res.label}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-[#006BFF] font-mono-code">
                        {res.metric}
                      </div>
                      <div className="text-xs text-[#5D687A] mt-1">{res.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenQuote(study.name)}
                    className="px-7 py-3.5 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>{study.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {study.url && (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 text-sm font-semibold btn-secondary-outline inline-flex items-center gap-2"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] p-3 shadow-sm">
                  <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={study.image}
                      alt={study.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client, Industry, Services & Technology Metadata Bar */}
        <section className="py-10 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div>
              <div className="text-[#5D687A] mb-1">Client</div>
              <div className="font-bold text-[#0A1020] text-sm">{study.client}</div>
            </div>
            <div>
              <div className="text-[#5D687A] mb-1">Industry</div>
              <div className="font-bold text-[#0A1020] text-sm">{study.industry}</div>
            </div>
            <div>
              <div className="text-[#5D687A] mb-1">Services Provided</div>
              <div className="font-semibold text-[#0A1020]">{study.servicesProvided.join(' · ')}</div>
            </div>
            <div>
              <div className="text-[#5D687A] mb-1">Technology Stack</div>
              <div className="font-semibold text-[#006BFF]">{study.technology.join(' · ')}</div>
            </div>
          </div>
        </section>

        {/* Challenge, Strategy & Solution */}
        <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">01. The Challenge</div>
                <h2 className="text-xl font-bold text-[#0A1020] font-display">What Needed Solving</h2>
                <p className="text-sm text-[#5D687A] leading-relaxed">{study.challenge}</p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">02. The Strategy</div>
                <h2 className="text-xl font-bold text-[#0A1020] font-display">Architectural Approach</h2>
                <p className="text-sm text-[#5D687A] leading-relaxed">{study.strategy}</p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-3">
                <div className="text-xs font-mono-code font-bold text-[#006BFF]">03. The Solution</div>
                <h2 className="text-xl font-bold text-[#0A1020] font-display">What We Built &amp; Deployed</h2>
                <p className="text-sm text-[#5D687A] leading-relaxed">{study.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Steps + Before vs. After Comparison */}
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div>
              <div className="text-xs text-[#5D687A] mb-2">Step-by-Step Execution</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1020] font-display mb-8">
                Implementation Phases
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {study.implementation.map((step, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-white border border-[#E6EBF2]">
                    <div className="text-xs font-mono-code font-bold text-[#006BFF] mb-2">
                      Phase 0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-[#0A1020] font-medium leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before vs After */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-7 rounded-2xl bg-white border border-[#E6EBF2] space-y-4">
                <div className="text-xs font-semibold text-[#5D687A]">Before BOTLYTICES</div>
                <h3 className="text-xl font-bold text-[#0A1020] font-display">
                  Previous Limitations
                </h3>
                <ul className="space-y-3">
                  {study.beforeState.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#5D687A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 rounded-2xl bg-white border-2 border-[#006BFF] space-y-4">
                <div className="text-xs font-semibold text-[#006BFF]">After BOTLYTICES</div>
                <h3 className="text-xl font-bold text-[#0A1020] font-display">
                  Delivered Outcomes
                </h3>
                <ul className="space-y-3">
                  {study.afterState.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0A1020] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#006BFF] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Screenshots, Connected Services & Client Testimonial */}
        <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] p-3">
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={`${study.name} primary view`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 px-2 text-xs text-[#5D687A]">
                  01 · Primary System &amp; Interface Architecture
                </div>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] p-3">
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={study.secondaryImage}
                    alt={`${study.name} secondary view`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 px-2 text-xs text-[#5D687A]">
                  02 · Supporting Workflow &amp; Deployment View
                </div>
              </div>
            </div>

            {study.testimonial && (
              <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] max-w-4xl mx-auto">
                <Quote className="w-8 h-8 text-[#006BFF] mb-4" />
                <blockquote className="text-lg sm:text-2xl font-bold text-[#0A1020] font-display leading-snug mb-6">
                  “{study.testimonial.quote}”
                </blockquote>
                <div className="text-xs text-[#5D687A]">
                  <span className="font-bold text-[#0A1020]">{study.testimonial.author}</span>
                  <span> — {study.testimonial.role}, {study.testimonial.company}</span>
                </div>
              </div>
            )}

            {/* Internal Links to Related Services */}
            <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#0A1020]">
                  Services Implemented in This Case Study:
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {study.relatedServiceLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => onNavigate(link.path)}
                      className="text-xs font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onNavigate(`/portfolio/${study.slug}`)}
                className="text-xs font-semibold text-[#0A1020] hover:text-[#006BFF] inline-flex items-center gap-1 cursor-pointer shrink-0"
              >
                <span>View Portfolio Summary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <div className="text-xs font-mono-code text-[#00C8FF]">Next Step</div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                  Ready to achieve similar results for your business?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base">
                  Speak with our engineering team to scope your project requirements.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote(study.name)}
                  className="px-7 py-4 text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/case-studies')}
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-colors cursor-pointer"
                >
                  Browse Other Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ============================================================================
  // PORTFOLIO & CASE STUDIES INDEX VIEW (/portfolio OR /case-studies)
  // ============================================================================
  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.filterTags.includes(activeFilter));

  const isCaseStudiesMode = mode === 'case-studies';
  const featuredStudy = PORTFOLIO_PROJECTS[0];

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title={
          isCaseStudiesMode
            ? 'Case Studies — Real Problems, Practical Solutions & Results | BOTLYTICES'
            : 'Portfolio — Selected Work & Digital Solutions | BOTLYTICES'
        }
        description={
          isCaseStudiesMode
            ? 'Explore how we help businesses solve challenges through web development, IT support, digital presence, AI automation and security solutions.'
            : 'Explore websites, digital systems, branding and technology projects built to help businesses grow and operate more effectively.'
        }
        path={isCaseStudiesMode ? '/case-studies' : '/portfolio'}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: isCaseStudiesMode ? 'Case Studies' : 'Portfolio' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              {isCaseStudiesMode ? '04 · In-Depth Case Studies' : '03 · Project Portfolio'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.08]">
              {isCaseStudiesMode
                ? 'Case Studies — Real Problems, Practical Solutions, Measurable Results.'
                : 'Selected Work & Digital Solutions.'}
            </h1>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              {isCaseStudiesMode
                ? 'Explore how we help businesses solve challenges through web development, IT support, digital presence, AI automation and security solutions.'
                : 'Explore websites, digital systems, branding and technology projects built to help businesses grow and operate more effectively.'}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-[#E6EBF2]">
            {FILTER_CATEGORIES.map((cat) => (
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

      {/* Featured Case Study Highlight Banner (shown on Case Studies page) */}
      {isCaseStudiesMode && activeFilter === 'All' && (
        <section className="py-14 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-[#E6EBF2] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                  Featured Case Study · {featuredStudy.industry}
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight">
                  {featuredStudy.name}
                </h2>
                <p className="text-sm text-[#5D687A] leading-relaxed">
                  <strong className="text-[#0A1020]">Challenge:</strong> {featuredStudy.challenge}
                </p>
                <p className="text-sm text-[#5D687A] leading-relaxed">
                  <strong className="text-[#0A1020]">Result:</strong> {featuredStudy.shortResult}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate(`/case-studies/${featuredStudy.slug}`)}
                    className="px-6 py-3 text-xs sm:text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {featuredStudy.url && (
                    <a
                      href={featuredStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 border border-[#E6EBF2]">
                  <img
                    src={featuredStudy.image}
                    alt={featuredStudy.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio / Case Studies Rectangular Widescreen Grid */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="rounded-xl bg-white border border-[#E6EBF2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#006BFF]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
              >
                <div
                  onClick={() =>
                    onNavigate(
                      isCaseStudiesMode
                        ? `/case-studies/${project.slug}`
                        : `/portfolio/${project.slug}`
                    )
                  }
                  className={`lg:col-span-7 relative aspect-16/9 bg-slate-100 overflow-hidden cursor-pointer ${
                    index % 2 === 1
                      ? 'lg:order-2 border-b lg:border-b-0 lg:border-l border-[#E6EBF2]'
                      : 'border-b lg:border-b-0 lg:border-r border-[#E6EBF2]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-md bg-[#07152E]/85 backdrop-blur-xs text-xs font-mono-code font-bold text-white">
                    0{index + 1} · {project.location}
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 p-7 sm:p-10 space-y-5 flex-1 flex flex-col justify-between ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#5D687A]">
                      <span className="font-mono-code font-bold text-[#006BFF] uppercase">
                        {project.industry}
                      </span>
                      <span>{project.filterTags.slice(0, 3).join(' · ')}</span>
                    </div>

                    <h2
                      onClick={() =>
                        onNavigate(
                          isCaseStudiesMode
                            ? `/case-studies/${project.slug}`
                            : `/portfolio/${project.slug}`
                        )
                      }
                      className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display cursor-pointer"
                    >
                      {project.name}
                    </h2>

                    <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                      {isCaseStudiesMode ? project.challenge : project.shortDescription}
                    </p>

                    <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E6EBF2]">
                      <div className="text-xs font-bold text-[#006BFF] mb-1">
                        Services &amp; Outcome
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0A1020]">
                        {project.shortResult}
                      </div>
                    </div>

                    {/* Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      {project.results.map((res) => (
                        <div
                          key={res.label}
                          className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E6EBF2]"
                        >
                          <div className="text-xs sm:text-sm font-extrabold text-[#006BFF] font-mono-code truncate">
                            {res.metric}
                          </div>
                          <div className="text-[11px] text-[#5D687A] truncate mt-0.5">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() =>
                        onNavigate(
                          isCaseStudiesMode
                            ? `/case-studies/${project.slug}`
                            : `/portfolio/${project.slug}`
                        )
                      }
                      className="px-5 py-2.5 text-xs sm:text-sm font-semibold btn-primary-gradient inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isCaseStudiesMode ? 'Read Case Study' : 'View Project'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-4">
                      {!isCaseStudiesMode && (
                        <button
                          onClick={() => onNavigate(`/case-studies/${project.slug}`)}
                          className="text-xs sm:text-sm font-bold text-[#006BFF] hover:underline cursor-pointer"
                        >
                          Case Study
                        </button>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#5D687A] hover:text-[#0A1020]"
                        >
                          <span>Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="text-xs font-mono-code text-[#00C8FF]">Have a Project in Mind?</div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
                Let’s build your next digital system or technology upgrade.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Tell us what you are building and receive a clear scope and recommendation.
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
                onClick={() => onNavigate('/services')}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-colors cursor-pointer"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
