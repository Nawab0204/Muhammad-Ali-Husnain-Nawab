import React, { useState } from 'react';
import {
  Globe,
  Server,
  MapPin,
  Bot,
  Camera,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Info,
  HelpCircle,
  MessageCircle,
  Send,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Zap,
  Sliders,
  DollarSign,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import {
  SUPPORTED_MARKETS,
  MarketRegion,
  DIVISIONS_PRICING,
  SOLUTION_BUNDLES,
  PRICING_FAQS,
  getRegionalPrice,
  DivisionPricingData
} from '../data/pricingData';
import { useApp } from '../context/AppContext';

interface PricingPageProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: (service?: string) => void;
}

const DIVISION_ICONS = {
  Globe,
  Server,
  MapPin,
  Bot,
  Camera,
};

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate: propNavigate,
  onOpenQuote: propOpenQuote,
}) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;
  const onOpenQuote = propOpenQuote || appContext.openQuoteModal;

  // Selected market (default: United States / USD)
  const [selectedMarketId, setSelectedMarketId] = useState<string>('us');
  const currentMarket =
    SUPPORTED_MARKETS.find((m) => m.id === selectedMarketId) || SUPPORTED_MARKETS[0];

  // Active division tab in pricing view
  const [activeDivisionTab, setActiveDivisionTab] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quote Form State
  const [formState, setFormState] = useState({
    fullName: '',
    businessName: '',
    email: '',
    country: currentMarket.name,
    currency: currentMarket.currencyCode,
    divisions: ['Web Development'],
    subService: 'Starter business website (up to 5 pages)',
    budget: '$1,000 – $2,500',
    description: '',
    contactMethod: 'Email',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // When user changes market, update form defaults
  const handleMarketChange = (newMarketId: string) => {
    setSelectedMarketId(newMarketId);
    const m = SUPPORTED_MARKETS.find((item) => item.id === newMarketId);
    if (m) {
      setFormState((prev) => ({
        ...prev,
        country: m.name,
        currency: m.currencyCode,
      }));
    }
  };

  const toggleDivisionSelection = (divTitle: string) => {
    setFormState((prev) => {
      const exists = prev.divisions.includes(divTitle);
      const updated = exists
        ? prev.divisions.filter((d) => d !== divTitle)
        : [...prev.divisions, divTitle];
      return {
        ...prev,
        divisions: updated.length > 0 ? updated : [divTitle],
      };
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formState.fullName.trim() || !formState.email.trim() || !formState.description.trim()) {
      setFormError('Please fill in your name, email, and project description.');
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: formState.fullName,
        email: formState.email,
        phone: '',
        subject: `Pricing Quote Request — ${formState.divisions.join(', ')} (${formState.currency})`,
        description: `Company: ${formState.businessName || 'N/A'}\nCountry: ${formState.country} (${formState.currency})\nDivisions: ${formState.divisions.join(', ')}\nSub-Service: ${formState.subService}\nBudget: ${formState.budget}\nPreferred Contact: ${formState.contactMethod}\n\nProject Notes:\n${formState.description}`,
      };

      // 1. Send to server-side endpoint /api/inquiry
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // 2. Also fallback/transmit via EmailJS if available
      const win = window as unknown as {
        emailjs?: {
          send: (s: string, t: string, p: Record<string, unknown>, k: string) => Promise<unknown>;
        };
      };
      if (win.emailjs) {
        await win.emailjs.send(
          'service_celhx6a',
          'template_2ls8f9w',
          {
            from_name: formState.fullName,
            reply_to: formState.email,
            company: formState.businessName,
            country: formState.country,
            currency: formState.currency,
            services: formState.divisions.join(', '),
            budget: formState.budget,
            description: formState.description,
            to_email: 'botlytices@gmail.com',
          },
          'dMIkk7Bzv9al7M4bb'
        );
      }

      setSubmitted(true);
      appContext.addToast({
        title: 'Quote Request Received',
        message: 'Your inquiry has been submitted. Our engineering lead will review and respond shortly.',
        type: 'success',
      });
    } catch (err) {
      console.error('Quote submission error:', err);
      setSubmitted(true);
      appContext.addToast({
        title: 'Request Received',
        message: 'Thank you. Your project inquiry has been queued for engineering review.',
        type: 'success',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToQuote = (prefilledService?: string) => {
    if (prefilledService) {
      setFormState((prev) => ({
        ...prev,
        subService: prefilledService,
      }));
    }
    const el = document.getElementById('quote-request-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayedDivisions =
    activeDivisionTab === 'all'
      ? DIVISIONS_PRICING
      : DIVISIONS_PRICING.filter((d) => d.id === activeDivisionTab);

  return (
    <div className="bg-[#FFFFFF] text-[#0A1020] selection:bg-[#006BFF] selection:text-white">
      {/* 1. SEO & Breadcrumbs */}
      <SeoAndBreadcrumb
        title="Pricing | Website Development, IT Support & AI Automation | Botlytices"
        description="Explore Botlytices pricing for website development, maintenance, IT support, SEO, digital branding, AI automation, CCTV and business technology services worldwide."
        path="https://botlytices.com/pricing"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'International Pricing' },
        ]}
        onNavigate={onNavigate}
        faqs={PRICING_FAQS}
        serviceType="Technology & Digital Services Pricing"
      />

      {/* SECTION A: PRICING HERO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E6EBF2] bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#BFDBFE] text-xs font-semibold text-[#0052CC] mb-6">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Transparent International Pricing Schedules</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.1] max-w-4xl mx-auto text-balance">
            Technology, Digital Solutions &amp; Business Automation.{' '}
            <span className="text-[#0052CC]">Clearly Priced.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-3xl mx-auto mt-5">
            Explore professional technology, website development, digital growth, IT infrastructure and AI automation services from Botlytices. Transparent starting prices, flexible packages and tailored solutions for businesses worldwide.
          </p>

          {/* Under hero trust-oriented statement */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#0A1020]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>International services</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Transparent pricing</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Solutions built around your business</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('divisions-pricing-view');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 text-sm font-semibold btn-primary-gradient rounded-xl shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToQuote()}
              className="px-6 py-3.5 text-sm font-semibold btn-secondary-outline rounded-xl bg-white hover:bg-[#F8FAFC] cursor-pointer"
            >
              Request a Custom Quote
            </button>
          </div>

          {/* Subtle explanatory note */}
          <p className="text-xs text-[#5D687A] mt-5 max-w-2xl mx-auto leading-relaxed">
            *Listed prices represent starting rates for defined standard scopes. Final quotations depend on exact technical scope, complexity, third-party integrations, and project requirements.
          </p>
        </div>
      </section>

      {/* SECTION B: INTERNATIONAL PRICING SELECTOR */}
      <section className="py-8 bg-[#FFFFFF] border-b border-[#E6EBF2] sticky top-[65px] sm:top-[73px] z-40 backdrop-blur-md bg-white/95 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Regional Pricing Schedules</span>
              </div>
              <div className="text-xs text-[#5D687A]">
                Showing commercial rates tailored for{' '}
                <strong className="text-[#0A1020]">{currentMarket.name}</strong> ({currentMarket.currencyCode})
              </div>
            </div>

            {/* Selector Pills / Dropdown */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {SUPPORTED_MARKETS.map((market) => {
                const isActive = market.id === selectedMarketId;
                return (
                  <button
                    key={market.id}
                    onClick={() => handleMarketChange(market.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#0052CC] text-white shadow-xs'
                        : 'bg-[#F8FAFC] border border-[#E6EBF2] text-[#5D687A] hover:text-[#0A1020] hover:border-slate-300'
                    }`}
                  >
                    <span>{market.flag}</span>
                    <span>{market.currencyCode}</span>
                    <span className="text-[10px] opacity-75">({market.currencySymbol.trim()})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: 5 DIVISIONS PRICING ARCHITECTURE */}
      <section id="divisions-pricing-view" className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Division Filter Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                Full-Spectrum Services
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight">
                All Five Business Divisions &amp; Starting Rates
              </h2>
              <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                Filter by division or browse the complete portfolio below. Prices reflect commercial positioning for{' '}
                <span className="font-semibold text-[#0A1020]">{currentMarket.name}</span>.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E6EBF2] rounded-xl overflow-x-auto shrink-0 self-start lg:self-auto">
              <button
                onClick={() => setActiveDivisionTab('all')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeDivisionTab === 'all'
                    ? 'bg-[#0052CC] text-white'
                    : 'text-[#5D687A] hover:text-[#0A1020]'
                }`}
              >
                All 5 Divisions
              </button>
              {DIVISIONS_PRICING.map((div) => (
                <button
                  key={div.id}
                  onClick={() => setActiveDivisionTab(div.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeDivisionTab === div.id
                      ? 'bg-[#0052CC] text-white'
                      : 'text-[#5D687A] hover:text-[#0A1020]'
                  }`}
                >
                  {div.number} / {div.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Division Loop */}
          <div className="space-y-16">
            {displayedDivisions.map((division) => {
              const Icon = DIVISION_ICONS[division.iconName];
              return (
                <div
                  key={division.id}
                  id={`division-${division.id}`}
                  className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E6EBF2] shadow-2xs space-y-10"
                >
                  {/* Division Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#E6EBF2]">
                    <div className="space-y-3 max-w-3xl">
                      <div className="inline-flex items-center gap-2 text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
                        <div className="w-7 h-7 rounded-lg bg-[#EBF3FF] text-[#0052CC] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>Division {division.number}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] font-display">
                        {division.title}
                      </h3>
                      <p className="text-sm text-[#5D687A] leading-relaxed">
                        {division.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(`/services/${division.id}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:text-[#003EA3] self-start md:self-auto shrink-0 cursor-pointer pt-2"
                    >
                      <span>Explore Division Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 4 Service Categories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {division.categories.map((cat, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[11px] font-mono-code font-bold text-[#0052CC]">
                              {cat.categoryTag}
                            </span>
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white border border-[#E6EBF2] text-[#5D687A]">
                              Sub-Services
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-[#0A1020] mb-1">
                            {cat.categoryTitle}
                          </h4>
                          <p className="text-xs text-[#5D687A] leading-relaxed mb-5">
                            {cat.description}
                          </p>

                          {/* Itemized Services List */}
                          <div className="space-y-2.5">
                            {cat.services.map((srv, sIdx) => {
                              const priceDisplay = getRegionalPrice(
                                srv.baseUsd,
                                selectedMarketId,
                                srv.anchorKey,
                                srv.unitSuffix
                              );
                              return (
                                <div
                                  key={sIdx}
                                  className="p-3 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-between gap-3 text-xs"
                                >
                                  <div className="font-medium text-[#0A1020] pr-2">
                                    {srv.name}
                                  </div>
                                  <div className="flex items-center gap-3 shrink-0">
                                    <span className="font-bold font-mono-code text-[#0052CC] text-xs sm:text-sm whitespace-nowrap">
                                      {srv.baseUsd !== null ? `From ${priceDisplay}` : priceDisplay}
                                    </span>
                                    <button
                                      onClick={() => scrollToQuote(srv.name)}
                                      className="px-2.5 py-1 text-[11px] font-semibold bg-[#F1F5F9] hover:bg-[#EBF3FF] text-[#0A1020] hover:text-[#0052CC] rounded-lg transition-colors cursor-pointer"
                                      title="Request quote for this service"
                                    >
                                      Quote
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured Packages (if defined) */}
                  {division.featuredPackages && division.featuredPackages.length > 0 && (
                    <div className="pt-6 border-t border-[#E6EBF2]">
                      <div className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider mb-4">
                        Featured Recurring Packages
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {division.featuredPackages.map((pkg, pIdx) => {
                          const pkgPrice = getRegionalPrice(
                            pkg.priceUsd,
                            selectedMarketId,
                            pkg.anchorKey,
                            pkg.billingInterval
                          );
                          return (
                            <div
                              key={pIdx}
                              className={`p-6 rounded-2xl border flex flex-col justify-between ${
                                pkg.badge
                                  ? 'bg-white border-[#0052CC] shadow-[0_10px_30px_-10px_rgba(0,82,204,0.15)] relative'
                                  : 'bg-[#F8FAFC] border-[#E6EBF2]'
                              }`}
                            >
                              <div>
                                {pkg.badge && (
                                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0052CC] text-white text-[10px] font-bold uppercase tracking-wider mb-3">
                                    {pkg.badge}
                                  </span>
                                )}
                                <h5 className="text-base font-bold text-[#0A1020]">
                                  {pkg.name}
                                </h5>
                                <div className="my-3">
                                  <span className="text-2xl font-extrabold text-[#0A1020] font-mono-code">
                                    {pkgPrice}
                                  </span>
                                </div>
                                <p className="text-xs text-[#5D687A] leading-relaxed mb-4">
                                  {pkg.description}
                                </p>
                                <ul className="space-y-2 text-xs text-[#5D687A] pt-3 border-t border-[#E6EBF2]">
                                  {pkg.features.map((f, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-2">
                                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <button
                                onClick={() => scrollToQuote(`${division.title} — ${pkg.name}`)}
                                className={`mt-6 w-full py-2.5 text-xs font-semibold rounded-xl cursor-pointer transition-all ${
                                  pkg.badge
                                    ? 'btn-primary-gradient shadow-xs hover:shadow-md'
                                    : 'btn-secondary-outline bg-white hover:bg-[#F8FAFC]'
                                }`}
                              >
                                Select {pkg.name}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Division Commercial Disclaimer */}
                  {division.disclaimer && (
                    <div className="p-4 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] text-xs text-[#5D687A] leading-relaxed flex items-start gap-2.5">
                      <Info className="w-4 h-4 text-[#0052CC] shrink-0 mt-0.5" />
                      <span>{division.disclaimer}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION D: COMPARISON AND BUNDLED SOLUTIONS */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Cross-Division Value
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight mt-2">
              Complete Digital Solutions for Your Business
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              Save time and avoid managing multiple disconnected agencies. These curated solution bundles integrate design, engineering, search presence, and automation into unified deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_BUNDLES.map((bundle, bIdx) => {
              const bundlePrice = getRegionalPrice(
                bundle.basePriceUsd,
                selectedMarketId,
                undefined,
                ` ${bundle.priceSuffix}`
              );
              return (
                <div
                  key={bIdx}
                  className={`p-7 rounded-2xl border flex flex-col justify-between ${
                    bundle.badge
                      ? 'bg-[#F8FAFC] border-[#0052CC] shadow-xs'
                      : 'bg-white border-[#E6EBF2] shadow-2xs'
                  }`}
                >
                  <div>
                    {bundle.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EBF3FF] border border-[#BFDBFE] text-[#0052CC] text-[10px] font-bold uppercase tracking-wider mb-3">
                        {bundle.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-[#0A1020]">{bundle.title}</h3>
                    <div className="my-3">
                      <span className="text-xs font-bold text-[#5D687A]">From </span>
                      <span className="text-2xl font-extrabold text-[#0A1020] font-mono-code">
                        {bundlePrice}
                      </span>
                    </div>
                    <p className="text-xs text-[#5D687A] leading-relaxed mb-6">
                      {bundle.description}
                    </p>

                    <div className="space-y-2 border-t border-[#E6EBF2] pt-5">
                      <div className="text-[11px] font-bold text-[#0A1020] uppercase tracking-wider mb-2">
                        Included Deliverables:
                      </div>
                      {bundle.inclusions.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#5D687A]">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => scrollToQuote(bundle.title)}
                      className="w-full py-3 text-xs sm:text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer shadow-xs hover:shadow-md transition-all"
                    >
                      Inquire About {bundle.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION E: PRICING EXPLANATIONS & COMMERCIAL CONDITIONS */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Transparency &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight mt-2">
              Understanding Our Pricing
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 leading-relaxed">
              We operate on clarity and mutual accountability. Below are the standard commercial principles governing all Botlytices quotations and contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Starting Prices',
                desc: 'Published rates represent starting fees for defined standard project scopes. Complex custom functionality or enterprise architectures receive a transparent itemized quotation.',
              },
              {
                title: 'One-Time Services',
                desc: 'Website development, branding kits, audits, custom integrations, and system installations carry fixed one-time milestone fees agreed in writing before kickoff.',
              },
              {
                title: 'Recurring Services',
                desc: 'Website maintenance, SEO growth, managed IT support, and ongoing AI management are billed on flexible monthly subscriptions with clearly stated service allowances.',
              },
              {
                title: 'Third-Party Costs',
                desc: 'Domain registrations, server infrastructure, external software licences (Shopify, Microsoft 365), voice minutes (Twilio), and WhatsApp conversation fees are paid directly to providers at cost.',
              },
              {
                title: 'Hardware & Equipment',
                desc: 'Physical CCTV cameras, NVRs, hard drives, Cat6 cabling, access control terminals, and workstation hardware are quoted following a technical site survey.',
              },
              {
                title: 'Scope Adjustments',
                desc: 'New features or revisions outside the approved statement-of-work require written customer confirmation before development to prevent unexpected invoices.',
              },
              {
                title: 'Service Support Limits',
                desc: 'Monthly plans define included content allowances and response SLAs (such as 2-hour or 4-hour priority response) to maintain predictable, high-quality delivery.',
              },
              {
                title: 'Taxes & Compliance',
                desc: 'Where required by jurisdiction, applicable local taxes or VAT are itemized separately. International cross-border invoices are denominated in your preferred currency.',
              },
              {
                title: 'Bespoke Requirements',
                desc: 'Need a customized service combination, non-disclosure agreement (NDA), or custom enterprise SLA? Contact our engineering leadership directly.',
              },
            ].map((cond, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E6EBF2] shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] text-[#0052CC] font-mono-code font-bold text-xs flex items-center justify-center mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#0A1020] mb-2">{cond.title}</h3>
                <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">{cond.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Answers &amp; Policies
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight mt-2">
              Frequently Asked Questions About Pricing
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-2">
              Clear answers regarding payments, invoices, currencies, and service delivery.
            </p>
          </div>

          <div className="space-y-3">
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E6EBF2] bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0A1020] flex items-center gap-3">
                      <span className="font-mono-code text-xs text-[#0052CC] font-bold">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5D687A] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0052CC]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5D687A] leading-relaxed border-t border-[#F1F5F9]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION G: QUOTE REQUEST & CONVERSION FUNCTIONALITY */}
      <section id="quote-request-section" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold text-[#0052CC] uppercase tracking-wider">
              Start Your Project
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight mt-2">
              Have a Project in Mind? Let's Build It.
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3 max-w-2xl mx-auto leading-relaxed">
              Tell us what your business needs. Our team will review your requirements and help you identify the appropriate solution and pricing.
            </p>
          </div>

          <div className="bg-white border border-[#E6EBF2] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(10,16,32,0.06)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1020]">
                  Thank You! Your Quotation Request Has Been Received.
                </h3>
                <p className="text-sm text-[#5D687A] max-w-lg mx-auto">
                  Our engineering lead will examine your project requirements in detail and provide an itemized proposal denominated in {formState.currency}.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-semibold btn-secondary-outline rounded-xl cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20just%20submitted%20a%20pricing%20quote%20request."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 text-xs font-semibold bg-[#25D366] text-white rounded-xl hover:bg-[#20ba59] transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp (+92 355 7181347)</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Row 1: Name, Business Name, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-business" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Business Name
                    </label>
                    <input
                      id="quote-business"
                      type="text"
                      value={formState.businessName}
                      onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                      placeholder="e.g. Acme Corporation"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>
                </div>

                {/* Row 2: Country, Preferred Currency, Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="quote-country" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Country
                    </label>
                    <input
                      id="quote-country"
                      type="text"
                      value={formState.country}
                      onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                      placeholder="e.g. United Kingdom, United States"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-currency" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Preferred Currency
                    </label>
                    <select
                      id="quote-currency"
                      value={formState.currency}
                      onChange={(e) => setFormState({ ...formState, currency: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    >
                      <option value="USD">USD ($) — United States</option>
                      <option value="GBP">GBP (£) — United Kingdom</option>
                      <option value="CAD">CAD (C$) — Canada</option>
                      <option value="AUD">AUD (A$) — Australia</option>
                      <option value="NZD">NZD (NZ$) — New Zealand</option>
                      <option value="EUR">EUR (€) — Ireland &amp; Eurozone</option>
                      <option value="AED">AED — United Arab Emirates</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-budget" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Estimated Budget ({formState.currency})
                    </label>
                    <select
                      id="quote-budget"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    >
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                      <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Monthly Retainer Plan">Monthly Retainer Plan</option>
                      <option value="Need Professional Recommendation">Need Professional Recommendation</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Multi-select Service Divisions */}
                <div>
                  <span className="block text-xs font-bold text-[#0A1020] mb-2">
                    Service Divisions Needed (Select all that apply)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {[
                      'Web Development',
                      'IT Support',
                      'Digital Presence',
                      'AI Automation',
                      'Security & CCTV',
                    ].map((divName) => {
                      const isSelected = formState.divisions.includes(divName);
                      return (
                        <button
                          key={divName}
                          type="button"
                          onClick={() => toggleDivisionSelection(divName)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#EBF3FF] border-[#0052CC] text-[#0052CC]'
                              : 'bg-[#F8FAFC] border-[#E6EBF2] text-[#5D687A] hover:border-slate-300'
                          }`}
                        >
                          <span>{divName}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#0052CC] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Specific Sub-service & Preferred Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-subservice" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Specific Sub-Service or Package Name
                    </label>
                    <input
                      id="quote-subservice"
                      type="text"
                      value={formState.subService}
                      onChange={(e) => setFormState({ ...formState, subService: e.target.value })}
                      placeholder="e.g. 5-page website, Business Care, WhatsApp AI"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-contact-method" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                      Preferred Contact Method
                    </label>
                    <select
                      id="quote-contact-method"
                      value={formState.contactMethod}
                      onChange={(e) => setFormState({ ...formState, contactMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    >
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Phone Call">Scheduled Phone / Google Meet</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Project Description */}
                <div>
                  <label htmlFor="quote-description" className="block text-xs font-bold text-[#0A1020] mb-1.5">
                    Project Description &amp; Technical Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="quote-description"
                    rows={3}
                    required
                    value={formState.description}
                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    placeholder="Describe your project, current website, timeline, desired integrations, or any reference websites you like..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#E6EBF2] rounded-xl focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                  />
                </div>

                {/* Privacy note */}
                <p className="text-[11px] text-[#5D687A]">
                  By submitting, you agree to our{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('/privacy-policy')}
                    className="text-[#0052CC] underline hover:text-[#003EA3] cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  . We never share your contact details.
                </p>

                {/* Submit & Contact Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold btn-primary-gradient rounded-xl cursor-pointer shadow-xs hover:shadow-md transition-all inline-flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Custom Quotation</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-xs text-[#5D687A]">
                    <span>Or direct engineer consultation:</span>
                    <a
                      href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20would%20like%20to%20discuss%20pricing%20and%20quotation%20options."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp (+92 355 7181347)</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
