/**
 * Flagship City Landing Page Component (e.g. London, Los Angeles, Sydney, Venice, Toronto, Auckland).
 * Provides commercial landing architecture with authentic imagery, 4 core confirmed services,
 * local business delivery methodology, tailored FAQs, sibling locations, and pre-populated lead capture.
 */

import React, { useState } from 'react';
import {
  Globe,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Server,
  Zap,
  ChevronRight,
  ShieldCheck,
  Building2,
  Clock,
  Send,
  Sparkles,
  PhoneCall,
  Mail,
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../SeoAndBreadcrumb';
import { CityData } from '../../types/locationTypes';
import { useInquiryForm } from '../../hooks/useInquiryForm';

interface CityLandingPageProps {
  city: CityData;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string, location?: string) => void;
}

export const CityLandingPage: React.FC<CityLandingPageProps> = ({
  city,
  onNavigate,
  onOpenQuote,
}) => {
  const fullLocationString = `${city.name}, ${city.divisionName}, ${city.countryName}`;

  // Inline Quick Inquiry Form state
  const {
    formData,
    errors,
    setFieldValue,
    submit,
    isSubmitting,
    isSuccess,
  } = useInquiryForm({
    defaultLocation: fullLocationString,
  });

  const scrollToServices = () => {
    const el = document.getElementById('city-services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <SeoAndBreadcrumb
        title={city.metaTitle}
        description={city.metaDescription}
        path={city.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Locations', path: '/locations' },
          { label: city.regionName, path: `/locations/${city.regionId}` },
          {
            label: city.countryName,
            path: `/locations/${city.regionId}/${city.countryId}`,
          },
          {
            label: city.divisionName,
            path: `/locations/${city.regionId}/${city.countryId}/${city.divisionId}`,
          },
          { label: city.name, path: city.path },
        ]}
        locationSchema={{
          name: `${city.name} Digital & IT Solutions`,
          areaServedName: `${city.name}, ${city.countryName}`,
          areaServedType: 'City',
          timezone: city.timezone,
          isHybridOnSite: city.onSiteAvailable,
        }}
        faqs={city.faqs}
      />

      {/* 1. CITY HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7FC] via-white to-white border-b border-[#E6EBF2] pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6EBF2] text-xs font-semibold text-[#006BFF] shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>
                    {city.name} · {city.divisionName}
                  </span>
                </span>
                <span className="text-xs bg-[#F3F7FC] text-[#0A1020] font-semibold px-2.5 py-1 rounded-full border border-[#E6EBF2]">
                  {city.countryName}
                </span>
                {city.onSiteAvailable ? (
                  <span className="text-[11px] bg-blue-50 text-[#006BFF] font-semibold px-2.5 py-1 rounded-full border border-blue-200">
                    Hybrid On-Site Field Support
                  </span>
                ) : (
                  <span className="text-[11px] bg-slate-100 text-[#5D687A] font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                    Remote-First Engineering Model
                  </span>
                )}
              </div>

              {/* Dynamic Headline tailored naturally to city */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1020] tracking-tight leading-[1.12]">
                {city.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-2xl">
                {city.heroSupportingCopy}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote(undefined, fullLocationString)}
                  className="px-6 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-md shadow-[#006BFF]/20 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={scrollToServices}
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E6EBF2] text-[#0A1020] text-sm font-semibold hover:border-[#006BFF] hover:text-[#006BFF] transition-all cursor-pointer shadow-xs"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Timezone & Delivery Model Meta */}
              <div className="pt-4 border-t border-[#E6EBF2] flex flex-wrap items-center gap-6 text-xs text-[#5D687A]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#006BFF]" />
                  <span>Timezone: {city.timezone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#006BFF]" />
                  <span>
                    {city.onSiteAvailable
                      ? 'Local Hardware & CCTV Installation Available'
                      : 'Remote-First Direct Technical Team'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right City Skyline Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E6EBF2] shadow-2xl bg-white group">
                <img
                  src={city.heroImage}
                  alt={`${city.name} skyline and business district`}
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 bg-white border-t border-[#E6EBF2]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#006BFF]">
                    <span>Commercial Technology Partner</span>
                    <span>{city.name}</span>
                  </div>
                  <p className="text-xs text-[#5D687A] mt-1.5 leading-relaxed">
                    Dedicated digital engineering, local search optimization, and responsive IT care for {city.name} enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CITY INTRODUCTION & COMMERCIAL CONTEXT */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-[#E6EBF2] space-y-4">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Local Business Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1020]">
              How Botlytices Supports Businesses in {city.name}
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
              {city.intro}
            </p>
            <div className="pt-2 text-xs sm:text-sm text-[#0A1020] font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#006BFF] shrink-0" />
              <span>Coverage: {city.businessContext}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONFIRMED SERVICES SECTION */}
      <section id="city-services" className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Confirmed Service Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Practical Technology Services for {city.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Every service is delivered with strict technical quality, itemized deliverables, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.confirmedServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-[#E6EBF2] hover:border-[#006BFF] transition-all hover:shadow-lg flex flex-col justify-between space-y-6 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-code font-bold uppercase text-[#006BFF]">
                      Service {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs bg-white text-[#5D687A] px-2.5 py-1 rounded-full border border-[#E6EBF2] font-medium">
                      {city.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors mt-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D687A] mt-2 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E6EBF2] space-y-2.5">
                    <div className="text-xs font-bold text-[#0A1020]">What We Deliver:</div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-[#5D687A]">
                          <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6EBF2] flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuote(service.title, fullLocationString)}
                    className="text-xs font-bold text-[#006BFF] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request a Quote for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK WITH LOCAL BUSINESSES */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Delivery Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              How We Work With Businesses in {city.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              A transparent, 5-stage framework designed for predictability, speed, and dependable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {city.howWeWork.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-[#E6EBF2] shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="text-sm font-extrabold font-mono-code text-[#006BFF] bg-[#F3F7FC] w-8 h-8 rounded-lg flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1020] mt-3">{step.title}</h3>
                  <p className="text-xs text-[#5D687A] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RELEVANT LOCAL FAQS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              {city.name} FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Frequently Asked Questions for {city.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Common questions answered regarding project execution and support in {city.name}.
            </p>
          </div>

          <div className="space-y-4">
            {city.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E6EBF2] space-y-2"
              >
                <h3 className="text-base font-bold text-[#0A1020]">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEARBY / RELATED LOCATIONS */}
      {city.nearbyCities.length > 0 && (
        <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-[#E6EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
                  Geographical Proximity
                </span>
                <h3 className="text-xl font-bold text-[#0A1020] mt-1">
                  Nearby & Related Service Locations
                </h3>
              </div>
              <button
                onClick={() =>
                  onNavigate(`/locations/${city.regionId}/${city.countryId}/${city.divisionId}`)
                }
                className="text-xs font-semibold text-[#006BFF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All {city.divisionName} Locations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {city.nearbyCities.map((near) => (
                <div
                  key={near.name}
                  onClick={() => onNavigate(near.path)}
                  className="bg-white rounded-xl p-4 border border-[#E6EBF2] hover:border-[#006BFF] hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs text-[#5D687A]">{near.divisionOrCountry}</div>
                    <div className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                      {near.name}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#006BFF] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. PRE-POPULATED INLINE LEAD CAPTURE FORM / CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E6EBF2] p-8 sm:p-12 shadow-xl bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
                Start Your Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1020]">
                Request a Proposal in {city.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#5D687A]">
                Share your requirements below. Our technical team will review your project and provide a clear, itemized proposal.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-bold text-[#0A1020]">Inquiry Received</h3>
                <p className="text-xs text-[#5D687A]">
                  Thank you. An engineer will contact you regarding your {city.name} project within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFieldValue('name', e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFieldValue('companyName', e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFieldValue('email', e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFieldValue('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                    />
                  </div>
                </div>

                {/* Pre-populated location */}
                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Target Location (Pre-populated)
                  </label>
                  <input
                    type="text"
                    value={formData.location || fullLocationString}
                    onChange={(e) => setFieldValue('location', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F1F5F9] border border-[#E6EBF2] text-xs font-medium text-[#0A1020]"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Project Brief / Message *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFieldValue('message', e.target.value)}
                    placeholder={`Tell us about your digital requirements in ${city.name}...`}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#006BFF] hover:bg-[#0052CC] text-white text-xs font-bold transition-all shadow-md shadow-[#006BFF]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Project Inquiry for {city.name}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
