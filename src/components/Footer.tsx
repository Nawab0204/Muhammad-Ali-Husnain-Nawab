import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import mainLogo from '../assets/images/botlytices-logo.png';
import { useApp } from '../context/AppContext';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: (service?: string) => void;
}

const ABOUT_FOOTER_LINKS = [
  { number: '01', label: 'About Us', path: '/about' },
  { number: '02', label: 'Our Process', path: '/about/process' },
  { number: '03', label: 'Portfolio', path: '/portfolio' },
  { number: '04', label: 'Case Studies', path: '/case-studies' },
  { number: '05', label: 'Testimonials', path: '/testimonials' },
  { number: '06', label: 'Blog & Insights', path: '/blog' },
  { number: '07', label: 'FAQ', path: '/faq' },
  { number: '08', label: 'Terms & Conditions', path: '/terms' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate: propNavigate, onOpenQuote: propOpenQuote }) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;
  const onOpenQuote = propOpenQuote || appContext.openQuoteModal;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E6EBF2] text-[#0A1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Row: Brand Overview + Company (01–08) + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E6EBF2]">
          <div className="lg:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-block focus:outline-none"
            >
              <img
                src={mainLogo}
                alt="BOTLYTICES"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-[#5D687A] leading-relaxed max-w-md">
              We help businesses build their digital presence, maintain their technology,
              automate repetitive work and protect the systems that keep them running.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5D687A] pt-1">
              <a
                href="mailto:info@botlytices.com"
                className="inline-flex items-center gap-1.5 hover:text-[#006BFF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#006BFF]" />
                <span>info@botlytices.com</span>
              </a>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#006BFF]" />
                <span>Mon–Sat · 9am–6pm</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#006BFF]" />
                <span>Remote &amp; On-Site Delivery</span>
              </span>
            </div>
          </div>

          {/* About the Company (01 - 08) */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold text-[#0A1020] uppercase tracking-wider mb-3">
              About the Company
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-[#5D687A]">
              {ABOUT_FOOTER_LINKS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className="text-left hover:text-[#006BFF] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="font-mono-code text-[11px] font-bold text-[#006BFF]">
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Start a Project CTA Column */}
          <div className="lg:col-span-3 flex flex-col justify-between p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2]">
            <div>
              <div className="text-xs font-mono-code font-bold text-[#006BFF] uppercase">
                Start a Project
              </div>
              <p className="text-xs text-[#5D687A] mt-1 leading-relaxed">
                Need a website, IT infrastructure, local presence, AI automation, or CCTV?
              </p>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="mt-4 w-full py-2.5 px-4 text-xs font-semibold btn-primary-gradient inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Global Service Locations Section */}
        <div className="py-8 border-b border-[#E6EBF2]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                International Presence
              </span>
              <h4 className="text-sm font-extrabold text-[#0A1020] mt-0.5">
                Global Service Locations
              </h4>
            </div>
            <button
              onClick={() => onNavigate('/locations')}
              className="text-xs font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Locations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div>
              <button
                onClick={() => onNavigate('/locations/americas')}
                className="font-bold text-[#0A1020] hover:text-[#006BFF] transition-colors cursor-pointer block mb-2"
              >
                Americas Hub →
              </button>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[#5D687A]">
                <button
                  onClick={() => onNavigate('/locations/americas/united-states/new-york/new-york-city')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  New York
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/americas/united-states/california/los-angeles')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Los Angeles
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/americas/canada/ontario/toronto')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Toronto
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={() => onNavigate('/locations/europe')}
                className="font-bold text-[#0A1020] hover:text-[#006BFF] transition-colors cursor-pointer block mb-2"
              >
                Europe Hub →
              </button>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[#5D687A]">
                <button
                  onClick={() => onNavigate('/locations/europe/united-kingdom/england/london')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  London
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/europe/italy/veneto/venice')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Venice
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/europe/italy/lazio/rome')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Rome
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/europe/ireland/leinster/dublin')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Dublin
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={() => onNavigate('/locations/oceania')}
                className="font-bold text-[#0A1020] hover:text-[#006BFF] transition-colors cursor-pointer block mb-2"
              >
                Oceania Hub →
              </button>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[#5D687A]">
                <button
                  onClick={() => onNavigate('/locations/oceania/australia/new-south-wales/sydney')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Sydney
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/oceania/australia/victoria/melbourne')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Melbourne
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/oceania/new-zealand/auckland-region/auckland')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Auckland
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('/locations/oceania/new-zealand/wellington-region/wellington')}
                  className="hover:text-[#006BFF] transition-colors cursor-pointer"
                >
                  Wellington
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5D687A]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} BOTLYTICES. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('/services')}
              className="hover:text-[#006BFF] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('/terms')}
              className="hover:text-[#006BFF] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('/sitemap')}
              className="hover:text-[#006BFF] transition-colors cursor-pointer"
            >
              Site Map
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('/contact')}
              className="hover:text-[#006BFF] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1020] hover:text-[#006BFF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
