import React, { useState } from 'react';
import {
  Check,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  Percent,
  Clock,
  ExternalLink,
} from 'lucide-react';
import {
  SUPPORTED_MARKETS,
  DIVISIONS_PRICING,
  SOLUTION_BUNDLES,
  getRegionalPrice,
  DivisionPricingData,
  MarketRegion,
} from '../../data/pricingData';

interface PricingRateCardProps {
  initialDivisionId?: string;
  onOpenQuote?: (service?: string) => void;
  onNavigate?: (path: string) => void;
}

export const PricingRateCard: React.FC<PricingRateCardProps> = ({
  initialDivisionId = 'web-development',
  onOpenQuote,
  onNavigate,
}) => {
  const [selectedMarketId, setSelectedMarketId] = useState<string>('us');
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>(initialDivisionId);

  const currentMarket: MarketRegion =
    SUPPORTED_MARKETS.find((m) => m.id === selectedMarketId) || SUPPORTED_MARKETS[0];

  const activeDivision: DivisionPricingData =
    DIVISIONS_PRICING.find((d) => d.id === selectedDivisionId) || DIVISIONS_PRICING[0];

  const handleAction = (serviceName?: string) => {
    if (onOpenQuote) {
      onOpenQuote(serviceName);
    } else if (onNavigate) {
      onNavigate(serviceName ? `/contact?service=${encodeURIComponent(serviceName)}` : '/contact');
    } else {
      window.location.href = serviceName
        ? `/contact?service=${encodeURIComponent(serviceName)}`
        : '/contact';
    }
  };

  const handleNavigateToPricing = () => {
    if (onNavigate) {
      onNavigate('/pricing');
    } else {
      window.location.href = '/pricing';
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2] w-full overflow-hidden" id="rates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12">
        {/* Header with Global Market Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#E6EBF2]">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] border border-[#0052CC]/20 text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              <Percent className="w-3.5 h-3.5" />
              <span>International Rate Card · Fixed-Scope Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-tight">
              Transparent International Rates &amp; Packages.
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
              Standardized rates across the US, UK, Canada, Australia, New Zealand, Ireland, Europe, and the UAE. Web Development services are structured at{' '}
              <strong className="text-[#0052CC] font-semibold">
                one-third conventional agency rates
              </strong>{' '}
              with zero compromise on performance, security, or client ownership.
            </p>
          </div>

          {/* Currency / Country Switcher */}
          <div className="bg-[#F8FAFC] border border-[#E6EBF2] p-3 rounded-2xl space-y-2 shrink-0 self-start lg:self-auto">
            <div className="flex items-center justify-between gap-3 px-1">
              <span className="text-[11px] font-mono-code font-bold text-[#5D687A] uppercase">
                Select Market:
              </span>
              <span className="text-xs font-bold text-[#006BFF]">
                {currentMarket.flag} {currentMarket.currencyCode} ({currentMarket.currencySymbol.trim()})
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
              {SUPPORTED_MARKETS.map((m) => {
                const isActive = selectedMarketId === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMarketId(m.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                      isActive
                        ? 'bg-[#006BFF] text-white shadow-xs'
                        : 'bg-white text-[#5D687A] border border-[#E6EBF2] hover:text-[#0A1020] hover:border-[#CBD5E1]'
                    }`}
                    title={m.name}
                  >
                    <span>{m.flag}</span>
                    <span className="uppercase text-[11px]">{m.id}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5 Division Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {DIVISIONS_PRICING.map((div) => {
            const isSelected = selectedDivisionId === div.id;
            const isWebDev = div.id === 'web-development';
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivisionId(div.id)}
                className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? 'bg-[#07152E] text-white border-[#07152E] shadow-sm'
                    : 'bg-[#F8FAFC] text-[#5D687A] border-[#E6EBF2] hover:text-[#0A1020] hover:border-[#CBD5E1]'
                }`}
              >
                <span
                  className={`text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-[#00C8FF]' : 'bg-[#E2E8F0] text-[#475569]'
                  }`}
                >
                  {div.number}
                </span>
                <span>{div.title}</span>
                {isWebDev && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    1/3 Agency Rate
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Division Summary Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
              Division {activeDivision.number} · {activeDivision.title}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1020] font-display">
              Commercial Scope &amp; Pricing Directory
            </h3>
            <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
              {activeDivision.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={handleNavigateToPricing}
              className="px-4 py-2.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#006BFF] text-xs font-bold text-[#0A1020] hover:text-[#006BFF] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>View Full Pricing Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleAction(`${activeDivision.title} Consultation`)}
              className="px-5 py-2.5 rounded-xl bg-[#006BFF] hover:bg-[#0052CC] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Featured Packages for the Active Division */}
        {activeDivision.featuredPackages && activeDivision.featuredPackages.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#0A1020] font-display">
                  Featured {activeDivision.title} Packages
                </h4>
                <p className="text-xs text-[#5D687A]">
                  Pre-configured, fixed-scope scopes with defined deliverables and turnaround.
                </p>
              </div>
              <span className="text-xs font-mono-code text-[#006BFF] font-semibold">
                Rates for {currentMarket.name}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeDivision.featuredPackages.map((pkg, idx) => {
                const priceFormatted = getRegionalPrice(
                  pkg.priceUsd,
                  selectedMarketId,
                  pkg.anchorKey,
                  pkg.billingInterval
                );

                return (
                  <div
                    key={idx}
                    className={`rounded-3xl bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all hover:shadow-lg relative ${
                      pkg.badge
                        ? 'border-[#006BFF] ring-2 ring-[#006BFF]/20 shadow-xs'
                        : 'border-[#E6EBF2] hover:border-[#006BFF]'
                    }`}
                  >
                    {pkg.badge && (
                      <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#006BFF] text-white text-[10px] font-mono-code font-bold uppercase tracking-wider shadow-xs">
                        {pkg.badge}
                      </span>
                    )}

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-lg font-bold text-[#0A1020] font-display">{pkg.name}</h5>
                        <p className="text-xs text-[#5D687A] mt-1 leading-snug">{pkg.description}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2]">
                        <div className="text-[11px] font-mono-code text-[#5D687A] uppercase font-semibold">
                          Investment
                        </div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] font-display">
                          {priceFormatted}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="text-[11px] font-mono-code font-bold text-[#0A1020] uppercase">
                          Scope Inclusions:
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-[#475569]">
                              <Check className="w-3.5 h-3.5 text-[#006BFF] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E6EBF2]">
                      <button
                        onClick={() => handleAction(`${activeDivision.title} - ${pkg.name}`)}
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-[#07152E] hover:bg-[#006BFF] text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Select Package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Division Modular Services & Sub-Categories Table */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0A1020] font-display">
                Itemized Service Catalog · {activeDivision.title}
              </h4>
              <p className="text-xs text-[#5D687A]">
                Modular options, add-ons, and standalone engagements formatted in {currentMarket.currencyCode}.
              </p>
            </div>
            <span className="text-xs text-[#5D687A]">
              Prices shown for <strong className="text-[#0A1020]">{currentMarket.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeDivision.categories.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6EBF2] shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono-code font-bold px-2 py-0.5 rounded bg-[#EBF3FF] text-[#0052CC]">
                      {cat.categoryTag}
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono-code">
                      {cat.services.length} items
                    </span>
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-[#0A1020] font-display">
                      {cat.categoryTitle}
                    </h5>
                    <p className="text-xs text-[#5D687A] mt-1">{cat.description}</p>
                  </div>

                  <div className="divide-y divide-[#E6EBF2] pt-2">
                    {cat.services.map((srv, sIdx) => {
                      const priceFormatted = getRegionalPrice(
                        srv.baseUsd,
                        selectedMarketId,
                        srv.anchorKey,
                        srv.unitSuffix
                      );

                      return (
                        <div
                          key={sIdx}
                          className="py-2.5 flex items-center justify-between gap-3 text-xs"
                        >
                          <span className="text-[#334155] font-medium">{srv.name}</span>
                          <span className="font-mono-code font-bold text-[#006BFF] shrink-0">
                            {priceFormatted}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2]">
                  <button
                    onClick={() => handleAction(`${activeDivision.title} - ${cat.categoryTitle}`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#F8FAFC] hover:bg-[#EBF3FF] border border-[#E6EBF2] text-xs font-semibold text-[#0052CC] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Quotation for {cat.categoryTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {activeDivision.disclaimer && (
            <p className="text-[11px] text-[#94A3B8] leading-relaxed italic">
              * Note: {activeDivision.disclaimer}
            </p>
          )}
        </div>

        {/* Turnkey Multi-Service Bundles */}
        <div className="pt-8 border-t border-[#E6EBF2] space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
              Turnkey Commercial Bundles
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] font-display">
              Recommended Solutions to Maximize Value
            </h3>
            <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
              Pair your website build with ongoing website maintenance, local search visibility, or 24/7 AI lead capture for a complete hands-off operational setup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_BUNDLES.slice(0, 3).map((b, idx) => {
              const priceFormatted = getRegionalPrice(
                b.basePriceUsd,
                selectedMarketId,
                undefined,
                ` ${b.priceSuffix}`
              );

              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] transition-all flex flex-col justify-between space-y-5 shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF]">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      {b.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EBF3FF] text-[#0052CC] text-[10px] font-bold font-mono-code">
                          {b.badge}
                        </span>
                      )}
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-[#0A1020] font-display">{b.title}</h5>
                      <p className="text-xs text-[#5D687A] mt-0.5 leading-snug">{b.description}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E6EBF2]">
                      <div className="text-[11px] font-mono-code text-[#5D687A] uppercase">
                        Bundle Investment
                      </div>
                      <div className="text-xl font-extrabold text-[#006BFF] font-display mt-0.5">
                        {priceFormatted}
                      </div>
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {b.inclusions.map((c, ci) => (
                        <li key={ci} className="text-[11px] text-[#475569] flex items-start gap-1.5 leading-snug">
                          <Check className="w-3.5 h-3.5 text-[#006BFF] shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#E6EBF2]">
                    <button
                      onClick={() => handleAction(`Bundle - ${b.title}`)}
                      className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#006BFF] hover:text-white border border-[#E6EBF2] hover:border-[#006BFF] text-xs font-bold text-[#0A1020] transition-colors cursor-pointer text-center"
                    >
                      Select Bundle
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commercial Policies & Scope Discipline */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#07152E] text-white space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono-code font-bold text-[#00C8FF] uppercase">
                Transparent Operating Standards
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display">
                Commercial Rules &amp; Scope Protections
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Clear deliverables eliminate scope creep and protect both your budget and our project delivery deadlines.
              </p>
            </div>
            <button
              onClick={handleNavigateToPricing}
              className="px-5 py-3 rounded-xl bg-[#006BFF] hover:bg-[#0052CC] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>Explore All 15 Pricing FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF]" />
                <span>Payment Milestones</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Websites: 50% deposit to schedule, 30% after design sign-off, 20% before launch. Monthly maintenance billed in advance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF]" />
                <span>Pass-Through Costs</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Domains, hosting servers, third-party plugin licences, Meta WhatsApp messaging, and ad spend are billed at direct cost.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF]" />
                <span>100% Asset Ownership</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                You retain complete ownership of all Figma designs, code repositories, CMS credentials, and domain names.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF]" />
                <span>Honest SEO &amp; AI Scope</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                We deliver proven technical foundations and AEO schema. We never make fake ranking promises or sell access to free platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
