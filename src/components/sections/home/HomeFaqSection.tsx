/**
 * Interactive FAQ Accordion Section for Home Page.
 * Immediate answers to client questions with deep links to full FAQ taxonomy.
 */

import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CATEGORIZED_FAQS } from '../../../data/portfolioAndFaqs';
import { useApp } from '../../../context/AppContext';

interface HomeFaqSectionProps {
  onNavigate?: (path: string) => void;
}

export const HomeFaqSection: React.FC<HomeFaqSectionProps> = ({ onNavigate }) => {
  const { navigate: contextNavigate } = useApp();
  const navigate = onNavigate || contextNavigate;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Curated list of high-intent homepage FAQs
  const homepageFaqs = [
    {
      category: 'Five Service Divisions',
      question: 'Do you handle all five services in-house, or are they outsourced?',
      answer:
        'All core web architecture, software development, cloud networking, and AI integrations are planned and managed by our in-house engineering team. For localized hardware deployments and CCTV physical cabling, certified local technicians execute the physical installation according to our strict engineering diagrams and quality benchmarks.',
      relatedLink: { label: 'Explore Our 7-Stage Process', path: '/about/process' },
    },
    {
      category: 'Web Development & SEO',
      question: 'Will my website be optimized for both Google and new AI search tools?',
      answer:
        'Yes. Every website we build includes semantic Schema.org JSON-LD microdata, OpenGraph cards, Core Web Vitals performance optimization, and direct content structures designed to appear in Google search snippets, Google Maps, and AI answer engines like Perplexity, Gemini, and SearchGPT.',
      relatedLink: { label: 'View Web Development Division', path: '/services/web-development' },
    },
    {
      category: 'IT Support & SLA',
      question: 'What is your response time for emergency IT or server downtime?',
      answer:
        'For clients on our Managed IT Care and Infrastructure SLA, critical emergency tickets receive engineer engagement within 15–30 minutes, 24 hours a day, 7 days a week. Routine maintenance and user provisioning requests are typically completed within 2 to 4 business hours.',
      relatedLink: { label: 'Browse IT Support Services', path: '/services/it-support' },
    },
    {
      category: 'AI Automation',
      question: 'Can your AI voice agents and WhatsApp bots connect directly to our existing CRM?',
      answer:
        'Yes. We specialize in connecting conversational AI models to HubSpot, Salesforce, Zoho, Google Sheets, and custom database APIs. Your leads are validated in real-time, appointments are booked directly onto your calendar, and automatic confirmation messages are dispatched instantly.',
      relatedLink: { label: 'Explore AI Automation Solutions', path: '/services/ai-automation' },
    },
    {
      category: 'Commercial CCTV & Security',
      question: 'Can I view our security cameras and unlock biometric doors remotely from my phone?',
      answer:
        'Yes. All our commercial CCTV camera networks and biometric access controllers are configured with secure, end-to-end encrypted mobile apps for iOS and Android. You can monitor live 4K streams, review playback, manage access privileges, and receive push notifications from anywhere in the world.',
      relatedLink: { label: 'View Security & Surveillance Division', path: '/services/security-surveillance' },
    },
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E6EBF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="text-xs font-mono font-bold text-[#006BFF] uppercase tracking-wider">
              Frequent Q/A
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1020] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5D687A] leading-relaxed">
              Direct answers to common questions about our web development, IT infrastructure, SEO/AEO search visibility, AI voice &amp; WhatsApp automation, and CCTV security deployments.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('/faq')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-white border border-[#006BFF] text-[#0A1020] hover:bg-[#F3F7FC] hover:text-[#006BFF] rounded-full inline-flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Browse All FAQ Categories</span>
                <ArrowRight className="w-4 h-4 text-[#006BFF]" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-[#006BFF] hover:bg-[#087CFF] text-white rounded-full inline-flex items-center gap-2 cursor-pointer transition-all shadow-sm"
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
                  className="rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#006BFF] block mb-1">
                        {faq.category}
                      </span>
                      <span className="text-base font-bold text-[#0A1020]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5D687A] shrink-0 transition-transform duration-200 ${
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
                            onClick={() => navigate(faq.relatedLink!.path)}
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
  );
};

export default HomeFaqSection;
