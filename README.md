# BOTLYTICES — Enterprise Technology & Digital Solutions Platform

A production-grade, highly modular, scalable web platform for **BOTLYTICES**, a technology solutions and engineering partner delivering Web Development, IT Support & Infrastructure, Digital Presence & Branding, AI Automation, and Security & Surveillance.

---

## 1. Clean Architectural Folder Structure

```
├── public/
│   ├── robots.txt              # Directs Googlebot and AI crawlers to canonical sitemap
│   └── sitemap.xml             # Complete XML sitemap (all 37 pages indexed with priorities)
│
├── src/
│   ├── api/                    # Scalable, typed HTTP client layer
│   │   ├── client.ts           # Centralized fetch client with timeouts & error mapping
│   │   └── inquiryApi.ts       # Endpoint service for consultations & quote requests
│   │
│   ├── assets/                 # Optimized static assets & logos
│   │   └── images/             # HD progressive web assets (compressed < 2.5 MB total)
│   │
│   ├── config/                 # Decoupled environment configs & master route registry
│   │   ├── env.ts              # Type-safe environment variables with fallback origins
│   │   ├── constants.ts        # Global constants, SLA thresholds, and contact tiers
│   │   └── routes.ts           # Single Source of Truth for all 37 pages, priorities, & SEO
│   │
│   ├── context/                # Global Application State Management
│   │   └── AppContext.tsx      # React Context for routing, modal state, and notifications
│   │
│   ├── hooks/                  # Pure custom hooks separating logic from views
│   │   ├── useInquiryForm.ts   # Form validation machine, field handlers, and submission
│   │   └── useDebounce.ts      # Debounce utility for real-time search filtering
│   │
│   ├── services/               # Pure business logic layer (SOLID - Single Responsibility)
│   │   ├── inquiryService.ts   # RFC email validation, phone checks, sanitization
│   │   ├── sitemapService.ts   # XML generation, absolute URL resolution, robots specs
│   │   └── searchService.ts    # Cross-site fuzzy search across all services & articles
│   │
│   ├── types/                  # Canonical TypeScript definitions & domain interfaces
│   │   └── index.ts            # Single Source of Truth replacing obsolete types
│   │
│   ├── components/
│   │   ├── common/             # Reusable UI primitives (DRY, Zero-Pill, WCAG AA)
│   │   │   ├── Button.tsx      # Accessible button with states, variants, and spinner
│   │   │   ├── Card.tsx        # Standardized hairline-bordered card container
│   │   │   ├── Input.tsx       # Accessible input & textarea with error messages
│   │   │   ├── Toast.tsx       # Floating status notifications
│   │   │   └── ErrorBoundary.tsx# Crash prevention and graceful recovery screen
│   │   │
│   │   ├── sections/home/      # Modular HomePage sections
│   │   │   ├── HeroSlider.tsx  # 5-Slide edge-to-edge carousel with autoplay & pause
│   │   │   ├── TrustMetrics.tsx# Verified SLA, deployment count, and uptime proof bar
│   │   │   ├── DivisionBanners.tsx# 5 Full-bleed division banners & 2x2 subcategory cards
│   │   │   ├── HomePortfolioSection.tsx# Widescreen rectangular client project showcases
│   │   │   ├── DeliveryArchitectureSection.tsx# 7-Stage engineering blueprint
│   │   │   ├── VerifiedReviews.tsx# Google Reviews (5.0) & Trustpilot (4.9) verified ratings
│   │   │   ├── HomeBlogSection.tsx# Latest engineering guides & technical articles
│   │   │   ├── HomeFaqSection.tsx# Interactive Q/A accordion with category badges
│   │   │   └── ConversionCtaSection.tsx# High-intent project consultation callout
│   │   │
│   │   ├── Navbar.tsx          # Sticky header with Services ▼ & About ▼ mega-menus
│   │   ├── Footer.tsx          # 8-item company links & complete service division directory
│   │   ├── ProjectInquiryModal.tsx# Consultation modal with validation and feedback
│   │   └── SeoAndBreadcrumb.tsx# Dynamic canonical tags, JSON-LD graphs, and meta robots
│   │
│   ├── pages/                  # Top-level Page Controllers
│   │   ├── HomePage.tsx        # Modular home composition
│   │   ├── SitemapPage.tsx     # Interactive HTML Sitemap directory (/sitemap)
│   │   ├── NotFoundPage.tsx    # Professional 404 recovery page
│   │   └── index.ts            # Barrel export for all platform pages
│   │
│   ├── data/                   # Structured content registries
│   │   ├── siteArchitecture.ts # 5 Divisions & 20 Subcategory definitions
│   │   ├── subcategoryPages.ts # In-depth service pages, deliverables, and diagrams
│   │   ├── portfolioAndFaqs.ts # Portfolio projects, case studies, 7-step process & FAQs
│   │   └── blogArticles.ts     # Deep technical articles with TOC and FAQ schemas
│   │
│   ├── App.tsx                 # Master Router wrapped with ErrorBoundary & AppProvider
│   └── main.tsx                # Entry point
```

---

## 2. SOLID Principles & DRY Architecture

1. **Single Responsibility Principle (SRP)**:
   - UI components (`HeroSlider`, `Navbar`, `ProjectInquiryModal`) focus solely on presentation.
   - Validation and string sanitization are handled exclusively by `inquiryService.ts`.
   - Network requests and timeouts are handled by `HttpClient` in `src/api/client.ts`.
   - Master URL catalog and sitemap definitions live in `src/config/routes.ts`.

2. **Open / Closed Principle (OCP)**:
   - Adding a new service division or subcategory requires only registering it in `src/config/routes.ts` and `src/data/siteArchitecture.ts`. All routing, breadcrumbs, search, and XML sitemaps adapt automatically without modifying router code.

3. **Liskov Substitution Principle (LSP)**:
   - Common components like `Button`, `Input`, and `Card` strictly extend standard HTML element attributes while adding type-safe variant modifiers.

4. **Interface Segregation Principle (ISP)**:
   - Types in `src/types/index.ts` are granular and decoupled: `InquiryFormData`, `BlogArticle`, `PortfolioProject`, `RouteDefinition`, and `ToastNotification` avoid bloated single interfaces.

5. **Dependency Inversion Principle (DIP)**:
   - Pages and components depend on abstractions via `useApp()` and `apiClient` rather than hardcoding global browser variables or ad-hoc fetch calls.

6. **Don't Repeat Yourself (DRY)**:
   - Single route definition in `src/config/routes.ts` drives:
     - In-app routing
     - `<link rel="canonical">` generation
     - Search index matching
     - `public/sitemap.xml` entries
     - Interactive HTML `/sitemap` page directory

---

## 3. Google Search Console & Sitemap Readiness

Every single page on the website is indexable and configured for Google Search Console:

1. **`public/sitemap.xml`**:
   - Contains all **37 individual URLs**:
     - 10 Core Pages (`/`, `/services`, `/about`, `/about/process`, `/portfolio`, `/case-studies`, `/testimonials`, `/blog`, `/faq`, `/contact`)
     - 1 Legal Page (`/terms`)
     - 1 HTML Directory (`/sitemap`)
     - 5 Major Divisions (`/services/web-development`, `/services/it-support`, `/services/digital-presence`, `/services/ai-automation`, `/services/security-surveillance`)
     - 20 Subcategories (e.g., `/services/web-development/web-design-ui-ux`, `/services/ai-automation/ai-voice-assistants`, etc.)
     - 3 Individual Portfolio Project Pages
     - 3 Individual Case Study Pages
     - 6 In-Depth Technical Blog Articles
   - Formatted strictly according to `http://www.sitemaps.org/schemas/sitemap/0.9` with exact `<lastmod>`, `<changefreq>`, and `<priority>`.

2. **`public/robots.txt`**:
   - Explicitly references the canonical sitemap: `Sitemap: https://botlytices.com/sitemap.xml` and grants crawl access to all search engines (`User-agent: *`).

3. **HTML Directory Page (`/sitemap`)**:
   - Provides users and search engine bots with a crawlable visual directory with live keyword search and category filtering across all 37 pages.

4. **Schema.org Structured Data (JSON-LD)**:
   - Dynamic `Organization`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`, and `BlogPosting` schemas are automatically injected into `<head>` per page.

---

## 4. State Management & Error Handling

- **`AppProvider` & `useApp()`**: Provides single-source-of-truth routing, modal triggers, search queries, and notification dispatches without prop drilling.
- **`ErrorBoundary`**: Catches unhandled runtime render exceptions and presents a clean recovery screen with "Reload Page" and "Go to Home" actions.
- **`ToastContainer`**: Dispatches accessible, non-intrusive floating feedback messages for lead submissions and copy actions.
- **`NotFoundPage` (404)**: Renders a branded recovery view when an unmapped URL is visited, complete with quick links to all 5 service divisions.

---

## 5. Development & Verification

```bash
# Run local development server (port 3000)
npm run dev

# Run TypeScript typecheck
npm run lint

# Build production bundle
npm run build
```
