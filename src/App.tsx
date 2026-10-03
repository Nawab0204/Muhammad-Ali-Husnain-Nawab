/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesIndexPage } from './components/ServicesIndexPage';
import { DivisionLandingPage } from './components/DivisionLandingPage';
import { SubcategoryPageTemplate } from './components/SubcategoryPageTemplate';
import { PortfolioAndCaseStudiesPage } from './components/PortfolioAndCaseStudiesPage';
import { ProcessPage, AboutPage, FaqPage, ContactPage } from './components/CompanyPages';
import { TestimonialsPage, TermsPage } from './components/TestimonialsAndTermsPages';
import { BlogPages } from './components/BlogPages';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { DIVISIONS } from './data/siteArchitecture';
import { SUBCATEGORY_PAGES } from './data/subcategoryPages';
import tabLogo from './assets/images/botlytices-tab-logo.png';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = tabLogo;
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (typeof window !== 'undefined' && window.location.pathname !== cleanPath) {
      window.history.pushState({}, '', cleanPath);
    }
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (service?: string) => {
    setSelectedService(service);
    setIsQuoteModalOpen(true);
  };

  const renderPage = () => {
    const normalized = currentPath === '' ? '/' : currentPath.replace(/\/+$/, '') || '/';

    // 1. Home Page
    if (normalized === '/') {
      return <HomePage onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
    }

    // 2. Services Directory (/services)
    if (normalized === '/services') {
      return <ServicesIndexPage onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
    }

    // 3. Check 5 Division Landing Pages (/services/:division)
    const matchedDivision = DIVISIONS.find((d) => d.path === normalized);
    if (matchedDivision) {
      return (
        <DivisionLandingPage
          division={matchedDivision}
          onNavigate={navigate}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    // 4. Check 20 Subcategory Service Pages (/services/:division/:subcategory)
    const matchedSubcategory = Object.values(SUBCATEGORY_PAGES).find(
      (s) => s.path === normalized
    );
    if (matchedSubcategory) {
      return (
        <SubcategoryPageTemplate
          page={matchedSubcategory}
          onNavigate={navigate}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    // 5. About Us (/about)
    if (normalized === '/about') {
      return <AboutPage onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
    }

    // 6. Our Process (/about/process or /process)
    if (normalized === '/about/process' || normalized === '/process') {
      return <ProcessPage onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
    }

    // 7. Portfolio Index (/portfolio) & Portfolio Detail (/portfolio/:project)
    if (normalized === '/portfolio') {
      return (
        <PortfolioAndCaseStudiesPage
          mode="portfolio"
          onNavigate={navigate}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    if (normalized.startsWith('/portfolio/')) {
      const slug = normalized.replace('/portfolio/', '');
      return (
        <PortfolioAndCaseStudiesPage
          mode="portfolio"
          selectedSlug={slug}
          onNavigate={navigate}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    // 8. Case Studies Index (/case-studies) & Case Study Detail (/case-studies/:case-study)
    if (normalized === '/case-studies') {
      return (
        <PortfolioAndCaseStudiesPage
          mode="case-studies"
          onNavigate={navigate}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    if (normalized.startsWith('/case-studies/')) {
      const slug = normalized.replace('/case-studies/', '');
      return (
        <PortfolioAndCaseStudiesPage
          mode="case-studies"
          selectedSlug={slug}
          onNavigate={navigate}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    // 9. Testimonials (/testimonials)
    if (normalized === '/testimonials') {
      return <TestimonialsPage onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
    }

    // 10. Blog Index (/blog) & Blog Article Detail (/blog/:article)
    if (normalized === '/blog') {
      return <BlogPages onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
    }

    if (normalized.startsWith('/blog/')) {
      const slug = normalized.replace('/blog/', '');
      return (
        <BlogPages
          selectedSlug={slug}
          onNavigate={navigate}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    // 11. FAQ (/faq)
    if (normalized === '/faq') {
      return <FaqPage onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
    }

    // 12. Terms & Conditions (/terms)
    if (normalized === '/terms') {
      return <TermsPage onNavigate={navigate} />;
    }

    // 13. Contact Us (/contact)
    if (normalized === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // Fallback to Home Page
    return <HomePage onNavigate={navigate} onOpenQuote={handleOpenQuote} />;
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A1020] flex flex-col font-sans selection:bg-[#006BFF] selection:text-white">
      {/* Global Sticky Header with Services ▼, About ▼ Mega-Menus & Contact Us CTA */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Active Route View */}
      <main className="flex-1">{renderPage()}</main>

      {/* Complete Multi-Division & Company Sitemap Footer */}
      <Footer onNavigate={navigate} onOpenQuote={handleOpenQuote} />

      {/* Project Consultation / Quote Modal */}
      <ProjectInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
