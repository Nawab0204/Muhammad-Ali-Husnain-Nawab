/**
 * Full-Bleed Edge-to-Edge Hero Slider Section.
 * Showcases 5 core technology service divisions with high contrast typography and responsive controls.
 */

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../../../data/siteArchitecture';
import { useApp } from '../../../context/AppContext';

export const HERO_SLIDES = [
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

interface HeroSliderProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: (service?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate, onOpenQuote }) => {
  const { navigate: contextNavigate, openQuoteModal } = useApp();
  const navigate = onNavigate || contextNavigate;
  const handleOpenQuote = onOpenQuote || openQuoteModal;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[activeSlide];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      className="relative w-full min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#07152E]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Core Technology Divisions Slider"
    >
      {/* Background Images with Preloading & Cross-fade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
          aria-hidden={idx !== activeSlide}
        >
          <img
            src={slide.image}
            alt={`BOTLYTICES ${slide.label} - ${slide.headline}`}
            width={1920}
            height={1080}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'low'}
            decoding={idx === 0 ? 'sync' : 'async'}
            className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05]"
          />
          {/* Deep Contrast Scrims */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152E]/95 via-[#07152E]/70 to-[#07152E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152E] via-transparent to-black/30" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Division Indicator & Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold text-[#00C8FF] tracking-widest uppercase bg-[#006BFF]/25 border border-[#00C8FF]/40 px-3 py-1 rounded-md">
              {currentSlide.number} · {currentSlide.label}
            </span>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-xs text-slate-300 font-medium">BOTLYTICES Technology Division</span>
          </div>

          {/* Dynamic Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            {currentSlide.headline}
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl drop-shadow-sm font-normal">
            {currentSlide.description}
          </p>

          {/* 4 Feature Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-10 max-w-2xl">
            {currentSlide.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2 rounded-lg"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C8FF] shrink-0" />
                <span className="text-xs font-medium text-white truncate">{h}</span>
              </div>
            ))}
          </div>

          {/* CTA Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate(currentSlide.path)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#006BFF] hover:bg-[#087CFF] text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all text-sm sm:text-base cursor-pointer"
            >
              <span>{currentSlide.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleOpenQuote(currentSlide.label)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full border border-white/30 backdrop-blur-md transition-all text-sm sm:text-base cursor-pointer"
            >
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Prev / Next Slider Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        aria-label="Previous service division slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNextSlide}
        aria-label="Next service division slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Jump to slide ${idx + 1}: ${slide.label}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeSlide
                ? 'w-8 h-2.5 bg-[#00C8FF]'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
