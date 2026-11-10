import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ArrowRight, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import mainLogo from '../assets/images/botlytices-logo.png';
import { useApp } from '../context/AppContext';
import { APP_CONSTANTS } from '../config/constants';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenQuote?: (service?: string) => void;
}

const ABOUT_FOOTER_LINKS = [
  { number: '01', label: 'About Us', path: '/about' },
  { number: '02', label: 'Our Process', path: '/about/process' },
  { number: '03', label: 'Pricing', path: '/pricing' },
  { number: '04', label: 'Portfolio', path: '/portfolio' },
  { number: '05', label: 'Case Studies', path: '/case-studies' },
  { number: '06', label: 'Testimonials', path: '/testimonials' },
  { number: '07', label: 'Blog & Insights', path: '/blog' },
  { number: '08', label: 'FAQ', path: '/faq' },
  { number: '09', label: 'Terms of Service', path: '/terms-of-service' },
  { number: '10', label: 'Privacy Policy', path: '/privacy-policy' },
  { number: '11', label: 'Refund Policy', path: '/refund-policy' },
  { number: '12', label: 'Cookie Policy', path: '/cookie-policy' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate: propNavigate, onOpenQuote: propOpenQuote }) => {
  const appContext = useApp();
  const onNavigate = propNavigate || appContext.navigate;
  const onOpenQuote = propOpenQuote || appContext.openQuoteModal;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E6EBF2] text-[#0A1020] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-14 sm:pt-16 pb-12 w-full">
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
            {/* Direct Contact Numbers & Channels */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#5D687A] pt-1">
              <a
                href="mailto:botlytices@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-[#006BFF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#006BFF]" />
                <span>botlytices@gmail.com</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <a
                href="tel:+923400320020"
                className="inline-flex items-center gap-1.5 hover:text-[#006BFF] font-semibold text-[#0A1020] transition-colors"
                title="Call BOTLYTICES direct"
              >
                <Phone className="w-3.5 h-3.5 text-[#006BFF]" />
                <span>+92 340 0320020</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <a
                href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 font-semibold text-[#0A1020] transition-colors"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp: +92 355 7181347</span>
              </a>
            </div>

            {/* Official Social Media Pages & Founder LinkedIn */}
            <div className="pt-2">
              <div className="text-[11px] font-mono-code font-bold text-[#0A1020] uppercase tracking-wider mb-2">
                Connect With Us
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/botlytices"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BOTLYTICES on X (formerly Twitter)"
                  className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-[#000000] hover:text-white hover:border-[#000000] text-[#0A1020] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs group"
                  title="X (Twitter) @botlytices"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn (Company) */}
                <a
                  href="https://www.linkedin.com/company/botlytices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BOTLYTICES on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] text-[#0A1020] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs group"
                  title="LinkedIn @botlytices"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/botlytices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BOTLYTICES on Instagram"
                  className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent text-[#0A1020] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs group"
                  title="Instagram @botlytices"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://web.facebook.com/people/Botlytices/61588672514929/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BOTLYTICES on Facebook"
                  className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] text-[#0A1020] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs group"
                  title="Facebook @Botlytices"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* Direct WhatsApp Quick Link */}
                <a
                  href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with BOTLYTICES on WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] text-emerald-600 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs group"
                  title="WhatsApp +92 355 7181347"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Founder Personal Profile Badge */}
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-husnain-nawab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#006BFF] hover:bg-white text-[11px] font-semibold text-[#0A1020] transition-colors ml-1"
                  title="Muhammad Ali Husnain Nawab - Founder & Technical Lead"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Founder LinkedIn</span>
                </a>
              </div>
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5D687A]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span>© {new Date().getFullYear()} BOTLYTICES. All rights reserved.</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <a
              href="tel:+923400320020"
              className="text-[#0A1020] font-semibold hover:text-[#006BFF] transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#006BFF]" />
              <span>Tel: +92 340 0320020</span>
            </a>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <a
              href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-emerald-500" />
              <span>WhatsApp: +92 355 7181347</span>
            </a>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onNavigate('/services')}
              className="hover:text-[#006BFF] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onNavigate('/terms-of-service')}
              className="hover:text-[#0052CC] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-[#0052CC] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onNavigate('/refund-policy')}
              className="hover:text-[#0052CC] transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onNavigate('/cookie-policy')}
              className="hover:text-[#0052CC] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-preferences'))}
              className="hover:text-[#0052CC] transition-colors cursor-pointer"
              title="Configure cookie consent preferences"
            >
              Cookie Settings
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onNavigate('/sitemap')}
              className="hover:text-[#0052CC] transition-colors cursor-pointer"
            >
              Site Map
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
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
