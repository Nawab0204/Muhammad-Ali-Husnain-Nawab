/**
 * HTML Sitemap Directory Page (/sitemap).
 * Provides indexable internal linking for Google Search Console crawlers and users across all 37 platform pages.
 */

import React, { useState } from 'react';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { APP_ROUTES, RouteDefinition } from '../config/routes';
import { getAllLocationRoutes } from '../data/locationsData';
import { useApp } from '../context/AppContext';
import { Search, Globe, ExternalLink, ShieldCheck, FileText, FolderKanban, BookOpen, Layers, MapPin } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const { navigate } = useApp();
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allPlatformRoutes: RouteDefinition[] = [...APP_ROUTES, ...getAllLocationRoutes()];

  const categories = [
    { id: 'all', label: 'All Pages' },
    { id: 'location', label: 'Global Locations' },
    { id: 'core', label: 'Core Navigation' },
    { id: 'service-division', label: '5 Divisions' },
    { id: 'service-subcategory', label: '20 Subcategories' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'case-study', label: 'Case Studies' },
    { id: 'blog', label: 'Blog & Articles' },
    { id: 'legal', label: 'Legal & Policies' },
  ];

  const filteredRoutes = allPlatformRoutes.filter((route) => {
    const matchesCategory = selectedCategory === 'all' || route.category === selectedCategory;
    const matchesSearch =
      route.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      route.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
      route.path.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (cat: RouteDefinition['category']) => {
    switch (cat) {
      case 'location':
        return MapPin;
      case 'service-division':
        return Globe;
      case 'service-subcategory':
        return Layers;
      case 'portfolio':
      case 'case-study':
        return FolderKanban;
      case 'blog':
        return BookOpen;
      case 'legal':
        return ShieldCheck;
      default:
        return FileText;
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <SeoAndBreadcrumb
        title="Complete Site Map & Architecture Directory | BOTLYTICES"
        description="Comprehensive directory of all technical pages, service divisions, specialized subcategories, global location hubs, portfolio case studies, and engineering blog articles."
        path="/sitemap"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Site Map', path: '/sitemap' },
        ]}
      />

      {/* Hero Header */}
      <section className="py-16 md:py-20 bg-[#F7F9FC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#0052CC] uppercase tracking-wider block mb-3">
              Search Index & Structure
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A1020] tracking-tight mb-4">
              Platform Site Map & Architecture
            </h1>
            <p className="text-base md:text-lg text-[#5D687A] leading-relaxed mb-8">
              Full directory of all active pages on BOTLYTICES. Every URL listed here is registered in our XML sitemap for search engine indexing.
            </p>

            {/* Live Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search across all services, regions, countries, cities, or technical guides..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-[#E6EBF2] rounded-xl text-sm text-[#0A1020] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#006BFF]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & URL Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E6EBF2]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#006BFF] text-white shadow-sm'
                    : 'bg-[#F3F7FC] text-[#5D687A] hover:text-[#0A1020] hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-semibold text-[#5D687A] uppercase tracking-wider">
              Displaying {filteredRoutes.length} of {allPlatformRoutes.length} registered URLs
            </p>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052CC] hover:underline"
            >
              <span>View Raw XML Sitemap</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route) => {
              const Icon = getCategoryIcon(route.category);
              return (
                <div
                  key={route.path}
                  onClick={() => navigate(route.path)}
                  className="bg-white border border-[#E6EBF2] rounded-2xl p-5 hover:border-[#006BFF] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F3F7FC] text-[#006BFF] flex items-center justify-center group-hover:bg-[#006BFF] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        priority: {route.priority.toFixed(1)}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors mb-1.5">
                      {route.breadcrumbLabel || route.title}
                    </h3>

                    <p className="text-xs text-[#5D687A] line-clamp-2 leading-relaxed mb-3">
                      {route.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#5D687A]">
                    <code className="text-[#006BFF] font-mono text-[11px] truncate max-w-[200px]">
                      {route.path}
                    </code>
                    <span className="capitalize text-[11px] text-slate-400">
                      {route.changefreq}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRoutes.length === 0 && (
            <div className="text-center py-16 bg-[#F7F9FC] rounded-2xl border border-dashed border-[#E6EBF2]">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#0A1020] mb-1">No matching routes found</h3>
              <p className="text-xs text-[#5D687A] mb-4">Try adjusting your search keyword or selecting a different category.</p>
              <button
                onClick={() => {
                  setFilterQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-semibold text-[#006BFF] hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
