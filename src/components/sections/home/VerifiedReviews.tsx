/**
 * Verified Client Reputation & Reviews Section.
 * Shows dual platform rating indicators (Google Reviews 5.0 and Trustpilot 4.9) and verified client cards.
 */

import React, { useState } from 'react';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { useApp } from '../../../context/AppContext';

export const VERIFIED_PLATFORM_REVIEWS = [
  {
    id: 'rev-1',
    platform: 'Google Reviews' as const,
    rating: '5.0',
    reviewer: 'AZA Kitchens & Bedrooms',
    role: 'Showroom Director · United Kingdom',
    service: 'Web Development & Local SEO',
    date: 'Verified Client',
    quote:
      'BOTLYTICES delivered a clean, modern website that presents our kitchens and bedrooms professionally and makes it straightforward for customers to request a design consultation.',
    liveUrl: 'https://azakitchensandbedrooms.co.uk/',
  },
  {
    id: 'rev-2',
    platform: 'Trustpilot' as const,
    rating: '5.0',
    reviewer: 'UK Architex',
    role: 'Practice Principal · United Kingdom',
    service: 'Web Design, UI/UX & Brand Identity',
    date: 'Verified Client',
    quote:
      'Visual precision and clarity are essential in architecture. BOTLYTICES built a website that explains our services clearly and represents our practice professionally.',
    liveUrl: 'https://ukarchitex.com/',
  },
  {
    id: 'rev-3',
    platform: 'Google Reviews' as const,
    rating: '5.0',
    reviewer: 'SSDN Travels',
    role: 'Operations Management',
    service: 'Web Platform & WhatsApp Automation',
    date: 'Verified Client',
    quote:
      'Our customers reach out primarily from their phones. The new website and WhatsApp inquiry setup made it much easier for travellers to send us their trip requirements.',
    liveUrl: 'https://ssdntravels.com/',
  },
  {
    id: 'rev-4',
    platform: 'Trustpilot' as const,
    rating: '5.0',
    reviewer: 'Apex Commercial Logistics',
    role: 'Operations Director · Multi-Site Office',
    service: 'IT Support, Cat6 Wi-Fi & 4K CCTV',
    date: 'Verified Client',
    quote:
      'They reorganized our server rack, eliminated Wi-Fi dead zones across the warehouse, and installed 4K IP cameras with mobile viewing. Everything works reliably.',
  },
];

interface VerifiedReviewsProps {
  onNavigate?: (path: string) => void;
}

export const VerifiedReviews: React.FC<VerifiedReviewsProps> = ({ onNavigate }) => {
  const { navigate: contextNavigate } = useApp();
  const navigate = onNavigate || contextNavigate;
  const [activeReviewTab, setActiveReviewTab] = useState<'All' | 'Google Reviews' | 'Trustpilot'>('All');

  const displayedReviews =
    activeReviewTab === 'All'
      ? VERIFIED_PLATFORM_REVIEWS
      : VERIFIED_PLATFORM_REVIEWS.filter((r) => r.platform === activeReviewTab);

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold text-[#006BFF] uppercase tracking-wider">
              Verified Client Reputation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] tracking-tight">
              Google Reviews &amp; Trustpilot Reviews
            </h2>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Rated 5.0 out of 5 across Google and Trustpilot by commercial clients for our web engineering, IT support, AI automation, and security solutions.
            </p>
          </div>

          {/* Platform Score Summary Badges */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Google Reviews Score Card */}
            <div className="px-5 py-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E6EBF2] flex items-center justify-center font-extrabold text-lg text-[#4285F4]">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold text-[#0A1020]">Google Reviews</span>
                  <span className="text-xs font-mono font-bold text-[#006BFF]">5.0 ★</span>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] text-[#5D687A] ml-1.5">Verified</span>
                </div>
              </div>
            </div>

            {/* Trustpilot Score Card */}
            <div className="px-5 py-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#00B67A] text-white flex items-center justify-center">
                <Star className="w-5 h-5 fill-white text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold text-[#0A1020]">Trustpilot</span>
                  <span className="text-xs font-mono font-bold text-[#00B67A]">4.9 / 5</span>
                </div>
                <div className="flex items-center gap-0.5 text-[#00B67A] mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00B67A] text-[#00B67A]" />
                  ))}
                  <span className="text-[11px] text-[#5D687A] ml-1.5">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs: All | Google Reviews | Trustpilot */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            {(['All', 'Google Reviews', 'Trustpilot'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveReviewTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeReviewTab === tab
                    ? 'bg-[#006BFF] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#5D687A] border border-[#E6EBF2] hover:text-[#0A1020]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={() => navigate('/testimonials')}
            className="text-xs sm:text-sm font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Client Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedReviews.map((rev) => {
            const isGoogle = rev.platform === 'Google Reviews';
            return (
              <div
                key={rev.id}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E6EBF2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 border-b border-[#E6EBF2] pb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs ${
                          isGoogle
                            ? 'bg-[#F8FAFC] border border-[#E6EBF2] text-[#4285F4]'
                            : 'bg-[#00B67A] text-white'
                        }`}
                      >
                        {isGoogle ? 'G' : '★'}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0A1020]">{rev.platform}</div>
                        <div className="text-[11px] text-[#5D687A]">{rev.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            isGoogle ? 'fill-amber-400 text-amber-400' : 'fill-[#00B67A] text-[#00B67A]'
                          }`}
                        />
                      ))}
                      <span className="text-xs font-mono font-bold text-[#0A1020] ml-1">
                        {rev.rating}
                      </span>
                    </div>
                  </div>

                  <blockquote className="text-sm sm:text-base text-[#0A1020] font-medium leading-relaxed">
                    “{rev.quote}”
                  </blockquote>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-bold text-[#0A1020] text-sm">{rev.reviewer}</div>
                    <div className="text-[#5D687A]">{rev.role}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono font-semibold text-[#006BFF]">{rev.service}</span>
                    {rev.liveUrl && (
                      <a
                        href={rev.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5D687A] hover:text-[#0A1020] inline-flex items-center gap-1"
                      >
                        <span>Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerifiedReviews;
