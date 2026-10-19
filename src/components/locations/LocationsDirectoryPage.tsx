/**
 * Global Locations Directory Page (/locations).
 * Main entry point for exploring BOTLYTICES international service network across Americas, Europe, and Oceania.
 * Displays dynamic live metrics computed directly from the location database.
 */

import React, { useState } from 'react';
import {
  Globe,
  ArrowRight,
  Search,
  MapPin,
  CheckCircle2,
  Server,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';
import { SeoAndBreadcrumb } from '../SeoAndBreadcrumb';
import {
  getAllRegions,
  getRegionStats,
  getGlobalLocationStats,
  getFeaturedCities,
} from '../../data/locationsData';
import { GeographicalRegionId } from '../../types/locationTypes';

interface LocationsDirectoryPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string, location?: string) => void;
}

export const LocationsDirectoryPage: React.FC<LocationsDirectoryPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<'all' | GeographicalRegionId>('all');

  const regions = getAllRegions();
  const globalStats = getGlobalLocationStats();
  const featuredCities = getFeaturedCities();

  // Search & filter countries
  const allCountriesWithRegion = regions.flatMap((region) =>
    region.countries.map((country) => ({
      ...country,
      regionName: region.name,
      regionSlug: region.slug,
    }))
  );

  const filteredCountries = allCountriesWithRegion.filter((country) => {
    const matchesRegion =
      selectedRegionFilter === 'all' || country.regionId === selectedRegionFilter;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesRegion;

    const matchesName = country.name.toLowerCase().includes(q);
    const matchesCities = country.divisions.some((div) =>
      div.cities.some((c) => c.name.toLowerCase().includes(q))
    );
    const matchesDivisions = country.divisions.some((div) =>
      div.name.toLowerCase().includes(q)
    );

    return matchesRegion && (matchesName || matchesCities || matchesDivisions);
  });

  const scrollToRegions = () => {
    const el = document.getElementById('regional-hubs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <SeoAndBreadcrumb
        title="Global Service Locations | International Directory | BOTLYTICES"
        description="Explore Botlytices digital services across the Americas, Europe, and Oceania. Custom web development, IT support, local search optimization, and AI automation."
        path="/locations"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Locations', path: '/locations' },
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7FC] via-white to-white border-b border-[#E6EBF2] pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6EBF2] shadow-xs text-xs font-semibold text-[#006BFF]">
                <Globe className="w-3.5 h-3.5 text-[#006BFF]" />
                <span>International Digital Services Network</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0A1020] tracking-tight leading-[1.12]">
                Digital Services, Wherever Your Business Operates.
              </h1>

              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed max-w-2xl">
                Explore our web development, IT support, local business presence, and automation
                services across our international service network. From the Americas to Europe and
                Oceania, we empower modern enterprises with reliable, engineering-grade digital solutions.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToRegions}
                  className="px-6 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-md shadow-[#006BFF]/20 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Explore Locations</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenQuote()}
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E6EBF2] text-[#0A1020] text-sm font-semibold hover:border-[#006BFF] hover:text-[#006BFF] transition-all cursor-pointer shadow-xs"
                >
                  Discuss Your Project
                </button>
              </div>

              {/* Dynamic Live Counter Bar */}
              <div className="pt-6 border-t border-[#E6EBF2] grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] font-mono-code">
                    {globalStats.totalRegions}
                  </div>
                  <div className="text-xs text-[#5D687A] font-medium mt-0.5">Geographical Hubs</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#006BFF] font-mono-code">
                    {globalStats.totalCountries}
                  </div>
                  <div className="text-xs text-[#5D687A] font-medium mt-0.5">Supported Countries</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] font-mono-code">
                    {globalStats.totalCities}
                  </div>
                  <div className="text-xs text-[#5D687A] font-medium mt-0.5">Key Cities & Localities</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#E6EBF2] shadow-2xl bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="International business district and modern architecture"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020]/90 via-[#0A1020]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#60A5FA]">
                    Global Infrastructure
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-white">
                    Remote Engineering, Local Authority
                  </h3>
                  <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                    Direct access to senior software engineers, IT systems specialists, and local search experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGION SELECTOR (3 PRIMARY GEOGRAPHICAL HUBS) */}
      <section id="regional-hubs" className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Primary Geographical Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Three Continents, One High-Standard Delivery Model
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] mt-3">
              Explore our verified service hubs with dynamically calculated coverage counts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => {
              const stats = getRegionStats(region.id);
              return (
                <div
                  key={region.id}
                  className="bg-white rounded-3xl border border-[#E6EBF2] overflow-hidden hover:border-[#006BFF] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col group"
                >
                  {/* Region Image */}
                  <div className="relative h-52 overflow-hidden bg-[#F3F7FC]">
                    <img
                      src={region.heroImage}
                      alt={`${region.name} architecture and skyline`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-white/40 shadow-xs text-xs font-bold text-[#0A1020]">
                      {region.name}
                    </div>
                  </div>

                  {/* Region Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                        {region.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5D687A] mt-2 leading-relaxed">
                        {region.overview}
                      </p>

                      {/* Dynamic Metrics Badge Group */}
                      <div className="mt-5 pt-4 border-t border-[#E6EBF2] grid grid-cols-3 gap-2 text-center">
                        <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-[#E6EBF2]/80">
                          <div className="text-base font-extrabold text-[#0A1020] font-mono-code">
                            {stats.countriesCount}
                          </div>
                          <div className="text-[10px] text-[#5D687A] font-medium mt-0.5">Countries</div>
                        </div>
                        <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-[#E6EBF2]/80">
                          <div className="text-base font-extrabold text-[#0A1020] font-mono-code">
                            {stats.divisionsCount}
                          </div>
                          <div className="text-[10px] text-[#5D687A] font-medium mt-0.5">Divisions</div>
                        </div>
                        <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-[#E6EBF2]/80">
                          <div className="text-base font-extrabold text-[#006BFF] font-mono-code">
                            {stats.citiesCount}
                          </div>
                          <div className="text-[10px] text-[#5D687A] font-medium mt-0.5">Cities</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate(region.path)}
                      className="w-full py-3 px-4 rounded-xl bg-[#F3F7FC] hover:bg-[#006BFF] text-[#0A1020] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
                    >
                      <span>Explore {region.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED LOCATIONS (IMAGE-LED CARDS) */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
                Verified Commercial Centers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
                Featured Metropolitan Locations
              </h2>
              <p className="text-sm text-[#5D687A] mt-2 max-w-xl">
                Explore key global hubs where Botlytices delivers custom web development, IT support, and local search presence.
              </p>
            </div>
            <div className="shrink-0 text-xs text-[#5D687A]">
              Showing {featuredCities.length} Key Hubs across 3 Continents
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCities.map((city) => (
              <div
                key={city.id}
                onClick={() => onNavigate(city.path)}
                className="bg-white rounded-2xl border border-[#E6EBF2] overflow-hidden hover:border-[#006BFF] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-[#F3F7FC]">
                    <img
                      src={city.heroImage}
                      alt={`${city.name} skyline and business district`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A1020]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {city.countryName}
                    </div>
                    {city.onSiteAvailable && (
                      <div className="absolute bottom-3 left-3 bg-[#006BFF] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                        Hybrid · On-Site Available
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="text-[11px] text-[#5D687A] font-medium">
                      {city.divisionName} · {city.regionName}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors mt-0.5">
                      {city.name}
                    </h3>
                    <p className="text-xs text-[#5D687A] mt-2 line-clamp-2 leading-relaxed">
                      {city.businessContext}
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

      {/* 4. COUNTRY DIRECTORY (SEARCHABLE & FILTERABLE) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Country Directory
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Browse All Supported Countries
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Filter by continent or search by country, state/province, or city name.
            </p>
          </div>

          {/* Search Bar & Region Tabs */}
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <div className="relative">
              <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by country, state, province, or city (e.g. London, California, Australia)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#5D687A] hover:text-[#0A1020]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedRegionFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegionFilter === 'all'
                    ? 'bg-[#006BFF] text-white shadow-xs'
                    : 'bg-[#F3F7FC] text-[#5D687A] hover:bg-[#E6EBF2]'
                }`}
              >
                All Regions ({allCountriesWithRegion.length} Countries)
              </button>
              {regions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegionFilter(r.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedRegionFilter === r.id
                      ? 'bg-[#006BFF] text-white shadow-xs'
                      : 'bg-[#F3F7FC] text-[#5D687A] hover:bg-[#E6EBF2]'
                  }`}
                >
                  {r.name} ({r.countries.length})
                </button>
              ))}
            </div>
          </div>

          {/* Country Cards Grid */}
          {filteredCountries.length === 0 ? (
            <div className="text-center py-12 bg-[#F8FAFC] rounded-3xl border border-[#E6EBF2]">
              <MapPin className="w-8 h-8 text-[#94A3B8] mx-auto mb-3" />
              <div className="text-sm font-semibold text-[#0A1020]">No locations match your search</div>
              <p className="text-xs text-[#5D687A] mt-1">Try clearing your search query or selecting All Regions.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCountries.map((country) => {
                const totalCitiesInCountry = country.divisions.reduce(
                  (sum, d) => sum + d.cities.length,
                  0
                );
                return (
                  <div
                    key={country.id}
                    className="bg-white rounded-2xl border border-[#E6EBF2] p-6 hover:border-[#006BFF] transition-all hover:shadow-md flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono-code font-bold uppercase text-[#006BFF]">
                          {country.regionName}
                        </span>
                        <span className="text-xs bg-[#F3F7FC] text-[#0A1020] font-semibold px-2 py-0.5 rounded">
                          {country.code}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1020] mt-1">{country.name}</h3>
                      <p className="text-xs text-[#5D687A] mt-2 line-clamp-2 leading-relaxed">
                        {country.intro}
                      </p>

                      {/* Division Chips Preview */}
                      <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
                        <div className="text-[11px] font-semibold text-[#0A1020] mb-1.5">
                          Supported Divisions ({country.divisions.length}):
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {country.divisions.map((div) => (
                            <button
                              key={div.id}
                              onClick={() => onNavigate(div.path)}
                              className="text-[11px] bg-[#F8FAFC] hover:bg-[#E6EBF2] text-[#5D687A] hover:text-[#006BFF] px-2 py-1 rounded-md transition-colors"
                            >
                              {div.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#F1F5F9]">
                      <span className="text-xs text-[#5D687A]">
                        {totalCitiesInCountry} Cities Available
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
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. SERVICES AVAILABLE INTERNATIONALLY */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Services Available Across Our International Network
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Every location receives access to our four verified, core service divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">Web Development</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                Custom business websites, web applications, technical SEO, fast load times, and structured content management.
              </p>
              <ul className="text-xs text-[#5D687A] space-y-1.5 pt-2 border-t border-[#F1F5F9]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>Responsive Web Apps</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>Technical Schema SEO</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">IT Support & Cloud</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                Remote computer support, Microsoft 365, network diagnostics, backups, and physical CCTV installation in London.
              </p>
              <ul className="text-xs text-[#5D687A] space-y-1.5 pt-2 border-t border-[#F1F5F9]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>Remote Desktop Support</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>M365 & Security Audits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">Local Search Presence</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                Google Business Profile verification, Apple Business Connect, Bing Places, and localized directory authority.
              </p>
              <ul className="text-xs text-[#5D687A] space-y-1.5 pt-2 border-t border-[#F1F5F9]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>Google Maps Ranking</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>Review Strategy Guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6EBF2] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1020]">AI Automation</h3>
              <p className="text-xs text-[#5D687A] leading-relaxed">
                Intelligent client inquiry triage, automated appointment scheduling, and CRM workflow pipelines.
              </p>
              <ul className="text-xs text-[#5D687A] space-y-1.5 pt-2 border-t border-[#F1F5F9]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>24/7 Lead Qualification</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006BFF] shrink-0" />
                  <span>Automated Booking Sync</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW OUR REMOTE & LOCAL DELIVERY OPERATES */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Transparent Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              How Remote & Local Support Works
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              We clearly distinguish between our high-efficiency remote engineering and confirmed on-site field capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Remote Delivery Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E6EBF2] space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6EBF2] text-xs font-semibold text-[#006BFF]">
                <Globe className="w-3.5 h-3.5" />
                <span>Available Internationally</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1020]">
                Remote-First Digital Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
                All custom web engineering, software development, cloud infrastructure setup, local search optimization, and AI workflow automations are executed through our structured remote model.
              </p>
              <ul className="space-y-2.5 text-xs text-[#5D687A] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                  <span>Scheduled video consultations tailored to your local time zone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                  <span>Live staging URLs for real-time progress inspection and feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                  <span>Elimination of expensive physical agency markups and unnecessary travel delays</span>
                </li>
              </ul>
            </div>

            {/* Hybrid / On-Site Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E6EBF2] space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6EBF2] text-xs font-semibold text-[#006BFF]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Confirmed On-Site Hubs</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A1020]">
                On-Site Hardware & CCTV
              </h3>
              <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">
                For physical security, commercial CCTV installations, Cat6 network cabling, and on-site workstation diagnostics, physical coverage is provided in verified regions.
              </p>
              <ul className="space-y-2.5 text-xs text-[#5D687A] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                  <span>Confirmed on-site installation across Greater London and surrounding English hubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                  <span>Physical camera mounting, DVR/NVR configuration, and secure phone app pairing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0 mt-0.5" />
                  <span>Structured network cabling and server rack installation for offices and commercial spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6EBF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#006BFF]">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1020] mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5D687A] mt-2">
              Clear answers regarding our international service delivery, contracts, and local presence.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How does Botlytices work with businesses outside the United Kingdom?',
                a: 'We operate a proven remote-first engineering model. We coordinate with you via video consultations, shared Figma prototypes, asynchronous sprint reviews, and live staging URLs. You receive direct access to senior engineers with no middlemen.',
              },
              {
                q: 'Do you claim to have physical offices in every listed city?',
                a: 'No. We pride ourselves on complete transparency. We deliver remote engineering, local SEO, and digital consulting internationally, while our verified on-site field technicians handle physical CCTV and cabling specifically in Greater London and English hubs.',
              },
              {
                q: 'Can you help our local business rank on Google Maps in our city?',
                a: 'Yes. We optimize your Google Business Profile, Apple Business Connect, local directory citations, and localized schema markup to capture local searchers in your target city.',
              },
              {
                q: 'How do invoicing and payments work internationally?',
                a: 'We issue itemized digital invoices in your preferred currency (USD, GBP, EUR, CAD, AUD, NZD) with secure payment via bank wire, ACH/EFT, or major credit cards.',
              },
              {
                q: 'What is the standard turnaround time for a custom business website?',
                a: 'Most custom business websites are designed, developed, and deployed within 2 to 4 weeks with full SEO readiness and cross-device testing.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E6EBF2] space-y-2"
              >
                <h3 className="text-base font-bold text-[#0A1020]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROJECT ENQUIRY CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#07152E] via-[#0A1A3A] to-[#07152E] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#60A5FA]">
            Start Your Project
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ready to Accelerate Your Business Technology?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Schedule an introductory consultation to discuss your web development, IT systems, local
            search ranking, or AI automation requirements in your city.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-3.5 rounded-xl bg-[#006BFF] text-white text-sm font-semibold hover:bg-[#0052CC] shadow-lg shadow-[#006BFF]/30 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all cursor-pointer"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
