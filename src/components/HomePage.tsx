import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Globe,
  Server,
  MapPin,
  Bot,
  Camera,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Search,
  Compass,
  Layout,
  Code2,
  Rocket,
  MessageSquare,
  Star,
  BookOpen,
} from 'lucide-react';
import { DIVISIONS, IMAGES } from '../data/siteArchitecture';
import {
  PORTFOLIO_PROJECTS,
  SEVEN_STEP_PROCESS,
  CATEGORIZED_FAQS,
} from '../data/portfolioAndFaqs';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { SeoAndBreadcrumb } from './SeoAndBreadcrumb';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

const DIVISION_ICONS = {
  'web-development': Globe,
  'it-support': Server,
  'digital-presence': MapPin,
  'ai-automation': Bot,
  'security-surveillance': Camera,
};

const HERO_SLIDES = [
  {
    id: 'web-development',
    number: '01',
    label: 'Web Development',
    headline: 'Websites Designed to Look Exceptional. Built to Perform.',
    description:
      'Custom web design, responsive React & Next.js development, e-commerce applications, and technical SEO & cloud hosting engineered to convert visitors into clients.',
    image: IMAGES.heroWebDev,
    path: '/services/web-development',
    cta: 'Explore Web Development',
    highlights: ['Web Design & UI/UX', 'Custom Web Development', 'E-commerce & Web Apps', 'SEO, Hosting & Care'],
  },
  {
    id: 'it-support',
    number: '02',
    label: 'IT Support & Infrastructure',
    headline: "Technology Problems Shouldn't Stop Your Business.",
    description:
      'Complete office and remote IT support: desktop & laptop repairs, Microsoft 365 software setup, Cat6 structured networking, commercial Wi-Fi, and defensive cybersecurity.',
    image: IMAGES.datacenterNetworking,
    path: '/services/it-support',
    cta: 'Explore IT Support',
    highlights: ['Hardware & Device Support', 'Software & System Setup', 'Networking & Wi-Fi', 'Cybersecurity & EDR'],
  },
  {
    id: 'digital-presence',
    number: '03',
    label: 'Digital Presence & Branding',
    headline: 'Make Your Business Look Professional Everywhere Customers Find You.',
    description:
      'Build a trustworthy brand identity across your logo, social media channels, Google Business Profile, Apple Maps, Bing Places, and local search.',
    image: IMAGES.presenceStudio,
    path: '/services/digital-presence',
    cta: 'Explore Digital Presence',
    highlights: ['Brand Identity & Logo', 'Social Media & Content', 'Google & Apple Maps', 'Digital Marketing'],
  },
  {
    id: 'ai-automation',
    number: '04',
    label: 'AI Automation',
    headline: 'Let Intelligent Automation Handle Your Repetitive Work 24/7.',
    description:
      'Deploy 24/7 AI phone voice assistants, official WhatsApp Business chat flows, automated lead qualification, and seamless CRM workflows.',
    image: IMAGES.aiExecDesk,
    path: '/services/ai-automation',
    cta: 'Explore AI Automation',
    highlights: ['AI Voice Assistants', 'WhatsApp & Chat Automation', 'AI Lead Generation', 'Workflow Automation'],
  },
  {
    id: 'security-surveillance',
    number: '05',
    label: 'Secure CCTV & Surveillance',
    headline: 'Protect Your Property, People & Business From Anywhere.',
    description:
      'Commercial 4K IP CCTV camera installation, fingerprint & facial biometric door access control, encrypted mobile viewing, and preventive system maintenance.',
    image: IMAGES.securityCctv,
    path: '/services/security-surveillance',
    cta: 'Explore Security & CCTV',
    highlights: ['4K CCTV Surveillance', 'Biometric Access Control', 'Remote Mobile Viewing', 'Security Maintenance'],
  },
];

const VERIFIED_PLATFORM_REVIEWS = [
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

const PROCESS_ICONS = [Search, Compass, Layout, Code2, ShieldCheck, Rocket, MessageSquare];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeReviewTab, setActiveReviewTab] = useState<'All' | 'Google Reviews' | 'Trustpilot'>('All');

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[activeSlide];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const displayedReviews =
    activeReviewTab === 'All'
      ? VERIFIED_PLATFORM_REVIEWS
      : VERIFIED_PLATFORM_REVIEWS.filter((r) => r.platform === activeReviewTab);

  const homepageFaqs = CATEGORIZED_FAQS.slice(0, 8);

  return (
    <div className="bg-[#FFFFFF]">
      <SeoAndBreadcrumb
        title="BOTLYTICES | Technology That Builds, Connects, Automates & Protects Your Business"
        description="We help businesses build their digital presence, maintain their technology, automate repetitive work and protect the systems that keep them running."
        path="/"
        breadcrumbs={[{ label: 'Home' }]}
        onNavigate={onNavigate}
        hideVisualBreadcrumbs={true}
      />

      {/* 1. FULL-WIDTH EDGE-TO-EDGE 5-SLIDE HERO SLIDER */}
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full min-h-[620px] lg:min-h-[720px] flex flex-col justify-center overflow-hidden bg-[#07152E]"
      >
        {/* Background Slides (Edge-to-Edge Full Display) */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
            />
            {/* Multi-stop dark gradient overlay so navigation & CTAs remain 100% legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07152E]/95 via-[#07152E]/82 to-[#07152E]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152E]/90 via-transparent to-[#07152E]/35" />
          </div>
        ))}

        {/* Main Slide Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 text-xs font-mono-code font-bold text-[#00C8FF] uppercase tracking-wider">
              <span>Slide {currentSlide.number} of 05</span>
              <span aria-hidden="true">·</span>
              <span>{currentSlide.label}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.06]">
              {currentSlide.headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl">
              {currentSlide.description}
            </p>

            {/* Subcategory Highlights Row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs sm:text-sm text-slate-200">
              {currentSlide.highlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00C8FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs + Prev/Next Controls + Slide Dots */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate(currentSlide.path)}
                  className="px-7 py-4 text-sm sm:text-base font-semibold btn-primary-gradient inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap shadow-lg"
                >
                  <span>{currentSlide.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenQuote(currentSlide.label)}
                  className="px-7 py-4 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 text-sm sm:text-base font-semibold transition-all cursor-pointer whitespace-nowrap"
                >
                  Start a Project
                </button>
              </div>

              {/* Clean Slide Progress Indicators & Arrow Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}: ${s.label}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeSlide
                          ? 'w-8 bg-[#00C8FF]'
                          : 'w-2.5 bg-white/35 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    aria-label="Previous slide"
                    className="w-11 h-11 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    aria-label="Next slide"
                    className="w-11 h-11 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGH-IMPACT TRUST & GUARANTEE BAR */}
      <section className="py-10 bg-[#FFFFFF] border-b border-[#E6EBF2] shadow-[0_10px_30px_-15px_rgba(10,16,32,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#006BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-[#0A1020] font-display">
                  Trusted by Businesses
                </div>
                <p className="text-xs text-[#5D687A] mt-0.5 leading-relaxed">
                  Delivering websites, IT systems, automation &amp; CCTV for modern companies.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#006BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-[#0A1020] font-display">
                  100% Success Rate
                </div>
                <p className="text-xs text-[#5D687A] mt-0.5 leading-relaxed">
                  Structured 7-step engineering milestone delivery from concept to launch.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#006BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-[#0A1020] font-display">
                  100% Quality Guaranteed
                </div>
                <p className="text-xs text-[#5D687A] mt-0.5 leading-relaxed">
                  Verified speed, mobile responsiveness, network stability, and clean code.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#006BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-[#0A1020] font-display">
                  5 Complete Divisions
                </div>
                <p className="text-xs text-[#5D687A] mt-0.5 leading-relaxed">
                  20 specialized technical services coordinated under one accountable partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FIVE MAJOR SERVICE DIVISIONS: FULL-WIDTH BANNERS + 2x2 RECTANGULAR SUBCATEGORY GRIDS */}
      <section id="divisions-overview" className="py-20 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Our Five Major Service Divisions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight leading-[1.1]">
                Complete Technology &amp; Digital Solutions Under One Roof.
              </h2>
              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                Explore each major service division below along with its 2×2 specialized service
                areas. Click any division or subcategory to view its dedicated page.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/services')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-secondary-outline self-start md:self-auto flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>View Full Services Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Loop through all 5 Divisions */}
        <div className="space-y-24">
          {DIVISIONS.map((division) => {
            const Icon = DIVISION_ICONS[division.id];
            return (
              <div key={division.id} className="space-y-10">
                {/* Full-Width Edge-to-Edge Banner Image for the Division */}
                <div className="relative w-full min-h-[380px] lg:min-h-[440px] flex items-end overflow-hidden bg-[#07152E] border-y border-[#E6EBF2]">
                  <img
                    src={division.heroImage}
                    alt={division.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07152E]/95 via-[#07152E]/75 to-[#07152E]/25" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152E]/90 via-transparent to-transparent" />

                  <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="max-w-3xl space-y-4">
                      <div className="inline-flex items-center gap-2.5 text-xs font-mono-code font-bold text-[#00C8FF] uppercase tracking-wider">
                        <div className="w-7 h-7 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>Division {division.number} · {division.title}</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.1]">
                        {division.heroHeadline}
                      </h3>

                      <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl">
                        {division.overviewDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button
                          onClick={() => onNavigate(division.path)}
                          className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Explore {division.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onOpenQuote(division.title)}
                          className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                        >
                          {division.ctaText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2x2 Rectangular Subcategory Cards Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {division.subcategories.map((sub, subIdx) => (
                      <div
                        key={sub.slug}
                        onClick={() => onNavigate(sub.path)}
                        className="rounded-xl bg-white border border-[#E6EBF2] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#006BFF] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                      >
                        <div>
                          {/* Rectangular 16:9 Subcategory Image */}
                          <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                            <img
                              src={sub.image}
                              alt={sub.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07152E]/85 backdrop-blur-xs text-[11px] font-mono-code font-bold text-[#00C8FF]">
                              {division.number}.0{subIdx + 1}
                            </div>
                          </div>

                          <div className="p-6 sm:p-7 space-y-3">
                            <h4 className="text-xl sm:text-2xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display">
                              {sub.title}
                            </h4>
                            <p className="text-sm text-[#5D687A] leading-relaxed">
                              {sub.shortDescription}
                            </p>

                            <ul className="pt-3 space-y-1.5 border-t border-[#E6EBF2]">
                              {sub.highlights.map((hl) => (
                                <li
                                  key={hl}
                                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0A1020]"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#006BFF] shrink-0" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="px-6 sm:px-7 py-4 bg-[#F8FAFC] border-t border-[#E6EBF2] flex items-center justify-between text-xs sm:text-sm font-bold text-[#006BFF]">
                          <span>Explore {sub.title}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO SHOWCASE (LARGE RECTANGULAR WIDESCREEN FORMAT) */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Proven Client Work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight">
                Featured Portfolio &amp; Live Projects
              </h2>
              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                Explore real client platforms, digital showrooms, and enterprise technology systems
                delivered by BOTLYTICES.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/portfolio')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-secondary-outline cursor-pointer whitespace-nowrap"
              >
                View Full Portfolio
              </button>
              <button
                onClick={() => onNavigate('/case-studies')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-primary-gradient cursor-pointer whitespace-nowrap"
              >
                Read Case Studies
              </button>
            </div>
          </div>

          <div className="space-y-10">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className="rounded-xl bg-white border border-[#E6EBF2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#006BFF]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
              >
                <div
                  onClick={() => onNavigate(`/portfolio/${project.slug}`)}
                  className={`lg:col-span-7 relative aspect-16/9 bg-slate-100 overflow-hidden cursor-pointer ${
                    index % 2 === 1
                      ? 'lg:order-2 border-b lg:border-b-0 lg:border-l border-[#E6EBF2]'
                      : 'border-b lg:border-b-0 lg:border-r border-[#E6EBF2]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-md bg-[#07152E]/85 backdrop-blur-xs text-xs font-mono-code font-bold text-white">
                    0{index + 1} · {project.location}
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                      <span>{project.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.categories.join(' / ')}</span>
                    </div>

                    <h3
                      onClick={() => onNavigate(`/portfolio/${project.slug}`)}
                      className="text-2xl sm:text-3xl font-extrabold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display cursor-pointer"
                    >
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E6EBF2] space-y-1">
                      <div className="text-xs font-bold text-[#006BFF]">Delivered Outcome:</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0A1020]">
                        {project.shortResult}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {project.results.map((res) => (
                        <div
                          key={res.label}
                          className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E6EBF2]"
                        >
                          <div className="text-sm sm:text-base font-extrabold text-[#006BFF] font-mono-code truncate">
                            {res.metric}
                          </div>
                          <div className="text-[11px] text-[#5D687A] truncate mt-0.5">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E6EBF2] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => onNavigate(`/portfolio/${project.slug}`)}
                        className="px-5 py-2.5 text-xs sm:text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onNavigate(`/case-studies/${project.slug}`)}
                        className="text-xs sm:text-sm font-bold text-[#006BFF] hover:underline cursor-pointer"
                      >
                        Case Study
                      </button>
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#5D687A] hover:text-[#0A1020] inline-flex items-center gap-1"
                      >
                        <span>Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ELEVATED STRUCTURE OF DELIVERY (7-STEP ENGINEERING BLUEPRINT) */}
      <section className="py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Structured Delivery Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight">
                How We Take Your Project From Idea to Launch
              </h2>
              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                Every website, IT deployment, AI workflow, and security installation follows our
                7-stage engineering methodology—eliminating guesswork and ensuring 100% on-target
                delivery.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/about/process')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-secondary-outline inline-flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Explore Full Process</span>
              <ArrowRight className="w-4 h-4 text-[#006BFF]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEVEN_STEP_PROCESS.map((st, idx) => {
              const StepIcon = PROCESS_ICONS[idx % PROCESS_ICONS.length];
              const isLastWide = idx === SEVEN_STEP_PROCESS.length - 1;
              return (
                <div
                  key={st.number}
                  onClick={() => onNavigate('/about/process')}
                  className={`p-7 rounded-xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group ${
                    isLastWide ? 'md:col-span-2 lg:col-span-2 bg-[#07152E] text-white border-[#07152E]' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-mono-code font-bold ${
                          isLastWide
                            ? 'bg-white/15 text-[#00C8FF]'
                            : 'bg-[#F3F7FC] text-[#006BFF]'
                        }`}
                      >
                        STAGE {st.number}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isLastWide
                            ? 'bg-[#006BFF] text-white'
                            : 'bg-[#F8FAFC] border border-[#E6EBF2] text-[#006BFF] group-hover:bg-[#006BFF] group-hover:text-white'
                        }`}
                      >
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3
                        className={`text-xl font-bold font-display ${
                          isLastWide ? 'text-white' : 'text-[#0A1020] group-hover:text-[#006BFF]'
                        }`}
                      >
                        {st.title}
                      </h3>
                      <div
                        className={`text-xs font-semibold mt-0.5 ${
                          isLastWide ? 'text-[#00C8FF]' : 'text-[#006BFF]'
                        }`}
                      >
                        {st.subtitle}
                      </div>
                    </div>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isLastWide ? 'text-slate-300' : 'text-[#5D687A]'
                      }`}
                    >
                      {st.description}
                    </p>
                  </div>

                  <div
                    className={`pt-4 mt-5 border-t flex items-center justify-between text-xs ${
                      isLastWide ? 'border-white/15 text-slate-200' : 'border-[#E6EBF2] text-[#5D687A]'
                    }`}
                  >
                    <span className="font-mono-code truncate">{st.exampleOutput}</span>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 ${
                        isLastWide ? 'text-[#00C8FF]' : 'text-[#006BFF]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. GOOGLE REVIEWS & TRUSTPILOT REVIEWS SECTION */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Verified Client Reputation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight">
                Google Reviews &amp; Trustpilot Reviews
              </h2>
              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                Rated 5.0 out of 5 across Google and Trustpilot by commercial clients for our web
                engineering, IT support, AI automation, and security solutions.
              </p>
            </div>

            {/* Platform Score Summary Badges */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Google Reviews Score Card */}
              <div className="px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center font-extrabold text-lg text-[#4285F4]">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-[#0A1020]">Google Reviews</span>
                    <span className="text-xs font-mono-code font-bold text-[#006BFF]">5.0 ★</span>
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
              <div className="px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00B67A] text-white flex items-center justify-center">
                  <Star className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-[#0A1020]">Trustpilot</span>
                    <span className="text-xs font-mono-code font-bold text-[#00B67A]">4.9 / 5</span>
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
              onClick={() => onNavigate('/testimonials')}
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
                  className="p-7 sm:p-8 rounded-xl bg-white border border-[#E6EBF2] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
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
                              isGoogle
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-[#00B67A] text-[#00B67A]'
                            }`}
                          />
                        ))}
                        <span className="text-xs font-mono-code font-bold text-[#0A1020] ml-1">
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
                      <span className="font-mono-code font-semibold text-[#006BFF]">
                        {rev.service}
                      </span>
                      {rev.liveUrl && (
                        <a
                          href={rev.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5D687A] hover:text-[#0A1020] inline-flex items-center gap-1"
                        >
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

      {/* 7. LATEST BLOGS & TECHNICAL INSIGHTS SECTION */}
      <section className="py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Knowledge Hub &amp; Articles
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] font-display tracking-tight">
                Latest Blogs &amp; Technology Guides
              </h2>
              <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
                Practical insights on web development, SEO &amp; AEO search visibility, AI voice &amp;
                WhatsApp automation, office networking, and commercial security.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/blog')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>View All Blog Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_ARTICLES.slice(0, 3).map((article) => (
              <article
                key={article.slug}
                onClick={() => onNavigate(`/blog/${article.slug}`)}
                className="rounded-xl bg-white border border-[#E6EBF2] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#006BFF] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative aspect-16/9 bg-slate-100 overflow-hidden border-b border-[#E6EBF2]">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07152E]/85 text-[11px] font-mono-code font-bold text-[#00C8FF]">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#5D687A]">
                      <span>{article.publishedDate}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-[#006BFF]">
                        <BookOpen className="w-3.5 h-3.5" />
                        {article.readingTime}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors font-display leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5D687A] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E6EBF2] flex items-center justify-between text-xs font-bold text-[#006BFF]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FREQUENT Q/A (ACCORDION SECTION) */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                Frequent Q/A
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1020] font-display tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
                Direct answers to common questions about our web development, IT infrastructure,
                SEO/AEO search visibility, AI voice &amp; WhatsApp automation, and CCTV security
                deployments.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('/faq')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-secondary-outline inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Browse All 9 FAQ Categories</span>
                  <ArrowRight className="w-4 h-4 text-[#006BFF]" />
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Ask Us a Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {homepageFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div>
                        <span className="text-[11px] font-mono-code font-bold text-[#006BFF] block mb-1">
                          {faq.category}
                        </span>
                        <span className="text-base font-bold text-[#0A1020] font-display">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#5D687A] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#006BFF]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-3 bg-white border-t border-[#E6EBF2] text-sm text-[#5D687A] leading-relaxed space-y-3">
                        <p>{faq.answer}</p>
                        {faq.relatedLink && (
                          <div>
                            <button
                              onClick={() => onNavigate(faq.relatedLink!.path)}
                              className="text-xs font-bold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span>{faq.relatedLink.label}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONVERSION CTA SECTION */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono-code font-bold text-[#00C8FF] uppercase tracking-wider">
                100% Quality Guaranteed · Ready When You Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
                Tell Us What You Need. We&apos;ll Help You Build It.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need a high-performing website, reliable office IT, local search
                visibility, 24/7 AI automation, or commercial CCTV security—our engineering team is
                ready to help.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-4 text-sm sm:text-base font-semibold btn-primary-gradient inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm sm:text-base font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
