/**
 * Primary Conversion Call to Action Section.
 * Prompts user to start a consultation or contact senior engineering.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../../../context/AppContext';

interface ConversionCtaSectionProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: () => void;
}

export const ConversionCtaSection: React.FC<ConversionCtaSectionProps> = ({ onNavigate, onOpenQuote }) => {
  const { navigate: contextNavigate, openQuoteModal } = useApp();
  const navigate = onNavigate || contextNavigate;
  const handleOpenQuote = onOpenQuote || openQuoteModal;

  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#07152E] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-bold text-[#00C8FF] uppercase tracking-wider">
              100% Quality Guaranteed · Ready When You Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Tell Us What You Need. We&apos;ll Help You Build It.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need a high-performing website, reliable office IT, local search visibility, 24/7 AI automation, or commercial CCTV security—our engineering team is ready to help.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => handleOpenQuote()}
              className="px-8 py-4 text-sm sm:text-base font-semibold bg-[#006BFF] hover:bg-[#087CFF] text-white rounded-full inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-md transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm sm:text-base font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionCtaSection;
