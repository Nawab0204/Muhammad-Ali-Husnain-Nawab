import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, Check, X, Lock } from 'lucide-react';
import { LEGAL_CONFIG } from '../config/legalConfig';

interface CookiePreferences {
  strictlyNecessary: boolean; // Always true
  preferences: boolean;
  analytics: boolean;
  hasConsented: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'botlytices_cookie_consent_v1';

const DEFAULT_PREFERENCES: CookiePreferences = {
  strictlyNecessary: true,
  preferences: false,
  analytics: false,
  hasConsented: false,
  timestamp: '',
};

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences(parsed);
        setIsVisible(false);
      } else {
        // Small delay to prevent layout pop
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  // Listen for global custom event to reopen preferences anytime
  useEffect(() => {
    const handleReopen = () => {
      setIsSettingsOpen(true);
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => window.removeEventListener('open-cookie-preferences', handleReopen);
  }, []);

  const savePreferences = (updated: Partial<CookiePreferences>) => {
    const finalPreferences: CookiePreferences = {
      ...preferences,
      ...updated,
      strictlyNecessary: true,
      hasConsented: true,
      timestamp: new Date().toISOString(),
    };

    setPreferences(finalPreferences);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPreferences));
    } catch {
      // storage unavailable
    }

    setIsVisible(false);
    setIsSettingsOpen(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      preferences: true,
      analytics: true,
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      preferences: false,
      analytics: false,
    });
  };

  if (!isVisible && !isSettingsOpen) {
    return null;
  }

  return (
    <>
      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E6EBF2] space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6EBF2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EBF3FF] border border-[#0052CC]/20 flex items-center justify-center text-[#0052CC]">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A1020] font-display">
                    Cookie &amp; Privacy Preferences
                  </h3>
                  <p className="text-xs text-[#5D687A]">
                    {LEGAL_CONFIG.brandName} Privacy Architecture
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-2 rounded-xl text-[#5D687A] hover:bg-[#F8FAFC] hover:text-[#0A1020] transition-colors cursor-pointer"
                aria-label="Close cookie settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#5D687A] leading-relaxed">
              We respect your right to privacy. We deliberately do not operate behavioral ad networks, cross-device profiling scripts, or third-party data broker trackers. You can configure which categories of cookies you permit below:
            </p>

            <div className="space-y-4">
              {/* Category 1: Strictly Necessary */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E6EBF2] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#0052CC]" />
                    <span className="text-xs font-bold text-[#0A1020]">
                      Strictly Necessary &amp; Security Cookies
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Always Active
                  </span>
                </div>
                <p className="text-[11px] text-[#5D687A] leading-relaxed">
                  Required for core platform security, inquiry token transmission, CSRF protection, and load balancing. These cannot be disabled.
                </p>
              </div>

              {/* Category 2: Functional / Preferences */}
              <div className="p-4 rounded-2xl bg-white border border-[#E6EBF2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A1020]">
                    Functional &amp; Currency Preferences
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) =>
                        setPreferences({ ...preferences, preferences: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
                <p className="text-[11px] text-[#5D687A] leading-relaxed">
                  Stores your selected international market currency (e.g. USD, GBP, EUR, AED) so pricing displays properly across visits.
                </p>
              </div>

              {/* Category 3: Anonymous Performance Telemetry */}
              <div className="p-4 rounded-2xl bg-white border border-[#E6EBF2] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A1020]">
                    Anonymous Technical Analytics
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0052CC]"></div>
                  </label>
                </div>
                <p className="text-[11px] text-[#5D687A] leading-relaxed">
                  Measures aggregated load times and error rates without logging personal data or building individual behavioural profiles.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E6EBF2]">
              <button
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-semibold text-[#5D687A] hover:text-[#0A1020] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                Reject All Non-Essential
              </button>
              <button
                onClick={() =>
                  savePreferences({
                    preferences: preferences.preferences,
                    analytics: preferences.analytics,
                  })
                }
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#0041A3] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Floating Banner (When not yet consented) */}
      {isVisible && !isSettingsOpen && (
        <aside
          role="dialog"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 z-40 p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#CBD5E1] pointer-events-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="w-9 h-9 rounded-xl bg-[#EBF3FF] border border-[#0052CC]/20 flex items-center justify-center text-[#0052CC] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#0A1020]">
                  Privacy &amp; Technical Cookies Disclosure
                </h4>
                <p className="text-xs text-[#5D687A] leading-relaxed">
                  We use strictly necessary technical cookies to ensure safe browsing, CSRF security, and accurate regional currency presentation. We do not use third-party advertising trackers or sell personal data. Review our{' '}
                  <a
                    href="/privacy-policy"
                    className="text-[#0052CC] font-semibold underline hover:text-[#006BFF]"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="/cookie-policy"
                    className="text-[#0052CC] font-semibold underline hover:text-[#006BFF]"
                  >
                    Cookie Policy
                  </a>{' '}
                  for full technical details.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto justify-end">
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] hover:border-[#CBD5E1] text-xs font-semibold text-[#5D687A] hover:text-[#0A1020] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Customize</span>
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-3.5 py-2 rounded-xl border border-[#CBD5E1] hover:bg-[#F8FAFC] text-xs font-semibold text-[#334155] transition-colors cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-xl bg-[#0052CC] hover:bg-[#0041A3] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
