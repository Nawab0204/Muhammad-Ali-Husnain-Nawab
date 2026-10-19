/**
 * Country Landing Page Component (e.g. /locations/europe/united-kingdom, /locations/americas/united-states).
 * Features country hero, accurate delivery model summary, administrative division grid,
 * searchable city directory, country FAQs, and breadcrumb navigation.
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
  Layers,
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../SeoAndBreadcrumb';
import { CountryData } from '../../types/locationTypes';

interface CountryLandingPageProps {
  country: CountryData;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string, location?: string) => void;
}

export const CountryLandingPage: React.FC<CountryLandingPageProps> = ({
  country,
  onNavigate,
  onOpenQuote,
}) => {
  const [cityFilter, setCityFilter] = useState('');
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>('all');

  const allCitiesInCountry = country.divisions.flatMap((division) =>
    division.cities.map((city) => ({
      ...city,
      divisionName: division.name,
      divisionType: division.type,
    }))
  );

  const filteredCities = allCitiesInCountry.filter((city) => {
    const matchesDivision =
      selectedDivisionId === 'all' || city.divisionId === selectedDivisionId;
    const q = cityFilter.toLowerCase().trim();
    if (!q) return matchesDivision;
    const matchesName = city.name.toLowerCase().includes(q);
    const matchesDiv = city.divisionName.toLowerCase().includes(q);
    return matchesDivision && (matchesName || matchesDiv);
  });

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <SeoAndBreadcrumb
        title={country.metaTitle}
        description={country.metaDescription}
        path={country.path}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Locations', path: '/locations' },
          { label: country.regionName, path: `/locations/${country.regionId}` },
          { label: country.name, path: country.path },
        ]}
        locationSchema={{
          name: country.name,
          areaServedName: country.name,
          areaServedType: 'Country',
        }}
        faqs={country.faqs}
      />

      {/* 1. COUNTRY HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7FC] via-white to-white border-b border-[#E6EBF2] pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6EBF2] text-xs font-semibold text-[#006BFF] shadow-xs">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{country.regionName}</span>
                </span>
                <span className="text-xs bg-[#F3F7FC] text-[#0A1020] font-mono-code font-bold px-2.5 py-1 rounded-full border border-[#E6EBF2]">
                  {country.code}
                </span>
                {country.deliveryModel === 'hybrid' ? (
                  <span className="text-[11px] bg-blue-50 text-[#006BFF] font-semibold px-2.5 py-1 rounded-full border border-blue-200">
                    Hybrid On-Site & Remote
                  </span>
                ) : (
                  <span className="text-[11px] bg-slate-100 text-[#5D687A] font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                    Remote-First Delivery
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1020] tracking-tight leading-[1.12]">
                {country.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-2xl">
                {country.intro}
              </p>

              {/* Delivery Model Callout */}
              <div className="p-4 rounded-2xl bg-white border border-[#E6EBF2] shadow-xs max-w-xl text-xs text-[#5D687A] leading-relaxed flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0A1020]">Service Delivery Model: </span>
                  {country.deliveryNote}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote(undefined, country.name)}
                  className="px-6 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-md shadow-[#006BFF]/20 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Discuss Your Project in {country.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('cities-directory');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E6EBF2] text-[#0A1020] text-sm font-semibold hover:border-[#006BFF] hover:text-[#006BFF] transition-all cursor-pointer shadow-xs"
                >
                  Browse {country.name} Cities
                </button>
              </div>

              {/* Counts Bar */}
              <div className="pt-4 border-t border-[#E6EBF2] flex items-center gap-6 sm:gap-10 text-xs">
                <div>
                  <span className="font-extrabold text-[#0A1020] text-lg font-mono-code">
                    {country.divisions.length}
                  </span>{' '}
                  <span className="text-[#5D687A]">Divisions & States</span>
                </div>
                <div>
                  <span className="font-extrabold text-[#006BFF] text-lg font-mono-code">
                    {allCitiesInCountry.length}
                  </span>{' '}
                  <span className="text-[#5D687A]">Active Cities</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-[#E6EBF2] shadow-2xl bg-white group">
                <img
                  src={country.heroImage}
                  alt={`${country.name} business skyline`}
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 bg-white border-t border-[#E6EBF2]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#006BFF]">
                    <span>Verified Commercial Presence</span>
                    <span>{country.name}</span>
                  </div>
                  <p className="text-xs text-[#5D687A] mt-1.5 leading-relaxed">
                    Custom web platforms, local search presence, and IT support adhering to national standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADMINISTRATIVE DIVISIONS / STATES / PROVINCES */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Administrative Geography
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Divisions & States in {country.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Browse by verified administrative divisions with dedicated regional landing pages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.divisions.map((division) => (
              <div
                key={division.id}
                className="bg-white rounded-2xl border border-[#E6EBF2] p-6 hover:border-[#006BFF] hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#5D687A]">
                    <span className="font-semibold text-[#006BFF]">{division.type}</span>
                    <span>{division.cities.length} Cities</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors mt-1">
                    {division.name}
                  </h3>
                  <p className="text-xs text-[#5D687A] mt-2 line-clamp-2 leading-relaxed">
                    {division.intro}
                  </p>

                  {/* Cities preview pills */}
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
                    <div className="text-[11px] font-semibold text-[#0A1020] mb-1.5">Cities:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {division.cities.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => onNavigate(city.path)}
                          className="text-[11px] bg-[#F8FAFC] hover:bg-[#006BFF] text-[#5D687A] hover:text-white px-2.5 py-1 rounded-md transition-colors"
                        >
                          {city.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(division.path)}
                    className="text-xs font-bold text-[#006BFF] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore {division.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CITY DIRECTORY WITH SEARCH & FILTERING */}
      <section id="cities-directory" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
                Local Service Network
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
                City Directory for {country.name}
              </h2>
              <p className="text-sm text-[#5D687A] mt-2">
                Select your city to view verified local services, case approaches, and FAQs.
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  placeholder="Search cities..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                />
              </div>

              {country.divisions.length > 1 && (
                <select
                  value={selectedDivisionId}
                  onChange={(e) => setSelectedDivisionId(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white border border-[#E6EBF2] text-xs text-[#0A1020] focus:outline-none focus:border-[#006BFF]"
                >
                  <option value="all">All Divisions ({country.divisions.length})</option>
                  {country.divisions.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {filteredCities.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#E6EBF2]">
              <MapPin className="w-8 h-8 text-[#94A3B8] mx-auto mb-2" />
              <div className="text-sm font-semibold text-[#0A1020]">No cities match your filter</div>
              <p className="text-xs text-[#5D687A] mt-1">Try resetting the division filter or search text.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCities.map((city) => (
                <div
                  key={city.id}
                  onClick={() => onNavigate(city.path)}
                  className="bg-white rounded-2xl border border-[#E6EBF2] overflow-hidden hover:border-[#006BFF] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-40 overflow-hidden bg-[#F3F7FC]">
                      <img
                        src={city.heroImage}
                        alt={`${city.name} city architecture`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#0A1020]/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                        {city.divisionName}
                      </div>
                      {city.onSiteAvailable && (
                        <div className="absolute bottom-2.5 left-2.5 bg-[#006BFF] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                          On-Site Available
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-xs text-[#5D687A] mt-1 line-clamp-2 leading-relaxed">
                        {city.heroSupportingCopy}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-1 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#006BFF]">
                    <span>Explore {city.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. COUNTRY FAQS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Country FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Frequently Asked Questions for {country.name}
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Clear information regarding our operations, contracts, and local presence in {country.name}.
            </p>
          </div>

          <div className="space-y-4">
            {country.faqs.map((faq, idx) => (
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

      {/* 5. COUNTRY ENQUIRY CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#07152E] via-[#0A1A3A] to-[#07152E] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#60A5FA]">
            {country.name} Technology Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build With Botlytices in {country.name}?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Get in touch for a transparent, itemized consultation regarding your digital systems, web development, or search presence.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote(undefined, country.name)}
              className="px-8 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-lg shadow-[#006BFF]/30 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Discuss Your Project in {country.name}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate(`/locations/${country.regionId}`)}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all cursor-pointer"
            >
              Back to {country.regionName}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
