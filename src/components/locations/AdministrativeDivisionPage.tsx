/**
 * Administrative Division Page Component (State, Province, Territory, or Region).
 * (e.g. /locations/americas/united-states/california, /locations/europe/united-kingdom/england).
 */

import React from 'react';
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
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../SeoAndBreadcrumb';
import { DivisionData } from '../../types/locationTypes';

interface AdministrativeDivisionPageProps {
  division: DivisionData;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string, location?: string) => void;
}

export const AdministrativeDivisionPage: React.FC<AdministrativeDivisionPageProps> = ({
  division,
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <SeoAndBreadcrumb
        title={division.metaTitle}
        description={division.metaDescription}
        path={division.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Locations', path: '/locations' },
          { label: division.regionName, path: `/locations/${division.regionId}` },
          {
            label: division.countryName,
            path: `/locations/${division.regionId}/${division.countryId}`,
          },
          { label: division.name, path: division.path },
        ]}
        locationSchema={{
          name: `${division.name}, ${division.countryName}`,
          areaServedName: division.name,
          areaServedType: 'AdministrativeArea',
        }}
        faqs={division.faqs}
      />

      {/* 1. DIVISION HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7FC] via-white to-white border-b border-[#E6EBF2] pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6EBF2] text-xs font-semibold text-[#006BFF] shadow-xs">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{division.regionName}</span>
                </span>
                <span className="text-xs bg-[#F3F7FC] text-[#0A1020] font-semibold px-2.5 py-1 rounded-full border border-[#E6EBF2]">
                  {division.countryName}
                </span>
                <span className="text-xs bg-blue-50 text-[#006BFF] font-semibold px-2.5 py-1 rounded-full border border-blue-200">
                  {division.type}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1020] tracking-tight leading-[1.12]">
                {division.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-2xl">
                {division.intro}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    onOpenQuote(undefined, `${division.name}, ${division.countryName}`)
                  }
                  className="px-6 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-md shadow-[#006BFF]/20 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Discuss Your Project in {division.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('division-cities');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E6EBF2] text-[#0A1020] text-sm font-semibold hover:border-[#006BFF] hover:text-[#006BFF] transition-all cursor-pointer shadow-xs"
                >
                  View Supported Cities ({division.cities.length})
                </button>
              </div>

              {/* Hierarchy summary */}
              <div className="pt-4 border-t border-[#E6EBF2] text-xs text-[#5D687A] flex items-center gap-2">
                <span className="font-semibold text-[#0A1020]">Parent Region:</span>
                <span>{division.regionName}</span>
                <span>·</span>
                <span className="font-semibold text-[#0A1020]">Country:</span>
                <span>{division.countryName}</span>
                <span>·</span>
                <span className="font-semibold text-[#0A1020]">Localities:</span>
                <span>{division.cities.length} Verified Cities</span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E6EBF2] shadow-2xl bg-white group">
                <img
                  src={division.heroImage}
                  alt={`${division.name} architecture and landscape`}
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 bg-white border-t border-[#E6EBF2]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#006BFF]">
                    <span>{division.type} Coverage</span>
                    <span>{division.name}</span>
                  </div>
                  <p className="text-xs text-[#5D687A] mt-1.5 leading-relaxed">
                    Connecting businesses across {division.name} to modern web engineering, IT support, and localized Google Maps authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECTORY OF CITIES & LOCALITIES IN DIVISION */}
      <section id="division-cities" className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              City Network
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Cities Supported in {division.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Explore dedicated commercial landing pages for each city in {division.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {division.cities.map((city) => (
              <div
                key={city.id}
                onClick={() => onNavigate(city.path)}
                className="bg-white rounded-2xl border border-[#E6EBF2] overflow-hidden hover:border-[#006BFF] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-[#F3F7FC]">
                    <img
                      src={city.heroImage}
                      alt={`${city.name} city view`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A1020]/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                      {division.name}
                    </div>
                    {city.onSiteAvailable && (
                      <div className="absolute bottom-3 left-3 bg-[#006BFF] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                        On-Site Available
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-[#5D687A] mt-2 line-clamp-2 leading-relaxed">
                      {city.heroSupportingCopy}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#006BFF]">
                  <span>Explore {city.name}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AVAILABLE SERVICES IN DIVISION */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Services Offered
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Digital Solutions in {division.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Four core service disciplines available to businesses throughout {division.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">Web Development</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                Modern business websites, responsive design, technical SEO, and domain assistance for {division.name} companies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">IT Support & Cloud</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                Operating system support, Microsoft 365, network diagnostics, and cloud data backup strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">Local Search Presence</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                Google Business Profile, Apple Business Connect, and local citation authority across {division.name}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">AI Automation</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                24/7 client inquiry handling, automated scheduling, and lead qualification workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIVISION FAQS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Frequently Asked Questions for {division.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Information regarding projects and services in {division.name}.
            </p>
          </div>

          <div className="space-y-4">
            {division.faqs.map((faq, idx) => (
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

      {/* 5. CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#07152E] via-[#0A1A3A] to-[#07152E] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#60A5FA]">
            {division.name} Project Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ready to Partner With Botlytices in {division.name}?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Schedule an introductory consultation to discuss your business website, IT systems, or local search visibility in {division.name}.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() =>
                onOpenQuote(undefined, `${division.name}, ${division.countryName}`)
              }
              className="px-8 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-lg shadow-[#006BFF]/30 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Discuss Your Project in {division.name}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() =>
                onNavigate(`/locations/${division.regionId}/${division.countryId}`)
              }
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all cursor-pointer"
            >
              Back to {division.countryName}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
