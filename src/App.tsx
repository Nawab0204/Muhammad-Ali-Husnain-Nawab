/**
 * Main Application Component & Master Router for BOTLYTICES.
 * Built with SOLID principles, centralized AppContext state management, and robust error boundaries.
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ToastContainer } from './components/common/Toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';

// Pages
import { HomePage } from './components/HomePage';
import { ServicesIndexPage } from './components/ServicesIndexPage';
import { DivisionLandingPage } from './components/DivisionLandingPage';
import { SubcategoryPageTemplate } from './components/SubcategoryPageTemplate';
import { PortfolioAndCaseStudiesPage } from './components/PortfolioAndCaseStudiesPage';
import { ProcessPage, AboutPage, FaqPage, ContactPage } from './components/CompanyPages';
import { TestimonialsPage, TermsPage } from './components/TestimonialsAndTermsPages';
import { BlogPages } from './components/BlogPages';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import {
  LocationsDirectoryPage,
  RegionLandingPage,
  CountryLandingPage,
  AdministrativeDivisionPage,
  CityLandingPage,
} from './components/locations';

// Data registries
import { DIVISIONS } from './data/siteArchitecture';
import { SUBCATEGORY_PAGES } from './data/subcategoryPages';
import {
  getRegionBySlug,
  getCountryBySlug,
  getDivisionBySlug,
  getCityBySlug,
  getCityInCountryBySlug,
} from './data/locationsData';
import tabLogo from './assets/images/botlytices-tab-logo.png';

/**
 * Inner router component that consumes AppContext.
 */
function AppContent() {
  const {
    currentPath,
    navigate,
    isQuoteModalOpen,
    selectedService,
    selectedLocation,
    openQuoteModal,
    closeQuoteModal,
  } = useApp();

  // Dynamic favicon update
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = tabLogo;
  }, []);

  // Route Resolver
  const renderCurrentRoute = () => {
    const normalized = currentPath === '' ? '/' : currentPath.replace(/\/+$/, '') || '/';

    // 1. Home Page
    if (normalized === '/') {
      return <HomePage onNavigate={navigate} onOpenQuote={openQuoteModal} />;
    }

    // 2. Services Directory (/services)
    if (normalized === '/services') {
      return <ServicesIndexPage onNavigate={navigate} onOpenQuote={openQuoteModal} />;
    }

    // 3. 5 Major Division Landing Pages (/services/:division)
    const matchedDivision = DIVISIONS.find((d) => d.path === normalized);
    if (matchedDivision) {
      return (
        <DivisionLandingPage
          division={matchedDivision}
          onNavigate={navigate}
          onOpenQuote={openQuoteModal}
        />
      );
    }

    // 4. 20 Subcategory Service Pages (/services/:division/:subcategory)
    const matchedSubcategory = Object.values(SUBCATEGORY_PAGES).find(
      (s) => s.path === normalized
    );
    if (matchedSubcategory) {
      return (
        <SubcategoryPageTemplate
          page={matchedSubcategory}
          onNavigate={navigate}
          onOpenQuote={openQuoteModal}
        />
      );
    }

    // 5. About Us (/about)
    if (normalized === '/about') {
      return <AboutPage onNavigate={navigate} onOpenQuote={openQuoteModal} />;
    }

    // 6. Our Process (/about/process or /process)
    if (normalized === '/about/process' || normalized === '/process') {
      return <ProcessPage onNavigate={navigate} onOpenQuote={openQuoteModal} />;
    }

    // 7. Portfolio Index & Detail Pages
    if (normalized === '/portfolio') {
      return (
        <PortfolioAndCaseStudiesPage
          mode="portfolio"
          onNavigate={navigate}
          onOpenQuote={openQuoteModal}
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
          onOpenQuote={openQuoteModal}
        />
      );
    }

    // 8. Case Studies Index & Detail Pages
    if (normalized === '/case-studies') {
      return (
        <PortfolioAndCaseStudiesPage
          mode="case-studies"
          onNavigate={navigate}
          onOpenQuote={openQuoteModal}
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
          onOpenQuote={openQuoteModal}
        />
      );
    }

    // 9. Testimonials (/testimonials)
    if (normalized === '/testimonials') {
      return <TestimonialsPage onNavigate={navigate} onOpenQuote={openQuoteModal} />;
    }

    // 10. Blog Index & Article Detail Pages
    if (normalized === '/blog') {
      return <BlogPages onNavigate={navigate} onOpenQuote={openQuoteModal} />;
    }

    if (normalized.startsWith('/blog/')) {
      const slug = normalized.replace('/blog/', '');
      return (
        <BlogPages
          selectedSlug={slug}
          onNavigate={navigate}
          onOpenQuote={openQuoteModal}
        />
      );
    }

    // 11. FAQ (/faq)
    if (normalized === '/faq') {
      return <FaqPage onNavigate={navigate} onOpenQuote={openQuoteModal} />;
    }

    // 12. Terms & Conditions (/terms)
    if (normalized === '/terms') {
      return <TermsPage onNavigate={navigate} />;
    }

    // 13. Contact Us (/contact)
    if (normalized === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 14. Global Service Locations Architecture (/locations and sub-levels)
    if (normalized === '/locations') {
      return (
        <LocationsDirectoryPage
          onNavigate={navigate}
          onOpenQuote={openQuoteModal}
        />
      );
    }

    if (normalized.startsWith('/locations/')) {
      const parts = normalized.replace('/locations/', '').split('/').filter(Boolean);

      // Level 1: Region (/locations/:region)
      if (parts.length === 1) {
        const region = getRegionBySlug(parts[0]);
        if (region) {
          return (
            <RegionLandingPage
              region={region}
              onNavigate={navigate}
              onOpenQuote={openQuoteModal}
            />
          );
        }
      }

      // Level 2: Country (/locations/:region/:country)
      if (parts.length === 2) {
        const country = getCountryBySlug(parts[0], parts[1]);
        if (country) {
          return (
            <CountryLandingPage
              country={country}
              onNavigate={navigate}
              onOpenQuote={openQuoteModal}
            />
          );
        }
      }

      // Level 3: Administrative Division (/locations/:region/:country/:division)
      // Or 3-segment direct City fallback (e.g. /locations/oceania/new-zealand/auckland)
      if (parts.length === 3) {
        const division = getDivisionBySlug(parts[0], parts[1], parts[2]);
        if (division) {
          return (
            <AdministrativeDivisionPage
              division={division}
              onNavigate={navigate}
              onOpenQuote={openQuoteModal}
            />
          );
        }

        const cityDirect = getCityInCountryBySlug(parts[0], parts[1], parts[2]);
        if (cityDirect) {
          return (
            <CityLandingPage
              city={cityDirect}
              onNavigate={navigate}
              onOpenQuote={openQuoteModal}
            />
          );
        }
      }

      // Level 4: City (/locations/:region/:country/:division/:city)
      if (parts.length === 4) {
        const city = getCityBySlug(parts[0], parts[1], parts[2], parts[3]);
        if (city) {
          return (
            <CityLandingPage
              city={city}
              onNavigate={navigate}
              onOpenQuote={openQuoteModal}
            />
          );
        }
      }
    }

    // 15. HTML Site Map Directory (/sitemap)
    if (normalized === '/sitemap') {
      return <SitemapPage />;
    }

    // 16. Clean 404 Not Found Page
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A1020] flex flex-col font-sans selection:bg-[#006BFF] selection:text-white">
      {/* Global Sticky Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenQuote={openQuoteModal}
      />

      {/* Main Routed Page with Section Error Catching */}
      <main className="flex-1">
        <ErrorBoundary fallbackTitle="View Failed to Load">
          {renderCurrentRoute()}
        </ErrorBoundary>
      </main>

      {/* Complete Footer Sitemap */}
      <Footer onNavigate={navigate} onOpenQuote={openQuoteModal} />

      {/* Global Interactive Modal */}
      <ProjectInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        defaultService={selectedService}
        defaultLocation={selectedLocation}
      />

      {/* Accessible Floating Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

/**
 * Root Application Entry wrapped with Error Boundary and Context Provider.
 */
export default function App() {
  return (
    <ErrorBoundary fallbackTitle="Application Initialization Error">
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}
