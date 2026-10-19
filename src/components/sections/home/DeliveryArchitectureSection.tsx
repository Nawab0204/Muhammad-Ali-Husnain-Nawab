/**
 * 7-Stage Delivery Architecture Section.
 * Explains how BOTLYTICES takes projects from discovery through post-launch SLA care.
 */

import React from 'react';
import { ArrowRight, Search, Compass, Layout, Code2, ShieldCheck, Rocket, MessageSquare } from 'lucide-react';
import { SEVEN_STEP_PROCESS } from '../../../data/portfolioAndFaqs';
import { useApp } from '../../../context/AppContext';

const PROCESS_ICONS = [Search, Compass, Layout, Code2, ShieldCheck, Rocket, MessageSquare];

interface DeliveryArchitectureSectionProps {
  onNavigate?: (path: string) => void;
}

export const DeliveryArchitectureSection: React.FC<DeliveryArchitectureSectionProps> = ({ onNavigate }) => {
  const { navigate: contextNavigate } = useApp();
  const navigate = onNavigate || contextNavigate;

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E6EBF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-[#006BFF] uppercase tracking-wider">
              Structured Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1020] tracking-tight">
              How We Take Your Project From Idea to Launch
            </h2>
            <p className="text-base sm:text-lg text-[#5D687A] leading-relaxed">
              Every website, IT deployment, AI workflow, and security installation follows our 7-stage engineering methodology—eliminating guesswork and ensuring 100% on-target delivery.
            </p>
          </div>
          <button
            onClick={() => navigate('/about/process')}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold bg-white border border-[#006BFF] text-[#0A1020] hover:bg-[#F3F7FC] hover:text-[#006BFF] rounded-full inline-flex items-center gap-2 cursor-pointer shrink-0 transition-all"
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
                onClick={() => navigate('/about/process')}
                className={`p-7 rounded-2xl bg-white border border-[#E6EBF2] hover:border-[#006BFF] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group ${
                  isLastWide ? 'md:col-span-2 lg:col-span-2 bg-[#07152E] text-white border-[#07152E]' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${
                        isLastWide
                          ? 'bg-white/15 text-[#00C8FF]'
                          : 'bg-[#F3F7FC] text-[#006BFF]'
                      }`}
                    >
                      Stage {st.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isLastWide
                          ? 'bg-white/10 text-white'
                          : 'bg-[#F8FAFC] text-[#5D687A] group-hover:text-[#006BFF] group-hover:bg-[#F3F7FC]'
                      }`}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold ${
                      isLastWide ? 'text-white' : 'text-[#0A1020] group-hover:text-[#006BFF]'
                    }`}
                  >
                    {st.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isLastWide ? 'text-slate-300' : 'text-[#5D687A]'
                    }`}
                  >
                    {st.description}
                  </p>
                </div>

                <div
                  className={`pt-5 mt-5 border-t text-xs font-semibold flex items-center justify-between ${
                    isLastWide ? 'border-white/15 text-[#00C8FF]' : 'border-[#E6EBF2] text-[#006BFF]'
                  }`}
                >
                  <span>Learn more about Stage {st.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeliveryArchitectureSection;
