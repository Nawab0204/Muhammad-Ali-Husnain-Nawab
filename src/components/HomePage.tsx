/**
 * HomePage Component for BOTLYTICES.
 * Clean, modular composition of domain sections following SOLID principles and DRY concepts.
 */

import React from 'react';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';
import { HeroSlider } from './sections/home/HeroSlider';
import { TrustMetrics } from './sections/home/TrustMetrics';
import { DivisionBanners } from './sections/home/DivisionBanners';
import { HomePortfolioSection } from './sections/home/HomePortfolioSection';
import { DeliveryArchitectureSection } from './sections/home/DeliveryArchitectureSection';
import { VerifiedReviews } from './sections/home/VerifiedReviews';
import { HomeBlogSection } from './sections/home/HomeBlogSection';
import { HomeFaqSection } from './sections/home/HomeFaqSection';
import { ConversionCtaSection } from './sections/home/ConversionCtaSection';
import { PricingRateCard } from './sections/PricingRateCard';

interface HomePageProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* 1. SEO & Structured Data */}
      <SeoAndBreadcrumb
        title="BOTLYTICES | Web Development, IT Support & AI Automation"
        description="BOTLYTICES provides web development, IT support, SEO and AI automation to help businesses improve their digital operations and online presence."
        path="/"
        breadcrumbs={[{ label: 'Home' }]}
        onNavigate={onNavigate}
        hideVisualBreadcrumbs={true}
      />

      {/* 2. Full-Width Edge-to-Edge 5-Slide Hero Carousel */}
      <HeroSlider onNavigate={onNavigate} onOpenQuote={onOpenQuote} />

      {/* 3. High-Impact Trust & SLA Commitment Bar */}
      <TrustMetrics />

      {/* 4. Five Major Service Divisions & 2x2 Subcategory Grids */}
      <DivisionBanners onNavigate={onNavigate} onOpenQuote={onOpenQuote} />

      {/* 5. Featured Portfolio Showcase (Large Widescreen Cards) */}
      <HomePortfolioSection onNavigate={onNavigate} />

      {/* 6. Structured Delivery Architecture (7-Stage Engineering Blueprint) */}
      <DeliveryArchitectureSection onNavigate={onNavigate} />

      {/* 7. Transparent International Rate Cards (1/3 Agency Rates on Web Dev) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingRateCard 
            initialDivisionId="web-development"
            onOpenQuote={onOpenQuote}
            onNavigate={onNavigate}
          />
        </div>
      </section>

      {/* 8. Verified Google Reviews & Trustpilot Reviews */}
      <VerifiedReviews onNavigate={onNavigate} />

      {/* 8. Latest Blogs & Technical Insights */}
      <HomeBlogSection onNavigate={onNavigate} />

      {/* 9. Frequent Q/A (Interactive Accordion) */}
      <HomeFaqSection onNavigate={onNavigate} />

      {/* 10. Primary Conversion Call to Action */}
      <ConversionCtaSection onNavigate={onNavigate} onOpenQuote={onOpenQuote ? () => onOpenQuote() : undefined} />
    </div>
  );
};

export default HomePage;
