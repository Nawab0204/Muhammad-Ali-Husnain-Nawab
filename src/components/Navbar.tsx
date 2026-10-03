import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Server,
  MapPin,
  Bot,
  Camera,
  ArrowRight,
  Building2,
  Compass,
  FolderKanban,
  FileSearch,
  MessageSquareQuote,
  BookOpen,
  HelpCircle,
  Scale,
} from 'lucide-react';
import { DIVISIONS } from '../data/siteArchitecture';
import mainLogo from '../assets/images/botlytices-logo.png';

interface NavbarProps {
  currentPath: string;
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

const ABOUT_MEGA_GROUPS = [
  {
    groupTitle: 'Company & Method',
    items: [
      {
        number: '01',
        title: 'About Us',
        description: 'Learn about the company, mission, values and expertise.',
        path: '/about',
        icon: Building2,
      },
      {
        number: '02',
        title: 'Our Process',
        description: 'Understand how projects move from idea to delivery.',
        path: '/about/process',
        icon: Compass,
      },
    ],
  },
  {
    groupTitle: 'Work & Proof',
    items: [
      {
        number: '03',
        title: 'Portfolio',
        description: 'Explore completed projects and work.',
        path: '/portfolio',
        icon: FolderKanban,
      },
      {
        number: '04',
        title: 'Case Studies',
        description: 'Explore detailed project stories, challenges, solutions and results.',
        path: '/case-studies',
        icon: FileSearch,
      },
      {
        number: '05',
        title: 'Testimonials',
        description: 'See what clients say about working with us.',
        path: '/testimonials',
        icon: MessageSquareQuote,
      },
    ],
  },
  {
    groupTitle: 'Insights, Support & Policies',
    items: [
      {
        number: '06',
        title: 'Blog',
        description: 'Technology, websites, AI, SEO, IT and business insights.',
        path: '/blog',
        icon: BookOpen,
      },
      {
        number: '07',
        title: 'FAQ',
        description: 'Answers to common questions.',
        path: '/faq',
        icon: HelpCircle,
      },
      {
        number: '08',
        title: 'Terms & Conditions',
        description: 'Company policies and service terms.',
        path: '/terms',
        icon: Scale,
      },
    ],
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'about' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<'services' | 'about' | null>('services');
  const [expandedMobileDivision, setExpandedMobileDivision] = useState<string | null>('web-development');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRoute = (path: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const isHomeActive = currentPath === '/' || currentPath === '';

  const isServicesActive =
    activeDropdown === 'services' || currentPath.startsWith('/services');

  const isAboutActive =
    activeDropdown === 'about' ||
    currentPath.startsWith('/about') ||
    currentPath.startsWith('/portfolio') ||
    currentPath.startsWith('/case-studies') ||
    currentPath.startsWith('/testimonials') ||
    currentPath.startsWith('/blog') ||
    currentPath === '/faq' ||
    currentPath === '/terms' ||
    currentPath === '/process';

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E6EBF2] py-3 shadow-[0_4px_20px_-6px_rgba(10,16,32,0.05)]'
          : 'bg-white border-b border-[#E6EBF2] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFTMOST: Company Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleRoute('/');
          }}
          className="flex items-center focus:outline-none shrink-0"
        >
          <img
            src={mainLogo}
            alt="BOTLYTICES"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </a>

        {/* CENTER: Home | Services ▼ | About ▼ */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-[#5D687A]">
          <button
            onClick={() => handleRoute('/')}
            onMouseEnter={() => setActiveDropdown(null)}
            className="py-2 px-1 transition-colors cursor-pointer whitespace-nowrap nav-link-hover text-[#5D687A] hover:text-[#0A1020]"
          >
            Home
          </button>

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
          >
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === 'services' ? null : 'services')
              }
              className={`flex items-center gap-1.5 py-2 px-1 transition-colors cursor-pointer whitespace-nowrap nav-link-hover ${
                isServicesActive
                  ? 'text-[#006BFF] font-semibold'
                  : 'hover:text-[#0A1020]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180 text-[#006BFF]' : ''
                }`}
              />
            </button>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
          >
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === 'about' ? null : 'about')
              }
              className={`flex items-center gap-1.5 py-2 px-1 transition-colors cursor-pointer whitespace-nowrap nav-link-hover ${
                isAboutActive
                  ? 'text-[#006BFF] font-semibold'
                  : 'hover:text-[#0A1020]'
              }`}
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-[#006BFF]' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* RIGHTMOST: Prominent Blue Contact Us CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleRoute('/contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold btn-primary-gradient cursor-pointer whitespace-nowrap group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl text-[#0A1020] hover:bg-[#F3F7FC] border border-transparent hover:border-[#E6EBF2] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* DESKTOP 1: 5-DIVISION SERVICES MEGA-MENU */}
      {activeDropdown === 'services' && (
        <div
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden lg:block absolute top-full left-0 w-full bg-white border-b border-[#E6EBF2] shadow-[0_24px_50px_-12px_rgba(10,16,32,0.1)] z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-5 gap-6">
              {DIVISIONS.map((div) => {
                const Icon = DIVISION_ICONS[div.id];
                return (
                  <div
                    key={div.id}
                    className="space-y-3.5 border-r border-[#E6EBF2] pr-5 last:border-r-0 last:pr-0 flex flex-col justify-between"
                  >
                    <div>
                      <button
                        onClick={() => handleRoute(div.path)}
                        className="group flex items-start gap-2.5 pb-3 border-b border-[#E6EBF2] w-full text-left cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F3F7FC] group-hover:bg-[#006BFF] border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] group-hover:text-white shrink-0 transition-colors mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-mono-code font-bold text-[#006BFF]">
                            {div.number} · Division
                          </div>
                          <div className="text-xs font-extrabold text-[#0A1020] group-hover:text-[#006BFF] uppercase tracking-tight transition-colors">
                            {div.title}
                          </div>
                        </div>
                      </button>

                      <ul className="mt-3 space-y-2">
                        {div.subcategories.map((sub) => (
                          <li key={sub.slug}>
                            <button
                              onClick={() => handleRoute(sub.path)}
                              className="w-full text-left py-1.5 px-2 rounded-lg hover:bg-[#F8FAFC] text-xs font-medium text-[#5D687A] hover:text-[#006BFF] transition-colors flex items-center justify-between gap-2 cursor-pointer group"
                            >
                              <span className="leading-snug">{sub.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#006BFF] shrink-0 transition-opacity" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleRoute(div.path)}
                        className="text-[11px] font-semibold text-[#006BFF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore {div.shortTitle}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mega-Menu Bottom Bar */}
            <div className="mt-7 pt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs text-[#5D687A]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0A1020]">Complete Architecture:</span>
                <span>5 Major Service Divisions</span>
                <span aria-hidden="true">·</span>
                <span>20 Specialized Technical Services</span>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleRoute('/services')}
                  className="font-semibold text-[#0A1020] hover:text-[#006BFF] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Services Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleRoute('/contact')}
                  className="font-semibold text-[#006BFF] hover:underline cursor-pointer"
                >
                  Contact Us →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP 2: ABOUT THE COMPANY MEGA-MENU (01–08) */}
      {activeDropdown === 'about' && (
        <div
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden lg:block absolute top-full left-0 w-full bg-white border-b border-[#E6EBF2] shadow-[0_24px_50px_-12px_rgba(10,16,32,0.1)] z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E6EBF2]">
              <div>
                <div className="text-[11px] font-mono-code font-bold text-[#006BFF] uppercase tracking-wider">
                  Company Ecosystem
                </div>
                <h3 className="text-lg font-extrabold text-[#0A1020] font-display mt-0.5">
                  About the Company
                </h3>
              </div>
              <button
                onClick={() => handleRoute('/about')}
                className="text-xs font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Company Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {ABOUT_MEGA_GROUPS.map((group) => (
                <div
                  key={group.groupTitle}
                  className="space-y-3 border-r border-[#E6EBF2] pr-6 last:border-r-0 last:pr-0"
                >
                  <div className="text-xs font-bold text-[#5D687A] uppercase tracking-wider px-2">
                    {group.groupTitle}
                  </div>
                  <div className="space-y-2">
                    {group.items.map((item) => {
                      const ItemIcon = item.icon;
                      const isActive =
                        currentPath === item.path ||
                        (item.path !== '/about' && currentPath.startsWith(item.path));
                      return (
                        <button
                          key={item.number}
                          onClick={() => handleRoute(item.path)}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer group ${
                            isActive
                              ? 'bg-[#F3F7FC] border-[#006BFF]/30'
                              : 'bg-white border-transparent hover:bg-[#F8FAFC] hover:border-[#E6EBF2]'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#F3F7FC] group-hover:bg-[#006BFF] border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] group-hover:text-white shrink-0 transition-colors mt-0.5">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono-code font-bold text-[#006BFF]">
                                  {item.number}
                                </span>
                                <span className="text-sm font-bold text-[#0A1020] group-hover:text-[#006BFF] transition-colors">
                                  {item.title}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-[#006BFF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </div>
                            <p className="text-xs text-[#5D687A] leading-relaxed mt-1">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-4 border-t border-[#E6EBF2] flex items-center justify-between text-xs text-[#5D687A]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0A1020]">BOTLYTICES Technology Partner:</span>
                <span>Web Development · IT Infrastructure · Digital Presence · AI Automation · Security</span>
              </div>
              <button
                onClick={() => handleRoute('/contact')}
                className="font-semibold text-[#006BFF] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Start a Project Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE EXPANDABLE ACCORDION NAVIGATION */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-white border-b border-[#E6EBF2] shadow-2xl max-h-[calc(100vh-61px)] overflow-y-auto z-50">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {/* Mobile Home Link */}
            <button
              onClick={() => handleRoute('/')}
              className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-bold flex items-center justify-between cursor-pointer ${
                isHomeActive
                  ? 'bg-[#F3F7FC] border-[#006BFF]/40 text-[#006BFF]'
                  : 'bg-[#F8FAFC] border-[#E6EBF2] text-[#0A1020]'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-[#006BFF]" />
            </button>

            {/* Mobile Section Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2]">
              <button
                onClick={() => setMobileSection('services')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  mobileSection === 'services'
                    ? 'bg-[#006BFF] text-white'
                    : 'text-[#5D687A] hover:text-[#0A1020]'
                }`}
              >
                Services (5 Divisions)
              </button>
              <button
                onClick={() => setMobileSection('about')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  mobileSection === 'about'
                    ? 'bg-[#006BFF] text-white'
                    : 'text-[#5D687A] hover:text-[#0A1020]'
                }`}
              >
                About (01–08)
              </button>
            </div>

            {mobileSection === 'services' && (
              <div className="space-y-2">
                {DIVISIONS.map((div) => {
                  const Icon = DIVISION_ICONS[div.id];
                  const isExpanded = expandedMobileDivision === div.id;
                  return (
                    <div
                      key={div.id}
                      className="rounded-xl border border-[#E6EBF2] bg-[#F8FAFC] overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedMobileDivision(isExpanded ? null : div.id)
                        }
                        className="w-full px-3.5 py-3 flex items-center justify-between text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-[#006BFF]" />
                          <span className="text-xs sm:text-sm font-bold text-[#0A1020]">
                            {div.number}. {div.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#5D687A] transition-transform ${
                            isExpanded ? 'rotate-180 text-[#006BFF]' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-3.5 pb-3 pt-1 bg-white border-t border-[#E6EBF2] space-y-1">
                          <button
                            onClick={() => handleRoute(div.path)}
                            className="w-full text-left py-1.5 text-xs font-bold text-[#006BFF] flex items-center justify-between"
                          >
                            <span>{div.title} Overview Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          {div.subcategories.map((sub) => (
                            <button
                              key={sub.slug}
                              onClick={() => handleRoute(sub.path)}
                              className="w-full text-left py-1.5 pl-2 text-xs text-[#5D687A] hover:text-[#0A1020] block"
                            >
                              · {sub.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {mobileSection === 'about' && (
              <div className="space-y-2">
                {ABOUT_MEGA_GROUPS.flatMap((g) => g.items).map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <button
                      key={item.number}
                      onClick={() => handleRoute(item.path)}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-left flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E6EBF2] flex items-center justify-center text-[#006BFF] shrink-0 mt-0.5">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono-code font-bold text-[#006BFF]">
                            {item.number}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#0A1020]">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-[#5D687A] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="pt-2 border-t border-[#E6EBF2]">
              <button
                onClick={() => handleRoute('/contact')}
                className="w-full py-3.5 px-6 text-sm font-semibold btn-primary-gradient flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
