/**
 * Regional Hub Landing Page (/locations/americas, /locations/europe, /locations/oceania).
 * Displays region-specific hero, dynamic country/division/city statistics, searchable country directory,
 * services available, featured cities, and regional FAQs.
 */

import React, { useState } from 'react';
import {
  Globe,
  ArrowRight,
  Search,
  MapPin,
  CheckCircle2,
  Server,
  Zap,
  ChevronRight,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../SeoAndBreadcrumb';
import { RegionData } from '../../types/locationTypes';
import { getRegionStats } from '../../data/locationsData';

interface RegionLandingPageProps {
  region: RegionData;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string, location?: string) => void;
}

export const RegionLandingPage: React.FC<RegionLandingPageProps> = ({
  region,
  onNavigate,
  onOpenQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const stats = getRegionStats(region.id);

  // Filter countries in region
  const filteredCountries = region.countries.filter((country) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const matchName = country.name.toLowerCase().includes(q);
    const matchDivisions = country.divisions.some((d) =>
      d.name.toLowerCase().includes(q)
    );
    const matchCities = country.divisions.some((d) =>
      d.cities.some((c) => c.name.toLowerCase().includes(q))
    );
    return matchName || matchDivisions || matchCities;
  });

  // Collect all cities in this region for featured view
  const allCitiesInRegion = region.countries.flatMap((country) =>
    country.divisions.flatMap((division) =>
      division.cities.map((city) => ({
        ...city,
        divisionName: division.name,
        countryName: country.name,
      }))
    )
  );

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <SeoAndBreadcrumb
        title={region.metaTitle}
        description={region.metaDescription}
        path={region.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Locations', path: '/locations' },
          { label: region.name, path: region.path },
        ]}
        faqs={region.faqs}
      />

      {/* 1. REGIONAL HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7FC] via-white to-white border-b border-[#E6EBF2] pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6EBF2] shadow-xs text-xs font-semibold text-[#006BFF]">
                <Globe className="w-3.5 h-3.5" />
                <span>Geographical Hub · {region.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1020] tracking-tight leading-[1.12]">
                {region.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-2xl">
                {region.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote(undefined, region.name)}
                  className="px-6 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-md shadow-[#006BFF]/20 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Discuss Your Project in {region.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('countries-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E6EBF2] text-[#0A1020] text-sm font-semibold hover:border-[#006BFF] hover:text-[#006BFF] transition-all cursor-pointer shadow-xs"
                >
                  View Supported Countries
                </button>
              </div>

              {/* Dynamic Region Counter */}
              <div className="pt-6 border-t border-[#E6EBF2] grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] font-mono-code">
                    {stats.countriesCount}
                  </div>
                  <div className="text-xs text-[#5D687A] font-medium mt-0.5">Countries</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#006BFF] font-mono-code">
                    {stats.divisionsCount}
                  </div>
                  <div className="text-xs text-[#5D687A] font-medium mt-0.5">Divisions & States</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] font-mono-code">
                    {stats.citiesCount}
                  </div>
                  <div className="text-xs text-[#5D687A] font-medium mt-0.5">Covered Cities</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E6EBF2] shadow-2xl bg-white group">
                <img
                  src={region.heroImage}
                  alt={`${region.name} skyline and commercial architecture`}
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 bg-white border-t border-[#E6EBF2]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#006BFF]">
                    <span>Regional Operating Model</span>
                    <span>{region.name} Hub</span>
                  </div>
                  <p className="text-xs text-[#5D687A] mt-2 leading-relaxed">
                    High-touch delivery with meetings aligned to regional time zones and local business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCHABLE COUNTRIES IN REGION */}
      <section id="countries-grid" className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
                Supported Countries
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
                Countries We Serve in {region.name}
              </h2>
              <p className="text-sm text-[#5D687A] mt-2">
                Select a country to browse administrative divisions, supported cities, and confirmed services.
              </p>
            </div>

            {/* Quick Country Search */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter countries or cities..."
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCountries.map((country) => {
              const totalCities = country.divisions.reduce(
                (acc, div) => acc + div.cities.length,
                0
              );
              return (
                <div
                  key={country.id}
                  className="bg-white rounded-3xl border border-[#E6EBF2] overflow-hidden hover:border-[#006BFF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-48 overflow-hidden bg-[#F3F7FC]">
                    <img
                      src={country.heroImage}
                      alt={`${country.name} architecture and city`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-xs font-bold text-[#0A1020] px-3 py-1 rounded-full shadow-xs">
                      {country.name}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#0A1020]/80 text-white text-[11px] font-mono-code px-2 py-0.5 rounded">
                      {country.code}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-xs text-[#5D687A] mt-2 line-clamp-3 leading-relaxed">
                        {country.intro}
                      </p>

                      {/* Division Chips */}
                      <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
                        <div className="text-[11px] font-semibold text-[#0A1020] mb-2">
                          Divisions / States ({country.divisions.length}):
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {country.divisions.map((div) => (
                            <button
                              key={div.id}
                              onClick={() => onNavigate(div.path)}
                              className="text-[11px] bg-[#F8FAFC] hover:bg-[#006BFF] text-[#5D687A] hover:text-white px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                            >
                              {div.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                      <span className="text-xs text-[#5D687A] font-medium">
                        {totalCities} Cities Supported
                      </span>
                      <button
                        onClick={() => onNavigate(country.path)}
                        className="text-xs font-bold text-[#006BFF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore {country.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CITIES IN THIS REGION */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Key Metropolitan Centers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Featured Cities Across {region.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Browse dedicated landing pages tailored to specific cities within {region.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCitiesInRegion.slice(0, 8).map((city) => (
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
                    <div className="absolute top-3 left-3 bg-[#0A1020]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                      {city.countryName}
                    </div>
                    {city.onSiteAvailable && (
                      <div className="absolute bottom-3 left-3 bg-[#006BFF] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                        On-Site Field Support
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="text-[11px] text-[#5D687A] font-medium">
                      {city.divisionName}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors mt-0.5">
                      {city.name}
                    </h3>
                    <p className="text-xs text-[#5D687A] mt-2 line-clamp-2 leading-relaxed">
                      {city.intro}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#006BFF]">
                  <span>View {city.name} Services</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGIONAL FAQS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Regional Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Frequently Asked Questions for {region.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Specific answers regarding our operations and contracts across {region.name}.
            </p>
          </div>

          <div className="space-y-4">
            {region.faqs.map((faq, idx) => (
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

      {/* 5. STRONG ENQUIRY CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#07152E] via-[#0A1A3A] to-[#07152E] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#60A5FA]">
            {region.name} Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Partner with Botlytices in {region.name}
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discuss your upcoming web development project, IT systems requirements, or local search expansion with our team.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote(undefined, region.name)}
              className="px-8 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-lg shadow-[#006BFF]/30 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Discuss Your Project in {region.name}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('/locations')}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all cursor-pointer"
            >
              View All Locations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
