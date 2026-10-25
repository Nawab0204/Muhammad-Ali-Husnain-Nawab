import React, { useState } from 'react';
import { APP_CONSTANTS } from '../../config/constants';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppButtonProps {
  phoneNumber?: string;
  formattedNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber = APP_CONSTANTS.CONTACT.WHATSAPP,
  formattedNumber = APP_CONSTANTS.CONTACT.WHATSAPP_FORMATTED,
  defaultMessage = 'Hello BOTLYTICES, I would like to discuss a project.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 flex flex-col items-end pointer-events-auto"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Interactive Tooltip Card */}
      {!isDismissed && (
        <div
          className={`mb-3 w-64 max-w-[calc(100vw-2rem)] bg-white border border-[#E6EBF2] rounded-2xl p-3.5 shadow-xl transition-all duration-300 origin-bottom-right ${
            showTooltip
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 translate-y-2 pointer-events-none sm:opacity-100 sm:scale-100 sm:translate-y-0'
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-[#0A1020]">Chat with BOTLYTICES</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              aria-label="Dismiss WhatsApp popup"
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-[#5D687A] mt-1 leading-snug">
            Need a website, IT setup, AI bot, or fast tech quote? Talk to our engineers directly.
          </p>
          <div className="mt-2 pt-2 border-t border-[#E6EBF2] flex items-center justify-between text-[11px]">
            <span className="font-mono-code font-bold text-emerald-600">
              {formattedNumber}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Quick Reply</span>
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat directly with BOTLYTICES on WhatsApp at ${formattedNumber}`}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
      >
        {/* Subtle breathing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-pulse pointer-events-none group-hover:opacity-50 transition-opacity" />

        {/* Crisp Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 0C7.164 0 0 7.164 0 16.002c0 2.827.738 5.586 2.14 8.016L.086 31.914l8.118-2.032a15.938 15.938 0 007.798 2.035c8.838 0 16.002-7.164 16.002-16.002C32.004 7.164 24.84 0 16.002 0zm0 29.213c-2.47 0-4.887-.664-7.004-1.92l-.502-.298-5.204 1.303 1.39-4.99-.327-.522C3.02 20.627 2.31 18.347 2.31 16.002c0-7.55 6.143-13.693 13.692-13.693 7.55 0 13.693 6.143 13.693 13.693 0 7.55-6.143 13.693-13.693 13.693zm7.508-10.245c-.412-.206-2.438-1.203-2.816-1.34-.378-.137-.653-.206-.928.206-.275.412-1.066 1.34-1.306 1.615-.24.275-.48.309-.893.103-.412-.206-1.74-.641-3.314-2.045-1.225-1.092-2.052-2.44-2.293-2.852-.24-.412-.026-.635.18-.84.186-.186.412-.48.618-.721.206-.24.275-.412.412-.687.137-.275.069-.515-.034-.721-.103-.206-.928-2.235-1.272-3.06-.335-.803-.676-.694-.928-.707-.24-.012-.515-.015-.79-.015s-.722.103-1.1.515c-.378.412-1.444 1.41-1.444 3.438 0 2.028 1.478 3.987 1.684 4.262.206.275 2.908 4.44 7.045 6.225.984.425 1.752.679 2.35.869.988.314 1.888.27 2.599.164.793-.118 2.438-.996 2.782-1.959.344-.963.344-1.788.24-1.959-.103-.171-.378-.275-.79-.481z" />
        </svg>

        {/* Mobile quick badge */}
        <span className="sm:hidden absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
