/**
 * High-Converting 404 Not Found Page.
 * Prevents broken link drop-offs by providing instant navigation back to core services and site map.
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { SeoAndBreadcrumb } from '../components/SeoAndBreadcrumb';
import { ArrowLeft, Home, Compass, MessageSquare, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate, openQuoteModal } = useApp();

  return (
    <div className="bg-[#FFFFFF] min-h-[70vh] flex flex-col justify-center">
      <SeoAndBreadcrumb
        title="404 Page Not Found | BOTLYTICES"
        description="The page you requested could not be located. Browse our technical service divisions or return to the home page."
        path="/404"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: '404 Page Not Found' },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="text-sm font-mono font-bold text-[#006BFF] tracking-wider uppercase bg-[#F3F7FC] px-3.5 py-1.5 rounded-full inline-block mb-4">
          Error 404 · Page Not Found
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0A1020] tracking-tight mb-4">
          Lost in the Digital Architecture?
        </h1>

        <p className="text-base sm:text-lg text-[#5D687A] max-w-xl mx-auto mb-10 leading-relaxed">
          The requested URL does not match any registered service division, portfolio project, or technical article in our system.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#006BFF] hover:bg-[#087CFF] text-white font-semibold rounded-xl transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </button>

          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E6EBF2] hover:bg-slate-50 text-[#0A1020] font-semibold rounded-xl transition-all"
          >
            <Compass className="w-4 h-4" />
            Browse All Services
          </button>

          <button
            onClick={() => navigate('/sitemap')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F9FC] hover:bg-slate-100 text-[#5D687A] font-semibold rounded-xl transition-all"
          >
            <Search className="w-4 h-4" />
            View Site Map
          </button>
        </div>

        {/* Quick Service Links */}
        <div className="pt-10 border-t border-[#E6EBF2]">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Popular Service Destinations
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs font-semibold">
            {[
              { label: 'Web Development', path: '/services/web-development' },
              { label: 'IT Support & Infrastructure', path: '/services/it-support' },
              { label: 'Digital Presence & Branding', path: '/services/digital-presence' },
              { label: 'AI Automation', path: '/services/ai-automation' },
              { label: 'Security & Surveillance', path: '/services/security-surveillance' },
            ].map((s) => (
              <button
                key={s.path}
                onClick={() => navigate(s.path)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#006BFF] text-slate-700 hover:text-white transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
